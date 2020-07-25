import React from 'react';
import PropTypes from 'prop-types';

const Select = ({onChange, text, customClass}) => {
  return (
    <select className={`select ${customClass}`} onChange={onChange}>
      <option>{text}</option>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  )
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string
}

export default Select
