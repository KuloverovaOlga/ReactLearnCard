import cls from './ThemeToggler.module.scss';
import React from 'react';
import { THEME_STORAGE } from '../../../constants';
import useTheme from '../../../hooks/useTheme';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const ioToggleTheme = (e) => {
    const isChecked = e.target.checked;
    const updateTheme = !isChecked ? 'dark' : 'light';
    localStorage.setItem(THEME_STORAGE, updateTheme);
    setTheme(updateTheme);

    isChecked ? document.body.classList.add('lightMode') : document.body.classList.remove('lightMode');
  };

  return (
    <div className={cls.toggler}>
      <label className={cls.switch}>
        <input type="checkbox" id="toggle" checked={theme === 'light'} onChange={(e) => ioToggleTheme(e)} />
        <span className={cls.slider}>
          <div className={cls.moonsHole}>
            <div className={cls.moonHole}></div>
            <div className={cls.moonHole}></div>
            <div className={cls.moonHole}></div>
          </div>
          <div className={cls.blackClouds}>
            <div className={cls.blackCloud}></div>
            <div className={cls.blackCloud}></div>
            <div className={cls.blackCloud}></div>
          </div>
          <div className={cls.clouds}>
            <div className={cls.cloud}></div>
            <div className={cls.cloud}></div>
            <div className={cls.cloud}></div>
            <div className={cls.cloud}></div>
            <div className={cls.cloud}></div>
            <div className={cls.cloud}></div>
            <div className={cls.cloud}></div>
          </div>
          <div className={cls.stars}>
            <svg className={cls.star} viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
            <svg className={cls.star} viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
            <svg className={cls.star} viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
            <svg className={cls.star} viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
            <svg className={cls.star} viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
            </svg>
          </div>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggler;
