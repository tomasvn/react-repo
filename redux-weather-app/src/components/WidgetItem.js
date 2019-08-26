import React from 'react'
import PropTypes from 'prop-types'
import { time } from '../helpers'

const WidgetItem = ({country, sunset, sunrise}) => {
  return (
    <>
      <span>{country}</span>
      <span>{time(sunrise)}</span>
      <span>{time(sunset)}</span>
    </>
  )
}

WidgetItem.propTypes = {
  country: PropTypes.string,
  sunset: PropTypes.number,
  sunrise: PropTypes.number,
}

export default WidgetItem
