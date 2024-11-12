import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import SideBarItem from "./SideBarItem";
import Logo from "../../../../assets/icons/MainLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import ArchiveIcon from "@mui/icons-material/Archive";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export default function Sidebar({ setOpen, open }: Props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const closeSidebar = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "1.5rem",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{ height: "50px", width: "150px" }}
        />

        <List sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <SideBarItem
            closeSidebar={closeSidebar}
            title={"Inbox"}
            to={"/deals"}
          >
            <ForwardToInboxIcon />
          </SideBarItem>
          <SideBarItem
            closeSidebar={closeSidebar}
            title={"Active"}
            to={"/active"}
          >
            <CircleNotificationsSharpIcon />
          </SideBarItem>
          <SideBarItem
            closeSidebar={closeSidebar}
            title={"On Hold"}
            to={"/on-hold"}
          >
            <PhonePausedIcon />
          </SideBarItem>
          <SideBarItem
            closeSidebar={closeSidebar}
            title={"Archive"}
            to={"/archive"}
          >
            <ArchiveIcon />
          </SideBarItem>
        </List>

        {isMobile && (
          <CloseIcon
            sx={{
              position: "absolute",
              top: 4,
              right: 4,
              color: "#5080ff",
            }}
            onClick={() => setOpen(false)}
          />
        )}
      </Box>
    </Drawer>
  );
}
