import * as d3 from 'd3';
import type { ReactElement } from 'react';

interface Props {
    keys: string[];
    swatchScale: d3.ScaleOrdinal<string, string, never>;
}

export const Legend = ({keys, swatchScale}: Props): ReactElement => {

    return (
        <div className="mx-3 card">
            <div className="card-header">
                <h2>Legend</h2>
            </div>
            <div className="mx-2">
                {keys.map(key => (
                    <div key={key} className="d-flex gap-2 my-2">
                        <div style={{backgroundColor: swatchScale(key), width: 24, height: 24}}/>
                        {key}
                    </div>
                ))}
            </div>
        </div>
    );

}