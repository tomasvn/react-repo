import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getData } from '../selectors'

class Weather extends Component {
  render() {
    const { data } = this.props
    return(
      <div>{console.log(data)}</div>
    )
  }
}

Weather.propTypes = {
  data: PropTypes.object,
}

const mapStateToProps = state => ({
  data: getData(state),
})

export default connect(mapStateToProps, null)(Weather)
