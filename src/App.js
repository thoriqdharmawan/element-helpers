import {useDraggableElement} from './Hooks'
import './index.css'
import logo from './asset/logo512.png';

function App() {
  // const [refNode, { height, width }] = useGetDimensions();

  const [refNode] = useDraggableElement()
  const [refNode2] = useDraggableElement()

  return (
    <div>
      <img 
        ref={refNode2}  
        src={logo} 
        style={{
          position: "absolute",
          cursor: "grab",
        }} 
      />
      <div 
        ref={refNode} 
        className="dumy xs"
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'red',
          position: "absolute",
          cursor: "grab",
        }}
      />
    </div>
  );
}

export default App;
