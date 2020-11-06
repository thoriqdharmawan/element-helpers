import { useGetDimensions } from "element-helpers";

function App() {
  const [refNode, { height, width }] = useGetDimensions();

  console.log("height : ", height); // 100
  console.log("width : ", width); // 300

  return (
    <div
      ref={refNode}
      style={{ width: 300, height: 100, backgroundColor: "red" }}
    />
  );
}

export default App;
