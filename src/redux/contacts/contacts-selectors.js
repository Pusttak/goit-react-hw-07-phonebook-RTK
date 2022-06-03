export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const normalizedFilter = getFilter(state).toLowerCase();
  return getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
