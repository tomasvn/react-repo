import React from 'react'
import PropTypes from 'prop-types'
import { RiSettings4Line } from 'react-icons/ri'

const Toggle = ({onClick}) => {
  return (
    <button class="btn btn-toggle" onClick={onClick}><RiSettings4Line /></button>
  )
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Toggle
