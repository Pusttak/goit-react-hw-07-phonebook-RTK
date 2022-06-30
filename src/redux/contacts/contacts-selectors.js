export const allContacts = state => state.contacts.items.entities;
export const getFilter = state => state.contacts.filter;
export const isLoading = state => state.contacts.items.isLoading;
export const error = state => state.contacts.items.error;

export const getVisibleContacts = state => {
  const normalizedFilter = getFilter(state).toLowerCase();
  return allContacts(state).filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};
