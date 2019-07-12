import React from 'react'
import PropTypes from 'prop-types'

const Error = ({msg}) => {
  return(
    <div className="error">{msg}</div>
  )
}

Error.propTypes = {
  msg: PropTypes.string,
}

export default Error