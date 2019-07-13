import React from 'react'
import PropTypes from 'prop-types'

const LangSwitcher = ({langToggle, onToggle}) => {
  return(
    <div>
      <button onToggle={onToggle}>{langToggle[0]}</button>
      <ul>
        {
          langToggle.slice(1).map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

LangSwitcher.propTypes = {
  onToggle: PropTypes.func.isRequired,
}

export default LangSwitcher