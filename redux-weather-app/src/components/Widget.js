import React from 'react'
import PropTypes from 'prop-types'
import WidgetItem from './WidgetItem'

const Widget = ({data}) => {
  return (
    <WidgetItem country={data.country} sunrise={data.sunrise} sunset={data.sunset} />
  )
}

Widget.propTypes = {
  data: PropTypes.object,
}

export default Widget
