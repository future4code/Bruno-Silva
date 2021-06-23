import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostContainer from "../../components/PostContainer/PostContainer";
import CreatePostContainer from "../../components/CreatePostContainer/CreatePostContainer";
import { FeedContainer, PostListContainer } from "./styled";
import Typography from "@material-ui/core/Typography";
import { BASE_URL } from '../../constants/urls';
import useRequestedData from "../../hooks/useRequestedData";

const FeedPage = () => {
  useProtectedPage();
  const allPosts = useRequestedData([], `${BASE_URL}/posts`);

  const renderPosts = allPosts[0] && allPosts.map((postInfo) => {
    return (
      <PostContainer key={postInfo.id} postInfo={postInfo} />
    )
  })

  return (
    <FeedContainer>
      <Typography variant={"h3"} color={"inherit"} component={"h1"}>
        Feed de Notícias
      </Typography>
      <CreatePostContainer />
      <PostListContainer>
        {renderPosts}
      </PostListContainer>
    </FeedContainer>
  );
}

export default FeedPage;