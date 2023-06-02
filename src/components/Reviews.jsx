import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/utils";

import "./Reviews.css";
import { Link, useParams } from "react-router-dom";


const Reviews = () => {
  const {category} = useParams()
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('')


  function handleCategoryChange(event) {
    
    setSelectedCategory(event.target.value)
  }


  useEffect(() => {
    fetchReviews(category).then(({ reviews }) => {
      setAllReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);


  

  return (

    <section>
        <form>
      <label htmlFor="category">Filter by category:</label>

      <select
        
        id="category"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="strategy">strategy</option>
        <option value="dexterity">dexterity</option>
        <option value="hidden-roles">hidden-roles</option>
        <option value="push-your-luck">push-your-luck</option>
        <option value="roll-and-write">roll-and-write</option>
        <option value="deck-building">deck-building</option>
        <option value="engine-building">engine-building</option>
      </select>
      <button id="filter" type="submit" >
      <Link to = {`/reviews/category/${selectedCategory}`}>Filter</Link>
          </button></form>
      <h1>Reviews:</h1>
      {isLoading ? (
        <p>Loading.. </p>
      ) : (
        <ul>
          {allReviews.map((review) => {
            return (
              <li className="reviews" key={review.review_id}>
                <h2 className="title">{review.title}</h2>
                <p> Created at: {review.created_at.slice(0, 10)}</p>
                <p>Game category: {review.category}</p>
                <img
                  src={review.review_img_url}
                  alt={`image of ${review.review_img_url}`}
                />
                <p>Votes: {review.votes}</p>
                <button>
                  <Link to={`/reviews/${review.review_id}`}>
                    See full review!
                  </Link>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
