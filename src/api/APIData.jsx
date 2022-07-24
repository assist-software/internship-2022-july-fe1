const url = `https://assist-jully-2022-be1.azurewebsites.net/api`;

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
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(item),
  };
  const result = await apiRequest(`${url}/listing/create`, postOptions);
  if (result) console.log(result);
};

// DELETE POST
const deletePost = async (id) => {
  const deleteOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const reqUrl = `${url}/listing/${id}`;
  const result = await apiRequest(reqUrl, deleteOptions);
  if (result) console.log(result);
};

//EDIT POST
const editPost = async (item, id) => {
  const updateOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(item),
  };
  const reqUrl = `${url}/listing/${id}`;
  const result = await apiRequest(reqUrl, updateOptions);
  if (result) console.log(result);
};

//ADD TO FAVORITE
const addToFavoriteApi = async (id) => {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const result = await apiRequest(
    `${url}/Favorite/add?UserId=${localStorage.getItem(
      'userId'
    )}&ListingId=${id}`,
    postOptions
  );
  if (result) console.log(result);
};

export const APIData = {
  url,
  apiRequest,
  addPost,
  deletePost,
  editPost,
  addToFavoriteApi,
};
