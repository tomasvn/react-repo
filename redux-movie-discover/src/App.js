import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from './fetch'
import { getData } from './selectors'

class App extends Component {
  
  componentDidMount() {
    /**
     * Using desctructive metod to get onFetchData method from props
     */
    const { onFetchData } = this.props
    onFetchData()
  }

  render() {
    const { data } = this.props
    return(
      <div>
        {
          data.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))
        }
      </div>
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

/**
 * When we map state to props
 * it will be accessible via this.props
 */
const mapStateToProps = state => ({
  data: getData(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
