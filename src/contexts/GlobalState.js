import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
// Initial State
const initialState={
    transactions:[]
}

// Create Context
export const GlobalContext=createContext(initialState);

// Provider
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    // Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE',
            payload:id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD',
            payload:transaction
        })
    }

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}