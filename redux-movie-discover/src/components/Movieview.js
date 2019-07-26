import React from 'react'
import PropTypes from 'prop-types'

const MovieView = ({children}) => {
  return(
    <div className="movie-view">{children}</div>
  )
}

MovieView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MovieView