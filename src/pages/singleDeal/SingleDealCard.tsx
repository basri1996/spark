import { Box, CardContent, Typography } from "@mui/material";
import { IDealsResponseObjectTypes } from "../../common/types";
import { GridBox } from "./useStyles";
import UserInfo from "./UserInfo";

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
          <UserInfo title={"არხი"} text={information?.channel || "-"} />
          <UserInfo
            title={"შემოსვლის დრო"}
            text={information?.createDate || "-"}
          />
          <UserInfo title={"სტატუსი"} text={information?.dealStatus || "-"} />
        </GridBox>
      </Box>
    </CardContent>
  );
}

export default SingleDealCard;
