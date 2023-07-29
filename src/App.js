
import React from 'react'
import Navbar from './components/navbar/Navbar';
import "./App.css"
import Banner from './components/Banner/Banner';
import RowPoster from './components/RowPoster/RowPoster';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster  title='Netflix originals'/>
     <RowPoster  title='Action' isSmall={true}/>
   
    </div>
  );
}

export default App;
