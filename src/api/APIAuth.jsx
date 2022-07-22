const url = `https://assist-jully-2022-be1.azurewebsites.net/api/user`;

// LOGIN AND REGISTER
const register = (email, pass, mode) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: pass,
      nameDevice: 'Windows 10 PRO',
      deviceType: 'Chrome',
      location: 'Suceava',
      status: true,
    }),
  };
  fetch(`${url}/${mode}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        console.log('data TRUE', data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        localStorage.setItem('userId', data.userId);
        console.log('token', data);
        return data;
      } else {
        console.log('data falseeeeeeeeeeeeeeeeeeeeee');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// RESET PASSWORD
const resetPass = (email) => {
  const splitEmail = email.split('@');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  fetch(
    `${url}/reset-password${splitEmail[0]}%40${splitEmail[1]}`,
    requestOptions
  ).then((response) => response.json());
};

// GET ALL DATA OF USER
// const getUserDataApi = () => {
//   const requestOptions = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   };
//   fetch(`${url}/get/${localStorage.getItem('userId')}`, requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('in API', data);
//       userData = data;
//       console.log('in fetch userData', userData);
//       return;
//     });
// };

export const APIAuth = {
  register,
  resetPass,
  // getUserDataApi,
  // userData,
  url,
};
