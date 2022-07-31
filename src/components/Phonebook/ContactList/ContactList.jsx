import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../Phonebook.css';

export class ContactList extends Component {
  render() {
    const { renderList, onDeleteContact } = this.props;
    return (
      <>
        <ul className="phonebook__list">
          {renderList.map(contact => (
            <li key={nanoid()} className="phonebook__item">
              <span className="phonebook__item-text">
                {contact.name}: {contact.number}
              </span>
              <button
                className="phonebook_btn"
                onClick={() => onDeleteContact(contact)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
