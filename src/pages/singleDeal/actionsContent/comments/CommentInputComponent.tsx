import { Box } from "@mui/material";
import { useState } from "react";
import { CommentInput, CustomButton } from "../../../../components";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { useAuth } from "../../../../context/AuthContext";
import { useParams } from "react-router-dom";
import useAddComment from "../../mutations/useAddComment";


function CommentInputComponent() {
  const [comment, setComment] = useState("");
  const { mutate: addComment, isPending } = useAddComment();
  const { id } = useParams();
  const { principal } = useAuth();

  const handleAddComment = () => {
    if (comment) {
      addComment({ userExternalId: principal?.sub, id, text: comment });
      setComment("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <CommentInput value={comment} onChange={setComment} label="კომენტარი" />
      </Box>
      <CustomButton
        sx={{ borderRadius: 3, height: 40, minWidth: 48 }}
        onClick={handleAddComment}
        disabled={isPending}
      >
        <AddCommentIcon />
      </CustomButton>
    </Box>
  );
}

export default CommentInputComponent;
