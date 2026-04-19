import cls from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={`${cls.btn} ${props.isActive ? cls.isActive : ''}`} disabled={props.isDisabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
