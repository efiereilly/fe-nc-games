import { useEffect, useState } from "react";
import { fetchAllReviews } from "../utils/utils";

const Home = () => {

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
    <h1>NC games home!</h1>
    <h2>Newest reviews:</h2>
    <p>
    {isLoading ? <p>Loading.. </p> :
            <ul>
                    {allReviews.slice(0,3).map((review) => {
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