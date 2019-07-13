import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

const MovieListItem = ({poster, title, description, rating, date, lang}) => {
  return(
    <div className="movie-list-item">
      <LazyLoad height={200}>
        <img className="movie-list-item__poster" src={`https://image.tmdb.org/t/p/w342${poster}`} alt="Poster" />
      </LazyLoad>
      <div>
        <h3 className="movie-list-item__title">{title}</h3>
        <p className="movie-list-item__description">{description}</p>
        <div className="movie-details">
          <strong className="movie-label movie-details__rating">{rating}</strong>
          <strong className="movie-label movie-details__release-date">{date}</strong>
          <img className="movie-label movie-details__lang" src={`/assets/flags/${lang}.svg`} alt={lang}/>
        </div>
      </div>
    </div>
  )
}

MovieListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
  lang: PropTypes.string,
}

export default MovieListItem
