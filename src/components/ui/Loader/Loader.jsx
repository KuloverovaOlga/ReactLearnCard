import cls from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={cls.backdrop}>
      <div className={cls.loader}></div>
    </div>
  );
};

export default Loader;
