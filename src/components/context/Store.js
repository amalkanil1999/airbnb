import React, { createContext, useReducer } from 'react';
import reducer from './Reducer';

const initialState = {
  userData: {},
  loading: true,
};

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
