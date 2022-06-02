import React from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, Title, Subtitle } from './App.styled.jsx';

const App = () => {
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
        <ContactList />
      </Container>
    </div>
  );
};

export default App;
