import { useState } from "react";
import { useParams } from "react-router-dom";
import useChangeStatusMutation from "../mutations/useChangeStatusMutation";
import { useAction } from "../../../context/ActionContext";
import { statusType } from "../../../data";
import { useQueryClient } from "@tanstack/react-query";
import { ISingleDealResponse } from "../../../common/types";
import { RadioGroupComponent } from "../../../components";

function ActionStatusContent() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData<ISingleDealResponse>([
    "useGetSingleDealQuery",
    id,
  ]);
  const list = statusType?.filter(
    (el) => el.id !== cachedData?.deal.dealStatus
  );
  const [selectedValue, setSelectedValue] = useState<string>(list[0].id);
  const { setActionType } = useAction();
  const { mutate: changeStatus } = useChangeStatusMutation();

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
      <RadioGroupComponent
        list={list}
        setState={setSelectedValue}
        handleClick={handleClick}
        isFinished={true}
        defaultValue={list[0].label}
      />
    </>
  );
}

export default ActionStatusContent;
