import React, { useContext, createContext, useState } from 'react';

import { appReducer } from '../Reducers/appReducer';
import { API } from '../api/API';
import { isFocusable } from '@testing-library/user-event/dist/utils';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = API.cardsMock;
  const [displayWide, setDisplayWide] = useState(false);

  //   console.log('initialState', initialState);

  // will be use later
  // const [state, dispatch] = useReducer(appReducer, initialState)

  // will delete when start use reducer
  const state = initialState;

  //FILTER FOR ORDER
  const handleOrderFilter = (order) => {
    console.log(order);
  };

  //FILTER FOR PRICE
  const handlePriceFilter = (price) => {
    console.log(price);
  };

  //FILTER FOR LOCATION
  const handleLocationFilter = (location) => {
    console.log(location);
  };

  // BRINGS VALUE TO THE PROPS ITEM OF ALL OBJECTS
  const singleElement = (element) => {
    if (element) {
      const cloneInitalState = [...initialState];
      let tempData = [];
      for (let i = 0; i < cloneInitalState.length; i++) {
        if (cloneInitalState[i].hasOwnProperty(element)) {
          tempData.push(cloneInitalState[i][`${element}`]);
        } else {
          throw Error(
            "Please don't be a thief :)) and choose an item that exists :))"
          );
        }
      }
      return tempData;
    } else {
      return console.log('Please select 1 element');
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        state,
        displayWide,
        setDisplayWide,
        singleElement,
        handleLocationFilter,
        handlePriceFilter,
        handleOrderFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
