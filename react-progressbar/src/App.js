import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar'
import UpdateButton from './components/UpdateButton'
import {
  INITIAL_VAL,
  MAX_VAL,
  randomize
} from './helpers'

function App() {
  const [value, setValue] = useState(INITIAL_VAL)

  const handleClick = () => {
    setValue(randomize)
  }

  return (
    <>
      <ProgressBar text={`${value}%`} value={value} max={MAX_VAL} />
      <UpdateButton onClick={handleClick} />
    </>
  )
}

export default App;
