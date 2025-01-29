import css from "./SearchBox.module.css";
const SearchBox = () => {
  return (
    <div className={css.search_container}>
      <label>
        Find contacts by name
        <input type="text" />
      </label>
    </div>
  );
};

export default SearchBox;
