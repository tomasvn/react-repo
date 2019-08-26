import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchData, setCity } from '../helpers'

const initialState = Object.freeze({
  city: '',
})

class WeatherForm extends Component {
  
  state = initialState

  handleChangeCity = e => this.setState(setCity(e.target.value))

  handleSubmit = e => {
    const { city } = this.state
    const { onFetchData } = this.props
    
    e.preventDefault()
    if (city !== '') onFetchData(city)
  }

  render() {
    const { city } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="City..." onChange={this.handleChangeCity} value={city}/>
        <button>Search</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  onFetchData: fetchData,
}

WeatherForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(WeatherForm)
