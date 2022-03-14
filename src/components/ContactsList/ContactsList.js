import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts-actions';
import propTypes from 'prop-types';
import style from './ContactList.module.css';

export default function ContactsList() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const onDeleteBtn = id => dispatch(deleteContacts(id));

  const filteredContacts = (contacts, filter) => {
    return Array.from(contacts).filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = filteredContacts(contacts, filter);
  console.log('filterContacts', filterContacts.length);
  return (
    <>
      <ul className={style.list}>
        {filterContacts.length > 0 ? (
          filterContacts.map(({ id, name, number }) => (
            <li className={style.item} key={id}>
              <p className={style.name}>
                {name}: <span className={style.number}>{number}</span>
              </p>
              <button
                className={style.button}
                type="button"
                onClick={e => onDeleteBtn(id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className={style.notification}>No matches found.</p>
        )}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    })
  ),
};
