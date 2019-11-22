import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar'
import UpdateButton from './components/UpdateButton'
import {
  INITIAL_VAL,
  MAX_VAL,
  randomize
} from './helpers'

function App() {
  const [initialVal, setValue] = useState(INITIAL_VAL)

  const handleClick = () => {
    setValue(randomize)
  }

  return (
    <>
      <ProgressBar text={`${initialVal}%`} value={initialVal} max={MAX_VAL} />
      <UpdateButton onClick={handleClick} />
    </>
  )
}

export default App;
