import React, { useEffect, useState, useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, Title, Subtitle } from './App.styled.jsx';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const firstLoading = useRef(true);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    if (firstLoading.current) {
      firstLoading.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    checkContactName(name)
      ? Notify.failure(`${name} is already in contacts`)
      : setContacts(prevContacts => {
          return [
            ...prevContacts,
            {
              id: nanoid(10),
              name,
              number,
            },
          ];
        });
  };

  const checkContactName = name => {
    const normalizedName = name.toLowerCase();

    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const handleChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactDelete = contactId => {
    const savedContacts = contacts.filter(contact => contact.id !== contactId);
    return setContacts(savedContacts);
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
        <ContactForm onSubmit={addContact} />

        <Subtitle>Contacts</Subtitle>
        <Filter onChange={handleChangeFilter} filterValue={filter} />
        <ContactList
          contacts={visibleContacts()}
          onDeleteContact={contactDelete}
        />
      </Container>
    </div>
  );
};
