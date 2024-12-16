import { Card, IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomButton } from "../../components";
import { useNavigate } from "react-router-dom";

const GroupCard = () => {
  const navigate = useNavigate()

  const role = {
    name: "Admin",
    description:
      "The administrator of the admin panel has the possibility to add users, assign roles and disable or enable permissions for the specific users.",
    permissions: [
      { name: "View : Dashboard" },
      { name: "Manage : Users" },
      { name: "Edit : Settings" },
      { name: "View : Dashboard" },
      { name: "View : Dashboard" },
      { name: "View : Dashboard" },
      { name: "View : Dashboard" },
      { name: "View : Dashboard" },
      { name: "View : Dashboard" },
    ],
  };

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
      onClick={()=>navigate("/groups/wfwafwa")}
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
        >
          {role.name}
        </Typography>
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
          overflowY: "scroll",
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
          {role.description ?? ""}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton>View more</CustomButton>
      </Box>
    </Card>
  );
};

export default GroupCard;
