import React from 'react'
import PropTypes from 'prop-types'

const LoadMore = ({onClick, name}) => {
  return(
    <button className="btn btn--center" onClick={onClick}>{name}</button>
  )
}

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
}

export default LoadMore
