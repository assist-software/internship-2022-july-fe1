import React, { useContext, createContext, useState, useEffect, useCallback } from 'react';

import { APIData } from '../api/APIData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // const [initialState, setInitialState] = useState(API.cardsMock);
  const [initialState, setInitialState] = useState([]);
  const [currentPageForContext, setCurrentPageForContext] = useState(1);
  const [displayWide, setDisplayWide] = useState(false);

  // VALUE OF SEARCH
  // const [searchValue, setSearchValue] = useState(null);

  const [requestOption, setRequestOption] = useState({
    category: null,
    price: null,
    locations: null,
    orderBy: null,
    pageIndex: currentPageForContext,
  });

  const fetchData = useCallback((optionReq) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(optionReq),
    };
    fetch(`${APIData.url}/listing`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setInitialState(data);
      });
  }, []);

  useEffect(() => {
    fetchData(requestOption);
  }, [fetchData, requestOption]);

  console.log('in context', initialState);

  const state = initialState;

  //BRINGS VALUE TO THE SINGLE PROPS ITEM FROM ALL OBJECTS
  const singleElement = (element) => {
    if (element) {
      const cloneInitalState = [...initialState];
      let tempData = [];
      for (let i = 0; i < cloneInitalState.length; i++) {
        if (cloneInitalState[i].hasOwnProperty(element)) {
          tempData.push(cloneInitalState[i][`${element}`]);
        } else {
          throw Error("Please don't be a thief :)) and choose an item that exists :))");
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
        setCurrentPageForContext,
        // setSearchValue,
        setRequestOption,
        setDisplayWide,
        singleElement,
        fetchData,
        requestOption,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
