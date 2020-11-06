// import {useGetDimensions} from './Hooks'

import { useGetDimensions } from "element-helpers";

function App() {
  const [refNode, { height, width }] = useGetDimensions();

  console.log("height : ", height);
  console.log("width : ", width);

  return (
    <div
      ref={refNode}
      style={{ width: 300, height: 100, backgroundColor: "red" }}
    />
  );
}

export default App;
