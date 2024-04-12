import { useState } from 'react';

export function App() {
  const [contactBook, setContactBook] = useState({
    contacts: [],
    name: '',
  });

  const { contacts, name } = contactBook;

  const handleSubmit = e => {
    e.preventDefault();

    setContactBook({ contacts, name });
  };

  return (
    <>
      <h2>Add phone number</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            value={name}
            name="name"
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="qweqwe"
            required
            onChange={e => {
              setContactBook(e.target.value);
            }}
            id="name"
          />
        </div>
        <div>
          <div>
            <label htmlFor="tel">Phone number</label>
          </div>

          <input
            type="tel"
            name="name"
            id="tel"
            value={contacts}
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="qwe"
            required
            onChange={e => {
              setContactBook(e.target.value);
            }}
          />
        </div>
        <button type="submit" disabled={name === '' || contacts === ''}>
          Dodaj
        </button>
      </form>
      {name && (
        <ul>
          <h1>Książka tele:</h1>
          <li>
            <p>
              <strong>
                {name}: {contacts}
              </strong>
            </p>
          </li>
        </ul>
      )}
    </>
  );
}
