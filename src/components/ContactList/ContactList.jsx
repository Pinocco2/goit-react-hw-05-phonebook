import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button 
            type="button" 
            onClick={() => dispatch(deleteContact(id))}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};