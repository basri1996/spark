import { Box } from "@mui/material";
import ActionCallContent from "./ActionCallContent";
import ActionRiskContent from "./ActionRiskContent";
import ActionModifyContent from "./ActionModifyContent";
import ActionStatusContent from "./ActionStatusContent";
import ActionSighContent from "./ActionSighContent";
import { Dispatch, SetStateAction } from "react";

interface Props {
  actionType: string;
  setActionType: Dispatch<SetStateAction<string>>;
}

function ActionModalContent({ actionType, setActionType }: Props) {
  const Content = (actionType: string) => {
    switch (actionType) {
      case "Call":
        return <ActionCallContent setActionType={setActionType} />;
      case "Modify":
        return <ActionModifyContent setActionType={setActionType} />;
      case "Risk":
        return <ActionRiskContent setActionType={setActionType} />;
      case "Sign":
        return <ActionSighContent setActionType={setActionType} />;
      case "Status":
        return <ActionStatusContent setActionType={setActionType} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {Content(actionType)}
    </Box>
  );
}

export default ActionModalContent;
