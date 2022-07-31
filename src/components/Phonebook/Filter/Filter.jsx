import React, { Component } from 'react';
import '../Phonebook.css';

export class Filter extends Component {
  render() {
    const { filter, handleChangeFilterByName } = this.props;
    return (
      <>
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
          value={filter}
          onChange={handleChangeFilterByName}
        />
      </>
    );
  }
}
