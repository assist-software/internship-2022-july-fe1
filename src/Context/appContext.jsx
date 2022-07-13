import React, { useState, useContext, createContext, useEffect, useReducer } from 'react';

import { reducer } from '../reducer';
import { API } from '../api/API';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const initialState = API.useApi('ceva')
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);


    return <AppContext.Provider
        value={{
            ...state,
        }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}