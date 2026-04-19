import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={cls.error}>
      <p className={cls.title}>Страница не найдена</p>
    </div>
  );
};

export default NotFoundPage;
