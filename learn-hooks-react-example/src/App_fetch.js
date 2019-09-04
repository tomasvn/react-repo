import React, { useState, useEffect, memo, useCallback } from 'react'

//useEffect hook - similiar to componentDidMount() and componentDidUpdate()
//useEffect hook takes in a callback function as argument

const App = () => {
  const [data, setData] = useState({})

  const handleFetchData = useCallback(() => {}, [])

  useEffect(() => {
    const handleFetchData = async() => {
      try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const res = await req.json()
        setData(res)

      } catch(e) {
        console.error(e.message)
      }
    }
  }, [])

  return(
    <ul>
    </ul>
  )
}

export default memo(App)