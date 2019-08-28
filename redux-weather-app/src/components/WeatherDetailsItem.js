import React from 'react'
import PropTypes from 'prop-types'

const img = {
  URL: 'http://openweathermap.org/img/wn/',
  RETINA: '@2x',
  EXT: 'png'
}

const WeatherDetailsItem = ({description, icon}) => {
  return (
    <li><img srcSet={`${img.URL}${icon}${img.RETINA}.${img.EXT} 2x, ${img.URL}${icon}.${img.EXT}`} alt={description} /><span>{description}</span></li>
  )
}

WeatherDetailsItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
}

export default WeatherDetailsItem
