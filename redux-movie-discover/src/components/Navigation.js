import React from 'react'
import PropTypes from 'prop-types'

const Navigation = ({prev, next, prevClick, nextClick}) => {
  return(
    <div>
      <button onClick={prevClick}>{prev}</button>
      <button onClick={nextClick}>{next}</button>
    </div>
  )
}

Navigation.propTypes = {
  prevClick: PropTypes.func.isRequired,
  nextClick: PropTypes.func.isRequired,
  prev: PropTypes.any,
  next: PropTypes.any,
}

export default Navigation