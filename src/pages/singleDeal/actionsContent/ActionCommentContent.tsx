import { Box, Card, Divider, Typography } from "@mui/material";
// import { useAction } from "../../../context/ActionContext";
import { CommentInput, CustomButton, Loader } from "../../../components";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AddCommentIcon from "@mui/icons-material/AddComment";
import useGetDealCommentListQuery from "../queries/useGetDealCommentListQuery";
import { useParams } from "react-router-dom";
import useAddComment from "../mutations/useAddComment";
import { useAuth } from "../../../context/AuthContext";

function ActionCommentContent() {
  const { id } = useParams();
  const { principal } = useAuth();

  const [comment, setComment] = useState("");
  const { data: comments, isFetching } = useGetDealCommentListQuery({ id });
  const { mutate: addComment ,isPending } = useAddComment();

  const handleAddComment = () => {
    if (comment) {
      addComment({ userExternalId: principal?.sub, id, text: comment });
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          height: "250px",
          overflowY: "scroll",
          paddingLeft: "1px",
          paddingY: "1px",
          paddingRight: "10px",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(108, 99, 255, 0.1)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#5080ff",
            borderRadius: "10px",
            transition: "background-color 0.3s ease",
          },
        }}
      >
        {isFetching ? (
          comments?.map((el) => (
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0.5px 0.5px 1.2px 1.2px rgba(37, 90, 234, 0.3)",
                padding: "12px",
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <PersonIcon sx={{ color: "#5080ff", fontSize: 30 }} />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1px" }}
                >
                  <Typography sx={{ fontSize: "11px" }}>
                    {el.createdByUser.fullName}
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    {el.updatedAt}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ backgroundColor: "rgba(169, 191, 250, 0.3)" }} />
              <Typography
                component="p"
                sx={{ fontSize: "16px", opacity: "0.7" }}
              >
                {el.text}
              </Typography>
            </Card>
          ))
        ) : (
          <Loader />
        )}
      </Box>
      <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <CommentInput
            value={comment}
            onChange={setComment}
            label="კომენტარი"
          />
        </Box>
        <CustomButton
          sx={{ borderRadius: 3, height: 40, minWidth: 48 }}
          onClick={handleAddComment}
          disabled={isPending}
        >
          <AddCommentIcon />
        </CustomButton>
      </Box>
    </Box>
  );
}

export default ActionCommentContent;
