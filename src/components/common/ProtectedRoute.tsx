import { PropsWithChildren } from "react";
import { useAuth } from "../../context/AuthContext";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/icons/MainLogo.png";
import { MainLogoStyles } from "../sidebar/useStyles";
import { useNavigate } from "react-router-dom";
import { CustomButton, Modal } from "../../components";

interface Props {
  role: string;
}

function ProtectedRoute({ children, role }: PropsWithChildren<Props>) {
  const { roleChecker } = useAuth();
  const navigate = useNavigate();

  if (!roleChecker(role)) {
    return (
      <Modal isCloseble={false} isDialogOpen={true}>
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

          <Typography sx={{ fontSize: "16px" }}>
            არაავტორიზებული წვდომა
          </Typography>
          <Typography
            sx={{ fontSize: "16px", width: "70%", textAlign: "center" }}
          >
            თქვენ არ გაქვთ საჭირო ნებართვები ამ გვერდის სანახავად.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CustomButton onClick={() => navigate("/")}>Back</CustomButton>
          </Box>
        </Box>
      </Modal>
    );
  }

  return <>{children} </>;
}

export default ProtectedRoute;
