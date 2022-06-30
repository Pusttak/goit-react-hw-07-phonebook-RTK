import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contacts-api';

export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.fetchContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await API.addContact(newContact);
      return contact;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editContactById = createAsyncThunk(
  'contacts/editContactById',
  async (fields, { rejectWithValue }) => {
    try {
      const contact = await API.editContact(fields);
      return contact;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  'contacts/deleteContactById',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await API.deleteContact(id);
      return contact;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
