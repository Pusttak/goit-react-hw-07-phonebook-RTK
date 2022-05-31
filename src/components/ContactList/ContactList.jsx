import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { List } from './ContactList.styled.jsx';

const ContactList = ({ contacts }) => (
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

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
