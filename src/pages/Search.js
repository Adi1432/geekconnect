import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { DummyApi } from "../Util";
import Container from "@mui/material/Container";
import PostList from "../components/PostList";
import SearchBasicCard from "../components/SearchBasicCard";
import { LinearProgress } from "@mui/material";

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [, setPageNum] = useState(0);
  useEffect(() => {
    setPosts([]);
    (async () => {
      if (searchParams.has("q")) {
        const res = await DummyApi.get(`/tag/${searchParams.get("q")}/post`);
        setPosts(res.data.data);
        setPageNum(1);
      } else {
        navigate("/");
      }
    })();
  }, [searchParams, navigate]);
  const loadMore = async () => {
    const response = await DummyApi.get(`/tag/${searchParams.get("q")}/post`);
    const postArr = response?.data?.data ?? [];
    setPosts((oldPost) => [...oldPost, ...postArr]);
    setPageNum((page) => page + 1);
  };
  return (
    <>
      <Container fixed>
        <SearchBasicCard query={searchParams.get("q")} />
        {posts.length === 0 ? (
          <LinearProgress style={{ margin: "1.5rem 0.75rem 1.5rem 0.75rem" }} />
        ) : (
          <PostList posts={posts} loadMore={loadMore} />
        )}
      </Container>
    </>
  );
};

export default Search;
