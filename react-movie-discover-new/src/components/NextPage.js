import React from 'react'
import PropTypes from 'prop-types'

const NextPage = ({onClick, name}) => {
  
  return(
    <button onClick={onClick} className="btn btn--next">{name}</button>
  )
}

NextPage.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
}

export default NextPage