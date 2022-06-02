import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(10),
    name,
    number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('filter/valueChange');
