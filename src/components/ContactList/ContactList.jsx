import { useSelector } from 'react-redux';
import Contact from 'components/Contact';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors.js';
import { List } from './ContactList.styled.jsx';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <List>
      {contacts?.length ? (
        contacts.map(({ name, number, id }) => (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))
      ) : (
        <p>Phonebook is empty</p>
      )}
    </List>
  );
};

export default ContactList;
