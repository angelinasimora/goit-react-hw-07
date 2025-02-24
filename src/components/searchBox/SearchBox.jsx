import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice"; 
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const filterId = useId();


   return (
    <div className={css.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        value={filter}
        name="filter"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id={filterId}
        className={css.search}
      />
    </div>
  );
}