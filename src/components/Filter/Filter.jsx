import React, { Component } from 'react'
import css from './Filter.module.css'
import PropTypes from 'prop-types'

class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
        <label>
        <p className={css.inputName}>Find contacts by name</p>
        <input
          className={css.input}
          onChange={onChange}
          type="text"
          name="filter"
        />
        </label>
    )
  }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter