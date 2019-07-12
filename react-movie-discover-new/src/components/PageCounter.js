import React from 'react'
import PropTypes from 'prop-types'

const PageCounter = ({currentPage, pageCount}) => {
  return(
    <div>{`${currentPage} / ${pageCount}`}</div>
  )
}

PageCounter.propTypes = {
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
}

export default PageCounter