import { Box, CardContent, Typography } from "@mui/material";
import Modal from "../../components/common/Modal";
import { ActionButton, DealsActionCardBox } from "./useStyles";
import ActionModalContent from "./actionsContent/ActionModalContent";
import { ActionsType } from "../../dummyData";
import { useAction } from "../../context/ActionContext";

function DealsActionsCard({ status }: { status: string | undefined }) {
  const { actionType, setActionType, setCallActionStep } = useAction();
  const approved = status !== "ARCHIVED";

  const handleClose = () => {
    setCallActionStep("INITIAL");
    setActionType({ name: "", id: "" });
  };
  return (
    <CardContent sx={DealsActionCardBox}>
      {ActionsType.map((action) => (
        <Box key={action.id}>
          <Box
            sx={ActionButton(approved)}
            onClick={() => approved && setActionType(action)}
          >
            <Typography variant="body1">{action.name}</Typography>
          </Box>
        </Box>
      ))}
      <Modal
        title={actionType.name}
        isDialogOpen={Boolean(actionType.id)}
        handleDialogClose={handleClose}
      >
        <ActionModalContent />
      </Modal>
    </CardContent>
  );
}

export default DealsActionsCard;
