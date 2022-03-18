import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';

// Container that handles clean up & preparation 
//Calls the generate graph function on initial render & cleans up on unmount 
interface Props {
    className?: string;
    generateGraph: (ref: HTMLDivElement) => {
        destroy: () => void;
        nodes: () => SVGSVGElement | null;
    }
}

// "..." called the spread operator; anything that hasn't be specifically named already, store that in a variable called 'rest' (rest of the props)
// Aggregates here 
export const Visualization = ({ generateGraph, ...rest }: Props): ReactElement => {
    const containerRef = useRef(null);

    useEffect(() => {
        let destroyFn;

        if (containerRef.current) {
            const { destroy } = generateGraph(containerRef.current);
            destroyFn = destroy;
        }

        return destroyFn;
    }, []);
    //Spreads it here {...rest} 
    return <div ref={containerRef} {...rest}/>
};
