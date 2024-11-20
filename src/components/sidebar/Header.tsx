import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import UserLogo from "../../assets/icons/HeaderUserLogo.svg";
import Menu from "../../assets/icons/menu.svg";
import { useKeycloak } from "@react-keycloak/web";
import PopOver from "../common/PopOver";
import { HeaderButton, HeaderMainBox } from "./useStyles";

interface Props {
  ToggleSideBar: () => void;
}
function Header({ ToggleSideBar }: Props) {
  const { keycloak } = useKeycloak();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Button sx={HeaderButton} onClick={() => keycloak.logout()}>
          Log out
        </Button>
      </PopOver>
    </Box>
  );
}

export default Header;
