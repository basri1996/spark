import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import Modal from "../components/common/Modal";
import Logo from "../assets/icons/MainLogo.png";
import { MainLogoStyles } from "../components/sidebar/useStyles";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Modal
      title={"Oops!"}
      isDialogOpen={Boolean(error)}
      handleDialogClose={() => {}}
    >
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
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={MainLogoStyles}
          onClick={() => navigate("/")}
        />

        <Typography sx={{ fontSize: "16px" }}>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography sx={{ fontSize: "16px" }}>
          {(error as Error)?.message}
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

export default ErrorPage;