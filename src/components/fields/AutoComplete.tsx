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
  setValue: any;
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
  // Custom listbox component that uses InfiniteScroll
  const ListboxWithInfiniteScroll = (props: any) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
      <InfiniteScroll
        load={fetchNextPage}
        hasMore={hasNextPage}
        isLoading={isPending}
        loader={
          <Box
            key="circularProgress"
            sx={{
              scrollbarWidth: "none",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size="25px" color="inherit" />
          </Box>
        }
        endMessage=""
        scrollContainerRef={scrollContainerRef}
      >
        <Box
          ref={scrollContainerRef}
          {...props}
          sx={{
            minHeight: 200,
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          {props.children}
        </Box>
      </InfiniteScroll>
    );
  };

  return (
    <Autocomplete
      value={data ? data.find((option) => option.externalId === value) || null : null}
      onChange={(event, newValue) => {
        setValue(newValue ? newValue.externalId : null);
      }}
      inputValue={searchTerm}
      onInputChange={(event, newInputValue) => {
        setSearchterm(newInputValue);
      }}
      options={data || []}
      sx={{ width: 300 }}
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
