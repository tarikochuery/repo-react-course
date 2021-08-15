import React from 'react';
import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => (
  <input
    placeholder="Type your search"
    className="text-input"
    value={searchValue}
    type="search"
    onChange={handleChange}
  />
);

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
