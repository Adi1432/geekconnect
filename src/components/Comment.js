import { Paper, Stack, Typography, Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Comment = ({ singleComment }) => {
  return (
    <>
      <Paper>
        <Stack py={1} px={4}>
          <Stack direction="row" gap={2}>
            <Link to={`/profile/${singleComment?.owner?.id}`}>
              <Avatar alt="userPic" src={singleComment?.owner?.picture} />
            </Link>
            <Stack>
              <Link to={`/profile/${singleComment?.owner?.id}`}>
                <Typography variant="body1">
                  {singleComment?.owner?.firstName}{" "}
                  {singleComment?.owner?.lastName}
                </Typography>
              </Link>

              <Typography variant="caption">
                {moment(singleComment?.publishDate).fromNow()}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="h6">{singleComment?.message}</Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default Comment;
