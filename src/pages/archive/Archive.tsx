import { Box, debounce, Typography } from "@mui/material";
import { useStyles } from "./useStyles";
import useGetDealsQuery from "../../common/queries/useGetDealsListQuery";
import { useSearchParams } from "react-router-dom";
import { DealsTable, SearchInput } from "../../components";
import { useRef } from "react";

function Archive() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: deals, isPending } = useGetDealsQuery({
    dealStatuses: "ARCHIVED",
    searchText: searchParams.get("searchText") ?? "",
    pageNumber: Number(searchParams.get("pageNumber")) || 1,
    pageSize: Number(searchParams.get("pageSize")) || 10,
  });
  const TextInputRef = useRef<HTMLInputElement | null>(null);

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
    <Box sx={styles.ArchiveMainBoxStyles}>
      <Box sx={styles.ArchiveSecondaryBoxStyles}>
        <Box sx={styles.ArchiveTypographyBox}>
          <Typography variant="h6" sx={styles.ArchiveTypographyStyles}>
            Archive
          </Typography>
        </Box>
        <Box sx={styles.ArchiveInputBox}>
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
        type="archive"
        handleRefresh={handleRefresh}
      />
    </Box>
  );
}

export default Archive;
