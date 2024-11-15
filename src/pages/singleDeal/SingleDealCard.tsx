import { Box, CardContent, Typography } from "@mui/material";
import { IDealsResponseObjectTypes } from "../../common/types";

function SingleDealCard({
  information,
}: {
  information: IDealsResponseObjectTypes | undefined;
}) {
  return (
    <CardContent
      sx={{
        display: "flex",
        gap: 5,
        paddingX: {
          md: "50px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          fontWeight: "500",
        }}
      >
        <Typography>სრული სახელი</Typography>
        <Typography>პირადი ნომერი</Typography>
        <Typography>ტელეფონის ნომერი</Typography>
        <Typography>პროდუქტი</Typography>
        <Typography>თანხა</Typography>
        <Typography>არხი</Typography>
        <Typography>შემოსვლის დრო</Typography>
        <Typography>სტატუსი</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          whiteSpace: "nowrap",
        }}
      >
        <Typography>{information?.name}</Typography>
        <Typography>{information?.personalId}</Typography>
        <Typography>{information?.mobilePhone}</Typography>
        <Typography>{information?.product}</Typography>
        <Typography>{information?.channel}</Typography>
        <Typography>{information?.amount}</Typography>
        <Typography>{information?.createDate}</Typography>
        <Typography>{information?.dealStatus}</Typography>
      </Box>
    </CardContent>
  );
}

export default SingleDealCard;
