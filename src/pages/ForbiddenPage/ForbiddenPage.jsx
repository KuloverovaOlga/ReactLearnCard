import cls from './ForbiddenPage.module.scss';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ForbiddenPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  useEffect(() => {
    isAuth && navigate(location.state?.from || '/', { replace: true });
  }, [isAuth]);
  return (
    <div className={cls.ForbiddenPage}>
      <p className={cls.title}>
        Для посещения этой страницы <br />
        необходимо авторизоваться на сайте
      </p>
    </div>
  );
};

export default ForbiddenPage;
