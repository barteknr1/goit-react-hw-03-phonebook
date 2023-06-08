import React, { Component } from 'react'
import css from './ContactList.module.css'
import PropTypes from 'prop-types'

class ContactListElement extends Component {

  render() {
    const { name, number, id, onClick } = this.props;

    return (
      <div className={css.contactElement}>{name}: {number}
        <button className={css.delete} onClick={() => onClick(id)} id={id} type='button'>Delete</button>
      </div>
    )
  }
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListElement