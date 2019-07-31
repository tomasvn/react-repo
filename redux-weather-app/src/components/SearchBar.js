import React from 'react'

/*class Search extends Component {
  
  render() {
    const { query } = this.state

    return(
      <>
        <input type="text" onChange={this.handleChangeValue} value={query} placeholder=""/>
        <button onClick={this.handleSearch}>Search</button>
      </>
    )
  }
}*/

const SearchBar = ({onChange, query, placeholder}) => {
  return(
    <input type="text" onChange={onChange} value={query} placeholder={placeholder} />
  )
}

export default SearchBar