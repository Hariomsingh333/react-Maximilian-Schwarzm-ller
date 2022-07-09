const { createStore } = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    case "BY5":
      return { counter: state.counter + 5 };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

export default store;
