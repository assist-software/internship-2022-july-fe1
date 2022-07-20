// let url = `https://assist-jully-2022-be2.azurewebsites.net/api/listing`;
let url = `https://assist-jully-2022-be1.azurewebsites.net/api/listing`;

const fetchItems = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error('Did not receive expected data');
    const listItems = await response.json();
    console.log(listItems);
    return listItems;
  } catch (err) {
    console.log(err.message);
  }
};

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

const firstFetch = async (requestOption = '') => {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestOption),
  };
  const result = await apiRequest(`${url}`, postOptions);
  //   if (result) return result;
  if (result) console.log(result);
};

//ADD ONE ITEM
const addItem = async (item) => {
  console.log(item);
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

const methodPost = async (fetchOption) => {
  console.log('din APIDATA', fetchOption);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fetchOption),
  };
  const response = await fetch(`${url}`, requestOptions);
  const data = await response.json();
  console.log(data);
};

const fetchCards = async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=12`
  //   );
  const res = await fetch(url);
  const data = await res.json();
  return console.log(data);
};

export const APIData = {
  methodPost,
  fetchCards,
  fetchItems,
  addItem,
  firstFetch,
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addItem = async (item) => {
//   const postOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(item),
//   };
//   const result = await apiRequest(`${url}/create`, postOptions);
//   if (result) console.log(result);
// };

// const handleCheck = async (id) => {
//   const listItems = items.map((item) =>
//     item.id === id ? { ...item, checked: !item.checked } : item
//   );
//   setItems(listItems);

//   const myItem = listItems.filter((item) => item.id === id);
//   const updateOptions = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ checked: myItem[0].checked }),
//   };
//   const reqUrl = `${API_URL}/${id}`;
//   const result = await apiRequest(reqUrl, updateOptions);
//   if (result) setFetchError(result);
// };

// const handleDelete = async (id) => {
//   const listItems = items.filter((item) => item.id !== id);
//   setItems(listItems);

//   const deleteOptions = { method: 'DELETE' };
//   const reqUrl = `${API_URL}/${id}`;
//   const result = await apiRequest(reqUrl, deleteOptions);
//   if (result) setFetchError(result);
// };
