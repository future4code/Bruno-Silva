import React, { useState } from 'react';
import GlobalStateContext from './GlobalStateContext';
import useRequestData from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';

export const GlobalState = (props) => {
  const token = localStorage.getItem("token");
  const [logoutButtonText, setLogoutButtonText] = useState(token ? "Logout" : "");
  const {data: allPosts} = useRequestData([], `${BASE_URL}/posts`);
  const [onePost, setOnePost] = useState([])

  const getPostInfos = (id) => {
    const arrayOnePost = allPosts.filter((post) => {
      if (post.id === id) {
        return true
      } else {
        return false
      }
    })

    setOnePost(arrayOnePost)
  }

  const data = {
    logoutButtonText,
    onePost,
    setLogoutButtonText,
    getPostInfos, 
  }

  return <GlobalStateContext.Provider value={data}>
    {props.children}
  </GlobalStateContext.Provider>
}

export default GlobalState;