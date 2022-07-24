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
  const [state, setState] = useState([]);
  const [displayWide, setDisplayWide] = useState(false);

  const [requestOption, setRequestOption] = useState({
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    category: null,
    price: null,
    locations: null,
    orderBy: null,
    pageIndex: 1,
    userId: localStorage.getItem('userId'),
  });

  const fetchData = useCallback((optionReq) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(optionReq),
    };

    fetch(`${APIData.url}/listing`, requestOptions)
      .then((response) => {
        if (response.status >= 400) return [];
        return response.json();
      })
      .then((data) => {
        setState(data);
      });
  }, []);

  useEffect(() => {
    fetchData(requestOption);
  }, [requestOption]);

  //ADD TO FAVORITE
  const addToFavoriteContext = (listingId) => {
    APIData.addToFavoriteApi(listingId);
  };

  //DELETE
  const deleteList = (id) => {
    APIData.deletePost(id);
    setState(state.filter((item) => item.id !== id));
  };

  //BRINGS VALUE TO THE SINGLE PROPS ITEM FROM ALL OBJECTS
  const singleElement = (element) => {
    if (element) {
      const cloneInitalState = [...state];
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
        setRequestOption,
        setDisplayWide,
        singleElement,
        fetchData,
        requestOption,
        addToFavoriteContext,
        deleteList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
