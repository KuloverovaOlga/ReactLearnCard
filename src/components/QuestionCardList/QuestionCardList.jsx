import cls from './QuestionCardList.module.scss';
// import { memo } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionCardList = ({ cardList, searchValue }) => (
  <>
    {!cardList.length ? (
      <p align="center">По запросу "{searchValue}" ничего не найдено</p>
    ) : (
      <div className={cls.cardWrap}>
        {cardList.map((props) => (
          <QuestionCard {...props} searchValue={searchValue} key={props.id} />
        ))}
      </div>
    )}
  </>
);

export default QuestionCardList;
