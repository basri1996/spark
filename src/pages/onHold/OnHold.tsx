import { Box, debounce, Typography } from "@mui/material";
import SearchInput from "../../components/fields/SearchInput";
import DealsTable from "../../components/tables/DealsTable";
import { useStyles } from "./useStyles";
import useGetDealsQuery from "../../common/queries/useGetDealsListQuery";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";

function OnHold() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: deals, isPending } = useGetDealsQuery({
    dealStatuses: "ON_HOLD",
    pageNumber: Number(searchParams.get("pageNumber")) || 1,
    pageSize: Number(searchParams.get("pageSize")) || 10,
    searchText: searchParams.get("searchText") ?? "",
  });
  const TextInputRef = useRef<HTMLInputElement  | null>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchParams((searchParams) => {
      value === ""
        ? searchParams.delete("searchText")
        : searchParams.set("searchText", value);
      return searchParams;
    });
  };

  const handleRefresh = () => {
    setSearchParams({});
    if (TextInputRef.current) {
      TextInputRef.current.value = "";
    }
  };

  return (
    <Box sx={styles.OnHoldMainBoxStyles}>
      <Box sx={styles.OnHoldSecondaryBoxStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={styles.OnHoldTypographyStyles}>
            On Hold
          </Typography>
        </Box>
        <Box sx={{ width: "200px" }}>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchParams.get("searchText") ?? ""}
            onChange={debounce(handleInputChange, 1000)}
            TextInputRef={TextInputRef}
          />
        </Box>
      </Box>
      <DealsTable
        list={deals?.content}
        totalRows={deals?.totalElements}
        isPending={isPending}
        type="on-hold"
        handleRefresh={handleRefresh}
      />
    </Box>
  );
}

export default OnHold;
