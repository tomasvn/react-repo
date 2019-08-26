import React from 'react'
import PropTypes from 'prop-types'

const IMG_URL = 'http://openweathermap.org/img/wn/'
const RETINA = '@2x'

const WeatherDetailsItem = ({description, icon}) => {
  return (
    <li><img srcSet={`${IMG_URL}${icon}${RETINA}.png 2x, ${IMG_URL}${icon}.png`} alt={description} /><span>{description}</span></li>
  )
}

WeatherDetailsItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
}

export default WeatherDetailsItem
