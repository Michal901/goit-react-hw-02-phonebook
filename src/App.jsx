import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
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
}

export default App;
