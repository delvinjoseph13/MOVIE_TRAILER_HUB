
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

     <RowPoster url={action}  title='Action Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={comdey} title='Comdey Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={horror}  title='Horror Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={romance}  title='Romance Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={Documentaries}  title='Documentaries' addReview={addReview} reviews={reviews} isSmall={true}/>
     {/* <RowPoster url={action2}  title='Action Movies' addReview={addReview} reviews={reviews} isSmall={true}/> */}
     <RowPoster url={Adventure} title='Adventure Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={Animation} title='Animation Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={crime} title='Crime Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={family} title='Family Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={histroy} title='History Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={music} title='Music' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={mystery} title='Mystery Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={science_fiction} title='Science Fiction Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={tv_movie} title='TV Series' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={triller} title='Thriller Movies' addReview={addReview} reviews={reviews} isSmall={true}/>
     <RowPoster url={war} title='War Movies' addReview={addReview} reviews={reviews} isSmall={true}/>






   
    </div>
  );
}

export default App;
