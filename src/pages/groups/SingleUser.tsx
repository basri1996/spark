import { Box, Card, Typography } from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";
import UserInfo from "../../components/common/UserInfo";

function SingleUser({ name, fullName, shortName, email }: any) {
  return (
    <Card
      sx={{
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        height: "220px",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <PortraitIcon sx={{ color: "#5080ff" }} />
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {fullName}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
      >
        <UserInfo title={"სახელი"} text={name || "-"} />
        <UserInfo title={"მოკლე სახელი"} text={shortName || "-"} />
        <UserInfo title={"მეილი"} text={email || "-"} />
      </Box>
    </Card>
  );
}

export default SingleUser;
