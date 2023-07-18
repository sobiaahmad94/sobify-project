import React, {useState, useEffect} from "react";
import api from "../services/api";

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  // fetching the comments
  const fetchComments = async () => {
    try {
    const response = await api.get(`/comments/${songId}`);
    setComments(response.data);
    } catch (error) {
    console.error("failed to fetch comments", error);
    }
    };

    // adding comment

  
    
};


return (
  <div>


  </div>
)

export default Comment;