import React, { useContext, createContext, useState, useEffect } from 'react';
// import { appReducer } from '../Reducers/appReducer';
import { API } from '../api/API';
import { APIData } from '../api/APIData';
// import { APIData } from '../api/APIData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // const [initialState, setInitialState] = useState(API.cardsMock);
  const [initialState, setInitialState] = useState([]);
  const [currentPageForContext, setCurrentPageForContext] = useState(1);
  const [displayWide, setDisplayWide] = useState(false);

  // VALUE OF SEARCH
  const [searchValue, setSearchValue] = useState(null);

  let url = `https://assist-jully-2022-be1.azurewebsites.net/api`;

  const [test, setTest] = useState(null);

  const [requestOption, setRequestOption] = useState({
    // id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    category: null,
    price: null,
    locations: null,
    orderBy: null,
    pageIndex: currentPageForContext,
  });

  const fetchData = (optionReq) => {
    // console.log(optionReq);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(optionReq),
    };
    fetch(
      `https://assist-jully-2022-be1.azurewebsites.net/api/listing`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setInitialState(data);
      });
  };

  useEffect(() => {
    fetchData(requestOption);
  }, []);

  // useEffect(() => {
  //   console.log('din useEffect ', requestOption);
  // }, [requestOption]);

  console.log('initialState', initialState);

  // const firstFetch = async (optionReq = '') => {
  //   const postOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ pageIndex: 1 }),
  //   };
  //   const result = await APIData.apiRequest(`${url}/listing`, postOptions);
  //   console.log('result', result);
  //   if (result) console.log('result', result);
  //   // const data = await result.json();
  //   // console.log(data);
  //   // return setInitialState(result);
  //   // return data;
  // };

  // const fetchItems = async () => {
  //   try {
  //     const response = await fetch(`${url}/listing`);
  //     if (!response.ok) throw Error('Did not receive expected data');
  //     const listItems = await response.json();
  //     console.log(listItems);
  //     return setInitialState(listItems);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // console.log(fetchItems());

  // const x = (params) => {
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(params),
  //     };
  //     fetch(`${url}/listing`, requestOptions)
  //       .then((response) => response.json())
  //       .then((data) => console.log('data', data));
  //   };

  // const x = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ pageIndex: 1 }),
  //   };
  //   fetch(`${url}/listing`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => console.log('data', data));
  // };
  // useEffect(() => {
  //   // setInitialState(APIData.firstFetch(requestOption));
  //   // fetchItems();
  //   // firstFetch();
  //   // x();
  // }, []);

  // console.log(initialState);

  // useEffect(() => {
  //   setRequestOption({ ...requestOption, price: priceFIlter });
  //   fetchData(requestOption);
  // }, [priceFIlter]);

  // useEffect(() => {
  //   setRequestOption({ ...requestOption, orderBy: orderFilter });
  //   fetchData(requestOption);
  // }, [orderFilter]);

  // useEffect(() => {
  //   setRequestOption({
  //     ...requestOption,
  //     locations: [...locationFIlter],
  //   });
  //   fetchData(requestOption);
  // }, [locationFIlter]);

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
        // setOrderFIlter,
        // setPriceFilter,
        // setLocationFilter,
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
