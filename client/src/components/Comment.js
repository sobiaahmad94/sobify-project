import React, { useState, useEffect } from "react";
import api from "../services/api";

// styles
import styled from "styled-components";

const StyledCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

`;

const StyledTextArea = styled.textarea`
  display: flex;
  width: 45%;
  height: 80px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 4px solid rgba(29,185, 84);
  border-radius: 4px;
  background-color: rgba(0, 0, 0);
  resize: none;
  color: rgba(29,185, 84);
  
`;

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px;
  align-items: center;
`;

const StyledUlComment = styled.ul`
  align-items: center;
`;

function Comment({ songId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // takes a func and dependency array is empty as when it first renders or whatever that's when I want fetchComments() to run I think
  useEffect(() => {
    fetchComments();
  }, []);

  // allows the code lines to run in the background and doesn't block other code off or anything
  const fetchComments = async () => {
    try {
        // expects a promise await is meaning it's checking the promise is made or broken
      const response = await api.get(`/comments/${songId}`);
      setComments(response.data);
      // just a catch statement just in case there's an error
    } catch (error) {
      console.error("failed to fetch thecomments", error);
  }
};

  const addComment = async () => {
    try {
      const response = await api.post(`/comments/${songId}`, { text: newComment });
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("failed to add the comment", error);
    }
};

{/* comment box is a textarea not input as it makes more sensee I think*/}
  return (
    <StyledCommentContainer>
      <StyledTextArea placeholder="Please leave a comment :)" rows="3" cols="20" value={newComment} onChange={(event) => setNewComment(event.target.value)}></StyledTextArea>
      <StyledButton onClick={addComment}>Add Comment</StyledButton>
      {/* map is used to "map" over app the comments, shows each one in the li */}
      <StyledUlComment>{comments.map((comment) => (
    <li key={comment._id}>{comment.text}</li>
        ))}
      </StyledUlComment>
    </StyledCommentContainer>
  );
}

export default Comment;
