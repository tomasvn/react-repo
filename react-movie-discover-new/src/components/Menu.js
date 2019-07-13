import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({children}) => {
  return(
    <header>{children}</header>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Menu