import { useCallback, useState } from "react";

export const useGetDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
    top: undefined,
    x: undefined,
    y: undefined,
  });

  const refNode = useCallback((node) => {
    if (node) {
      setDimensions({
        width: node.getBoundingClientRect().width,
        height: node.getBoundingClientRect().height,
        bottom: node.getBoundingClientRect().bottom,
        left: node.getBoundingClientRect().left,
        right: node.getBoundingClientRect().right,
        top: node.getBoundingClientRect().top,
        x: node.getBoundingClientRect().x,
        y: node.getBoundingClientRect().y,
      });
    }
  }, []);

  return [
    refNode,
    {
      width: dimensions.width,
      height: dimensions.height,
      bottom: dimensions.bottom,
      left: dimensions.left,
      right: dimensions.right,
      top: dimensions.top,
      x: dimensions.x,
      y: dimensions.y,
    },
  ];
};