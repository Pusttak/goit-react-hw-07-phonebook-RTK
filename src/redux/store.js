import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
