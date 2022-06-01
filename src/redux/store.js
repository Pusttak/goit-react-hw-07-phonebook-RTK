import { createStore, combineReducers } from 'redux';
import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const savedContacts = {
  contacts:
    JSON.parse(localStorage.getItem('contacts')) || contactsInitialState,
  filter: '',
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, savedContacts);

export default store;
