import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "../sidebar/SideBar";
import Header from "../sidebar/Header";
import { LayoutStyle } from "./useStyles";


function Layout({ children }: any) {
  const [open, setOpen] = useState<boolean>(false);

  const ToggleSideBar = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <Box>
      <Sidebar setOpen={setOpen} open={open} />
      <Header ToggleSideBar={ToggleSideBar} />
      <Box sx={LayoutStyle}>{children}</Box>
    </Box>
  );
}

export default Layout;
