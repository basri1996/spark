import { Box, Typography } from "@mui/material";
import ActiveColumn from "./ActiveColumn";
import { useStyles } from "./useStyles";
import useGetActiveDealsListQuery from "../../common/queries/useGetActiveDealsListQuery";

function Active() {
  const styles = useStyles();
  const { data: activeColumns } = useGetActiveDealsListQuery({
    dealStatuses: ["ACTIVE"],
  });

  return (
    <Box sx={styles.ActiveMainBoxStyles}>
      <Typography variant="h6" sx={styles.ActiveTypographyStyles}>
        Active Deals
      </Typography>
      <Box sx={styles.ActiveSecondaryBoxStyles}>
        {activeColumns?.map((el) => (
          <ActiveColumn label={el.status.label} deals={el.deals} />
        ))}
      </Box>
    </Box>
  );
}

export default Active;
