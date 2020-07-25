import React from 'react'
import PropTypes from 'prop-types'
import { RiArrowRightLine } from 'react-icons/ri';

const NextPage = ({onClick, name, currentPage, pageCount}) => {
  
  return(
    <button onClick={onClick} className="btn btn--icon" disabled={currentPage === pageCount ? true : false}>{name} <RiArrowRightLine className="u-ml-10" /></button>
  )
}

NextPage.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number
}

export default NextPage