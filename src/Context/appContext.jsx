import React, { useContext, createContext, useState, useEffect } from 'react';
// import { appReducer } from '../Reducers/appReducer';
import { API } from '../api/API';
// import { APIData } from '../api/APIData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [initialState, setInitialState] = useState(API.cardsMock);
  const [currentPageForContext, setCurrentPageForContext] = useState(1);
  const [displayWide, setDisplayWide] = useState(false);

  // VALUE OF SEARCH
  const [searchValue, setSearchValue] = useState('');

  //ALL FILTER STATE
  const [locationFIlter, setLocationFilter] = useState([]);
  const [priceFIlter, setPriceFilter] = useState('');
  const [orderFilter, setOrderFIlter] = useState('');

  // const [test, setTest] = useState();

  // setInitialState(API.cardsMock);
  console.log(searchValue);

  let url = `https://assist-jully-2022-be1.azurewebsites.net/api/listing`;

  const [requestOption, setRequestOption] = useState({
    category: null,
    price: null,
    locations: null,
    orderBy: null,
    pageIndex: currentPageForContext,
  });

  // const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  //   try {
  //     const response = await fetch(url, optionsObj);
  //     if (!response.ok) throw Error('Please reload the app');
  //   } catch (err) {
  //     errMsg = err.message;
  //   } finally {
  //     return errMsg;
  //   }
  // };

  const fetchItems = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error('Did not receive expected data');
      const listItems = await response.json();
      // console.log(listItems);
      return console.log(listItems);
    } catch (err) {
      console.log(err.message);
    }
  };

  fetchItems();

  useEffect(() => {
    setRequestOption({ ...requestOption, price: priceFIlter });
  }, [priceFIlter]);

  useEffect(() => {
    setRequestOption({ ...requestOption, orderBy: orderFilter });
  }, [orderFilter]);

  useEffect(() => {
    setRequestOption({
      ...requestOption,
      locations: [...locationFIlter],
    });
  }, [locationFIlter]);

  // FIRST TRY FOR SEARCH
  // const fetchDrinks = useCallback(async () => {
  //   try {
  //     const response = await fetch(``);
  //     const data = await response.json();
  //     console.log(data);
  //     if (data) {
  //       setInitialState(data);
  //     } else {
  //       setInitialState([]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [searchValue]);

  // useEffect PT TESTE LA SEARCH
  // useEffect(() => {
  //   fetchDrinks();
  // }, [fetchDrinks]);

  //useEffect DOAR PT TESTE
  // useEffect(() => {
  //   // console.log(
  //   //   'useEffect in context doar de teste',
  //   //   orderFilter,
  //   //   priceFIlter,
  //   //   locationFIlter
  //   // );
  //   // console.log([...locationFIlter]);
  // }, [orderFilter, priceFIlter, locationFIlter]);

  // console.log(requestOption);
  //   console.log('initialState', initialState);

  // will be use later
  // const [state, dispatch] = useReducer(appReducer, initialState)

  // will delete when start use reducer
  const state = initialState;

  // BRINGS VALUE TO THE SINGLE PROPS ITEM FROM ALL OBJECTS
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
        setCurrentPageForContext,
        setSearchValue,
        setDisplayWide,
        setOrderFIlter,
        setPriceFilter,
        setLocationFilter,
        singleElement,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
