import { useState } from "react";
import { useAction } from "../../../context/ActionContext";
import { responseTypeNext } from "../../../data";
import { RadioGroupComponent } from "../../../components";

function ActionCallAnswerContent() {
  const [selectedValue, setSelectedValue] = useState<string>(
    responseTypeNext[0].id
  );
  const { setCallActionStep } = useAction();

  const handleClick = () => {
    setCallActionStep(selectedValue);
  };

  return (
    <RadioGroupComponent
      list={responseTypeNext}
      setState={setSelectedValue}
      handleClick={handleClick}
      defaultValue={responseTypeNext[0].label}
    />
  );
}

export default ActionCallAnswerContent;
