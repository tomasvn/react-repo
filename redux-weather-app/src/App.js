import React, { Component } from 'react';
import WeatherForm from './components/WeatherForm'
import Weather from './components/Weather'

class App extends Component {
  render() {
    return(
      <>
        <div>Weather App</div>
        <WeatherForm />
        <Weather />
      </>
    )
  }
}

export default App;
