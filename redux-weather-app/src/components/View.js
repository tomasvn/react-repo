import React from 'react'
//import Item from './Item'
import { unix } from '../helpers'

const View = ({data, unixDate}) => {

  return(
    <>
      {data.humidity && <p>Humidity: {data.humidity} %</p>}
      {data.pressure && <p>Pressure: {data.pressure} hPa</p>}
      {data.temp && <p>Temp: {data.temp} °C</p>}
      {unixDate && <p>Date of calculation: {unix(unixDate).toUTCString()}</p>}
    </>
  )
}

export default View