import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { glob } from '../styles/globals'

const Item = ({quote, author, className, index, isActiveIndex}) => {

  return(
    <div className={(index === isActiveIndex) ? `${className} is-active` : className}>
      <p className="carousel-item__quote">{quote}</p>
      <p className="carousel-item__author">{author}</p>
    </div>
  )
}

const CarouselItem = styled(Item)`
  ${glob.ITEM}
  
  @media screen and (min-width: 768px) {
    ${glob.ITEM.SPACING}
  }
  
  &.is-active {
    ${glob.ITEM.IS_ACTIVE}
  }
`

Item.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  index: PropTypes.number,
  isActiveIndex: PropTypes.number,
  className: PropTypes.string,
}

export default CarouselItem