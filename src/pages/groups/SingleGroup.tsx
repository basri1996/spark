import { Box } from "@mui/material";
import Users from "./Users";
import Permissions from "./Permissions";
// import useGetSingleGroupQuery from "./queries/useGetSingleGroupQuery";
// import { useParams } from "react-router-dom";

function SingleGroup() {
  // const { id } = useParams();
  // const { data } = useGetSingleGroupQuery(id);
 
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Users />
      <Permissions />
    </Box>
  );
}

export default SingleGroup;
