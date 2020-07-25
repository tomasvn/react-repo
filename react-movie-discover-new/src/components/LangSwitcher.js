import React from 'react';
import PropTypes from 'prop-types';

const LangSwitcher = ({ langOptions, onToggle }) => {
  return (
    <div>
      <button onToggle={onToggle}>{langOptions[0]}</button>
      <ul>
        {langOptions.slice(1).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

LangSwitcher.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default LangSwitcher;
