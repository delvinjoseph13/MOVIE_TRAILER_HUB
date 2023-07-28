import React from 'react'
import './Banner.css';
function Banner() {
  return (
    <div className='banner'>
              <div className='contents'>
                 <h1 className='title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>

                </div>
                <h1 class="description"> Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.</h1>
              </div>
   <div className="faded_buttom"></div>
    </div>
  )
}

export default Banner