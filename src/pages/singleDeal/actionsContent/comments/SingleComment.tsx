import { Box, Card, Divider, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { ICommentObject } from "../../types";

function SingleComment({ createdByUser, updatedAt, text }: ICommentObject) {
  return (
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <Typography sx={{ fontSize: "11px" }}>
            {createdByUser.fullName}
          </Typography>
          <Typography sx={{ fontSize: "11px" }}>{updatedAt}</Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "rgba(169, 191, 250, 0.3)" }} />
      <Typography component="p" sx={{ fontSize: "16px", opacity: "0.7" }}>
        {text}
      </Typography>
    </Card>
  );
}

export default SingleComment;
