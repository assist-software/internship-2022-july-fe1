import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { APIData } from '../api/APIData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // const [initialState, setInitialState] = useState(API.cardsMock);
  const [initialState, setInitialState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayWide, setDisplayWide] = useState(false);

  //ALL FILTER STATE
  const [locationFIlter, setLocationFilter] = useState([]);
  const [priceFIlter, setPriceFilter] = useState(null);
  const [orderFilter, setOrderFIlter] = useState(null);

  // VALUE OF SEARCH
  // const [searchValue, setSearchValue] = useState(null);

  const [requestOption, setRequestOption] = useState({
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    category: null,
    price: null,
    locations: null,
    orderBy: null,
    pageIndex: currentPage,
    userId: localStorage.getItem('userId'),
  });

  useEffect(() => {
    setRequestOption({
      ...requestOption,
      pageIndex: currentPage,
      // price: priceFIlter,
    });
    // setRequestOption({ ...requestOption, price: priceFIlter });
    fetchData(requestOption);
  }, [currentPage, priceFIlter]);

  const fetchData = useCallback((optionReq) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(optionReq),
    };

    console.log('requestOption', requestOption);
    fetch(`${APIData.url}/listing`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setInitialState(data);
      });
  }, []);

  useEffect(() => {
    fetchData(requestOption);
  }, [fetchData, requestOption]);

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
        setCurrentPage,
        setPriceFilter,
        // setSearchValue,
        setRequestOption,
        setDisplayWide,
        singleElement,
        fetchData,
        requestOption,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
