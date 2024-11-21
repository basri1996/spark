import { Box, Card, Typography } from "@mui/material";
import ActiveColumn from "./ActiveColumn";
import { useStyles } from "./useStyles";
import useGetActiveDealsListQuery from "../../common/queries/useGetActiveDealsListQuery";
import { activeColumns } from "../../dummyData";
import { useLayoutEffect, useRef } from "react";
function Active() {
  const styles = useStyles();
  // const { data: activeColumns } = useGetActiveDealsListQuery({
  //   dealStatuses: ["ACTIVE"],
  // });
  const ScrollRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (ScrollRef.current) {
      // Scroll to the far right
      ScrollRef.current.scrollLeft = ScrollRef.current.scrollWidth;
    }
  }, []);

  return (
    <Card sx={styles.ActiveMainBoxStyles}>
      <Typography variant="h6" sx={styles.ActiveTypographyStyles}>
        Active Deals
      </Typography>

      <Box ref={ScrollRef} sx={styles.ActiveSecondaryBoxStyles}>
        {activeColumns?.map((el) => (
          <ActiveColumn
            key={el.status.id}
            label={el.status.label}
            deals={el.deals}
          />
        ))}
      </Box>
    </Card>
  );
}

export default Active;
