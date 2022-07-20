import React, { useContext, createContext, useState, useEffect } from 'react';
// import { appReducer } from '../Reducers/appReducer';
import { API } from '../api/API';
import { APIData } from '../api/APIData';

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

  const [test, setTest] = useState();

  let url = `https://assist-jully-2022-be1.azurewebsites.net/api/listing`;
  // let url = `https://assist-jully-2022-be2.azurewebsites.net/api/listing`;

  // const urlE = `https://jsonplaceholder.typicode.com/comments?_page=${currentPageForContext}&_limit=12`;

  const [requestOption, setRequestOption] = useState({
    category: null,
    price: null,
    locations: null,
    orderBy: null,
    pageIndex: currentPageForContext,
  });

  const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
      const response = await fetch(url, optionsObj);
      if (!response.ok) throw Error('Please reload the app');
    } catch (err) {
      errMsg = err.message;
    } finally {
      return errMsg;
    }
  };
  useEffect(() => {
    const firsttFetch = async (requestOption = '') => {
      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestOption),
      };
      const result = await apiRequest(`${url}`, postOptions);
      if (result) console.log(result);
    };
    firsttFetch();

    // const fetchItems = async () => {
    //   try {
    //     const response = await fetch(url);
    //     if (!response.ok) throw Error('Did not receive expected data');
    //     const listItems = await response.json();
    //     console.log(listItems);
    //     // return setTest(listItems);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
    // fetchItems();
  }, []);

  const adddItem = async (item) => {
    // DOAR PT TESSTE

    item = {
      title: 'test Anndy',
      description: 'description description description description ',
      location: 'Suceava',
      price: 123333,
      images: 'images',
      category: 1,
      authorId: 'A5BF21BA-E26B-49E5-C17A-08DA688B8AC2',
      featured: true,
    };

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    };
    const result = await apiRequest(`${url}/create`, postOptions);
    if (result) console.log(result);
  };

  adddItem();

  // useEffect(() => {
  //   setTest(APIData.firstFetch());
  // }, []);

  // console.log(test);

  // const methodPost = async () => {
  //   console.log(requestOption);
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(requestOption),
  //   };
  //   const response = await fetch(`${url}`, requestOptions);
  //   const data = await response.json();
  //   console.log(data);
  // };

  // const fetchh = async (url) => {
  //   const request = await fetch(`${url}`);
  //   const data = await request.json();
  //   console.log(data);
  // };

  // APIData.addItem();

  // console.log(fetchh);

  // console.log('tata', test);
  // console.log(`${url}${current}`);
  // console.log('date de la assist', fetchh(url));

  // const fetchCards = async (currentPageForContext) => {
  //   // const res = await fetch(`
  //   // https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${cardsLimitOnThePage}
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/comments?_page=${currentPageForContext}&_limit=12`
  //   );
  //   const data = await res.json();
  //   return setInitialState(data);
  // };

  const fetchItems = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error('Did not receive expected data');
      const listItems = await response.json();
      // console.log(listItems);
      return listItems;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log(fetchItems());
  }, []);

  useEffect(() => {
    setRequestOption({ ...requestOption, price: priceFIlter });
  }, [priceFIlter]);

  useEffect(() => {
    setRequestOption({ ...requestOption, orderBy: orderFilter });
  }, [orderFilter]);

  useEffect(() => {
    // console.log('locationFIlter', locationFIlter);
    setRequestOption({
      ...requestOption,
      locations: [...locationFIlter],
    });
  }, [locationFIlter]);

  // const fetch = async () => {
  //   // try {
  //   const request = await fetch(
  //     `https://jsonplaceholder.typicode.com/comments?_page=${currentPageForContext}&_limit=12`
  //   );
  //   const data = await request.json();
  //   return data;
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // };

  // console.log(fetch(url));

  // useEffect(() => {
  //   fetchCards(currentPageForContext);
  // }, [currentPageForContext]);

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
  useEffect(() => {
    // console.log(
    //   'useEffect in context doar de teste',
    //   orderFilter,
    //   priceFIlter,
    //   locationFIlter
    // );
    // console.log([...locationFIlter]);
  }, [orderFilter, priceFIlter, locationFIlter]);

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
