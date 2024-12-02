import RadioPositionEnd from "../../../components/common/RadioGroupComponent";
import { useState } from "react";
import { useAction } from "../../../context/ActionContext";
import { responseTypeNext } from "../../../data";

function ActionCallAnswerContent() {
  const [selectedValue, setSelectedValue] = useState<string>(
    responseTypeNext[0].id
  );
  const { setCallActionStep } = useAction();

  const handleClick = () => {
    setCallActionStep(selectedValue);
  };

  return (
    <RadioPositionEnd
      list={responseTypeNext}
      setState={setSelectedValue}
      handleClick={handleClick}
      defaultValue={responseTypeNext[0].label}
    />
  );
}

export default ActionCallAnswerContent;
