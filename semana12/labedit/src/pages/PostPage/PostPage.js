import React, { useContext, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../constants/urls';
import CreateCommentContainer from "../../components/CreateCommentContainer/CreateCommentContainer";
import { PostPageContainer, PostCommentContainer, CommentListContainer } from "./styled";
import Typography from "@material-ui/core/Typography";
import CommentContainer from '../../components/CommentContainer/CommentContainer';
import Loading from "../../components/Loading/Loading";
import GlobalStateContext from "../../global/GlobalStateContext";
import PostContainer from "../../components/PostContainer/PostContainer";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const { data: comments, getData: getComments } = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);
  const { onePost } = useContext(GlobalStateContext);

  useEffect(() => {
    document.title = "Post";
  }, [])

  const renderComments = comments[0] && comments.map((commentInfo) => {
    return <CommentContainer key={commentInfo.id} commentInfo={commentInfo} getRenderMethod={getComments} />
  })

  return (
    <PostPageContainer>
      <Typography variant={"h3"} color={"inherit"} component={"h1"}>
        Comentários
      </Typography>
      <PostContainer postInfo={onePost[0]} />
      <PostCommentContainer>
        <CreateCommentContainer getComments={getComments} />
        <CommentListContainer>
          {comments.length > 0 ? renderComments : <Loading />}
        </CommentListContainer>
      </PostCommentContainer>
    </PostPageContainer>

  );
}

export default PostPage;