import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = { contacts: [], name: '' };

export default function ContactForm() {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Jeśli wartość inputu jest pusta, nie dodawaj kontaktu
    const newContact = { id: nanoid(), name: inputValue };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setInputValue(''); // Wyczyść wartość inputu po dodaniu kontaktu
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              <strong>{contact.name}</strong>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
