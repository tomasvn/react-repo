import React from 'react';
import PropTypes from 'prop-types';
import { RiMovie2Line } from 'react-icons/ri';

const Heading = ({ text }) => {
  return (
    <h1 className="main-heading u-text-center">
      {text} <RiMovie2Line className="main-heading__icon" />
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
