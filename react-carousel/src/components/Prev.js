import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { glob } from '../styles/globals'

const Prev = ({onPrev, className}) => {
  return <button className={`fa fa-2x fa-angle-left ${className}`} onClick={onPrev}></button>
}

const PrevBtn = styled(Prev)`
  ${glob.ARW}
`

Prev.propTypes = {
  onPrev: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default PrevBtn