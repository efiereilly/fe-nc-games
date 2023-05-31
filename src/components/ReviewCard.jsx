import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewByID } from "../utils/utils";
import "./ReviewCard.css";
import Comments from "./Comments";
import VoteAdder from "./VoteAdder";



const ReviewCard = () => {
    const { review_id } = useParams();
    const [currentReview, setCurrentReview] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       
        fetchReviewByID(review_id).then(({ review }) => {
          
            setCurrentReview(review)
            setIsLoading(false)
         
        })
            .catch((error) => {
                console.log(error);
            });
    },[]);
        
    

    return (  
        <>
           
          
            {isLoading ? <p>Loading...</p> :
            <article className="singleReview">
                   <h3>{currentReview.title}</h3>
                <img src={currentReview.review_img_url} alt={`image of ${currentReview.review_img_url}`} />
                   <p>{currentReview.review_body}</p>
                   <p> Created at: {currentReview.created_at}</p>
                <p>Game category: {currentReview.category}</p>
                <p>Designer: {currentReview.designer}</p>
                <p>Owner: {currentReview.owner}</p>
            
                <VoteAdder votes={currentReview.votes} review_id = {currentReview.review_id}/>
               <Comments review_id = {review_id}/>
            </article>
            }
            
      </>
    );
}
 
export default ReviewCard;