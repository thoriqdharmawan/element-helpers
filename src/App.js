import {useDraggableElement} from './Hooks'
import './index.css'

function App() {
  // const [refNode, { height, width }] = useGetDimensions();

  const [refNode] = useDraggableElement()

  return (
    <div style={{
      width: 400,
      height: 400,
      border: '1px solid black',
    }} >  
  
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
      
      <div className="dumy xm"></div>
      <div className="dumy md"></div>
      <div className="dumy lg"></div>
    </div>
  );
}

export default App;
