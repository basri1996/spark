import { Box, Typography } from "@mui/material";
import ActiveColumn from "./ActiveColumn";
import { useStyles } from "./useStyles";
import useGetActiveDealsListQuery from "../../common/queries/useGetActiveDealsListQuery";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRef } from "react";
import { activeColumns } from "../../dummyData";
function Active() {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const styles = useStyles();
  // const { data: activeColumns } = useGetActiveDealsListQuery({
  //   dealStatuses: ["ACTIVE"],
  // });

  const scrollToLeft = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo({
        left: scrollableRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={styles.ActiveMainBoxStyles}>
      <Typography variant="h6" sx={styles.ActiveTypographyStyles}>
        Active Deals
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <ArrowBackIosNewIcon
          onClick={scrollToLeft}
          sx={{
            cursor: "pointer",
            color: (theme) => theme.palette.primary.main,
          }}
        />
        <Box ref={scrollableRef} sx={styles.ActiveSecondaryBoxStyles}>
          {activeColumns?.map((el) => (
            <ActiveColumn
              key={el.status.id}
              label={el.status.label}
              deals={el.deals}
            />
          ))}
        </Box>
        <ArrowForwardIosIcon
          onClick={scrollToRight}
          sx={{
            cursor: "pointer",
            color: (theme) => theme.palette.primary.main,
          }}
        />
      </Box>
    </Box>
  );
}

export default Active;
