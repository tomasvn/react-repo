import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { FiStar, FiHeart } from 'react-icons/fi';

const URL = 'https://image.tmdb.org/t/p/w342';
const ASSETS = '/assets/flags/';

class MovieListItem extends Component {

  render() {
    const { poster, title, description, rating, date, lang, onClick } = this.props

    return(
      <div className="u-flex u-mb-20">
        <LazyLoad height={200}>
          <img className="movie-list-item__poster" src={`${URL}${poster}`} alt="Poster" />
        </LazyLoad>
        <div className="movie-list__detail">
          <h3 className="movie-list-item__title">{title}</h3>
          <p className="movie-list-item__description">{description}</p>
          <div className="movie-details">
            <strong className="movie-label">
              {rating} <FiStar className="movie-details__rating" />
            </strong>
            <strong className="movie-label movie-details__release-date">{date}</strong>
            <img
              className="movie-label movie-details__lang"
              src={`${ASSETS}${lang}.svg`}
              alt={lang}
            />
            <button onClick={() => onClick(this.props)} className="btn btn-favorite">
              <FiHeart className="movie-favourite" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

MovieListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.string,
  lang: PropTypes.string,
  onClick: PropTypes.func
};

export default MovieListItem;
