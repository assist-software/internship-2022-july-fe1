import React, { useContext, createContext } from 'react';

// import { reducer } from '../reducer';
import { API } from '../api/API';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const initialState = API.useApi('ceva')

    // will be use later
    // const [state, dispatch] = useReducer(reducer, initialState)


    // need to delete u will use reducer
    const state = initialState

    return <AppContext.Provider
        value={{
            ...state,
        }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}