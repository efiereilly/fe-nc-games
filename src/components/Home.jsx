import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/utils";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

    const [recentReviews, setRecentReviews] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchReviews().then(({ reviews }) => {
            setRecentReviews(reviews.slice(0,3))
            setIsLoading(false)
     }  ) 
    }, [])


    return (
    <section>
    <h1>NC games home!</h1>
    <h2>Newest reviews:</h2>
    <>
    {isLoading ? <p>Loading.. </p> :
            <ul>
                    {recentReviews.map((review) => {
                return <li className="reviews" key={review.review_id}>
                <h3>{review.title}</h3>
                <p> Created at: {review.created_at.slice(0, 10)}</p>
            
                <button><Link to = {`/reviews/${review.review_id}`}>See full review!</Link></button>
                </li>;})}
                </ul>}
    </>
    
     </section> );
}
 
export default Home;