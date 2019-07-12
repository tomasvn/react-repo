import React from 'react'
import PropTypes from 'prop-types'

const PrevPage = ({onClick, name, prevPage}) => {
  
  return(
    <button onClick={onClick} className="btn btn--prev" disabled={prevPage === 1 ? true : false}>{name}</button>
  )
}

PrevPage.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  prevPage: PropTypes.number.isRequired,
}

export default PrevPage