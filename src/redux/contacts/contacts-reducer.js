// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as actions from './contacts-actions';
// import {
//   getAllContacts,
//   addNewContact,
//   deleteContactById,
//   editContactById,
// } from 'redux/contacts/contacts-operations';

// const contactsReducer = createReducer([], {
//   [getAllContacts.fulfilled]: (_, { payload }) => payload,
//   [addNewContact.fulfilled]: (state, { payload }) => [payload, ...state],
//   [deleteContactById.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload.id),
//   [editContactById.fulfilled]: (state, { payload }) =>
//     state.map(contact => {
//       return contact.id === payload.id ? payload : contact;
//     }),
// });

// const isLoading = createReducer(false, {
//   [getAllContacts.pending]: () => true,
//   [getAllContacts.fulfilled]: () => false,
//   [getAllContacts.rejected]: () => false,
//   [addNewContact.pending]: () => true,
//   [addNewContact.fulfilled]: () => false,
//   [addNewContact.rejected]: () => false,
//   [deleteContactById.pending]: () => true,
//   [deleteContactById.fulfilled]: () => false,
//   [deleteContactById.rejected]: () => false,
//   [editContactById.pending]: () => true,
//   [editContactById.fulfilled]: () => false,
//   [editContactById.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [getAllContacts.pending]: () => null,
//   [getAllContacts.rejected]: (_, { payload }) => payload,
//   [addNewContact.pending]: () => null,
//   [addNewContact.rejected]: (_, { payload }) => payload,
//   [deleteContactById.pending]: () => null,
//   [deleteContactById.rejected]: (_, { payload }) => payload,
//   [editContactById.pending]: () => null,
//   [editContactById.rejected]: (_, { payload }) => payload,
// });

// const filterReducer = createReducer('', {
//   [actions.filterContacts]: (_, { payload }) => payload,
// });

// const items = combineReducers({
//   entities: contactsReducer,
//   isLoading,
//   error,
// });

// const contacts = combineReducers({
//   items,
//   filter: filterReducer,
// });

// export default contacts;
