import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/SideBar";
import Header from "./sidebar/Header";
import { useAuth } from "../../../context/AuthContext";

interface Props {}

function Layout(props: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const ToggleSideBar = () => {
    setOpen((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (!logIn) {
      navigate("/sign-in");
    }
  }, [logIn, navigate]);

  return (
    <Box>
      {logIn && (
        <>
          <Sidebar setOpen={setOpen} open={open} />
          <Header ToggleSideBar={ToggleSideBar} />
        </>
      )}
      <Box
        sx={{
          backgroundColor: "rgba(241, 245, 249, 1)",
          height: "100vh",
          padding: "30px",
          marginLeft: {
            tablet: logIn ? "240px" : "0px",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
