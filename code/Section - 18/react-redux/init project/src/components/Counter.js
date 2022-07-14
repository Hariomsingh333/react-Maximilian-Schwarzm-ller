import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const showCounter = useSelector((state) => state.counterReducer.showCounter);
  // const Namecounter = useSelector((state) =>
  //   console.log(state.counterReducer.showCounter)
  // );
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch(counterAction.decrement());
    dispatch(counterActions.decrement());
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };
  const incrementHandlerby5 = () => {
    // dispatch(counterAction.incrase(5));
    dispatch(counterActions.incrase(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={resetHandler}>reset</button>
      <button onClick={incrementHandlerby5}>increment by 5</button>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
