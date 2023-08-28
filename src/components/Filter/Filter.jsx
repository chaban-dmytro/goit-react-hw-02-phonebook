import React from 'react';

const Filter = ({ onFilterInputChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        name="filter"
        type="text"
        onChange={onFilterInputChange}
      />
    </>
  );
};

export default Filter;
