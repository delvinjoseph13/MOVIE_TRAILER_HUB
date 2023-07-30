
import React from 'react'
import Navbar from './components/navbar/Navbar';
import "./App.css";
import {action,originals,comdey,horror,action2,Documentaries} from './urls'
import Banner from './components/Banner/Banner';
import RowPoster from './components/RowPoster/RowPoster';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster url={originals}  title='Netflix originals'/>
     <RowPoster url={action}  title='Action' isSmall={true}/>
     <RowPoster url={comdey} title='Comdey' isSmall={true}/>
     <RowPoster url={horror}  title='Horror' isSmall={true}/>
     <RowPoster url={action2}  title='Romance' isSmall={true}/>
     <RowPoster url={Documentaries}  title='Documentaries' isSmall={true}/>



   
    </div>
  );
}

export default App;
