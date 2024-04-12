import { useState } from 'react';

export function App() {
  const [review, setReview] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    setReview({ author, text });
  };

  return (
    <>
      <h2>Dodaj Recenzje</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Autor</label>
          </div>
          <input
            type="text"
            value={inputValue}
            name="name"
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => {
              setInputValue(e.target.value);
            }}
            id="name"
          />
        </div>
        <div>
          <div>
            <label htmlFor="tel">Tekst</label>
          </div>

          <input
            type="tel"
            name="name"
            id="tel"
            value={textareaValue}
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => {
              setTextareaValue(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          disabled={inputValue === '' || textareaValue === ''}
        >
          Dodaj
        </button>
      </form>
      {review && (
        <ul>
          <h1>Książka tele:</h1>
          <li>
            <p>
              <strong>{review.author}</strong>
            </p>
            <p>{review.text}</p>
          </li>
        </ul>
      )}
    </>
  );
}
