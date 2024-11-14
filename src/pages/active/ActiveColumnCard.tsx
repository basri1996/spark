import { Card, Typography } from "@mui/material";
import { ColumnCardTypes } from "./types";
import { useStyles } from "./useStyles";

function ActiveColumnCard({ name, product, amount, ccy }: ColumnCardTypes) {
  const styles = useStyles();

  return (
    <Card sx={styles.ColumnCardMainBoxStyles}>
      <Typography sx={styles.ColumnCardTypographyStyles}>{name}</Typography>
      <Typography>
        {product} {amount} {ccy}
      </Typography>
    </Card>
  );
}

export default ActiveColumnCard;
