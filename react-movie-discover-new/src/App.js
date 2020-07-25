import React, { Component, Fragment } from 'react';
import MovieView from './components/MovieView'
import MovieList from './components/MovieList'
import LoadMore from './components/LoadMore'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import Heading from './components/Heading'
import SettingsView from './components/SettingsView'
import SettingsPanel from './components/SettingsPanel'
import Toggle from './components/Toggle'

import {
  url,
  setData,
  setTotalPages,
  setDefaultVisible,
  loadMore,
  smoothScroll,
  promise,
  nextPage,
  prevPage,
  isLoading,
  isError,
  errorMsg, 
  setOpenState
} from './helpers'
import { initialState } from './state/initialState'

import './assets/styles/main.scss'

class App extends Component {

  state = initialState

  componentDidMount() {
    this.setState(isLoading(true))
    this.getData()
  }

  handleLoadMore = () => {
    this.setState(loadMore(5))
  }

  getData = async(page) => {
    try {
      const { page } = this.state
      const res = await fetch(url(page))
      const req = await res.json()
      const { results, total_pages } = req
  
      this.setState(isLoading(false))
      this.setState(setData(results))
      this.setState(setTotalPages(total_pages))
      console.log('Data', req)
    
    } catch(e) {
      this.setState(isLoading(false))
      this.setState(isError(true))
      this.setState(errorMsg(e.message))
    }
  }

  handleOpenSettings = () => {
    const { isSettingsOpen } = this.state
    this.setState(setOpenState(!isSettingsOpen));
  }

  handleRefetchData = () => {
    const { page } = this.state
    this.getData(page)
  }

  handleScrollTop = () => {
    smoothScroll('#root', 1500)
  }

  handleNextPage = () => {
    const { isVisible } = this.state
    const values = Object.values(this.state)
    if (values.filter(val => val === isVisible)) this.setState(setDefaultVisible(5))
    promise(this.setState(nextPage, this.handleRefetchData)).then(el => this.handleScrollTop())
  }

  handlePrevPage = () => {
    const { isVisible } = this.state
    const values = Object.values(this.state)
    if (values.filter(val => val === isVisible)) this.setState(setDefaultVisible(5))
    promise(this.setState(prevPage, this.handleRefetchData)).then(el => this.handleScrollTop())
  }

  handleSortVote = (e) => {
    const { data } = this.state

    if (e.target.value === "asc") {
      const ascSort = data.sort((a, b) => a.vote_average - b.vote_average);
      this.setState({ data: ascSort })

    } else if(e.target.value === "desc") {
      const descSort = data.sort((a, b) => b.vote_average - a.vote_average);

      this.setState({ data: descSort })
    }
  }

  handleSortPopularity = (e) => {
    const { data } = this.state

    if (e.target.value === "asc") {
      const ascSort = data.sort((a, b) => a.popularity - b.popularity);
      this.setState({ data: ascSort })

    } else if(e.target.value === "desc") {
      const descSort = data.sort((a, b) => b.popularity - a.popularity);

      this.setState({ data: descSort })
    }
  }

  render() {
    const { isVisible, isLoading, isError, errMsg, data, page, totalPages, isSettingsOpen } = this.state

    if (isLoading) {
      return <Loader />
    
    } else {
      
      return (
        <Fragment>
          <Heading text="Movie Discover App" />

          <MovieView>
            <SettingsView>
              <Toggle onClick={this.handleOpenSettings} />
              {
              isSettingsOpen ?
                <SettingsPanel
                  onChangeVote={(e) => this.handleSortVote(e)}
                  onChangePopularity={(e) => this.handleSortPopularity(e)}
                  selectVoteText="Sort by vote..."
                  selectPopularityText="Sort by popularity..."
                />
                : null
              }
            </SettingsView>

            <MovieList isVisible={isVisible} data={data} error={isError} msg={errMsg} />
            {
              isVisible < data.length
              ? <LoadMore onClick={this.handleLoadMore} name={`Load More`} />
              : <Navigation pagination={page} allPages={totalPages} onPrevClick={this.handlePrevPage} prev={'Prev'} onNextClick={this.handleNextPage} next={'Next'} /> 
            }
          </MovieView>
        </Fragment>
      )
    }
  }
}

export default App;
