import React from "react";
import { Stack, Button } from "@mui/material";
import PostCard from "./PostCard";

const PostList = (props) => {
  return (
    <Stack spacing={2} mt={4} mb={4} alignItems="center">
      {props.posts.map((singlePost, idx) => {
        return <PostCard singlePost={singlePost} key={idx} />;
      })}
      <Button variant="text" onClick={props.loadMore}>
        LOAD MORE...
      </Button>
    </Stack>
  );
};

export default PostList;
