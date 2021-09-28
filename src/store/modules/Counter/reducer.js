import { ADD_ONE, SUB_ONE } from "./actionTypes";

const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state + 1;
    case SUB_ONE:
      return state - 1;

    default:
      return state;
  }
};

export default CounterReducer;
