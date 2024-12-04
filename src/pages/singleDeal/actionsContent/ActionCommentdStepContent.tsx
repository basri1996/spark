import { Box } from "@mui/material";
import { useState } from "react";
import useActivitiesMutation from "../mutations/useActivitiesMutation";
import { useParams } from "react-router-dom";
import { useAction } from "../../../context/ActionContext";
import { CommentInput, CustomButton } from "../../../components";

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
        <CustomButton
          
          onClick={() => setCallActionStep("CLIENT_ANSWERED")}
        >
          Back
        </CustomButton>
        <CustomButton          
          onClick={handleClick}
        >
          Finish
        </CustomButton>
      </Box>
    </Box>
  );
}

export default ActionCommentdStepContent;
