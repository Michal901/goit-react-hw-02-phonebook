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
            <label htmlFor="author">Autor</label>
          </div>
          <input
            type="text"
            name="author"
            id="author"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textareaValue}
            onChange={e => {
              setTextareaValue(e.target.value);
            }}
          ></textarea>
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
