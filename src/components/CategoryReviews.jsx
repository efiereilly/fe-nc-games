import { useEffect, useState } from "react";
import { fetchReviewsByCategory } from "../utils/utils";
import { Link, useParams } from "react-router-dom";



const CategoryReviews = () => {
    const { category } = useParams();
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  


  useEffect(() => {
    fetchReviewsByCategory(category).then(({ reviews }) => {
      setAllReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  

  console.log(category)

  return (

    <section>
      <h1>{category} Reviews:</h1>
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

export default CategoryReviews;