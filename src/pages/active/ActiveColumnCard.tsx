import { Card, Typography } from "@mui/material";
import { ColumnCardTypes } from "./types";
import { useStyles } from "./useStyles";
import { useNavigate } from "react-router-dom";

function ActiveColumnCard({ name, product, amount, ccy, id }: ColumnCardTypes) {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <Card
      sx={styles.ColumnCardMainBoxStyles}
      onClick={() => navigate(`/deals/${id}`)}
    >
      <Typography sx={styles.ColumnCardTypographyStyles}>{name}</Typography>
      <Typography>
        {product} {amount} {ccy}
      </Typography>
    </Card>
  );
}

export default ActiveColumnCard;
