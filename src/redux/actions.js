import { nanoid } from 'nanoid';

export const addContact = (name, number) => ({
  type: 'contacts/add',
  payload: {
    id: nanoid(10),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: 'contacts/delete',
  payload: contactId,
});

export const filterContacts = value => ({
  type: 'filter/valueChange',
  payload: value,
});
