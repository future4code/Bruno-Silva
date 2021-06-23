import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../constants/urls'; 
import CreateCommentContainer from "../../components/CreateCommentContainer/CreateCommentContainer";
import { PostCommentContainer, CommentListContainer } from "./styled";
import Typography from "@material-ui/core/Typography";
import CommentContainer from '../../components/CommentContainer/CommentContainer';

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);

  const renderComments = comments[0] && comments.map((commentInfo) => {
    return <CommentContainer key={commentInfo.id} commentInfo={commentInfo}/>
  })

  return (
    <PostCommentContainer>
      <Typography variant={"h3"} color={"inherit"} component={"h1"}>
        Comentários
      </Typography>
      <CreateCommentContainer />
      <CommentListContainer>
        {renderComments}
      </CommentListContainer>
    </PostCommentContainer>
  );
}

export default PostPage;