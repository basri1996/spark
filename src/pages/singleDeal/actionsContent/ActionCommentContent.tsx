import { Box, Card, Divider, Typography } from "@mui/material";
// import { useAction } from "../../../context/ActionContext";
import { CommentInput, CustomButton } from "../../../components";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AddCommentIcon from "@mui/icons-material/AddComment";

function ActionCommentContent() {
//   const { setActionType } = useAction();
  const [comment, setComment] = useState("");

  const arr = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          height: "250px",
          overflow: "scroll",
          padding: "15px",
        }}
      >
        {arr.map((el, index) => (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: index % 2 !== 0 ? "flex-end" : "flex-start",
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0.5px 0.5px 1.2px 1.2px rgba(37, 90, 234, 0.3)",
                padding: "12px",
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                width: "65%",
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
                  <Typography sx={{ fontSize: "8px" }}>Datuna</Typography>
                  <Typography sx={{ fontSize: "8px" }}>
                    12/12/2024 00:20
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ backgroundColor: "rgba(169, 191, 250, 0.3)" }} />
              <Typography
                component="p"
                sx={{ fontSize: "12px", opacity: "0.7" }}
              >
                hello this lead was redirected from call to branch
              </Typography>
            </Card>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <CommentInput
            value={comment}
            onChange={setComment}
            label="კომენტარი"
          />
        </Box>
        <CustomButton sx={{ borderRadius: 3, height: 40, minWidth: 48 }}>
          <AddCommentIcon />
        </CustomButton>
      </Box>
    </Box>
  );
}

export default ActionCommentContent;
