import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from './fetch'

class App extends Component {
  
  componentDidMount() {
    /**
     * Using desctructive metod to get onFetchData method from props
     */
    const { onFetchData } = this.props
    onFetchData()
  }

  render() {
    return(
      <div>Test</div>
    )
  }
}

/**
 * When we dispatch it to props
 * it will be accessible via this.props
 */
const mapDispatchToProps = {
  onFetchData: fetchData,
}

export default connect(null, mapDispatchToProps)(App);
