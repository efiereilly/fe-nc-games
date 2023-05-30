import { useEffect, useState } from "react";
import { fetchAllReviews } from "../utils/utils";

import "./Reviews.css";


const Reviews = () => {
    const [allReviews, setAllReviews] = useState ([])
    const [isLoading, setIsLoading] = useState(true)
    
  

    useEffect(() => {
        fetchAllReviews().then(({ reviews }) => {
            setAllReviews(reviews)
            setIsLoading(false)
     }  ) 
    }, [])

    return (
        <section>
        <h1>Reviews:</h1>
            {isLoading ? <p>Loading.. </p> :
            <ul>
                    {allReviews.map((review) => {
                return <li className="reviews" key={review.review_id}>
                <h2 className="title">{review.title}</h2>
                <p> Created at: {review.created_at.slice(0, 10)}</p>
                <p>Game category: {review.category}</p>
                <img src={review.review_img_url} alt={`image of ${review.review_img_url}`} />
                <p>Votes: {review.votes}</p>
                <button>See full review!</button>
                </li>;
                        
                        
            })}
            
            </ul>}
            </section>)
}
 
export default Reviews;