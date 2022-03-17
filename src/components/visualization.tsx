import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';

interface Props {
    className?: string;
    generateGraph: (ref: HTMLDivElement) => {
        destroy: () => void;
        nodes: () => SVGSVGElement | null;
    }
}

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
    
    return <div ref={containerRef} {...rest}/>
};
