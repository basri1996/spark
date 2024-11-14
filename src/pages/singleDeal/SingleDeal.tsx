import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetSingleDealQuery from "../../common/queries/useGetSingleDealQuery";

function SingleDeal() {
  const { id } = useParams();
  const { data } = useGetSingleDealQuery({ id });

  return <Box>id</Box>;
}

export default SingleDeal;
