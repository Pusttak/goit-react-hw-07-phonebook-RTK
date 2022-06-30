import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addNewContact } from 'redux/contacts/contacts-operations';
import { allContacts } from 'redux/contacts/contacts-selectors.js';
import { Form, Label, Input, Button } from './ContactForm.styled.jsx';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(allContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    checkContactName(name)
      ? Notify.failure(`${name} is already in contacts`)
      : dispatch(addNewContact({ name, phone })) && reset();
  };

  const checkContactName = name => {
    const normalizedName = name.toLowerCase();
    return contacts.find(contact => contact.name.toLowerCase() === normalizedName);
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          autoComplete="off"
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={phone}
          autoComplete="off"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
