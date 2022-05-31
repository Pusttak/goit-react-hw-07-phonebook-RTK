import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, Title, Subtitle } from './App.styled.jsx';

const App = ({ contacts, filter }) => {
  const firstLoading = useRef(true);

  useEffect(() => {
    if (firstLoading.current) {
      firstLoading.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: 40,
        marginTop: '10px',
        color: '#010101',
      }}
    >
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />

        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList contacts={visibleContacts()} />
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateToProps)(App);
