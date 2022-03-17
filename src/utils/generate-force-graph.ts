import * as d3 from "d3";
import { ForceGraphNode, SystemInterface } from '../model';

interface Props {
    container: HTMLDivElement;
    linksData: SystemInterface[];
    nodesData: ForceGraphNode[];
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
    const links = linksData.map((d) => Object.assign({}, d));
    const nodes = nodesData.map((d) => Object.assign({}, d));

    const containerRect = container.getBoundingClientRect();
    const height = containerRect.height;
    const width = containerRect.width;

    const drag = (simulation) => {
        const dragstarted = (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        };

        const dragged = (event, d) => {

            d.fx = event.x;
            d.fy = event.y;
        };

        const dragended = (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        };

        return d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    };

    const simulation = d3
        .forceSimulation<ForceGraphNode & d3.SimulationNodeDatum>(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
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
        .data(links)
        .join("line")
        .attr("stroke-width", 1.5)
        .attr("marker-end", d => `url(${new URL(`#arrow-${d.destinationAdmin}`, location)})`);

    const node = svg
        .append("g")
        .attr("fill", "currentColor")
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .call(drag(simulation));

    node.append("circle")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
        .attr("r", 10)
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
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

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