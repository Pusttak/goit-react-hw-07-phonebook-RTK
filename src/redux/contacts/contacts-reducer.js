import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const itemsInitialState = [];

const itemsReducer = createReducer(itemsInitialState, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

const contacts = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contacts;
