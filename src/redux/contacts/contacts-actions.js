import { nanoid } from 'nanoid';
import actionsTypes from './contacts-types';

export const addContact = (name, number) => ({
  type: actionsTypes.ADD,
  payload: {
    id: nanoid(10),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: actionsTypes.DELETE,
  payload: contactId,
});

export const filterContacts = value => ({
  type: actionsTypes.CHANGE_FILTER,
  payload: value,
});
