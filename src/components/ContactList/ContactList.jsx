import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice.js';
import { List } from './ContactList.styled.jsx';
import { getFilter } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const { data } = useGetContactsQuery();

  const visibleContacts = useMemo(() => {
    const normalizedFilter = filterValue.toLowerCase();
    return data?.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  }, [filterValue, data]);

  return (
    <List>
      {visibleContacts?.length ? (
        visibleContacts.map(({ name, phone, id }) => (
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
