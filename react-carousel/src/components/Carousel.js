import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { glob } from '../styles/globals'
import PrevBtn from './Prev'
import NextBtn from './Next'
import CarouselItem from './Item'
import CarouselDots from './Dots'

const Carousel = ({slides, className}) => {
  
  let [sliderIndex, setIndex] = useState(0)

  const handleSlides = index => setIndex(index)

  const handlePrevSlide = e => {
    e.preventDefault()
    
    if (sliderIndex < 1) sliderIndex = slides.length

    sliderIndex--

    setIndex(sliderIndex)

    // console.log('Prev Index', sliderIndex)
  }

  const handleNextSlide = e => {
    e.preventDefault()

    if (sliderIndex === slides.length - 1) sliderIndex = -1

    sliderIndex++

    setIndex(sliderIndex)

    // console.log('Next Index', sliderIndex)
  }

  return(
    <>
    <CarouselWrap>
      <PrevBtn onPrev={handlePrevSlide} />
        {slides.map((item, index) => <CarouselItem index={index} isActiveIndex={sliderIndex} key={index} quote={item.quote} author={item.author} />)}
      <NextBtn onNext={handleNextSlide} />
    </CarouselWrap>
    <DotsWrap>
      {slides.map((item, index) => <CarouselDots default index={index} isActiveIndex={sliderIndex} handleSlides={() => handleSlides(index)} key={index} />)}
    </DotsWrap>
    </>
  )
}

const CarouselWrap = styled.div`
  ${glob.WRAP}
`

const DotsWrap = styled.div`
  ${glob.DOTS_WRAP}
`

Carousel.propTypes = {
  slides: PropTypes.array,
  className: PropTypes.string,
}

export default Carousel