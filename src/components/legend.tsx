import * as d3 from 'd3';
import type { ReactElement } from 'react';

interface Props {
    keys: string[];
    swatchScale: d3.ScaleOrdinal<string, string, never>;
}

export const Legend = ({keys, swatchScale}: Props): ReactElement => {
    // Legenend is a component that takes props; unique part is that they're similar to State (if props change, component will rerender)

    return (
        <div className="mx-3 card">
            <div className="card-header">
                <h2>Legend</h2>
            </div>
            <div className="mx-2">
                {keys.map(key => (
                    // For every keys, turn it into a React element and render it
                    <div key={key} className="d-flex gap-2 my-2">
                        <div style={{backgroundColor: swatchScale(key), width: 24, height: 24}}/>
                        {key}
                    </div>
                ))}
            </div>
        </div>
    );

}