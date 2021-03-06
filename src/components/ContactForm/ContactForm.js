import { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import Notiflix from 'notiflix';
import style from './ContactForm.module.css';
import { addContacts } from '../../redux/contacts-actions';

export default function ContactsForm({ toggleModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddContacts = (name, number) => dispatch(addContacts(name, number));

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      Notiflix.Notify.failure(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      Notiflix.Notify.failure("Enter the contact's name and number phone!");
    } else {
      onAddContacts(name, number);
    }

    setName('');
    setNumber('');
    toggleModal();
  };

  return (
    <>
      <form className={style.form} onSubmit={event => handleSubmit(event)}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            onChange={event => setName(event.target.value)}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Sofia Protsiv"
            required
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            onChange={event => setNumber(event.target.value)}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="111-11-11"
            required
          />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
