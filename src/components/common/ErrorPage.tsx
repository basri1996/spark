import { Box, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import Logo from "../../assets/icons/MainLogo.png";
import { MainLogoStyles } from "../sidebar/useStyles";
import { CustomButton, Modal } from "../../components";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Modal
      isDialogOpen={Boolean(error)}
      handleDialogClose={() => {}}
      isCloseble={false}
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

        <Typography
          sx={{ fontSize: "16px", width: "70%", textAlign: "center" }}
        >
          უკაცრავად, მოხდა მოულოდნელი შეცდომა.
        </Typography>
        <Typography sx={{ fontSize: "16px" }}>
          {(error as Error)?.message}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton onClick={() => navigate("/")}>Back</CustomButton>
        </Box>
      </Box>
    </Modal>
  );
}

export default ErrorPage;
