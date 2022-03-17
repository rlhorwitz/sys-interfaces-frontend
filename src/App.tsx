import * as d3 from 'd3';
import { useMemo } from 'react';
import { Legend, Nav, Visualization } from './components';
import { data } from './constants';
import { generateForceGraph } from './utils';

function App() {
  const color = useMemo(() => {
    return d3.scaleOrdinal(data.markerIds, d3.schemeAccent);
  }, [data]);


  return (
    <div className="bg-light vh-100 d-flex flex-column">
      <Nav/>
      <div className='d-flex flex-grow-1 align-items-center'>
        <Legend keys={data.markerIds} swatchScale={color}/>
        <Visualization
          className='flex-grow-1 h-100'
          generateGraph={(container) => generateForceGraph({
            container,
            linksData: data.links,
            nodesData: data.nodes,
            markerIds: data.markerIds,
            location: window.location.href,
            color
          })}
        />
      </div>
    </div>
  )
}

export default App
