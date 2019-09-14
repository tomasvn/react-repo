import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { glob } from '../styles/globals'

const Next = ({onNext, className}) => {
  return <button className={`fa fa-2x fa-angle-right ${className}`} onClick={onNext}></button>
}

const NextBtn = styled(Next)`
  ${glob.ARW}
`

Next.propTypes = {
  onNext: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default NextBtn