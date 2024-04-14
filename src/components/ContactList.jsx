const Contact = ({ contact }) => {
  return (
    <li>
      <p>
        <strong>{contact.name}: </strong>
        {contact.number}
      </p>
    </li>
  );
};

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
