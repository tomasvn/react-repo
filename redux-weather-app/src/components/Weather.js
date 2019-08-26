import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getData } from '../selectors'
import { time } from '../helpers'
import WeatherDetails from './WeatherDetails';
import Widget from './Widget'

class Weather extends Component {

  render() {
    const { data } = this.props
    const { main, weather, dt, sys } = data

    return(
      <>
        <div>
          {console.log('Full Data',data)}
          {console.log('Weather',weather)}
          {dt && <span>{time(dt)}</span>}
          {main && <p>{main.temp_max} °C</p>}
          {main && <p>{main.temp_min} °C</p>}
        </div>
        <div>
          {weather && <h2>Weather Details</h2>}
          {weather && <WeatherDetails data={weather} />}
        </div>
        <div>
          {sys && <h2>Weather Widget</h2>}
          {sys && <Widget data={sys} />}
        </div>
      </>
    )
  }
}

Weather.propTypes = {
  data: PropTypes.object,
}

const mapStateToProps = state => ({
  data: getData(state),
})

export default connect(mapStateToProps, null)(Weather)
