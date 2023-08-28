import React, { Component } from 'react';
import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };

  onAddNewContact = values => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, values],
    }));
  };

  onFilterInputChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    return (
      <>
        <AddContact onAddNewContact={this.onAddNewContact}></AddContact>
        <Filter onFilterInputChange={this.onFilterInputChange}></Filter>
        <ContactList array={this.getFilterContacts()}></ContactList>
      </>
    );
  }
}

export default App;
