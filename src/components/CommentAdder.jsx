import { useState } from "react";
import { postNewComment } from "../utils/utils";
import Comments from "./Comments";

const CommentAdder = ({ review_id }) => {
  const [newComment, setNewComment] = useState({
    username: "cooljmessy",
    body: "",
  });

  const [isPosted, setIsPosted] = useState(true);
  const [err, setErr] = useState(null);

  function handleCommentChange(event) {
    setNewComment((currComment) => {
      return { ...currComment, [event.target.id]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newComment.body.length === 0 || newComment.username.length === 0) {
      setErr("Comment and username field required");
    } else {
      setErr(null);

      setIsPosted(false);

      postNewComment(newComment, review_id)
        .then((comment) => {
          setIsPosted(true);
          setNewComment((currComment) => {
            return { username: "", body: "" };
          });
        })
        .catch((err) => {
          setIsPosted(true);

          setErr("Something went wrong, please try again.");
        });
    }
  }
  
 

  return (
    <>
      <section>
        <form id="new comment" onSubmit={handleSubmit}>
          <label htmlFor="body">Comment:</label>
          <textarea
            id="body"
            type="text"
            value={newComment.body}
            onChange={handleCommentChange}
            placeholder="write comment"
          ></textarea>
          <label htmlFor="username">User:</label>
          {/* <input
                     id="username"
                     type="text"
                     value={newComment.username}
                     onChange={handleCommentChange}
                     placeholder="author.."
                     ></input> */}

          <select name="users" id="username" value={newComment.username}
                     onChange={handleCommentChange}>
            <option value="cooljmessy">cooljmessy</option>
            <option value="jessjelly">jessjelly</option>
           
          </select>
          <button id="post-comment" type="submit">
            Post comment!
          </button>
          {isPosted == false && <p>POSTING!</p>}
        </form>

        {err ? <p>{err}</p> : null}
      </section>
      <Comments review_id={review_id} newComment={newComment}></Comments>
    </>
  );
};

export default CommentAdder;
