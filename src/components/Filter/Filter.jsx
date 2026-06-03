import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/contactsSlice'; 
import css from './Filter.module.css'; 

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={css.filterWrapper}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={e => dispatch(setStatusFilter(e.target.value))}
        />
      </label>
    </div>
  );
};