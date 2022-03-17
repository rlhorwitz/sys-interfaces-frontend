import { Nav, Visualization } from './components';
import { data } from './constants';
import { generateForceGraph } from './utils';

function App() {

  return (
    <div className="bg-light vh-100 d-flex flex-column">
      <Nav/>
      <Visualization
        className='flex-grow-1'
        generateGraph={(container) => generateForceGraph({container, linksData: data.links, nodesData: data.nodes})}
      />
    </div>
  )
}

export default App
