let url = `https://assist-jully-2022-be1.azurewebsites.net/api/listing`;

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

//ADD POST
const addPost = async (item) => {
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

// DELETE POST
const deletePost = async (id) => {
  const deleteOptions = { method: 'DELETE' };
  const reqUrl = `${url}/${id}`;
  const result = await apiRequest(reqUrl, deleteOptions);
  if (result) console.log(result);
};

//EDIT POST
const editPost = async (item, id) => {
  const updateOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // id: `${id}`,
    },
    body: JSON.stringify(item),
  };
  const reqUrl = `${url}/${id}`;
  const result = await apiRequest(reqUrl, updateOptions);
  if (result) console.log(result);
};

export const APIData = {
  apiRequest,
  addPost,
  deletePost,
  editPost,
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
