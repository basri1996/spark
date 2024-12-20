import { Box } from "@mui/material";
import { useState } from "react";
import useGetUsersListForAssignInfiniteQuery from "./queries/useGetUsersListForAssignInfiniteQuery";
import { CustomButton } from "../../components";
import AddIcon from "@mui/icons-material/Add";
import AutoComplete from "../../components/fields/AutoComplete";
import useDebounce from "../../hooks/useDebounce";

function AssignUsersForm() {
  const [value, setValue] = useState("");
  const [searchTerm, setSearchterm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const {
    data: Users,
    hasNextPage: groupsHasNextPage,
    fetchNextPage: groupsFetchNextPage,
    isFetching: isGetting,
  } = useGetUsersListForAssignInfiniteQuery({
    keyword: debouncedSearchTerm,
  });

 
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <AutoComplete
        fetchNextPage={groupsFetchNextPage}
        hasNextPage={groupsHasNextPage}
        isPending={isGetting}
        data={Users || []}
        value={value}
        setValue={setValue}
        searchTerm={searchTerm}
        setSearchterm={setSearchterm}
      />
      <CustomButton sx={{ borderRadius: 3, height: 56, minWidth: 56 }}>
        <AddIcon />
      </CustomButton>
    </Box>
  );
}

export default AssignUsersForm;
