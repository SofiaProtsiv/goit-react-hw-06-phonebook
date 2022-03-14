import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts-actions';
import style from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = event =>
    dispatch(changeFilter(event.target.value));
  return (
    <>
      <label className={style.label}>
        Find contacts by name 🔎
        <input
          className={style.input}
          type="text"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </>
  );
}
