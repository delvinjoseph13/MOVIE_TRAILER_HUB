
import React,{useState} from 'react'
import Navbar from './components/navbar/Navbar';
import "./App.css";
import {action,originals,comdey,horror,action2,Documentaries,romance,Adventure,Animation,crime,family,
histroy,music,mystery,science_fiction,tv_movie,triller,war} from './urls'
import Banner from './components/Banner/Banner';
import RowPoster from './components/RowPoster/RowPoster';
import MovieRecommendation from './components/recommantion/Recommendation';


function App() {
  const [reviews, setReviews] = useState([]);
  
  const addReview = (reviewText) => {
    const newReview = {
      text: reviewText,
      // You can also include additional properties like the user's name or rating
    };

    setReviews([...reviews, newReview]);
  };

  return (
    <div className="App">
  
     <Navbar/>
     <Banner/>
     <MovieRecommendation/>
     <RowPoster url={originals}  title='Trending Movies' addReview={addReview} reviews={reviews} />

     <RowPoster url={action}  title='Action movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={comdey} title='Comdey movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={horror}  title='Horror movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={romance}  title='Romance movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={Documentaries}  title='Documentaries' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={action2}  title='Action Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={Adventure} title='Adventure movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={Animation} title='Animation movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={crime} title='Crime movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={family} title='Family movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={histroy} title='Histroy movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={music} title='Music' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={mystery} title='Mystery movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={science_fiction} title='Science fiction movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={tv_movie} title='TV series' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={triller} title='Triller movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={war} title='War movies' addReview={addReview} reviews={reviews} isSmall={true}/>






   
    </div>
  );
}

export default App;
