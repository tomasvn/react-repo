import React from 'react'
import PropTypes from 'prop-types'

const UpdateButton = ({onClick}) => <button className="btn" onClick={onClick}>Update Value</button>

UpdateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default UpdateButton