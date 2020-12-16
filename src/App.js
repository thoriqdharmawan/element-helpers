import {useDraggableElement} from './Hooks'
import './index.css'

function App() {
  const refNode = useDraggableElement()

  return (
    <div ref={refNode} className="box" />
  );
}

export default App;
