import React,{useState} from 'react';
import "./Navbar.css";
import SearchForm from '../search/searchForm';
import SearchResults from '../search/searchReaults';




function Navbar() {
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);

  const handleSearch = (results) => {
    setSearchResults(results);
    setShowResults(true); 
  };
 
  const handleCloseResults = () => {
    setSearchResults([]); // Clear search results
    setShowResults(false); // Hide search results
  };

  return (
    <div className='navbar'>
<img className='logo' src="/images/logo-1.png" alt="Netflix logo" />


      <SearchForm onSearch={handleSearch} />

     {showResults && (
        <SearchResults results={searchResults} onClose={handleCloseResults} />
      )}
    </div>
  );
}

export default Navbar;