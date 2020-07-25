import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onClick, text, customClass}) => {
  return (
    <button className={`btn btn-primary ${customClass}`} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  customClass: PropTypes.string
}

export default Button
