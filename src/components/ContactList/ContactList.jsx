import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/Contact';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors.js';
import { getAllContacts } from 'redux/contacts/contacts-operations';
import { List } from './ContactList.styled.jsx';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts?.length ? (
        contacts.map(({ name, phone, id }) => (
          <li key={id}>
            <Contact name={name} phone={phone} id={id} />
          </li>
        ))
      ) : (
        <p>Phonebook is empty</p>
      )}
    </List>
  );
};

export default ContactList;
