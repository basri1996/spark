import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Modal from "../../components/common/Modal";
import { useState } from "react";
import RadioPositionEnd from "../../components/common/RadioGroupComponent";
import { ActionButton, DealsActionCardBox } from "./useStyles";
import SingleSelect from "../../components/fields/SingleSelect";
import { selectOptions } from "../../dummyData";
import Toggle from "../../components/fields/Toggle";

interface Props {}

function DealsActionsCard({}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState("");
  const [product, setProduct] = useState("");
  return (
    <CardContent sx={DealsActionCardBox}>
      <Box>
        <Box sx={ActionButton} onClick={() => setIsDialogOpen("Call")}>
          <Typography variant="body1">Call</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={ActionButton} onClick={() => setIsDialogOpen("Modify")}>
          <Typography variant="body1">Modify</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={ActionButton} onClick={() => setIsDialogOpen("Status")}>
          <Typography variant="body1">Status</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={ActionButton} onClick={() => setIsDialogOpen("Sign")}>
          <Typography variant="body1">Sign</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={ActionButton} onClick={() => setIsDialogOpen("Risk")}>
          <Typography variant="body1">Risk</Typography>
        </Box>
      </Box>
      <Modal
        title={isDialogOpen}
        isDialogOpen={Boolean(isDialogOpen)}
        handleDialogClose={() => setIsDialogOpen("")}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <RadioPositionEnd />
          <SingleSelect
            value={product}
            onChange={setProduct}
            label="label"
            options={selectOptions}
          />
          <Toggle label="Test Label" />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                backgroundColor: (theme) => theme.palette.background.default,
                paddingX: "30px",
                border: "1px solid #5080ff",
                borderRadius: "5px",
              }}
            >
              Finish
            </Button>
          </Box>
        </Box>
      </Modal>
    </CardContent>
  );
}

export default DealsActionsCard;
