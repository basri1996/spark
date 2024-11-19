import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import ActionCallAnswerContent from "./ActionCallAnswerContent";
import { responseType } from "../../../dummyData";
import ActionCommentdStepContent from "./ActionCommentdStepContent";
import ActionRedirectContent from "./ActionRedirectContent";
import useActivitiesMutation from "../mutations/useActivitiesMutation";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { ISingleDealResponse } from "../../../common/types";

function CallActionContent({
  setActionType,
}: {
  setActionType: Dispatch<SetStateAction<string>>;
}) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [step, setStep] = useState("INITIAL");
  const notAnswered = selectedValue === "CLIENT_REJECTED_COMMUNICATION";
  const { id } = useParams();
  const { mutate: createActivity } = useActivitiesMutation();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData<ISingleDealResponse>([
    "useGetSingleDealQuery",
  ]);
  const callCount =
    Number(
      cachedData?.activities
        ?.find((el) => el?.activityType === "CLIENT_REJECTED_COMMUNICATION")
        ?.attributes.find(
          (item) => item.key === "NUMBER_OF_COMMUNICATION_ATTEMPTS"
        )?.value
    ) === 3;

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
            setActionType("");
          },
          onError: (error) => {},
        }
      );
    } else {
      setStep("CLIENT_ANSWERED");
    }
  };

  const Content = () => {
    switch (step) {
      case "INITIAL":
        return (
          <RadioPositionEnd
            list={responseType}
            state={selectedValue}
            setState={setSelectedValue}
            handleClick={handleClick}
            isFinished={notAnswered}
          />
        );
      case "CLIENT_ANSWERED":
        return <ActionCallAnswerContent setStep={setStep} />;
      case "CLIENT_ACCEPTED_DEAL":
        return (
          <ActionCommentdStepContent
            activityType={step}
            setActionType={setActionType}
          />
        );
      case "DEAL_DECLINED_BY_CLIENT":
        return (
          <ActionCommentdStepContent
            activityType={step}
            setActionType={setActionType}
          />
        );
      case "COMMUNICATION_RESCHEDULED":
        return (
          <ActionRedirectContent
            activityType={step}
            setActionType={setActionType}
          />
        );
      case "CLIENT_REDIRECTED_TO_BRANCH":
        return (
          <ActionRedirectContent
            activityType={step}
            setActionType={setActionType}
          />
        );
      case "CLIENT_FILLED_IN_BRANCH":
        return (
          <ActionRedirectContent
            activityType={step}
            setActionType={setActionType}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {Content()}
    </Box>
  );
}

export default CallActionContent;
