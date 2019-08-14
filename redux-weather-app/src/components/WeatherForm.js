import React from 'react'
import PropTypes from 'prop-types'

const WeatherForm = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Coountry..."/>
      <input type="text" placeholder="City..."/>
      <button>Search</button>
    </form>
  )
}

WeatherForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default WeatherForm
