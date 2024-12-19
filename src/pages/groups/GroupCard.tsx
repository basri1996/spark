import { Card, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomButton } from "../../components";
import { useNavigate } from "react-router-dom";

const GroupCard = ({ name, description ,id}: any) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            color: "black",
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >{name}</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            color="primary"
            sx={{ background: (theme) => theme.palette.background.default }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color="primary"
            sx={{ background: (theme) => theme.palette.background.default }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          height: "100px",
          overflowY: "auto",
        }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            color: "#616161",
            fontSize: "1rem",
            lineHeight: "1.625",
          }}
        >
          {description ?? ""}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton onClick={() => navigate(`/groups/${id}`)}>
          View more
        </CustomButton>
      </Box>
    </Card>
  );
};

export default GroupCard;
