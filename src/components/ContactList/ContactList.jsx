import { connect } from 'react-redux';
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

const visibleContacts = (allContacts, filterValue) => {
  const normalizedFilter = filterValue.toLowerCase();
  return allContacts?.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: visibleContacts(contacts, filter),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
