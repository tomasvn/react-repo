import React from 'react';
import PropTypes from 'prop-types';

const Select = ({onChange, text}) => {
  return (
    <select className="select" onChange={onChange}>
      <option>{text}</option>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  )
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Select
