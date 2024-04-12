import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState({
    contacts: [],
    filter: '',
  });

  const addContact = newContact => {
    setContacts(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts.contacts} />
    </div>
  );
};
