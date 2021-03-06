import React, { Component } from 'react';
import { connect } from 'react-redux'
import Movieview from './components/Movieview'
import MovieList from './components/MovieList'
import LoadMore from './components/LoadMore'
import Navigation from './components/Navigation'

import { fetchData, loadMore, nextPage } from './helpers/'
import { getData, dataVisible } from './selectors/'

class App extends Component {
  
  componentDidMount() {
    /**
     * Using desctructive metod to get onFetchData method from props
     */
    const { onFetchData } = this.props
    onFetchData()
  }

  render() {
    const { data, dataIsVisible, handleLoadMore, handleNextPage } = this.props
    
    return(
      <Movieview>
        <MovieList data={data} isVisible={dataIsVisible} />
        {
          dataIsVisible < data.length ? <LoadMore onClick={handleLoadMore} name={'Load More'} /> : <Navigation prev={'Previous'} next={'Next'} nextClick={handleNextPage} />
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
  handleNextPage: nextPage,
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
