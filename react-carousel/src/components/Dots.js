import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { glob } from '../styles/globals'

const Dots = ({index, isActiveIndex, className, handleSlides}) => {
  
  return(
    <button
      className={(index === isActiveIndex) ? `${className} is-active` : className}
      onClick={handleSlides}
    >
    </button>
  )
}

Dots.propTypes = {
  index: PropTypes.number,
  isActiveIndex: PropTypes.number,
  className: PropTypes.string,
  handleSlides: PropTypes.func.isRequired,
}

const CarouselDots = styled(Dots)`
  ${glob.DOTS}
  ${props => props.default ? glob.DOTS.IS_DEFAULT : ''}

  &.is-active {
    ${glob.DOTS.IS_ACTIVE}
  }
`

export default CarouselDots
