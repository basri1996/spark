import { Box } from "@mui/material";
import Users from "./Users";
import Permissions from "./Permissions";

function SingleGroup() {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Users />
      <Permissions />
    </Box>
  );
}

export default SingleGroup;
