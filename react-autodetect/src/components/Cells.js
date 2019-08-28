import React from 'react'

const ASSETS = '/assets/flags/'

const Cell = ({ ip, city, region, countryName, icon }) => {
  
  return(
    <>
      <div className="cell cell--bold">{ip}</div>
      <div className="cell cell--bold">{city}</div>
        <div className="cell cell--bold">{region}</div>
      <div className="flex">
        <div className="cell cell--bold">{countryName}</div>
        <img src={`${ASSETS}${icon}.svg`} alt={countryName} className="flag"/>
      </div>
    </>
  )
}

export default Cell
