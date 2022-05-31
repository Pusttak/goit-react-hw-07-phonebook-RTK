import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { List } from './ContactList.styled.jsx';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.length ? (
      contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))
    ) : (
      <p>Phonebook is empty</p>
    )}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
