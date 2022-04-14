import * as d3 from 'd3';
import { useCallback, useMemo, useState } from 'react';
import { Legend, Nav, Visualization } from './components';
import { data } from './constants';
import { generateForceGraph } from './utils';

// This is our App component
function App() {
  // This is a memoized color-scaling function; color depends on data and will only update when data changes
  const color = useMemo(() => {
    return d3.scaleOrdinal(data.sysAdmins, d3.schemeAccent);
  }, [data]);

  const [switchChecked, setSwitchChecked] = useState(false);

  const onChange = useCallback(() => setSwitchChecked(!switchChecked), [switchChecked]);

  // Returns the markup for our App at the top level 
  return (
    <div className="bg-light vh-100 d-flex flex-column">
      {/* className are Bootstrap styles that came from import, theme not customized for now */}
      <Nav switchChecked={switchChecked} onChange={onChange} />
      <div className='d-flex flex-grow-1 align-items-center'>
        <Legend keys={switchChecked ? data.businessOwners : data.sysAdmins} swatchScale={color} />
        <Visualization
          className='flex-grow-1 h-100'
          generateGraph={(container) => generateForceGraph({
            // This gives you a reusable component for any graph-generating function
            container,
            linksData: data.links,
            nodesData: data.nodes,
            sysAdmins: data.sysAdmins,
            location: window.location.href,
            color,
            showOwners: switchChecked
          })}
        />
      </div>
    </div>
  )
}

export default App
