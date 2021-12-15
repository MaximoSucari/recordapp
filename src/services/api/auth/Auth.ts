import axios from 'axios';

export const signUp = async (user: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/auth/sign-up`,
      user,
    );
    console.log(response);
    return response;
  } catch (e) {
    console.warn(e);
    return;
  }
};

export const login = async (credentials: {email: string; password: string}) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/auth/login`,
      credentials,
    );
    console.log(response);
    return response;
  } catch (e) {
    console.warn(e);
    return;
  }
};
