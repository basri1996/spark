import React, { useRef } from "react";
import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import InfiniteScroll from "../common/InfiniteScroll";

interface User {
  externalId: string;
  fullName: string;
}

interface AutoCompleteProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isPending: boolean;
  data: User[];
  setSearchterm: (val: string) => void;
  searchTerm: string;
  value: string | null;
  setValue: any
}

export default function AutoComplete({
  fetchNextPage,
  hasNextPage,
  isPending,
  data,
  setSearchterm,
  searchTerm,
  value,
  setValue,
}: AutoCompleteProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const ListboxWithInfiniteScroll = (props: any) => (
    <InfiniteScroll
      load={fetchNextPage}
      hasMore={hasNextPage}
      isLoading={isPending}
      loader={
        <Box
          key="circularProgress"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 1,
          }}
        >
          <CircularProgress size="25px" color="inherit" />
        </Box>
      }
      endMessage={<Box sx={{ p: 1, textAlign: "center" }}>No more data</Box>}
      scrollContainerRef={scrollContainerRef}
    >
      <Box
        ref={scrollContainerRef}
        {...props}
        sx={{
          maxHeight: 200,
          overflowY: "auto",
        }}
      >
        {props.children}
      </Box>
    </InfiniteScroll>
  );

  return (
    <Autocomplete
      disablePortal
      value={data.find((option) => option.externalId === value) || null}
      onChange={(event, newValue) => {
        setValue(newValue ? newValue.externalId : null);
      }}
      inputValue={searchTerm}
      onInputChange={(event, newInputValue) => {
        setSearchterm(newInputValue);
      }}
      options={data || []}
      getOptionLabel={(option) => option?.fullName || ""}
      renderInput={(params) => <TextField {...params} label="Users" />}
      slotProps={{
        listbox: {
          component: ListboxWithInfiniteScroll,
        },
      }}
    />
  );
}
