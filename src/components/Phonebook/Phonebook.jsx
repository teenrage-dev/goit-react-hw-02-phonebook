import React, { Component } from 'react';
import './Phonebook.css';
import { nanoid } from 'nanoid';
export class Phonebook extends Component {
  state = {
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

  handleChange = event => {
    console.dir(event.target);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, number: this.state.number, id: nanoid() },
      ],
      name: '',
      number: '',
    });
  };

  handleChangeFilterByName = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        console.log(event.target.name);
        const { contacts, filter } = this.state;
        const newStateContacts = [...contacts];
        const filteredContacts = contacts.filter(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        });
        this.setState(prevState => {
          console.log(newStateContacts);
          return {
            contacts: !contacts.length
              ? [...newStateContacts]
              : [...filteredContacts],
          };
        });
      }
    );
  };

  render() {
    return (
      <div className="phonebook_box">
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit} className="phonebook__form">
          <label htmlFor="name" className="phonebook_name">
            Name
          </label>
          <input
            className="phonebook__input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number" className="phonebook_name">
            Number
          </label>
          <input
            className="phonebook__input"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className="phonebook_btn">
            Add contact
          </button>
        </form>
        <div className="phonebook__contacts">
          <h2>Contacts</h2>
          <label
            htmlFor="filter"
            className="phonebook_name phonebook_name__filter"
          >
            Find contacts by name
          </label>
          <input
            className="phonebook__input"
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChangeFilterByName}
          />
          <ul className="phonebook__list">
            {this.state.contacts.map(contact => (
              <li key={nanoid()} className="phonebook__item">
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// handleSubmit = event => {
//   event.preventDefault();
//   this.setState({
//     contacts: [
//       ...this.state.contacts,
//       { name: this.state.name, number: '123-456-789' },
//     ],
//   });
// };

// --------------------     event.target.name -> подивитись до 1 дз
