import React, { Component, Fragment } from 'react';
import { RiSettings4Line } from 'react-icons/ri';

import MovieView from './components/MovieView';
import MovieList from './components/MovieList';
import LoadMore from './components/LoadMore';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import Heading from './components/Heading';
import SettingsView from './components/SettingsView';
import Select from './components/Select';
import Toggle from './components/Toggle';
import Search from './components/Search';
import Button from './components/Button';

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
  setOpenState,
  searchUrl,
  setSearchData,
  setHasSearch,
  nextSearchPage,
  prevSearchPage,
  setSearchTotalPages,
} from './helpers';
import { initialState } from './state/initialState';

import './assets/styles/main.scss';

class App extends Component {
  state = initialState;

  componentDidMount() {
    this.setState(isLoading(true));
    this.getData();
  }

  handleLoadMore = () => {
    this.setState(loadMore(5));
  };

  getData = async (page) => {
    try {
      const { page } = this.state;
      const res = await fetch(url(page));
      const req = await res.json();
      const { results, total_pages } = req;

      this.setState(isLoading(false));
      this.setState(setData(results));
      this.setState(setTotalPages(total_pages));
    } catch (e) {
      this.setState(isLoading(false));
      this.setState(isError(true));
      this.setState(errorMsg(e.message));
    }
  };

  getSearchData = async (query) => {
    try {
      const { searchPage } = this.state;
      const res = await fetch(searchUrl(query, searchPage));
      const req = await res.json();
      const { results, total_pages } = req;

      this.setState(isLoading(false));
      this.setState(setHasSearch(true));
      this.setState(setSearchData(results));
      this.setState(setSearchTotalPages(total_pages));
    } catch (e) {
      this.setState(isError(true));
      this.setState(errorMsg(e.message));
    }
  };

  handleOpenSettings = () => {
    const { isSettingsOpen } = this.state;
    this.setState(setOpenState(!isSettingsOpen));
  };

  handleRefetchData = (param) => {
    const { page, searchQuery } = this.state;

    if (param === 'searchData') {
      this.getSearchData(searchQuery);
    } else if (param === 'noSearch') {
      this.getData(page);
    }
  };

  handleScrollTop = () => {
    smoothScroll('#root', 1500);
  };

  handleNextPage = (param) => {
    const { isVisible } = this.state;
    const values = Object.values(this.state);
    if (values.filter((val) => val === isVisible)) this.setState(setDefaultVisible(5));

    if (param === 'next') {
      promise(this.setState(nextPage, () => this.handleRefetchData('noSearch'))).then((el) =>
        this.handleScrollTop(),
      );
    } else if (param === 'nextSearch') {
      promise(
        this.setState(nextSearchPage, () => this.handleRefetchData('searchData')),
      ).then((el) => this.handleScrollTop());
    }
  };

  handlePrevPage = (param) => {
    const { isVisible } = this.state;
    const values = Object.values(this.state);
    if (values.filter((val) => val === isVisible)) this.setState(setDefaultVisible(5));

    if (param === 'prev') {
      promise(this.setState(prevPage, () => this.handleRefetchData('noSearch'))).then((el) =>
        this.handleScrollTop(),
      );
    } else if (param === 'prevSearch') {
      promise(
        this.setState(prevSearchPage, () => this.handleRefetchData('searchData')),
      ).then((el) => this.handleScrollTop());
    }
  };

  handleSetSearch = (e) => {
    this.setState({ searchQuery: e.target.value });

    if (e.target.value === '') {
      this.setState(setHasSearch(false));
      this.handleRefetchData('noSearch');
    }
  };

  handleSearch = () => {
    const { searchQuery } = this.state;

    if (searchQuery !== '') {
      this.getSearchData(searchQuery);
    }
  };

  handleSortVote = (e) => {
    const { data } = this.state;

    if (e.target.value === 'asc') {
      const ascSort = data.sort((a, b) => a.vote_average - b.vote_average);
      this.setState({ data: ascSort });
    } else if (e.target.value === 'desc') {
      const descSort = data.sort((a, b) => b.vote_average - a.vote_average);
      this.setState({ data: descSort });
    } else {
      this.handleRefetchData('noSearch');
    }
  };

  handleSortPopularity = (e) => {
    const { data } = this.state;

    if (e.target.value === 'asc') {
      const ascSort = data.sort((a, b) => a.popularity - b.popularity);
      this.setState({ data: ascSort });
    } else if (e.target.value === 'desc') {
      const descSort = data.sort((a, b) => b.popularity - a.popularity);
      this.setState({ data: descSort });
    } else {
      this.handleRefetchData('noSearch');
    }
  };

  render() {
    const {
      isVisible,
      isLoading,
      isError,
      errMsg,
      data,
      page,
      totalPages,
      isSettingsOpen,
      hasSearch,
      searchData,
      searchTotalPages,
      searchPage,
      searchQuery,
    } = this.state;

    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <Fragment>
          <Heading text="Movie Discover App" />

          <MovieView>
            <SettingsView>
              <div className="u-flex">
                <Toggle onClick={this.handleOpenSettings}>
                  <RiSettings4Line />
                </Toggle>
              </div>

              {isSettingsOpen ? (
                <div className="settings-panel u-mt-10">
                  <Select
                    customClass="u-mb-10 u-full-width"
                    onChange={(e) => this.handleSortVote(e)}
                    text="Sort by vote..."
                  />
                  <Select
                    customClass="u-mb-10 u-full-width"
                    onChange={(e) => this.handleSortPopularity(e)}
                    text="Sort by popularity..."
                  />
                  <Search
                    customClass="u-mb-10 u-full-width"
                    onChange={(e) => this.handleSetSearch(e)}
                    searchQuery={searchQuery}
                  />
                  <Button
                    customClass="u-mb-10 u-full-width"
                    onClick={this.handleSearch}
                    text="Search"
                  />
                </div>
              ) : null}
            </SettingsView>

            <MovieList
              isVisible={isVisible}
              data={hasSearch ? searchData : data}
              error={isError}
              msg={errMsg}
            />
            {isVisible < data.length ? (
              <LoadMore onClick={this.handleLoadMore} name={`Load More`} />
            ) : (
              <Navigation
                pagination={hasSearch ? searchPage : page}
                allPages={hasSearch ? searchTotalPages : totalPages}
                onPrevClick={
                  hasSearch
                    ? () => this.handlePrevPage('prevSearch')
                    : () => this.handlePrevPage('prev')
                }
                prev={'Prev'}
                onNextClick={
                  hasSearch
                    ? () => this.handleNextPage('nextSearch')
                    : () => this.handleNextPage('next')
                }
                next={'Next'}
              />
            )}
          </MovieView>
        </Fragment>
      );
    }
  }
}

export default App;
