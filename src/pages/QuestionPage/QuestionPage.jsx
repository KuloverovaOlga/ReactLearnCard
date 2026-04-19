import cls from './QuestionPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import { Badge, Button, Loader } from '../../components/ui';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';

const QuestionPage = () => {
  const { id } = useParams();

  const { request, process } = useFetch();
  const [card, setCard] = useState({});

  const getCard = async () => {
    request(`${API_URL}/react/${id}`).then((data) => setCard(data));
  };

  const components = {
    loading: <Loader />,
    confirmed: <View card={card} />,
    error: <p>Ошибка</p>
  };

  useEffect(() => {
    getCard();
  }, []);

  return components[process];
};

const View = ({ card }) => {
  const navigate = useNavigate();
  const { request } = useFetch();

  const [isChecked, setIsChecked] = useState(card.completed);
  const [isCardUpdate, setIsCardUpdate] = useState(false);

  const { isAuth } = useAuth();

  const cardLevelVar = (level) => {
    switch (level) {
      case 1:
        return 'primary';
      case 2:
        return 'warning';
      case 3:
        return 'alert';
      default:
        return 'primary';
    }
  };

  const completedVar = (completed) => {
    switch (completed) {
      case true:
        return 'success';
      case false:
        return 'nosuccess';
      default:
        return 'primary';
    }
  };

  const onCheckHendler = () => {
    const nextValue = !isChecked;
    setIsCardUpdate(true);
    request(`${API_URL}/react/${card.id}`, 'PATCH', JSON.stringify({ completed: nextValue }))
      .then(() => {
        setIsChecked(nextValue);
      })
      .then(() => {
        setIsCardUpdate(false);
        toast.success(`Вопрос отмечен как ${nextValue ? '"Выполнено"' : '"Не выполнено"'}`);
      })
      .catch(() => {});
  };

  return (
    <div className={cls.card}>
      <div className={cls.billets}>
        <Badge variant={cardLevelVar(card.level)}>Сложность: {card.level}</Badge>
        <Badge variant={completedVar(isChecked)}> {isChecked ? 'Выполнено' : 'Не выполнено'}</Badge>

        {card.editDate && <p className={cls.edit}>Edited: {card.editDate}</p>}
      </div>
      <h5 className={cls.title}>{card.question}</h5>
      <p className={cls.description}>{card.description}</p>
      <div className={cls.answers}>
        <p>Короткий ответ:</p>
        <span>{card.answer}</span>
      </div>
      <div className={cls.resources}>
        <p>Ресурсы:</p>
        {card.resources.length > 0 ? (
          <ul>
            {card.resources.map((item, i) => (
              <li key={i}>
                <a href={item} target="_blank" rel="noreferrer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className={cls.notFound}>ресурсы не добавлены</p>
        )}
      </div>
      <label className={cls.check}>
        <input type="checkbox" checked={isChecked} onChange={onCheckHendler} />
        <span>Отметить вопрос как выполненный</span>

        {isCardUpdate && <span class={cls.loader}></span>}
      </label>
      {isAuth && (
        <Button isDisabled={isCardUpdate} onClick={() => navigate(`/editquestion/${card.id}`)}>
          Редактировать
        </Button>
      )}
      <Button isDisabled={isCardUpdate} onClick={() => navigate(`/`)}>
        Вернуться назад
      </Button>
    </div>
  );
};

export default QuestionPage;
