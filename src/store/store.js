import { createStore } from "redux";

const initialState = {
  count: 0,
  userId: 0,
};

const counterValue = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterValue);

export default store;
