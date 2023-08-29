
import React from 'react'
import Navbar from './components/navbar/Navbar';
import "./App.css";
import {action,originals,comdey,horror,action2,Documentaries,romance,Adventure,Animation,crime,family,
histroy,music,mystery,science_fiction,tv_movie,triller,war} from './urls'
import Banner from './components/Banner/Banner';
import RowPoster from './components/RowPoster/RowPoster';

function App() {
  return (
    <div className="App">
  
     <Navbar/>
     <Banner/>
     <RowPoster url={originals}  title='Netflix originals'/>
     <RowPoster url={action}  title='Action movies' isSmall={true}/>
     <RowPoster url={comdey} title='Comdey movies' isSmall={true}/>
     <RowPoster url={horror}  title='Horror movies' isSmall={true}/>
     <RowPoster url={romance}  title='Romance movies' isSmall={true}/>
     <RowPoster url={Documentaries}  title='Documentaries' isSmall={true}/>
     <RowPoster url={action2}  title='Action Movies' isSmall={true}/>
     <RowPoster url={Adventure} title='Adventure movies' isSmall={true}/>
     <RowPoster url={Animation} title='Animation movies' isSmall={true}/>
     <RowPoster url={crime} title='Crime movies' isSmall={true}/>
     <RowPoster url={family} title='Family movies' isSmall={true}/>
     <RowPoster url={histroy} title='Histroy movies' isSmall={true}/>
     <RowPoster url={music} title='Music' isSmall={true}/>
     <RowPoster url={mystery} title='Mystery movies' isSmall={true}/>
     <RowPoster url={science_fiction} title='Science fiction movies' isSmall={true}/>
     <RowPoster url={tv_movie} title='TV series' isSmall={true}/>
     <RowPoster url={triller} title='Triller movies' isSmall={true}/>
     <RowPoster url={war} title='War movies' isSmall={true}/>






   
    </div>
  );
}

export default App;
