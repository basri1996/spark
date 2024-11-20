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
  const { setActionType, callActionStep } = useAction();

  const handleClick = () => {
    createActivity(
      { id, data: { activityType: callActionStep, comment: commentValue } },
      {
        onSuccess: () => {
          setActionType({ name: "", id: "" });
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
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            paddingX: "30px",
            border: "1px solid #5080ff",
            borderRadius: "5px",
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
