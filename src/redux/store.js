import { createStore } from 'redux';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const savedContacts = {
  ...initialState,
  contacts:
    JSON.parse(localStorage.getItem('contacts')) || initialState.contacts,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };

    case 'contacts/delete':
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== payload),
      };

    case 'filter/valueChange':
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, savedContacts);

export default store;
