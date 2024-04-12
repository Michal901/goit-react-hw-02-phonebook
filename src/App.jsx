import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};
