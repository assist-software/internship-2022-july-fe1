const url = `https://assist-jully-2022-be1.azurewebsites.net/api/User`;

const register = (email, pass) => {
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
  fetch(`${url}/register`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log('token', data);
      localStorage.setItem('token', data);
      return data;
    });
};

export const APIAuth = {
  register,
};
