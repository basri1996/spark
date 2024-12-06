import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import UserLogo from "../../assets/icons/HeaderUserLogo.svg";
import Menu from "../../assets/icons/menu.svg";
import { useKeycloak } from "@react-keycloak/web";
import { HeaderMainBox } from "./useStyles";
import PortraitIcon from "@mui/icons-material/Portrait";
import { CustomButton, PopOver } from "../../components";
import { useAuth } from "../../context/AuthContext";

interface Props {
  ToggleSideBar: () => void;
}
function Header({ ToggleSideBar }: Props) {
  const { keycloak } = useKeycloak();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { principal } = useAuth();

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={HeaderMainBox}>
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
        onClick={(event) => handleClick(event)}
      />
      <PopOver
        handleClose={handleClose}
        id={id}
        anchorEl={anchorEl}
        open={open}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 1 }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <PortraitIcon sx={{ color: "#5080ff" }} />
            <Typography>{principal?.preferred_username}</Typography>
          </Box>
          <Divider />
          <CustomButton onClick={() => keycloak.logout()}>Log out</CustomButton>
        </Box>
      </PopOver>
    </Box>
  );
}

export default Header;
