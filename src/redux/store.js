import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({}),
  devTools: process.env.NODE_ENV === 'development',
});
