import React from 'react'
import PropTypes from 'prop-types'
import { RiArrowDownLine } from 'react-icons/ri';

const LoadMore = ({onClick, name}) => {
  return(
    <button
      className="btn btn-primary btn--center btn--icon u-mt-20 u-mb-20"
      onClick={onClick}>{name} <RiArrowDownLine className="u-ml-10" />
    </button>
  )
}

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
}

export default LoadMore
