import { Box, Button } from "@mui/material";
import { useState } from "react";
import CommentInput from "../../../components/fields/CommentInput";
import useActivitiesMutation from "../mutations/useActivitiesMutation";
import { useParams } from "react-router-dom";
import { useAction } from "../../../context/ActionContext";

function ActionCommentdStepContent() {
  const [commentValue, setCommentValue] = useState("");
  const { id } = useParams();
  const { mutate: createActivity } = useActivitiesMutation();
  const { setActionType, callActionStep, setCallActionStep } = useAction();

  const handleClick = () => {
    createActivity(
      { id, data: { activityType: callActionStep, comment: commentValue } },
      {
        onSuccess: () => {
          setActionType({ name: "", id: "" });
          setCallActionStep("INITIAL")
        },
        onError: (error) => {},
      }
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <CommentInput
        value={commentValue}
        onChange={setCommentValue}
        label="Comment"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            paddingX: "30px",
            color: (theme) => theme.palette.text.secondary,
            borderRadius: "4px",
          }}
          onClick={() => setCallActionStep("CLIENT_ANSWERED")}
        >
          Back
        </Button>
        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            paddingX: "30px",
            color: (theme) => theme.palette.text.secondary,
            borderRadius: "4px",
          }}
          onClick={handleClick}
        >
          Finish
        </Button>
      </Box>
    </Box>
  );
}

export default ActionCommentdStepContent;
