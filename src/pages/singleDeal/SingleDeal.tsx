import { Box, Card, Tooltip } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import useGetSingleDealQuery from "../../common/queries/useGetSingleDealQuery";
import SingleDealCard from "./SingleDealCard";
import DealsActionsCard from "./DealsActionsCard";
import {
  SignleDealInformationBox,
  SingleDealCardMainStyle,
  SingleDealCardSecondaryStyle,
  SingleDealMainBox,
  SingleDealSecondaryBox,
} from "./useStyles";
import {
  CustomizedSteppers,
  SimpleTable,
  VerticalLinearStepper,
  VerticalSteppers,
} from "../../components";
import Breadcrumb from "../../components/common/Breadcrumb";

function SingleDeal() {
  const { id, type } = useParams();
  const { data } = useGetSingleDealQuery({ id });
  const location = useLocation();


  return (
    <Box sx={SingleDealMainBox}>
      <Breadcrumb
        routes={[
          { name: type, href: location.state.prevUrl },
          { name: id, href: "" },
        ]}
      />
      <Box sx={SingleDealSecondaryBox}>
        <Card sx={SingleDealCardMainStyle}>
          <CustomizedSteppers activeStep={data?.deal?.progressStatus?.order} />
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
          <VerticalLinearStepper steps={data?.activities || []} />
        </Box>
      </Box>
      <SimpleTable list={data?.deal?.leads || []} />
    </Box>
  );
}

export default SingleDeal;
