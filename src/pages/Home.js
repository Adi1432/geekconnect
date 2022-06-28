import React, { useState } from "react";
import Container from "@mui/material/Container";
import PostList from "../components/PostList";

import { useEffect } from "react";
import { DummyApi } from "../Util";
import Welcome from "../components/Welcome";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  const loadMore = async () => {
    const response = await DummyApi.get(`/post?page=${pageNum}`);
    const postArr = response?.data?.data ?? [];
    setPosts((oldPost) => [...oldPost, ...postArr]);
    setPageNum((page) => page + 1);
  };
  useEffect(() => {
    (async () => {
      const response = await DummyApi.get(`/post`);
      const data = response?.data?.data;
      setPosts(data);
      setPageNum(1);
    })();
  }, []);

  return (
    <>
      <Container fixed>
        <Welcome />
        <PostList posts={posts} loadMore={loadMore} />
      </Container>
    </>
  );
};

export default Home;
