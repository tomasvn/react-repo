import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import { FiStar } from 'react-icons/fi';

const URL = 'https://image.tmdb.org/t/p/w342'
const ASSETS = '/assets/flags/'

const MovieListItem = ({poster, title, description, rating, date, lang}) => {
  return(
    <div className="u-flex">
      <LazyLoad height={200}>
        <img className="movie-list-item__poster" src={`${URL}${poster}`} alt="Poster" />
      </LazyLoad>
      <div>
        <h3 className="movie-list-item__title">{title}</h3>
        <p className="movie-list-item__description">{description}</p>
        <div className="movie-details">
          <strong className="movie-label">{rating} <FiStar className="movie-details__rating" /></strong>
          <strong className="movie-label movie-details__release-date">{date}</strong>
          <img className="movie-label movie-details__lang" src={`${ASSETS}${lang}.svg`} alt={lang}/>
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
