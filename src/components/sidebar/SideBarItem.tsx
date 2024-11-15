import { Box, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  closeSidebar: () => void;
  children: React.ReactNode;
  title: string;
  to: string;
}

function SideBarItem({ closeSidebar, children, title, to }: Props) {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "rgba(108, 99, 255, 0.1)",
        },
      }}
    >
      <NavLink
        to={to}
        onClick={closeSidebar}
        style={({ isActive }) => ({
          display: "flex",
          alignItems: "center",
          padding: "12px 16px",
          borderRadius: "8px",
          width: "100%",
          backgroundColor: isActive ? "rgba(108, 99, 255, 0.1)" : "transparent",
          color: isActive ? "#5080ff" : "rgba(55, 65, 81, 1)",
          textDecoration: "none",
        })}
      >
        <ListItemIcon
          sx={{
            minWidth: "40px",
            color: (theme) =>
              theme.palette.mode === "light" ? "inherit" : "#5080ff",
          }}
        >
          {children}
        </ListItemIcon>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
          }}
        >
          {title}
        </Typography>
      </NavLink>
    </Box>
  );
}

export default SideBarItem;
