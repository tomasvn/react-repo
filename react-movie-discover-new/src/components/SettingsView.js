import React from 'react'
import PropTypes from 'prop-types'

const SettingsView = ({children}) => {
  return (
    <div className="settings-nav">{children}</div>
  )
}

SettingsView.propTypes = {
  children: PropTypes.node.isRequired
}

export default SettingsView
