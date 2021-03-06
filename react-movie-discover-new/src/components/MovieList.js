import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem';
import Error from './Error';

const INITIAL_NUM = 0;

class MovieList extends Component {
  render() {
    const { isVisible, data, error, msg, handleFavorite } = this.props

    if (error) {
      return <Error msg={msg} />;
    } else {
      return (
        <div className="movie-list">
          {data.slice(INITIAL_NUM, isVisible).map((item, index) => (
            <MovieListItem
              key={index}
              poster={item.poster_path}
              title={item.title}
              description={item.overview}
              rating={item.vote_average}
              date={item.release_date}
              lang={item.original_language}
              onClick={handleFavorite}
            />
          ))}
        </div>
      );
    }
  }
}

MovieList.propTypes = {
  isVisible: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  error: PropTypes.bool,
};

export default MovieList;
