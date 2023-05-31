import { fetchCurrentComments } from "../utils/utils"
import { useEffect, useState } from "react";

const Comments = ({review_id}) => {


    const [currentComments, setCurrentComments] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchCurrentComments(review_id).then(({ comments }) => {
            setCurrentComments(comments)
            setIsLoading(false)
     }  ) 
    }, [])

    if (currentComments.length==0){return <h2>No current comments</h2>}
   
    return ( <section>
        <h1>Comments: </h1>
        
        <ul>
            {currentComments.map(comment => {
                return <li className="comments" key={comment.comment_id}>
                    
                    
                   <p>"{comment.body}"</p>
                   <p>Author : {comment.author} at {comment.created_at.slice(0,16)}</p>
                   <p>Votes : {comment.votes}</p>
                  
                    </li>
            })}
        </ul>
        </section>
     );
}
 
export default Comments;