import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchQuery, onChange, customClass }) => {
  return (
    <input className={`${customClass}`} type="search" onChange={onChange} value={searchQuery} />
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Search;
