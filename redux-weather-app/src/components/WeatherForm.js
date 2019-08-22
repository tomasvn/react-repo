import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCity } from '../helpers/setCity'
import { setCode } from '../helpers/setCode'
import { fetchData } from '../helpers/fetch'

const initialState = Object.freeze({
  city: '',
  code: '',
})

class WeatherForm extends Component {
  
  state = initialState

  handleChangeCity = e => this.setState(setCity(e.target.value))

  handleChangeCode = e => this.setState(setCode(e.target.value))

  handleSubmit = e => {
    const { city, code } = this.state
    const { onFetchData } = this.props
    
    e.preventDefault()
    if (city && code !== '') onFetchData(city, code)
  }

  render() {
    const { city, code } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="City..." onChange={this.handleChangeCity} value={city}/>
        <input type="text" placeholder="Country..." onChange={this.handleChangeCode} value={code}/>
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
