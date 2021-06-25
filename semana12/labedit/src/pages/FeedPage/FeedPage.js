import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostContainer from "../../components/PostContainer/PostContainer";
import CreatePostContainer from "../../components/CreatePostContainer/CreatePostContainer";
import { FeedContainer, PostListContainer } from "./styled";
import Typography from "@material-ui/core/Typography";
import { BASE_URL } from '../../constants/urls';
import useRequestData from "../../hooks/useRequestData";
import { goToPost } from "../../routes/coordinator";
import Loading from "../../components/Loading/Loading";
import GlobalStateContext from "../../global/GlobalStateContext";

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { data: allPosts, getData: getPosts } = useRequestData([], `${BASE_URL}/posts`);
  const { getPostInfos } = useContext(GlobalStateContext)

  useEffect(() => {
    document.title="Home";
  }, [])
  
  const onClickComments = (id) => {
    localStorage.setItem("postId", id)
    goToPost(history, id);
    getPostInfos(id);
  }

  const renderPosts = allPosts[0] && allPosts.map((postInfo) => {
    return (
      <PostContainer key={postInfo.id} postInfo={postInfo} onClickComments={onClickComments} getRenderMethod={getPosts}/>
    )
  })

  return (
    <FeedContainer>
      <Typography variant={"h3"} color={"inherit"} component={"h1"}>
        Feed de Notícias
      </Typography>
      <CreatePostContainer getPosts={getPosts}/>
      <PostListContainer>
        {allPosts.length > 0 ? renderPosts : <Loading />}
      </PostListContainer>
    </FeedContainer>
  );
}

export default FeedPage;