import { Box, debounce, Typography } from "@mui/material";
import ActiveColumn from "./ActiveColumn";
import { useStyles } from "./useStyles";
import useGetActiveDealsListQuery from "../../common/queries/useGetActiveDealsListQuery";
import { useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useAuth } from "../../context/AuthContext";
import { useSearchParams } from "react-router-dom";
import ActiveFilterModal from "./ActiveFilterModal";
import { CustomButton, Modal, TextInput } from "../../components";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
function Active() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [expandedModalVisible, setExpandedModalVisible] = useState(false);
  const { principal } = useAuth();
  const { data: activeColumns } = useGetActiveDealsListQuery({
    dealStatuses: "ACTIVE",
    ownerExternalIds: principal?.sub,
    searchText: searchParams.get("searchText") ?? "",
    productCodes: searchParams.getAll("productCodes"),
    progressSubStatuses: searchParams.getAll("progressSubStatuses"),
  });
  const ScrollRef = useRef<HTMLElement | null>(null);
  const keyDependentOnParams =
    searchParams.get("searchText") ??
    "" +
      searchParams.getAll("productCodes") +
      searchParams.getAll("progressSubStatuses");

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchParams((searchParams) => {
      if (value === "") {
        searchParams.delete("searchText");
      } else {
        searchParams.set("searchText", value);
      }
      return searchParams;
    });
  };

  return (
    <Box sx={styles.ActiveMainBoxStyles}>
      <Box sx={styles.ActiveSecondaryBox}>
        <Box sx={styles.ActiveHeaderBox}>
          <Box sx={styles.ActiveTypographyBox}>
            <Typography variant="h6" sx={styles.ActiveTypographyStyles}>
              Active Deals
            </Typography>
          </Box>
          <Box sx={styles.ActiveKeyBoardBox}>
            <KeyboardArrowLeftIcon
              sx={styles.ActiveKeyBoard}
              onClick={scrollToMaxLeft}
            />
            <KeyboardArrowRightIcon
              sx={styles.ActiveKeyBoard}
              onClick={scrollToMaxRight}
            />
          </Box>
        </Box>

        <Box sx={styles.ActiveHeaderLeftBox}>
          <Box sx={styles.ActiveInputBox}>
            <TextInput
              type="text"
              placeholder="Search"
              value={searchParams.get("searchText") ?? ""}
              onChange={debounce(handleInputChange, 1000)}
            />
          </Box>

          <CustomButton
            onClick={() => setExpandedModalVisible(true)}
            sx={styles.ActiveIconBox}
          >
            <FilterAltIcon />
          </CustomButton>
        </Box>
      </Box>

      <Box ref={ScrollRef} sx={styles.ActiveSecondaryBoxStyles}>
        {activeColumns?.map((el) => (
          <ActiveColumn
            key={keyDependentOnParams + el.status.id}
            label={el.status.label}
            deals={el.deals}
            ref={ScrollRef}
          />
        ))}
      </Box>
      <Modal
        title={"Expanded Filters"}
        isDialogOpen={expandedModalVisible}
        handleDialogClose={() => {
          setExpandedModalVisible(false);
        }}
      >
        <ActiveFilterModal setExpandedModalVisible={setExpandedModalVisible} />
      </Modal>
    </Box>
  );
}

export default Active;
