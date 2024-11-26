import { Box, Card, Paper, Typography } from "@mui/material";
import { ColumnCardTypes } from "./types";
import { useStyles } from "./useStyles";
import { useNavigate } from "react-router-dom";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { subStatusUi } from "../../data/data";

function ActiveColumnCard({
  name,
  product,
  amount,
  ccy,
  id,
  subStatus,
  attributes: atr,
}: ColumnCardTypes) {
  const styles = useStyles();
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      sx={styles.ColumnCardMainBoxStyles}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => navigate(`/deals/${id}`)}
    >
      <Typography sx={styles.ColumnCardTypographyStyles}>{name}</Typography>
      <Typography sx={{ color: "#4e4e4e" }}>{product}</Typography>
      <Box display="flex" gap="5px" alignItems="center">
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            color: (theme) => theme.palette.primary.main,
            lineHeight: "19.6px",
            fontWeight: 500,
          }}
        >
          {amount}
        </Typography>

        <Paper
          elevation={0}
          sx={{
            padding: "4px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(108, 99, 255, 0.1)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.primary.main,
              lineHeight: "19.6px",
              fontWeight: 500,
            }}
          >
            {ccy}
          </Typography>
        </Paper>
      </Box>
      <Typography
        sx={{
          backgroundColor:
            subStatusUi[subStatus?.subStatus as keyof typeof subStatusUi]
              ?.color,
          color: "white",
          paddingX: "8px",
          paddingY: "2px",
          borderRadius: "8px",
          fontSize: "15px",
        }}
      >
        {subStatus?.subStatus === "TRYING_TO_COMMUNICATE"
          ? `${atr[atr.length - 1].value === "2" ? "II" : "III"} ზარი`
          : subStatusUi[subStatus?.subStatus as keyof typeof subStatusUi]?.text}
      </Typography>
    </Card>
  );
}

export default ActiveColumnCard;
