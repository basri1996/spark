import { PropsWithChildren } from "react";
import { useAuth } from "../../context/AuthContext";
import { Box, Button, Typography } from "@mui/material";
import Modal from "./Modal";
import Logo from "../../assets/icons/MainLogo.png";
import { MainLogoStyles } from "../sidebar/useStyles";
import { useNavigate } from "react-router-dom";

interface Props {
  role: string;
}

function ProtectedRoutes({ children, role }: PropsWithChildren<Props>) {
  const { roleChecker } = useAuth();
  const navigate = useNavigate();

  if (!roleChecker(role)) {
    return (
      <Modal title={"Oops!"} isDialogOpen={true} handleDialogClose={() => {}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          <Box component="img" src={Logo} alt="Logo" sx={MainLogoStyles} />

          <Typography sx={{ fontSize: "16px" }}>Unauthorized Access</Typography>
          <Typography sx={{ fontSize: "16px" }}>
            You do not have the necessary permissions to view this page.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => navigate("/")}
              sx={{
                backgroundColor: (theme) => theme.palette.background.default,
                paddingX: "30px",
                border: "1px solid #5080ff",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              Home
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }

  return <>{children} </>;
}

export default ProtectedRoutes;
