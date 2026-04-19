import cls from './Search.module.scss';
import { ClearIcons, SearchIcons } from '../Icons.jsx';

const Search = ({ searchValue, searchValueHandler }) => {
  return (
    <label className={cls.label}>
      <div className={cls.svg}>
        <SearchIcons />
      </div>
      <input type="text" className={cls.input} placeholder="Поиск" value={searchValue} onChange={(e) => searchValueHandler(e.target.value)} />
      {searchValue && (
        <button onClick={() => searchValueHandler('')} className={cls.clear}>
          <ClearIcons />
        </button>
      )}
    </label>
  );
};

export default Search;
