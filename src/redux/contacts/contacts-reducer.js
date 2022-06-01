import actionsTypes from './contacts-types';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const savedContacts = {
//   contacts:
//     JSON.parse(localStorage.getItem('contacts')) || contactsInitialState,
//   filter: '',
// };

export const contactsReducer = (
  state = contactsInitialState,
  { type, payload }
) => {
  switch (type) {
    case actionsTypes.ADD:
      return [...state, payload];

    case actionsTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionsTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
