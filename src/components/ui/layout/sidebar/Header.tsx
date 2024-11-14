import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import UserLogo from "../../../../assets/icons/HeaderUserLogo.svg";
import Menu from "../../../../assets/icons/menu.svg";
import { useKeycloak } from "@react-keycloak/web";
import PopOver from "../../PopOver";

interface Props {
  ToggleSideBar: () => void;
}

function Header({ ToggleSideBar }: Props) {
  const { keycloak, initialized } = useKeycloak();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl); // Popover is open if anchorEl is set
  const id = open ? "simple-popover" : undefined;

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
        onClick={(event) => handleClick(event)}
      />
      <PopOver
        handleClose={handleClose}
        id={id}
        anchorEl={anchorEl}
        open={open}
      >
        <Button
          sx={(theme) => ({
            fontSize: "12px",
            "&:hover": {
              backgroundColor: theme.palette.background.default,
            },
          })}
          onClick={() => keycloak.logout()}
        >
          Log out
        </Button>
      </PopOver>
    </Box>
  );
}

export default Header;
