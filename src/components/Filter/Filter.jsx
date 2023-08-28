import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onFilterInputChange }) => {
  return (
    <>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="filter"
        name="filter"
        type="text"
        onChange={onFilterInputChange}
      />
    </>
  );
};

Filter.propTypes = {
  onFilterInputChange: PropTypes.func,
};

export default Filter;
