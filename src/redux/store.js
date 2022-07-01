import { configureStore } from '@reduxjs/toolkit';
import { contactsApi, filterReducer } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});
