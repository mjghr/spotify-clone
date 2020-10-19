import React, { useReducer, createContext, useContext } from "react";

export const DataLayerContext = createContext();

// prettier-ignore
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
     {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
