import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContactById, editContactById } from 'redux/contacts/contacts-operations';
import { ContactWrap, Name, Number, Button, Form, Input } from './Contact.styled.jsx';

const Contact = ({ name, phone, id }) => {
  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setNewName(value);
        break;
      case 'phone':
        setNewPhone(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    dispatch(editContactById({ id, name: newName, phone: newPhone }));
    setIsEdit(false);
  };

  return (
    <ContactWrap>
      {isEdit ? (
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={newName}
            autoComplete="off"
          />
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={newPhone}
            autoComplete="off"
          />
          <Button isEdit={isEdit} type="submit">
            Save
          </Button>
        </Form>
      ) : (
        <>
          <Name>{name}</Name>
          <Number>{phone}</Number>
          <Button type="button" onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </>
      )}
      <Button type="button" onClick={() => dispatch(deleteContactById(id))}>
        x
      </Button>
    </ContactWrap>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
