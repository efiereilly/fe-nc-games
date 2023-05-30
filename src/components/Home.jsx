import { useEffect, useState } from "react";
import { fetchAllReviews } from "../utils/utils";
import "./home.css";

const Home = () => {

    const [recentReviews, setRecentReviews] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAllReviews().then(({ reviews }) => {
            setRecentReviews(reviews.slice(0,3))
            setIsLoading(false)
     }  ) 
    }, [])

    return (
    <section>
    <h1>NC games home!</h1>
    <h2>Newest reviews:</h2>
    <p>
    {isLoading ? <p>Loading.. </p> :
            <ul>
                    {recentReviews.map((review) => {
                return <li className="reviews" key={review.review_id}>
                <h3>{review.title}</h3>
                <p> Created at: {review.created_at.slice(0, 10)}</p>
            
                <button>See full review!</button>
                </li>;})}
                </ul>}
    </p>
    
     </section> );
}
 
export default Home;