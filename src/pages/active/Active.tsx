import { Box, Typography } from "@mui/material";
import ActiveColumn from "./ActiveColumn";
import { useStyles } from "./useStyles";
import useGetActiveDealsListQuery from "../../common/queries/useGetActiveDealsListQuery";
import { useRef } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useAuth } from "../../context/AuthContext";
function Active() {
  const styles = useStyles();
  const { principal } = useAuth();
  const { data: activeColumns } = useGetActiveDealsListQuery({
    dealStatuses: "ACTIVE",
    ownerExternalIds: principal?.sub,
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
            sx={{ fontSize: 40, cursor: "pointer" }}
            onClick={scrollToMaxLeft}
          />
          <KeyboardArrowRightIcon
            sx={{ fontSize: 40, cursor: "pointer" }}
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
