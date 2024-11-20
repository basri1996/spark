import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import SideBarItem from "./SideBarItem";
import Logo from "../../assets/icons/MainLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useNavigate } from "react-router-dom";
import {
  MainLogoStyles,
  SideBarCloseIcon,
  SideBarList,
  SideBarMainBox,
  SideBarSecondaryBox,
} from "./useStyles";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export default function Sidebar({ setOpen, open }: Props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

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
      sx={SideBarMainBox}
    >
      <Box sx={SideBarSecondaryBox}>
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={MainLogoStyles}
          onClick={() => navigate("/deals")}
        />

        <List sx={SideBarList}>
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
          <CloseIcon sx={SideBarCloseIcon} onClick={() => setOpen(false)} />
        )}
      </Box>
    </Drawer>
  );
}
