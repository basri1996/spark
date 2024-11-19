import { Box, CardContent, Typography } from "@mui/material";
import Modal from "../../components/common/Modal";
import { useState } from "react";
import { ActionButton, DealsActionCardBox } from "./useStyles";
import ActionModalContent from "./actionsContent/ActionModalContent";
import { ActionsType } from "../../dummyData";

function DealsActionsCard() {
  const [actionType, setActionType] = useState("");
  return (
    <CardContent sx={DealsActionCardBox}>
      {ActionsType.map((action) => (
        <Box key={action.id}>
          <Box sx={ActionButton} onClick={() => setActionType(action.name)}>
            <Typography variant="body1">{action.name}</Typography>
          </Box>
        </Box>
      ))}

      <Modal
        title={actionType}
        isDialogOpen={Boolean(actionType)}
        handleDialogClose={() => setActionType("")}
      >
        <ActionModalContent
          actionType={actionType}
          setActionType={setActionType}
        />
      </Modal>
    </CardContent>
  );
}

export default DealsActionsCard;
