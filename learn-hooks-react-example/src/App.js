import React, { useState, useEffect, memo } from 'react'

//useEffect hook - similiar to componentDidMount() and componentDidUpdate()
//useEffect hook takes in a callback function as argument

const App = () => {
  const [data, setData] = useState([])
  const [isError, setError] = useState(null)
  
  const handleFetch = async() => {
    try {
      const req = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const res = await req.json()
      setData(res)
    
    } catch(e) {
      setError(e.message)
    }
  } 

  useEffect(() => {
    handleFetch()
  }, [])

  if (isError) {
    return <div>{isError}</div>
  
  } else {
    
    return(
      <ul>
        {
          data.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              {item.body}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default memo(App)