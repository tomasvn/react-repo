import React from 'react'

const Item = ({values, text}) => {
  return(
    <li>
      <span style={{marginRight: '5px'}}>{text}</span>
      <span>{values}</span>
    </li>
  )
}

export default Item