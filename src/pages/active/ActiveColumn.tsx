import { Box, Card, Typography } from "@mui/material";
import ActiveColumnCard from "./ActiveColumnCard";
import { ActiveColumnTypes } from "./types";
import { useStyles } from "./useStyles";

function ActiveColumn({ label, deals }: ActiveColumnTypes) {
  const styles = useStyles();

  return (
    <Card sx={styles.SrollebleCard}>
      <Box sx={styles.CardMainBoxStyles}>
        <Typography sx={styles.CardTypographyStyles}>{label}</Typography>
      </Box>
      <Box sx={styles.CardSecondaryBoxStyles}>
        {deals?.map((el) => (
          <ActiveColumnCard {...el} />
        ))}
      </Box>
    </Card>
  );
}

export default ActiveColumn;
