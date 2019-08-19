import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCity } from '../helpers/setCity'
import { setCode } from '../helpers/setCode'
import { fetch } from '../helpers/fetch'

const localState = Object.freeze({
  city: '',
  code: '',
})

class WeatherForm extends Component {
  
  state = localState

  handleChangeCity = e => this.setState(setCity(e.target.value))

  handleChangeCode = e => this.setState(setCode(e.target.value))

  handleSubmit = e => {
    const { city, code } = this.state
    const { onFetchData } = this.props
    e.preventDefault()
    onFetchData(city, code)
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
  onFetchData: fetch,
}

WeatherForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(WeatherForm)
