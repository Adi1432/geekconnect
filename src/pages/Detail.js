import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import PostDetail from "../components/PostDetail";
import { Container, Stack, Typography } from "@mui/material";
import { DummyApi } from "../Util";
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(
    (_) => {
      (async (_) => {
        const res = await DummyApi.get(`post/${id}`);
        const data = res.data;
        setDetail(data);
      })();
      (async (_) => {
        const res = await DummyApi.get(`post/${id}/comment`);
        const data = res.data.data;
        setComments(data);
      })();
    },
    [id]
  );
  return (
    <>
      <Container style={{ maxWidth: "520px" }}>
        <Stack mt={4} gap={4}>
          <PostDetail detail={detail} />
          <Typography variant="h6">
            {detail.text}

            <Typography variant="caption">
              -
              <Link to={`/profile/${detail?.owner?.id}`}>
                {detail?.owner?.firstName} {detail?.owner?.lastName}
              </Link>
            </Typography>
          </Typography>
          <CommentList commentList={comments} />
        </Stack>
      </Container>
    </>
  );
};

export default Detail;
