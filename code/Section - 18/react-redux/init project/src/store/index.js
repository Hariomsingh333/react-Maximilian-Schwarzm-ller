const { createStore } = require("redux");

const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case "DECREMENT":
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case "RESET":
      return { counter: 0, showCounter: state.showCounter };
    case "BY5":
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

export default store;
