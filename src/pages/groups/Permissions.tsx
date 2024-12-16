import { Box, Chip, Typography } from "@mui/material";
import { useStyles } from "./useStyles";
import { CustomButton } from "../../components";
import KeyIcon from "@mui/icons-material/Key";
import AddIcon from "@mui/icons-material/Add";

function Permissions() {
  const styles = useStyles();

  const permissions = [
    { name: "View : Dashboard" },
    { name: "Manage : Users" },
    { name: "Edit : Settings" },
    { name: "View : Dashboard" },
    { name: "View : Dashboard" },
    { name: "View : Dashboard" },
    { name: "View : Dashboard" },
    { name: "View : Dashboard" },
    { name: "View : Dashboard" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={styles.GroupsSecondaryBoxStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ ...styles.GroupsTypographyStyles, paddingX: "10px" }}
          >
            Group Permissions
          </Typography>
        </Box>

        <Box sx={styles.GroupHeaderRightBox}>
          <CustomButton onClick={() => {}} sx={styles.GroupIconBox}>
            <KeyIcon />
            <AddIcon />
          </CustomButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          overflowY: "scroll",
          paddingX: "10px",
          gap: 1,
          height: "80px",
          paddingTop: "4px",
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
        {permissions.map((permission, index) => (
          <Chip
            key={index}
            label={permission.name.toUpperCase()}
            sx={{
              padding: "4px 12px",
              fontSize: "16px",
              fontWeight: 600,
              background: (theme) => theme.palette.background.default,
              color: (theme) => theme.palette.primary.main,
              letterSpacing: "0.2px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Permissions;
