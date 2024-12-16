import { Box } from "@mui/material";
import { Loader } from "../../../../components";
import { useRef } from "react";
import useGetDealCommentListQuery from "../../queries/useGetDealCommentListQuery";
import { useParams } from "react-router-dom";
import SingleComment from "./SingleComment";
import { CommentScrollDiv } from "../../useStyles";
import CommentInputComponent from "./CommentInputComponent";

function ActionCommentContent() {
  const { id } = useParams();
  const { data: comments, isFetching } = useGetDealCommentListQuery({ id });
  const ScrollRef = useRef<HTMLElement | null>(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box ref={ScrollRef} sx={CommentScrollDiv}>
        {!isFetching ? (
          comments?.reverse()?.map((el) => <SingleComment {...el} />)
        ) : (
          <Loader />
        )}
      </Box>
      <CommentInputComponent />
    </Box>
  );
}

export default ActionCommentContent;
