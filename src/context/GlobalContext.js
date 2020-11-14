import React, { createContext, useContext, useReducer } from "react";

export const contextProvider = createContext();
const GlobalContext = ({ reducer, initialState, children }) => {
   return (
      <>
         <contextProvider.Provider value={useReducer(reducer, initialState)}>
            {children}
         </contextProvider.Provider>
      </>
   );
};

export default GlobalContext;

// Hooks to use globale state
export const useGlobalData = () => useContext(contextProvider);
