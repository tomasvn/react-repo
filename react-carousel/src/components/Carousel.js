import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { glob } from '../styles/globals'
import { KEY_MAP } from '../helpers'
import PrevBtn from './Prev'
import NextBtn from './Next'
import CarouselItem from './Item'
import CarouselDots from './Dots'

const Carousel = ({slides, className, keyboard}) => {

  let [sliderIndex, setIndex] = useState(0)

  /**
  * If we dont use the useEffect Hook and presss arrow key it will fire twice,
  * call it in useEffect hook to fire it only once
  * */
  useEffect(() => {
    if (keyboard) document.addEventListener('keydown', e => handleKeyboard(e))
  }, [])
  
  const handleKeyboard = e => {

    const key = e.keyCode

    if (key === KEY_MAP.ARROW_LEFT) {
  
      /**
       * When calling in the useEffect it wont properly handle the index, it will mess up the carousel
       */
      handlePrevSlide(e)

    } else if (key === KEY_MAP.ARROW_RIGHT) {
      handleNextSlide(e)
    }
  }


  const handleSlides = index => setIndex(index)

  const handlePrevSlide = e => {
    e.preventDefault()
    
    if (sliderIndex < 1) sliderIndex = slides.length

    sliderIndex--

    setIndex(sliderIndex)

    console.log('Prev Index', sliderIndex)
  }

  const handleNextSlide = e => {
    e.preventDefault()

    if (sliderIndex === slides.length - 1) sliderIndex = -1

    sliderIndex++

    setIndex(sliderIndex)

    console.log('Next Index', sliderIndex)
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