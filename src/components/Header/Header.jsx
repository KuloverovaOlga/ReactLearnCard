import cls from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { AUTH_STORAGE } from '../../constants';
import ReactLogo from '../../assets/react.svg';
import useAuth from '../../hooks/useAuth';
import { Button, ThemeToggler } from '../ui';

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();

  const onLoginClick = () => {
    localStorage.setItem(AUTH_STORAGE, !isAuth);
    setIsAuth((prev) => !prev);
  };

  return (
    <header className={cls.header}>
      <div onClick={() => navigate('/')} className={cls.logo}>
        <img src={ReactLogo} alt="react logo" />
        <p>ReactCards</p>
      </div>

      <div className={cls.btns}>
        <ThemeToggler />
        {isAuth && <Button onClick={() => navigate('/addquestion')}>Добавить</Button>}

        <Button isActive={!isAuth} onClick={onLoginClick}>
          {isAuth ? 'Выйти' : 'Войти'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
