import { Box, Card, Paper, Typography } from "@mui/material";
import { ColumnCardTypes } from "./types";
import { useStyles } from "./useStyles";
import { useNavigate } from "react-router-dom";
import UserInfo from "../../components/common/UserInfo";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ActiveColumnCard({
  name,
  product,
  amount,
  ccy,
  id,
  subStatus,
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
      onClick={() => navigate(`/deals/${id}`)}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {/* <UserInfo title={"სრული სახელი"} text={name || "-"} />
      <UserInfo title={"პროდუქტი"} text={product || "-"} />
      <UserInfo title={"თანხა"} text={amount || "-"} />
      <UserInfo title={"ვალუტა"} text={ccy || "-"} />
      <UserInfo title={"სტატუსი"} text={subStatus?.label || "-"} /> */}
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
      <Typography>{subStatus?.label}</Typography>
    </Card>
  );
}

export default ActiveColumnCard;
