import cls from './QuestionCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { Badge, Button } from '../ui';

const highlightMatch = (text, term) => {
  if (!term.trim()) return text;

  const regex = new RegExp(`(${term.trim()})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} style={{ backgroundColor: '#4203ff', borderRadius: '4rem', color: '#fff' }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const QuestionCard = (props) => {
  const { question, answer, level, completed, id, searchValue } = props;

  const navigate = useNavigate();

  const cardLevelVar = (level) => {
    switch (level) {
      case 1:
        return 'primary';
      case 2:
        return 'warning';
      case 3:
        return 'alert';
    }
  };

  const completedVar = (completed) => {
    switch (completed) {
      case true:
        return 'success';
      case false:
        return 'nosuccess';
    }
  };

  return (
    <div className={cls.card}>
      <div className={cls.billets}>
        <Badge variant={cardLevelVar(level)}>Сложность: {level}</Badge>
        <Badge variant={completedVar(completed)}> {completed ? 'Выполнено' : 'Не выполнено'}</Badge>
      </div>

      <h5 className={cls.title}>{highlightMatch(question, searchValue)}</h5>

      <div className={cls.answers}>
        <p>Короткий ответ:</p>
        <span>{answer}</span>
      </div>

      <Button
        onClick={() => {
          navigate(`/question/${id}`);
        }}
      >
        Подробнее
      </Button>
    </div>
  );
};

export default QuestionCard;
