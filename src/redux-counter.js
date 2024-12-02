import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementMent = () => {
    dispatch({ type: "Increment" });
  };

  const decrementMent = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <>
      <div>
        <div className="row">
          <h2>
            Count: <span>{count}</span>
          </h2>
        </div>
        <div className="row">
          <button onClick={incrementMent}>Increment</button>
          <button onClick={decrementMent}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default ReduxCounter;
