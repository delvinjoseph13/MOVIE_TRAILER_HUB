import React, { useState } from 'react';

function Review({ onReviewSubmit }) {
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = () => {
    if (reviewText) {
      onReviewSubmit(reviewText);
      setReviewText('');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Write your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
}

export default Review;
