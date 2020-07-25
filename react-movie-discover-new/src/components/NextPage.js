import React from 'react'
import PropTypes from 'prop-types'
import { RiArrowRightLine } from 'react-icons/ri';

const NextPage = ({onClick, name}) => {
  
  return(
    <button onClick={onClick} className="btn btn--icon">{name} <RiArrowRightLine className="u-ml-10" /></button>
  )
}

NextPage.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
}

export default NextPage