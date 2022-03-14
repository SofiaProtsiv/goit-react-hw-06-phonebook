import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const deleteContacts = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');
export const addContacts = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid(),
    name,
    number,
  },
}));
