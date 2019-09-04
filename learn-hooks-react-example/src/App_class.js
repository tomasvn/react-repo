import React, { Component } from 'react';
import Title from './components/Title'
import Body from './components/Body'

const initialState = Object.freeze({
  data: {},
  isError: null,
})

const setData = data => ({ data })
const setError = isError => ({ isError })

class App extends Component {

  state = initialState

  componentDidMount() {
    this.handleData()
  }

  handleData = async() => {
    try {
      const req = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const res = await req.json()
      console.log(res)

      this.setState(setData(res))
    
    } catch(e) {
      this.setState(setError(e.message))
    }
  }

  render() {
    const { data } = this.state
    
    return(
      <>
        <Title>{data.title}</Title>
        <Body>{data.body}</Body>
      </>
    )
  }
}

export default App;
