import React, { Component } from 'react';
import { connect } from 'react-redux'
import Movieview from './components/Movieview'
import MovieList from './components/MovieList'
import LoadMore from './components/LoadMore'

import { fetchData } from './fetch'
import { loadMore } from './load'
import { getData, dataVisible } from './selectors'

class App extends Component {
  
  componentDidMount() {
    /**
     * Using desctructive metod to get onFetchData method from props
     */
    const { onFetchData } = this.props
    onFetchData()
  }

  render() {
    const { data, dataIsVisible, handleLoadMore } = this.props
    
    return(
      <Movieview>
        <MovieList data={data} isVisible={dataIsVisible} />
        {
          dataIsVisible < data.length ? <LoadMore onClick={handleLoadMore} name={'Load More'} /> : null
        }
      </Movieview>
    )
  }
}

/**
 * When we dispatch it to props
 * it will be accessible via this.props
 */
const mapDispatchToProps = {
  onFetchData: fetchData,
  handleLoadMore: loadMore,
}

/**
 * When we map state to props
 * it will be accessible via this.props
 */
const mapStateToProps = state => ({
  data: getData(state),
  dataIsVisible: dataVisible(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
