import React from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'

const INITIAL_NUM = 0

const MovieList = ({data, isVisible}) => {
  return(
    <div>
      {
        data.slice(INITIAL_NUM, isVisible).map((item, index) =>
          <MovieItem
            key={index}
            title={item.title}
            description={item.overview}
            rating={item.vote_average}
            lang={item.original_language}
            poster={item.poster_path}
          />
        )
      }
    </div>
  )
}

MovieList.propTypes = {
  data: PropTypes.array,
  isVisible: PropTypes.number,
}

export default MovieList
