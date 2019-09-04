import React, { useState } from 'react'

const App = () => {
  // Declare a new state variable, which we'll call "count"
  // const data = useSelector(getData)
  // count is the initialState
  // setCount is a function that updates the state
  const [count, setCount] = useState(0);

  // we can extract the setCount function, and create HOF for better readability, so we dont have to pass in () => setCount(...)
  const handleCount = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleCount}>
        Click me
      </button>
    </div>
  );
}

export default App;