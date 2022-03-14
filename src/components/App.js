import { ReactComponent as AddUserBtn } from '../icons/addUser.svg';
import { ReactComponent as CloseBtn } from '../icons/close.svg';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import ContactForm from './ContactForm/index';
import Filter from './Filter';
import ContactsList from './ContactsList';
import Container from './Container';
import Modal from './Modal';
import Section from './Section';
import IconButton from './IconButton';

function App({ contacts }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  console.log('contacts', contacts);
  return (
    <Container>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm toggleModal={toggleModal} />
          <IconButton onClick={toggleModal}>
            <CloseBtn className="closeModal" />
          </IconButton>
        </Modal>
      )}

      <Section title="Phonebook">
        <IconButton onClick={toggleModal}>
          <AddUserBtn className="openModal" />
        </IconButton>
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 ? (
          <ContactsList />
        ) : (
          <p className="notification">
            Your phonebook is empty. Please add contact.
          </p>
        )}
      </Section>
    </Container>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
