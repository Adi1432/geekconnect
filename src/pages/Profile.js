import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileDetail from "../components/profileDetail";
import PostList from "../components/PostList";
import { DummyApi } from "../Util";
import { Container, Typography } from "@mui/material";

const Profile = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [detail, SetDetail] = useState({});

  useEffect(() => {
    (async () => {
      const res = await DummyApi.get(`/user/${id}`);
      const data = res.data;
      SetDetail(data);
    })();
    (async () => {
      const res = await DummyApi.get(`/user/${id}/post`);
      const data = res.data.data;
      setPosts(data);
      setPageNum(1);
    })();
  }, [id]);

  const loadMore = async () => {
    const response = await DummyApi.get(`/user/${id}/post?page=${pageNum}`);
    const postArr = response?.data?.data ?? [];
    setPosts((oldPost) => [...oldPost, ...postArr]);
    setPageNum((page) => page + 1);
  };

  return (
    <>
      <Container>
        <ProfileDetail detail={detail} />
        <hr />
        <Typography variant="h6" align="center" mt={4}>
          ALL posts
        </Typography>
        <PostList posts={posts} loadMore={loadMore} />
      </Container>
    </>
  );
};

export default Profile;
