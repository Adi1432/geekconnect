import { Paper, LinearProgress } from "@mui/material";
import React from "react";

const PostDetail = ({ detail }) => {
  return (
    <>
      {detail !== undefined ? (
        <Paper elevation={5}>
          <img
            src={detail?.image}
            alt="postImage"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "5px",
            }}
          />
        </Paper>
      ) : (
        <LinearProgress />
      )}
    </>
  );
};

export default PostDetail;
