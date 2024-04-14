// ContactForm.js
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValue.trim() || !numberValue.trim()) return;

    const newContact = { id: nanoid(), name: nameValue, number: numberValue };
    addContact(newContact);

    setNameValue('');
    setNumberValue('');
  };

  return (
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
  );
};

export default ContactForm;
