import cls from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../Header';

const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={cls.mainLayout}>
        <Header />
        <div className={cls.mainWrap}>
          <main className={cls.main}>
            <Outlet />
          </main>
          <footer className={cls.footer}>
            <span>React Question Card App | {currentYear}</span>
            <span>By Kuloverova Olga</span>
          </footer>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default MainLayout;
