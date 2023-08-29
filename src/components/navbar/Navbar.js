import React,{useState} from 'react';
import "./Navbar.css";
import SearchForm from '../search/searchForm';
import SearchResults from '../search/searchReaults';




function Navbar() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };
 
  return (
    <div className='navbar'>
<img className='logo' src="/images/logo-1.png" alt="Netflix logo" />

<h1></h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  )
}

export default Navbar