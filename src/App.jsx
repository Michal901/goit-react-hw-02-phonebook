import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};
