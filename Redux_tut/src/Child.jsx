import React from "react";
import SubChild from "./SubChild";
import { useSelector } from "react-redux";
function Child(props) {
      const count = useSelector((state) => state.counter.value);

    return <>
        <p>Value from parent is : {count}</p>
        <SubChild  />
    </>
    
}
export default Child;