import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({onClick, children}) => {
  return (
    <button className="btn btn-toggle" onClick={onClick}>{children}</button>
  )
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Toggle
