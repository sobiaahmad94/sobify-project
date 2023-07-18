import React, {useState, useEffect} from "react";
import api from "../services/api";

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  // fetching the comments func
  const fetchComments = async () => {
    try {
    const response = await api.get(`/comments/${songId}`);
    setComments(response.data);
    } catch (error) {
    console.error("failed to fetch comments", error);
    }
    };

    // add comment func
    const addComment = async () => {
      try {
      const response = await api.post(`/comments/${songId}`, { text: newComment });
      setComments([...comments, response.data]);
      
      setNewComment("");

      } catch (error) {
      console.error("failed to add comment", error);
      }
      };
  
};


return (
  <div>
    <textarea rows="4" cols="40" value={newComment} 
    onChange={(event) => setNewComment(event.target.value)}></textarea>

    <button onClick={addComment}>Add Comment</button>

    <ul> 
    {comments.map((comment) => (
    <li key={comment._id}>{comment.text}</li>
    ))}
    </ul>
  </div>
)

export default Comment;