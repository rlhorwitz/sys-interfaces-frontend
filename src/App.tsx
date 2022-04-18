import * as d3 from 'd3';
import _ from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import { Legend, Nav, Visualization } from './components';
import { data } from './constants';
import { generateForceGraph } from './utils';

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']

// This is our App component
function App() {
  const [switchChecked, setSwitchChecked] = useState(false);

  const uniqueSysAdmins = useMemo(() => {
    return _.uniq(data.nodes.map(node => node.sysAdmin));
  }, [data]);

  const uniqueBusinessOwners = useMemo(() => {
    return _.uniq(data.nodes.map(node => node.businessOwner).filter((x): x is string => !!x));
  }, [data]);

  // This is a memoized color-scaling function; color depends on data and will only update when data changes
  const color = useMemo(() => {
    return d3.scaleOrdinal(switchChecked ? uniqueBusinessOwners : uniqueSysAdmins, colorArray);
  }, [data, switchChecked, uniqueBusinessOwners, uniqueSysAdmins]);

  const onChange = useCallback(() => setSwitchChecked(!switchChecked), [switchChecked]);

  // Returns the markup for our App at the top level 
  return (
    <div className="bg-light vh-100 d-flex flex-column">
      {/* className are Bootstrap styles that came from import, theme not customized for now */}
      <Nav switchChecked={switchChecked} onChange={onChange} />
      <div className='d-flex flex-grow-1 align-items-center'>
        <Legend keys={switchChecked ? uniqueBusinessOwners : uniqueSysAdmins} swatchScale={color} />
        <Visualization
          className='flex-grow-1 h-100'
          generateGraph={(container) => generateForceGraph({
            // This gives you a reusable component for any graph-generating function
            container,
            linksData: data.links,
            nodesData: data.nodes,
            sysAdmins: uniqueSysAdmins,
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
