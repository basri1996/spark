import { Box, Typography } from "@mui/material";
import SingleUser from "./SingleUser";
import { useStyles } from "./useStyles";
import { CustomButton, Modal, SearchInput } from "../../components";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useState } from "react";
import AssignUsersForm from "./AssignUsersForm";

function Users() {
  const styles = useStyles();
  const [expandedModalVisible, setExpandedModalVisible] = useState(false);

  const users = [
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },

    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
    {
      name: "Datuna Basiladze",
      fullName: "string",
      shortName: "bass",
      email: "datuna@gmal.com",
    },
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
            Group Users
          </Typography>
        </Box>

        <Box sx={styles.GroupHeaderRightBox}>
          <Box sx={{ width: "200px" }}>
            <SearchInput
              type="text"
              placeholder="Search"
              value={""}
              onChange={() => {}}
              TextInputRef={""}
            />
          </Box>
          <CustomButton
            onClick={() => {
              setExpandedModalVisible(true);
            }}
            sx={styles.GroupIconBox}
          >
            <PersonAddAltIcon />
          </CustomButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
            xxl: "repeat(6, 1fr)",
          },
          gap: 2,
          height: "50vh",
          overflowY: "scroll",
          paddingX: "10px",
          paddingY: "4px",
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
        {users.map((user) => (
          <SingleUser {...user} />
        ))}
      </Box>
      <Modal
        title={"Add User"}
        isDialogOpen={expandedModalVisible}
        handleDialogClose={() => {
          setExpandedModalVisible(false);
        }}
      >
        <AssignUsersForm />
      </Modal>
    </Box>
  );
}

export default Users;
