import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/main.scss'

const ProgressBar = ({text, max, min, value}) => {
  
  return(
    <div role="progressbar" className="progress-bar">
      {
        value && text ?
          (<div className="progress-bar__inner"
                aria-valuemin={value}
                aria-valuemax={max}
                style={{width: `${value}%`}}
            >
              {text}
            </div>
          )
        : (<div className="progress-bar__inner"
                aria-valuenow={value}
                aria-valuemin={min}
                aria-valuemax={max}
                style={{width: `${value}%`}}>
            </div>
          )
      }
    </div>
  )
}

ProgressBar.defaultProps = {
  min: 0,
}

ProgressBar.propTypes = {
  text: PropTypes.string,
  max: PropTypes.number,
  value: PropTypes.number,
}

export default ProgressBar
