import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = { contacts: [], name: '', number: '' };

export default function ContactForm() {
  const [nameValue, setNameValue] = useState('');
  const [names, setNames] = useState(INITIAL_STATE.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValue.trim()) return; // Jeśli wartość inputu jest pusta, nie dodawaj kontaktu
    const newContact = { id: nanoid(), name: nameValue };
    setNames(prevNames => [...prevNames, newContact]); // Dodaj nowy kontakt do listy kontaktów
    setNameValue(''); // Wyczyść wartość inputu po dodaniu kontaktu
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
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          type="tel"
          name="number"
          id="number"
          // onChange={e => setNumberValue(e.target.value)}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
      <ul>
        {names.map(name => (
          <li key={name.id}>
            <p>
              <strong>{name.name}</strong>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
