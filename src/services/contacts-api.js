import axios from 'axios';

axios.defaults.baseURL = 'https://62bb3370573ca8f832950685.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function editContact(fields) {
  const { data } = await axios.put(`/contacts/${fields.id}`, fields);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
