import { createContext, useReducer } from "react";

// using SearchContext, we can share the search state
// (city, dates, and options) across different components in the app
// using this to avoid prop drilling

const INITIAL_STATE = { // of the search parameters
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

// update the state based on the action type 

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload; // payload contains the new state
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state; // current state
  }
};

// Provide the state and dispatch function to its children.

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE); // Hook

  return (
    <SearchContext.Provider // provide the search state to its children
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch, // dispatch the new states
      }}
    >
      {children} 
    </SearchContext.Provider> // Chilren are wrapped around this tag ; we wrap App here
  );
};