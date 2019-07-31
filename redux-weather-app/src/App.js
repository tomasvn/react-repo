import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import AppWrapper from './components/AppWrapper'
import SearchBar from './components/SearchBar'
import Button from './components/Button'
import View from './components/View'
import { store } from './redux/store'

import { setQueryValue, fetchData } from './redux/actions'
import { getQueryValue } from './redux/selectors'

import { initialState } from './state/initialState'
import { api, setData, setDate } from './helpers'

class App extends Component {
  state = initialState
  
  componentDidMount() {
    const { onFetchData } = this.props
    onFetchData()
  }

  handleChangeValue = e => {
    // this.setState(setQuery(e.target.value))
    const { onSetQueryValue } = this.props
    onSetQueryValue(e.target.value)
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
    const { queryValue } = this.props 

    return(
      <AppWrapper>
        <SearchBar onChange={this.handleChangeValue} query={queryValue} placeholder={`Search...`}/>
        <Button onClick={this.handleSearch} />
        <View data={data} unixDate={date} />
      </AppWrapper>
    )
  }
}

const mapStateToProps = state => ({
  queryValue: getQueryValue(state),
})

const mapDispatchToProps = {
  onSetQueryValue: setQueryValue,
  onFetchData: fetchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
