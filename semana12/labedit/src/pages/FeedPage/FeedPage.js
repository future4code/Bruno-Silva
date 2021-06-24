import React from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostContainer from "../../components/PostContainer/PostContainer";
import CreatePostContainer from "../../components/CreatePostContainer/CreatePostContainer";
import { FeedContainer, PostListContainer } from "./styled";
import Typography from "@material-ui/core/Typography";
import { BASE_URL } from '../../constants/urls';
import useRequestData from "../../hooks/useRequestData";
import { goToPost } from "../../routes/coordinator";

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const {data: allPosts, getData: getPosts} = useRequestData([], `${BASE_URL}/posts`);
  
  const onClickComments = (id) => {
    localStorage.setItem("postId", id)
    goToPost(history, id);
  }

  const renderPosts = allPosts[0] && allPosts.map((postInfo) => {
    return (
      <PostContainer key={postInfo.id} postInfo={postInfo} onClickComments={onClickComments} getPosts={getPosts}/>
    )
  })

  return (
    <FeedContainer>
      <Typography variant={"h3"} color={"inherit"} component={"h1"}>
        Feed de Notícias
      </Typography>
      <CreatePostContainer getPosts={getPosts}/>
      <PostListContainer>
        {renderPosts}
      </PostListContainer>
    </FeedContainer>
  );
}

export default FeedPage;