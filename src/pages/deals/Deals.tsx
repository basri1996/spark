import { Box, Button, debounce, Typography } from "@mui/material";
import DealsTable from "../../components/tables/DealsTable";
import TextInput from "../../components/fields/TextInput";
import { Input, useStyles } from "./useStyles";
import useGetDealsListQuery from "../../common/queries/useGetDealsListQuery";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Modal from "../../components/common/Modal";
import useUploadDealsMutation from "./mutations/useUploadDealsMutation";

interface UploadModalState {
  visible: boolean;
  file: File[];
  onDragOver: boolean;
}

function Deals() {
  const styles = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [uploadModal, setUploadModal] = useState<UploadModalState>({
    visible: false,
    onDragOver: false,
    file: [],
  });
  const { mutate: uploadDeals, isPending: isUploading } =
    useUploadDealsMutation();
  const { data: deals, isPending } = useGetDealsListQuery({
    dealStatuses: "ACTIVE",
    progressStatuses: "CLIENTS_IN_PROGRESS",
    searchText: searchParams.get("searchText") ?? "",
    pageNumber: Number(searchParams.get("pageNumber")) || 1,
    pageSize: Number(searchParams.get("pageSize")) || 10,
  });

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
  const handlePageChange = (pageNumber: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("pageNumber", String(pageNumber));
      return searchParams;
    });
  };

  const handlePerRowsChange = (pageSize: number, pageNumber: number) => {
    setSearchParams((searchParams) => {
      searchParams.set("pageNumber", String(pageNumber));
      searchParams.set("pageSize", String(pageSize));
      return searchParams;
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const format =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (files && files[0].type === format) {
      setUploadModal((prev) => ({
        ...prev,
        file: Array.from(files),
      }));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    const format =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (droppedFiles && droppedFiles[0].type === format) {
      setUploadModal((prev) => ({
        ...prev,
        file: Array.from(droppedFiles),
        onDragOver: false,
      }));
    }
  };

  const handleSave = () => {
    uploadDeals(uploadModal.file, {
      onSuccess: () => {
        setUploadModal((prev) => ({
          ...prev,
          visible: false,
        }));
      },
      onError: (error) => {},
    });
  };

  return (
    <Box sx={styles.DealsMainBoxStyles}>
      <Box sx={styles.DealsSecondaryBoxStyles}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={styles.DealsTypographyStyles}>
            Inbox
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Box sx={{ width: "200px", flex: 1 }}>
            <TextInput
              type="text"
              placeholder="Search"
              value={searchParams.get("searchText") ?? ""}
              onChange={debounce(handleInputChange, 1000)}
            />
          </Box>
          <Button
            sx={{
              background: "#5080ff",
              borderRadius: 3,
              height: 56,
              minWidth: 56,
            }}
            onClick={() =>
              setUploadModal((prev) => ({ ...prev, visible: true }))
            }
          >
            <CloudUploadIcon sx={{ color: "white" }} />
          </Button>
        </Box>
      </Box>
      <DealsTable
        list={deals?.content}
        handlePageChange={handlePageChange}
        handlePerRowsChange={handlePerRowsChange}
        totalRows={deals?.totalElements}
        isPending={isPending}
      />
      <Modal
        title="Upload File"
        isDialogOpen={uploadModal.visible}
        handleDialogClose={() =>
          setUploadModal((prev) => ({ ...prev, visible: false }))
        }
      >
        <Box
          sx={{
            height: "300px",
            width: "400px",
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
            transition: "background 200ms ease-in",
          }}
          bgcolor={uploadModal.onDragOver ? "white" : "#F1F1F1"}
          onDrop={(e) => {
            e.preventDefault();
            handleDrop(e);
          }}
          onDragLeave={() => {
            setUploadModal((prev) => ({ ...prev, onDragOver: false }));
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setUploadModal((prev) => {
              if (prev.onDragOver) {
                return prev;
              } else {
                return {
                  ...prev,
                  onDragOver: true,
                };
              }
            });
          }}
        >
          <Box
            sx={{
              border: "1px dashed #d0cdcd",
              width: "100%",
              height: "100%",
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <CloudUploadIcon
              sx={{ color: "#5080ff", width: "40px", height: "40px" }}
            />
            <Typography>
              {uploadModal?.file[0]?.name || "Drop Your File here to Upload"}
            </Typography>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              disabled={Boolean(uploadModal?.file[0]?.name)}
            >
              Upload files
              <Input
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".xls,.xlsx"
              />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              paddingX: "30px",
              color: (theme) => theme.palette.text.secondary,
              borderRadius: "4px",
            }}
            disabled={Boolean(!uploadModal?.file[0]?.name)}
            onClick={() => setUploadModal((prev) => ({ ...prev, file: [] }))}
          >
            Clear
          </Button>
          <Button
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              paddingX: "30px",
              color: (theme) => theme.palette.text.secondary,
              borderRadius: "4px",
            }}
            disabled={Boolean(!uploadModal?.file[0]?.name) || isUploading}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Deals;
