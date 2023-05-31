import { useEffect, useState } from "react";
import { incrementVote } from "../utils/utils";

const VoteAdder = ({votes , review_id}) => {

const [err, setErr] = useState(null)    
const [currentVotes, setCurrentVotes] = useState (votes)

   const handleAddClick = () => {
    setCurrentVotes(currentVotes => +currentVotes+1)
    incrementVote(1,review_id)
    .catch(err => {
        setCurrentVotes((currentVotes) => currentVotes - 1);
        setErr('Something went wrong, please try again.');
      });
   
   }

   const handleMinusClick = () => {
    setCurrentVotes(currentVotes => +currentVotes-1)
    incrementVote(-1,review_id)
    .catch(err => {
        setCurrentVotes((currentVotes) => currentVotes + 1);
        setErr('Something went wrong, please try again.');
      });
   

   }

   
    return ( 
        <>
        <button onClick={handleAddClick}>👍</button>
        <button  onClick={handleMinusClick}>👎</button>
        <p>Votes: {currentVotes}</p>
        {err ? <p>{err}</p> : null}
        </>
     );
}
 
export default VoteAdder;

