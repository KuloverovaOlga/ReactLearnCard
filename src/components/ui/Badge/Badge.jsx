import cls from './Badge.module.scss';

const Badge = ({ variant, children }) => {
  let classNames;
  switch (variant) {
    case 'primary':
      classNames = `${cls.badge} ${cls.primary}`;
      break;
    case 'success':
      classNames = `${cls.badge} ${cls.success}`;
      break;
    case 'nosuccess':
      classNames = `${cls.badge} ${cls.nosuccess}`;
      break;
    case 'warning':
      classNames = `${cls.badge} ${cls.warning}`;
      break;
    case 'alert':
      classNames = `${cls.badge} ${cls.alert}`;
      break;
    default:
      classNames = `${cls.badge} `;
  }
  return <div className={classNames}>{children}</div>;
};

export default Badge;
