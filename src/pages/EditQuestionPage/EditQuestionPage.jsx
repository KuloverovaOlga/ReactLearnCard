import cls from './EditQuestionPage.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import { ClearIcons } from '../../components/Icons';
import { Loader } from '../../components/ui';
import useFetch from '../../hooks/useFetch';
import EditPage from './EditQuestion';

const EditQuestionPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const navigate = useNavigate();

  const { request, process } = useFetch();

  const getCard = async () => {
    request(`${API_URL}/react/${id}`).then((data) => setCard(data));
  };

  const removeCard = async () => {
    request(`${API_URL}/react/${id}`, 'DELETE')
      .then(() => {
        toast.success(`Вопрос удален`);
        navigate('/');
      })
      .catch((e) => {
        toast.error(`Что-то пошло не так: ${e}`);
      });
  };

  const onClickRemoveCard = () => {
    const isRemove = confirm(`Вы уверены в удалении этого вопроса?`);
    if (isRemove) {
      removeCard();
    }
  };

  const components = {
    loading: <Loader />,
    confirmed: <EditPage initalState={card} />,
    error: <p>Ошибка</p>
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className={cls.add}>
      <p className={cls.title}>Редактировать вопрос</p>
      <div className={cls.content}>
        <button onClick={onClickRemoveCard} className={cls.close}>
          <ClearIcons />
        </button>
        {components[process]}
      </div>
    </div>
  );
};

export default EditQuestionPage;
