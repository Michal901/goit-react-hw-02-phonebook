const Contact = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            <strong>{contact.name}: </strong>
            {contact.number}
          </p>
          <button onClick={() => onDeleteContact(contact.id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
