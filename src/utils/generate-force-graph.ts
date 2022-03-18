import * as d3 from "d3";
import { SystemInterfaceGraphNode, SystemInterface } from '../model';

interface Props {
    container: HTMLDivElement;
    linksData: SystemInterface[];
    nodesData: SystemInterfaceGraphNode[];
    markerIds: string[];
    location: string;
    color: d3.ScaleOrdinal<string, string, never>;
}

interface Result {
    destroy: () => void;
    nodes: () => SVGSVGElement | null;
}

export const generateForceGraph = ({
    container,
    linksData,
    nodesData,
    markerIds,
    location,
    color
}: Props): Result => {
    // Create copies of the linkes data and nodes data that are passed in 
    const links = linksData.map((d) => Object.assign({}, d));
    const nodes = nodesData.map((d) => Object.assign({}, d));
// Gets the bounding rectangle around the container (sets canvas size)
    const containerRect = container.getBoundingClientRect();
    const height = containerRect.height;
    const width = containerRect.width;

    // Defines the drag functions
    const drag = (simulation: any) => {
        const dragStarted = (event: any, d: SystemInterfaceGraphNode) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        };

        const dragged = (event: any, d: SystemInterfaceGraphNode) => {

            d.fx = event.x;
            d.fy = event.y;
        };

        const dragEnded = (event: any, d: SystemInterfaceGraphNode) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = undefined;
            d.fy = undefined;
        };

        return d3
        // returns the event listener 
            .drag<SVGGElement, SystemInterfaceGraphNode>()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded);
    };

    const simulation = d3
        .forceSimulation<SystemInterfaceGraphNode & d3.SimulationNodeDatum>(nodes)
        .force("link", d3.forceLink<SystemInterfaceGraphNode & d3.SimulationNodeDatum, SystemInterface>(links).id(d => d.id))
        // links are the data we are passing in; mapping the id to our property called "id"; refer to constants.ts
        .force("charge", d3.forceManyBody().strength(-500).distanceMax(400))
        .force("x", d3.forceX())
        .force("y", d3.forceY());

    const svg = d3
        .select(container)
        .append("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height]);

    svg.append("defs").selectAll("marker")
        .data(markerIds)
        .join("marker")
        .attr("id", d => `arrow-${d}`)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", -0.5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", "currentColor")
        .attr("d", "M0,-5L10,0L0,5");

    const link = svg
        .append("g")
        .attr("stroke", "currentColor")
        .selectAll("line")
        .data<SystemInterface>(links)
        .join("line")
        .attr("stroke-width", 1.5)
        .attr("marker-end", d => `url(${new URL(`#arrow-${d.destinationAdmin}`, location)})`);

    const node = svg
        .append("g")
        .attr("fill", "currentColor")
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .selectAll<SVGGElement, SystemInterfaceGraphNode>("g")
        .data<SystemInterfaceGraphNode>(nodes)
        .join("g")
        .call(drag(simulation));

    node.append("circle")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
        // r is the radius of the circles 
        .attr("r", 10)
        // color of the nodes; made sure circles and legend key match 
        .attr("fill", d => color(d.sysAdmin))

    node.append("text")
        .attr("x", 10)
        .attr("y", "0.4em")
        .attr("font-size", ".75em")
        .text(d => d.id)
        .clone(true).lower()
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 3);

    simulation.on("tick", () => {
        //update link positions
        link
            .attr("x1", d => (<d3.SimulationNodeDatum>d.source).x!)
            .attr("y1", d => (<d3.SimulationNodeDatum>d.source).y!)
            .attr("x2", d => (<d3.SimulationNodeDatum>d.target).x!)
            .attr("y2", d => (<d3.SimulationNodeDatum>d.target).y!);

        // update node positions
        node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    return {
        destroy: () => {
            simulation.stop();
        },
        nodes: () => {
            return svg.node();
        }
    };
}