import { Box } from "@mui/material";
import ActionCallContent from "./ActionCallContent";
import ActionRiskContent from "./ActionRiskContent";
import ActionModifyContent from "./ActionModifyContent";
import ActionStatusContent from "./ActionStatusContent";
import ActionSighContent from "./ActionSighContent";
import { useAction } from "../../../context/ActionContext";
import ActionCommentContent from "./ActionCommentContent";

const ContentMap = new Map([
  ["Call", ActionCallContent],
  ["Modify", ActionModifyContent],
  ["Risk", ActionRiskContent],
  ["Sign", ActionSighContent],
  ["Status", ActionStatusContent],
  ["Comment", ActionCommentContent],
]);

function ActionModalContent() {
  const { actionType } = useAction();
  const Content = ContentMap.get(actionType.id);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {Content && <Content />}
    </Box>
  );
}

export default ActionModalContent;
