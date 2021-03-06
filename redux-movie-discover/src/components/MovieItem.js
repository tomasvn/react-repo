import React from 'react'
import PropTypes from 'prop-types'

const MovieItem = ({title, description, rating, lang, poster}) => {
  return(
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w342${poster}`} alt="" />
      <div>
        <strong>{rating}</strong>
        <strong>{lang}</strong>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  lang: PropTypes.string,
}

export default MovieItem