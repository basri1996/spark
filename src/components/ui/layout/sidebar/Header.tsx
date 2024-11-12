import { Box } from "@mui/material";
import React from "react";
import UserLogo from "../../../../assets/icons/HeaderUserLogo.svg";
import Menu from "../../../../assets/icons/menu.svg";

interface Props {
  ToggleSideBar: () => void;
}

function Header({ ToggleSideBar }: Props) {
  return (
    <Box
      sx={{
        height: "70px",
        backgroundColor: "rgba(230, 237, 244, 1)",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingX: "1.5rem",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={Menu}
        alt="Menu"
        sx={{ height: "32px", width: "24px" }}
        onClick={ToggleSideBar}
      />
      <Box
        component="img"
        src={UserLogo}
        alt="UserLogo"
        sx={{ height: "48px", width: "48px" }}
      />
    </Box>
  );
}

export default Header;
