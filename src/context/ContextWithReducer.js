import { createContext, useReducer } from "react";
export const CounterContext = createContext({
  count: 0, //getter
  decrement: () => null, //setter
  increment: () => null,
  reset: () => null,
});

const INITIAL_STATE = {
  count: 1,
  name: "no name",
};

// --------- TYPES
export const COUNTER_ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};
// ---------- REDUCER
//reducer=(state, action)=>{
//    return {new state ...}
//}

export const counterReducer = (state = INITIAL_STATE, action) => {
  // type - type of the action
  // payload - data to do the aciton
  const { type, payload } = action;

  switch (type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return {
        ...state, // copy all members from state
        count: state.count + 1,
      };
    case COUNTER_ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTION_TYPES.RESET:
      return { ...state, count: 0 };
    default:
      return state;
    //  throw new Error('Invalid action type');
  }
};

export const CounterProvider = ({ children }) => {
  const [{ count, name }, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  //actions realizations
  const decrement = () => {
    dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT });
  };
  const increment = () => {
    dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT });    
};
  const reset = () =>{
    dispatch({ type: COUNTER_ACTION_TYPES.RESET });
  };
 let value = { count, decrement, increment, reset };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

// // ------ ACTIONS
// export const increment = () => ({ type: COUNTER_ACTION_TYPES.INCREMENT });
// export const decrement = () => ({ type: COUNTER_ACTION_TYPES.DECREMENT });
// export const reset = () => ({ type: COUNTER_ACTION_TYPES.RESET });

// // ------- SELECTORS
// export const selectCount = (store) => store.counter.count;
// export const selectName = (store) => store.counter.name;
