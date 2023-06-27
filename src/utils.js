const SERVER_ORIGIN = '';
const loginUrl = `${SERVER_ORIGIN}/login`;

export const login = (credential) => {
  const formData = new FormData();
  formData.append("username", credential.username);
  formData.append("password", credential.password);


  return fetch(loginUrl, {
    method: 'POST',
    credentials: 'include',
    body: formData
  }).then((response) => {
    if (response.status !== 204) {
      throw Error('Fail to log in');
    }
  })
}


const registerUrl = `${SERVER_ORIGIN}/register`;


export const register = (data) => {
  return fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to register');
    }
  })
}


const logoutUrl = `${SERVER_ORIGIN}/logout`;


export const logout = () => {
  return fetch(logoutUrl, {
    method: 'POST',
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 204) {
      throw Error('Fail to log out');
    }
  })
}





