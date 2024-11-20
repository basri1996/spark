import { Box, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import {
  ListItemIconStyle,
  SideBarItemMainBox,
  SideBarItemTypography,
  StyledNavLink,
} from "./useStyles";

interface Props {
  closeSidebar: () => void;
  children: React.ReactNode;
  title: string;
  to: string;
}

function SideBarItem({ closeSidebar, children, title, to }: Props) {
  return (
    <Box sx={SideBarItemMainBox}>
      <StyledNavLink
        to={to}
        onClick={closeSidebar}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <ListItemIcon sx={ListItemIconStyle}>{children}</ListItemIcon>
        <Typography sx={SideBarItemTypography}>{title}</Typography>
      </StyledNavLink>
    </Box>
  );
}

export default SideBarItem;
