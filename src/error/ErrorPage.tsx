import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Modal from "../components/common/Modal";

function ErrorPage() {
  const error = useRouteError();

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
        <Typography sx={{ fontSize: "16px" }}>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography sx={{ fontSize: "16px" }}>
          {(error as Error)?.message}
        </Typography>
      </Box>
    </Modal>
  );
}

export default ErrorPage;
