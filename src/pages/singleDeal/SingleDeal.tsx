import { Box, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetSingleDealQuery from "../../common/queries/useGetSingleDealQuery";
import CustomizedSteppers from "../../components/common/CustomizedSteppers";
import SingleDealCard from "./SingleDealCard";
import DealsActionsCard from "./DealsActionsCard";
import SimpleStepper from "../../components/common/SimpleStepper";
import SimpleTable from "../../components/tables/SimpleTable";
import VerticalSteppers from "../../components/common/VerticalSteppers";
import {
  SignleDealInformationBox,
  SingleDealCardMainStyle,
  SingleDealCardSecondaryStyle,
  SingleDealMainBox,
  SingleDealSecondaryBox,
} from "./useStyles";

function SingleDeal() {
  const { id } = useParams();
  const { data } = useGetSingleDealQuery({ id });

  return (
    <Box sx={SingleDealMainBox}>
      <Box sx={SingleDealSecondaryBox}>
        <Card sx={SingleDealCardMainStyle}>
          <CustomizedSteppers
            activeStep={data?.deal?.progressStatus?.order || 3}
          />
        </Card>
        <Card sx={SingleDealCardSecondaryStyle}>
          <VerticalSteppers activeStep={data?.deal?.progressStatus?.order} />
        </Card>
        <Box sx={SignleDealInformationBox}>
          <SingleDealCard information={data?.deal} />
          <DealsActionsCard />
          <SimpleStepper steps={data?.activities || []} />
        </Box>
      </Box>
      <SimpleTable list={data?.deal?.leads || []} />
    </Box>
  );
}

export default SingleDeal;
