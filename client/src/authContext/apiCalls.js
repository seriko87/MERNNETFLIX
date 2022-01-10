import axios from 'axios';
import { loginFailure, loginStart, loginSuccess, logout } from './AuthActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logoutt = (dispatch) => {
  dispatch(logout());
};
