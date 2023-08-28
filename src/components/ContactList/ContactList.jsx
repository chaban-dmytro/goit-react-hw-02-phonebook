import React from 'react';

const ContactList = ({ array }) => {
  if (array.length === 0) {
    return;
  } else {
    return (
      <ul>
        {array.map(contact => {
          return (
            <li key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.phone}</span>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default ContactList;
