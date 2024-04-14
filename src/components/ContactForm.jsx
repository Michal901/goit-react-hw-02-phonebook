import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = { contacts: [], name: '', number: '' };

export default function ContactForm() {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValue.trim() || !numberValue.trim()) return;

    const newContact = { id: nanoid(), name: nameValue, number: numberValue };
    setContacts(prevContacts => [...prevContacts, newContact]);

    setNameValue('');
    setNumberValue('');
    console.log(contacts);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            id="number"
            value={numberValue}
            onChange={e => setNumberValue(e.target.value)}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              <strong>{contact.name}: </strong>
              {contact.number}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
