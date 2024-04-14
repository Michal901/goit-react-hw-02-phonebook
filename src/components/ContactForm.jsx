import { useState } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

export default function ContactForm() {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValue.trim() || !numberValue.trim()) return;

    const newContact = { id: nanoid(), name: nameValue, number: numberValue };
    setContacts(prevContacts => [...prevContacts, newContact]);

    setNameValue('');
    setNumberValue('');
  };

  const handleFilterChange = e => {
    setFilterValue(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

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
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>

      <div>
        <label htmlFor="filter">Filter by Name:</label>
        <input
          type="text"
          id="filter"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Search..."
        />
      </div>

      <ul>
        {filteredContacts.map(contact => (
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
