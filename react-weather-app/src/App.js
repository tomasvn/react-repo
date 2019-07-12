import React, { Component } from 'react';
import AppWrapper from './components/AppWrapper'
import SearchBar from './components/SearchBar'
import Button from './components/Button'
import View from './components/View'

import { initialState } from './state/initialState'
import { api, setQuery, setData, setDate } from './helpers/'

class App extends Component {
  state = initialState
  
  handleChangeValue = e => {
    this.setState(setQuery(e.target.value))
  }
  
  handleSearch = async() => {
    const { query } = this.state
    const res = await fetch(api(query))
    const req = await res.json()
    
    this.setState(setData(req.main))
    this.setState(setDate(req.dt))
    console.log(req.main)
    console.log(req)
  }

  render() {
    const { data, query, date } = this.state
    
    return(
      <AppWrapper>
        <SearchBar onChange={this.handleChangeValue} query={query} placeholder={`Search...`}/>
        <Button onClick={this.handleSearch} />
        <View data={data} unixDate={date} />
      </AppWrapper>
    )
  }
}

export default App;
