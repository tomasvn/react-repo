import React from 'react'
import PropTypes from 'prop-types'
import WeatherDetailsItem from './WeatherDetailsItem'

const WeatherDetails = ({data}) => {
  return (
    <ul>
      {
        data.map(item => (
          <WeatherDetailsItem key={item.id} icon={item.icon} description={item.description}/>
        ))
      }
    </ul>
  )
}

WeatherDetails.propTypes = {
  data: PropTypes.array,
}

export default WeatherDetails
