import React, { Component } from 'react';
import ContactListElement from './ContactListElement';
import PropTypes from 'prop-types'

class ContactList extends Component {

  render() {
    const { contacts, onClick } = this.props;
    return (
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}>
            <ContactListElement onClick={onClick}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        )}
      </ul>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func.isRequired,
}

export default ContactList