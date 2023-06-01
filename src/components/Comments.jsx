import { fetchCurrentComments } from "../utils/utils"
import { useEffect, useState } from "react";
import "./Comments.css";
import CommentAdder from "./CommentAdder";

const Comments = ({review_id, newComment}) => {


    const [currentComments, setCurrentComments] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchCurrentComments(review_id).then(({ comments }) => {
            setCurrentComments(comments)
            setIsLoading(false)
     }  ) 
    }, [newComment])

    if (currentComments.length==0){return <h2>No current comments</h2>}
   
    return ( <section>
        
        <h1>Comments: </h1>
        
       
            {currentComments.map(comment => {
                return <article className="comments" key={comment.comment_id}>
                    
                    
                   <p>"{comment.body}"</p>
                   <p>Author : {comment.author} at {comment.created_at.slice(0,16)}</p>
                   <p>Votes : {comment.votes}</p>
                  
                    </article>
            })}
        
        </section>
     );
}
 
export default Comments;

