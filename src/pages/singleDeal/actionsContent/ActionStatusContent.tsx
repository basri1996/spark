import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useChangeStatusMutation from "../mutations/useChangeStatusMutation";
import { useAction } from "../../../context/ActionContext";
import { statusType } from "../../../data/data";
import { useQueryClient } from "@tanstack/react-query";
import { ISingleDealResponse } from "../../../common/types";

function ActionStatusContent() {
  const [selectedValue, setSelectedValue] = useState<string>();
  const { setActionType } = useAction();
  const { id } = useParams();
  const { mutate: changeStatus } = useChangeStatusMutation();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData<ISingleDealResponse>([
    "useGetSingleDealQuery",
    id,
  ]);
  const list = statusType?.filter(
    (el) => el.id !== cachedData?.deal.dealStatus
  );

  const handleClick = () => {
    changeStatus(
      {
        id,
        data: {
          status: selectedValue,
        },
      },
      {
        onSuccess: () => {
          setActionType({ name: "", id: "" });
        },
        onError: (error) => {},
      }
    );
  };

  return (
    <>
      <RadioPositionEnd
        list={list}
        setState={setSelectedValue}
        handleClick={handleClick}
        isFinished={true}
      />
    </>
  );
}

export default ActionStatusContent;
