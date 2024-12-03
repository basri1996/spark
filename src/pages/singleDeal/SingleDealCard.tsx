import { Box, CardContent } from "@mui/material";
import { IDealsResponseObjectTypes } from "../../common/types";
import { GridBox } from "./useStyles";
import UserInfo from "../../components/common/UserInfo";
import moment from "moment";

function SingleDealCard({
  information,
}: {
  information: IDealsResponseObjectTypes | undefined;
}) {
  return (
    <CardContent
      sx={{
        padding: 0,
        paddingX: {
          md: "50px",
        },
      }}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <GridBox>
          <UserInfo title={"სრული სახელი"} text={information?.name || "-"} />
          <UserInfo
            title={"პირადი ნომერი"}
            text={information?.personalId || "-"}
          />
          <UserInfo
            title={"ტელეფონის ნომერი"}
            text={information?.mobilePhone || "-"}
          />
          <UserInfo title={"პროდუქტი"} text={information?.product || "-"} />
          <UserInfo title={"თანხა"} text={information?.amount || "-"} />
          <UserInfo title={"ვალუტა"} text={information?.ccy || "-"} />
          <UserInfo title={"არხი"} text={information?.channel || "-"} />
          <UserInfo
            title={"შემოსვლის დრო"}
            text={moment(information?.createDate).format("DD.MM.YY - HH:mm") || "-"}
          />
          <UserInfo title={"სტატუსი"} text={information?.dealStatus || "-"} />
          <UserInfo title={"დილის ნომერი"} text={information?.id || "-"} />
        </GridBox>
      </Box>
    </CardContent>
  );
}

export default SingleDealCard;
