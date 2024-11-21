import { Box, Typography } from "@mui/material";
import ActiveColumn from "./ActiveColumn";
import { useStyles } from "./useStyles";
import useGetActiveDealsListQuery from "../../common/queries/useGetActiveDealsListQuery";
import { useRef } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function Active() {
  const styles = useStyles();
  const { data: activeColumns } = useGetActiveDealsListQuery({
    dealStatuses: ["ACTIVE"],
  });
  const ScrollRef = useRef<HTMLElement | null>(null);

  const scrollToMaxLeft = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollLeft = 0;
    }
  };

  const scrollToMaxRight = () => {
    ScrollRef.current?.scrollTo({
      left: ScrollRef.current.scrollWidth,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={styles.ActiveMainBoxStyles}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={styles.ActiveTypographyStyles}>
          Active Deals
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ fontSize: 40 }}
            onClick={scrollToMaxLeft}
          />
          <KeyboardArrowRightIcon
            sx={{ fontSize: 40 }}
            onClick={scrollToMaxRight}
          />
        </Box>
      </Box>

      <Box ref={ScrollRef} sx={styles.ActiveSecondaryBoxStyles}>
        {activeColumns?.map((el) => (
          <ActiveColumn
            key={el.status.id}
            label={el.status.label}
            deals={el.deals}
            ref={ScrollRef}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Active;
