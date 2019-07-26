import React from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'

const MovieList = ({data, isVisible}) => {
  return(
    <div>
      {
        data.slice(0, isVisible).map((item, index) =>
          <MovieItem
            key={index}
            title={item.title}
            description={item.overview}
            rating={item.vote_average}
            lang={item.lang}
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