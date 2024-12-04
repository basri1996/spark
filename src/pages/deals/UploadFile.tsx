import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Dispatch, SetStateAction, useState } from "react";
import useUploadDealsMutation from "./mutations/useUploadDealsMutation";
import { Input, useStyles } from "./useStyles";
import { CustomButton } from "../../components";

interface UploadModalState {
  file: File[];
  onDragOver: boolean;
}

interface Props {
  setIsUploadModalVisible: Dispatch<SetStateAction<boolean>>;
}

function UploadFile({ setIsUploadModalVisible }: Props) {
  const styles = useStyles();
  const [uploadModal, setUploadModal] = useState<UploadModalState>({
    onDragOver: false,
    file: [],
  });
  const { mutate: uploadDeals, isPending: isUploading } =
    useUploadDealsMutation();

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

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
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
  };

  const handleSave = () => {
    uploadDeals(uploadModal.file, {
      onSuccess: () => {
        setUploadModal({
          onDragOver: false,
          file: [],
        });
        setIsUploadModalVisible(false);
      },
      onError: (error) => {},
    });
  };

  return (
    <Box>
      <Box
        sx={styles.UploadFileMainBox}
        bgcolor={uploadModal.onDragOver ? "white" : "#F1F1F1"}
        onDrop={(e) => {
          e.preventDefault();
          handleDrop(e);
        }}
        onDragLeave={() => {
          setUploadModal((prev) => ({ ...prev, onDragOver: false }));
        }}
        onDragOver={(e) => {
          handleDragOver(e);
        }}
      >
        <Box sx={styles.UploadFileSecondaryBox}>
          <CloudUploadIcon sx={styles.UploadFileIcon} />
          <Typography>
            {uploadModal?.file[0]?.name || "Drop Your File here to Upload"}
          </Typography>
          <CustomButton
            disabled={Boolean(uploadModal?.file[0]?.name)}
          >
            Upload files
            <Input
              type="file"
              hidden
              onChange={handleFileChange}
              accept=".xls,.xlsx"
            />
          </CustomButton>
        </Box>
      </Box>
      <Box sx={styles.UploadFileButtonBox}>
        <CustomButton
          disabled={Boolean(!uploadModal?.file[0]?.name)}
          onClick={() => setUploadModal((prev) => ({ ...prev, file: [] }))}
        >
          Clear
        </CustomButton>
        <CustomButton
          disabled={Boolean(!uploadModal?.file[0]?.name) || isUploading}
          onClick={handleSave}
        >
          Save
        </CustomButton>
      </Box>
    </Box>
  );
}

export default UploadFile;
