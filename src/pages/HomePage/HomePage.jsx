import cls from './HomePage.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { API_URL } from '../../constants';
import { QuestionCardList } from '../../components/QuestionCardList';
import { Search } from '../../components/Search';
import { Button, Loader } from '../../components/ui';
import useFetch from '../../hooks/useFetch';

const HomePage = () => {
  const [cardList, setCardList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [countCard, setCountCard] = useState(10);
  const [debouncedSearch, setDebouncedSearch] = useState(searchValue.trim());

  const { request, process } = useFetch();

  const getQuestions = async () => {
    const searchParam = debouncedSearch ? `&question:contains=${debouncedSearch}` : '';
    request(`${API_URL}/react?_sort=${sort}&_page=${activePage}&_per_page=${countCard}${searchParam}`).then((data) => setCardList(data));
  };

  const onClickSort = (e) => {
    setSort(e);
  };
  const onClickCount = (e) => {
    setCountCard(e);
  };

  const filteredList = useMemo(() => {
    // return !searchValue ? cardList.data : cardList.data.filter((item) => item.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
    //  [cardList, searchValue]
    return cardList.data || [];
  }, [cardList]);

  const pagination = useMemo(() => {
    return (
      cardList.pages > 1 &&
      filteredList &&
      filteredList.length > 0 && (
        <div className={cls.pagin}>
          {Array.from({ length: cardList.pages || 0 }, (_, i) => (
            <Button isActive={cardList.prev ? cardList.prev === i : i === 0} onClick={() => setActivePage(i + 1)} key={i}>
              {i + 1}
            </Button>
          ))}
        </div>
      )
    );
  }, [cardList, filteredList]);

  const components = {
    loading: <Loader />,
    confirmed: <QuestionCardList searchValue={debouncedSearch} cardList={filteredList} />,
    error: <p>Error</p>
  };

  const searchValueHandler = (e) => {
    setSearchValue(e);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchValue);
      setActivePage(1);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchValue]);
  useEffect(() => {
    getQuestions();
  }, [sort, activePage, countCard, debouncedSearch]);

  return (
    <>
      <div className={cls.nav}>
        <Search searchValue={searchValue} searchValueHandler={searchValueHandler} />
        <select
          value={sort}
          onChange={(e) => {
            onClickSort(e.target.value);
          }}
          className={cls.select}
        >
          <option>Сортировать по</option>
          <hr />
          <option value={'level'}>Сложность ↑</option>
          <option value={'-level'}>Сложность ↓</option>
          <option value={'completed'}>Выполнено ↑</option>
          <option value={'-completed'}>Выполнено ↓</option>
        </select>

        <select
          value={countCard}
          onChange={(e) => {
            onClickCount(e.target.value);
          }}
          className={cls.select}
        >
          <option>{countCard}</option>
          <hr />
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      {components[process]}
      {pagination}
    </>
  );
};

export default HomePage;
