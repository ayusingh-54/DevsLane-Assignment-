import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./features/counterSlice";

function SubChild() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      Value from Child is : {count}
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
}
export default SubChild;
