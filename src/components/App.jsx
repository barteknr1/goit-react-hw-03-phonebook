import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(savedContacts);
    this.setState({contacts: parsedContacts});
  };
  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  handleSubmit = (name, number) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    }
    else {
      this.setState({
        contacts: [...contacts, {
          id: nanoid(),
          name,
          number
        }]
      })
      
    }
  };

  handleFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  handleDelete = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} />
        {this.state.contacts.length && (
          <div>
            <h3>Found {this.filteredContacts().length} of {this.state.contacts.length} contacts</h3>
            <progress value={this.filteredContacts().length} max={this.state.contacts.length} />
          </div>
        )}
        <ContactList contacts={this.filteredContacts()} onClick={this.handleDelete} />
      </>
    )
  }
};

export default App