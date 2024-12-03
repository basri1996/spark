import { Box, Card, Tooltip } from "@mui/material";
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
            activeStep={data?.deal?.progressStatus?.order }
          />
        </Card>
        <Card sx={SingleDealCardSecondaryStyle}>
          <VerticalSteppers activeStep={data?.deal?.progressStatus?.order} />
        </Card>
        <Box sx={SignleDealInformationBox}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              width: "100%",
              top: "5px",
              paddingX: "5px",
            }}
          >
            <Tooltip
              title={data?.deal?.owner?.fullName || "N/A"}
              sx={{
                background: (theme) => theme.palette.background.default,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              <Box
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  background: "#F1F1F1",
                  padding: "5px",
                  borderRadius: "50%",
                  border: "1px solid #d0cdcd ",
                }}
              >
                {data?.deal?.owner?.shortName || "N/A"}
              </Box>
            </Tooltip>
          </Box>
          <SingleDealCard information={data?.deal} />
          <DealsActionsCard status={data?.deal?.dealStatus} />
          <SimpleStepper steps={data?.activities || []} />
        </Box>
      </Box>
      <SimpleTable list={data?.deal?.leads || []} />
    </Box>
  );
}

export default SingleDeal;
