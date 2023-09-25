const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>
              {name} : {number}
              <button onClick={() => deleteContact(id)}>Delete</button>
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export { ContactList };
