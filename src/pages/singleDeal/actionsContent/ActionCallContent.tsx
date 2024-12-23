import { Box } from "@mui/material";
import { useState } from "react";
import ActionCallAnswerContent from "./ActionCallAnswerContent";
import ActionCommentdStepContent from "./ActionCommentdStepContent";
import ActionRedirectContent from "./ActionRedirectContent";
import useActivitiesMutation from "../mutations/useActivitiesMutation";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { ISingleDealResponse } from "../../../common/types";
import { useAction } from "../../../context/ActionContext";
import { responseType } from "../../../data";
import { RadioGroupComponent } from "../../../components";

function CallActionContent() {
  const { setActionType, callActionStep, setCallActionStep } = useAction();
  const [selectedValue, setSelectedValue] = useState<string>("");
  const notAnswered = selectedValue === "CLIENT_REJECTED_COMMUNICATION";
  const { id } = useParams();
  const { mutate: createActivity } = useActivitiesMutation();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData<ISingleDealResponse>([
    "useGetSingleDealQuery",
    id,
  ]);
  const filteredCash = cachedData?.activities?.filter(
    (el) => el?.activityType === "CLIENT_REJECTED_COMMUNICATION"
  );
  const callCount =
    filteredCash &&
    Number(filteredCash[filteredCash.length - 1]?.attributes[0].value) ===
      Number(import.meta.env.VITE_APP_MAX_COMMUNICATION_ATTEMP);

  const handleClick = () => {
    if (notAnswered) {
      createActivity(
        {
          id,
          data: {
            activityType: callCount
              ? "LEAD_CLOSED"
              : "CLIENT_REJECTED_COMMUNICATION",
          },
        },
        {
          onSuccess: () => {
            setActionType({ name: "", id: "" });
          },
          onError: (error) => {},
        }
      );
    } else {
      setCallActionStep("CLIENT_ANSWERED");
    }
  };
  const ContentMap = new Map([
    [
      "INITIAL",
      <RadioGroupComponent
        list={responseType}
        setState={setSelectedValue}
        handleClick={handleClick}
        isFinished={notAnswered}
        state={selectedValue}
      />,
    ],
    ["CLIENT_ANSWERED", <ActionCallAnswerContent />],
    ["CLIENT_ACCEPTED_DEAL", <ActionCommentdStepContent />],
    ["DEAL_DECLINED_BY_CLIENT", <ActionCommentdStepContent />],
    ["COMMUNICATION_RESCHEDULED", <ActionRedirectContent />],
    ["CLIENT_REDIRECTED_TO_BRANCH", <ActionRedirectContent />],
    ["CLIENT_REDIRECTED_TO_BRANCH", <ActionRedirectContent />],
    ["CLIENT_FILLED_IN_BRANCH", <ActionRedirectContent />],
  ]);
  const Content = ContentMap.get(callActionStep);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {Content && Content}
    </Box>
  );
}

export default CallActionContent;
