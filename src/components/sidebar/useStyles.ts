import { styled, Theme } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HeaderMainBox = {
  height: "70px",
  backgroundColor: "rgba(230, 237, 244, 1)",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  paddingX: "1.5rem",
  alignItems: "center",
};

export const SideBarMainBox = {
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
  },
};

export const SideBarSecondaryBox = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "1.5rem",
  gap: "1rem",
};

export const SideBarCloseIcon = {
  position: "absolute",
  top: 4,
  right: 4,
  color: "#5080ff",
};

export const MainLogoStyles = {
  height: "50px",
  width: "150px",
  cursor: "pointer",
};

export const SideBarList = {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

export const SideBarItemMainBox = {
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "rgba(108, 99, 255, 0.1)",
  },
};

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  borderRadius: "8px",
  width: "100%",
  textDecoration: "none",
  "&.active": {
    backgroundColor: "rgba(108, 99, 255, 0.1)",
    color: "#5080ff",
  },
  "&:not(.active)": {
    backgroundColor: "transparent",
    color: "#616161",
  },
}));

export const ListItemIconStyle = {
  minWidth: "40px",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "inherit" : "#5080ff",
};

export const SideBarItemTypography = {
  fontWeight: 500,
  fontSize: "1rem",
};
