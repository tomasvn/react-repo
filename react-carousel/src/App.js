import React, { useState, useEffect } from 'react';
import { API } from './helpers'
import Carousel from './components/Carousel'

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const handleFetch = async() => {
    try {
      const req = await fetch(API)
      const res = await req.json()
      
      // console.log(res.quotes)
      setData(res.quotes)
    
    } catch(e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return error ? <div>{error}</div> : (data && <Carousel slides={data} />)
}

export default App;
