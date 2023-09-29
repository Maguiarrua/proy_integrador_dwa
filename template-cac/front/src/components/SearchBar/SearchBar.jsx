import style from "./SearchBar.module.css";


const SearchBar = (props) => {
const {onSearch} = props


  return (
    <div className={style.SearchBar}>
      <div className={style.wrapperInput}>
      <input placeholder="id" className={style.inputNav} type='search' />
      <button className={style.btnNav} onClick={onSearch}>Agregar</button>
      </div>
    </div>
  );
};

export default SearchBar;
