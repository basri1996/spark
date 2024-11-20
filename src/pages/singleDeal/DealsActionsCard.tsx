import { Box, CardContent, Typography } from "@mui/material";
import Modal from "../../components/common/Modal";
import { ActionButton, DealsActionCardBox } from "./useStyles";
import ActionModalContent from "./actionsContent/ActionModalContent";
import { ActionsType } from "../../dummyData";
import { useAction } from "../../context/ActionContext";

function DealsActionsCard() {
  const { actionType, setActionType, setCallActionStep } = useAction();

  const handleClose = () => {
    setCallActionStep("INITIAL");
    setActionType("");
  };
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
        handleDialogClose={handleClose}
      >
        <ActionModalContent />
      </Modal>
    </CardContent>
  );
}

export default DealsActionsCard;
