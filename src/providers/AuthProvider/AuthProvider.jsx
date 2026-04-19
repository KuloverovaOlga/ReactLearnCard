import React, { useState } from 'react';
import { AUTH_STORAGE } from '../../constants';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const isLogin = JSON.parse(localStorage.getItem(AUTH_STORAGE)) || false;
  const [isAuth, setIsAuth] = useState(isLogin);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
