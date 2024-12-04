import { Box } from "@mui/material";
import { useState } from "react";
import { LayoutStyle } from "./useStyles";
import { Header ,SideBar} from "../../components";

function Layout({ children }: any) {
  const [open, setOpen] = useState<boolean>(false);

  const ToggleSideBar = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <Box>
      <SideBar setOpen={setOpen} open={open} />
      <Header ToggleSideBar={ToggleSideBar} />
      <Box sx={LayoutStyle}>{children}</Box>
    </Box>
  );
}

export default Layout;
