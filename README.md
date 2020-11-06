# Helper for your React Element :star2::star2:

* [NPM](https://www.npmjs.com/package/element-helpers) here
* [GitHub](hhttps://github.com/thoriqdharmawan/element-helpers) here

### Installation

```
npm i element-helpers
```

### Usage

```javascript
import { useGetDimensions } from "element-helpers";

function App() {
  const [refNode, { width, height }] = useGetDimensions();

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

```


### Props

Name | Required | Information
---- | ----- | ----
refNode | true | You can change the name
width | false
height | false
bottom | false
left | false
right | false
top | false
x | false
y | false