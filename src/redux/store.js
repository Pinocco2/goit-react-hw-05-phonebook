import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});