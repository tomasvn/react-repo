import React from 'react'

const Wrapper = ({children, isLoading}) => {
  return(
    <div className="wrapper">{children}</div>
  )
}

export default Wrapper