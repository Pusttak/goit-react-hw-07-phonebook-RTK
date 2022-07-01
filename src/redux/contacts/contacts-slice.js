import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});

export const contactsApi = createApi({
  reducerPath: 'contacts',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62bb3370573ca8f832950685.mockapi.io' }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsApi;
export const { filterContacts } = filterReducer.actions;
