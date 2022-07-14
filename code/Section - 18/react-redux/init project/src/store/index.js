// import slice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";
const { createStore } = require("redux");

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // when we need payload then we can take from action
    incrase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case "DECREMENT":
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case "RESET":
//       return { counter: 0, showCounter: state.showCounter };
//     case "BY5":
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };
//     case "TOGGLE":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     default:
//       return state;
//   }
// };
// normal reducer
// const store = createStore(counterReducer);

// redux-tool kit create store
const store = createStore(counterSlice.reducer);
export default store;
