import { Box, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetSingleDealQuery from "../../common/queries/useGetSingleDealQuery";
import CustomizedSteppers from "../../components/common/CustomizedSteppers";
import SingleDealCard from "./SingleDealCard";
import DealsActionsCard from "./DealsActionsCard";
import SimpleStepper from "../../components/common/SimpleStepper";
import SimpleTable from "../../components/tables/SimpleTable";
import VerticalSteppers from "../../components/common/VerticalSteppers";

function SingleDeal() {
  const { id } = useParams();
  const { data } = useGetSingleDealQuery({ id });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Card
          sx={{
            boxShadow: "4px 2px 11.2px 4px #0000000A",
            padding: "30px",
            border: "1px solid #00000014",
            borderRadius: "14px",
            gap: 4,
            width: "100%",
            display: {
              sm: "none",
              md: "flex",
            },
          }}
        >
          <CustomizedSteppers activeStep={data?.deal?.progressStatus?.order} />
        </Card>
        <Card
          sx={{
            boxShadow: "4px 2px 11.2px 4px #0000000A",
            padding: "30px",
            border: "1px solid #00000014",
            borderRadius: "14px",
            display: {
              sm: "flex",
              md: "none",
            },
            gap: 4,
            width: "100%",
            maxWidth: "412px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <VerticalSteppers activeStep={data?.deal?.progressStatus?.order} />
        </Card>

        <Card
          sx={{
            boxShadow: "4px 2px 11.2px 4px #0000000A",
            width: {
              md: "100%",
            },
            border: "1px solid #00000014",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            flexWrap: {
              md: "wrap",
              lg: "unset",
            },
            padding: {
              xs: "20px",
              md: "0px",
            },
            paddingY: {
              md: "30px",
            },
          }}
        >
          <SingleDealCard information={data?.deal} />
          <DealsActionsCard />
          <SimpleStepper steps={data?.activities || []} />
        </Card>
      </Box>
      <SimpleTable list={data?.deal?.leads || []} />
    </Box>
  );
}

export default SingleDeal;
