import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'auth/signin', {
    username,
    password,
  });
  return response.data;
};

const getUserBoard = async (token) => {
  const response = await axios.get(API_URL + 'test/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const authService = {
  login,
  getUserBoard,
};

export default authService;
