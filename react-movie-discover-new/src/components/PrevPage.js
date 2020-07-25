import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowLeftLine } from 'react-icons/ri';

const PrevPage = ({ onClick, name, prevPage }) => {
  return (
    <button onClick={onClick} className="btn btn--icon" disabled={prevPage === 1 ? true : false}>
      <RiArrowLeftLine className="u-mr-10" />
      {name}
    </button>
  );
};

PrevPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
  prevPage: PropTypes.number.isRequired,
};

export default PrevPage;
