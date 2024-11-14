import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/SideBar";
import Header from "./sidebar/Header";
import { useKeycloak } from "@react-keycloak/web";

function Layout() {
  const [open, setOpen] = useState<boolean>(false);
  const { keycloak, initialized } = useKeycloak();

  const ToggleSideBar = () => {
    setOpen((prev: boolean) => !prev);
  };

  useEffect(() => {
    console.log(keycloak);
    keycloak?.login();
  }, []);

  return (
    <Box>
      <Sidebar setOpen={setOpen} open={open} />
      <Header ToggleSideBar={ToggleSideBar} />
      <Box
        sx={{
          backgroundColor: "rgba(241, 245, 249, 1)",
          minHeight: "100vh",
          padding: "30px",
          marginLeft: {
            tablet: "240px",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
