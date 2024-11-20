import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/SideBar";
import Header from "../sidebar/Header";
import { LayoutStyle } from "./useStyles";

function Layout() {
  const [open, setOpen] = useState<boolean>(false);

  const ToggleSideBar = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <Box>
      <Sidebar setOpen={setOpen} open={open} />
      <Header ToggleSideBar={ToggleSideBar} />
      <Box sx={LayoutStyle}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
