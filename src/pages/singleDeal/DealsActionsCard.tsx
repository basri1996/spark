import { Box, Card, CardContent, Typography, Button } from "@mui/material";

interface Props {}

function DealsActionsCard({}: Props) {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid #00000014",
        borderLeft: "1px solid #00000014",
        paddingX: {
          md: "50px",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            width: "100%",
            border: "1px solid #5080ff",
            borderRadius: 2,
            cursor: "pointer",
            color: "#5080ff",
            minWidth: "300px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#5080ff",
              color: "#fff",
            },
          }}
        >
          <Typography variant="body1">Call</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            width: "100%",
            border: "1px solid #5080ff",
            borderRadius: 2,
            cursor: "pointer",
            color: "#5080ff",
            minWidth: "300px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#5080ff",
              color: "#fff",
            },
          }}
        >
          <Typography variant="body1">Modify</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            width: "100%",
            border: "1px solid #5080ff",
            borderRadius: 2,
            cursor: "pointer",
            color: "#5080ff",
            minWidth: "300px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#5080ff",
              color: "#fff",
            },
          }}
        >
          <Typography variant="body1">Status</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            width: "100%",
            border: "1px solid #5080ff",
            borderRadius: 2,
            cursor: "pointer",
            color: "#5080ff",
            minWidth: "300px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#5080ff",
              color: "#fff",
            },
          }}
        >
          <Typography variant="body1">Sign</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            width: "100%",
            border: "1px solid #5080ff",
            borderRadius: 2,
            cursor: "pointer",
            color: "#5080ff",
            minWidth: "300px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#5080ff",
              color: "#fff",
            },
          }}
        >
          <Typography variant="body1">Risk</Typography>
        </Box>
      </Box>
    </CardContent>
  );
}

export default DealsActionsCard;
