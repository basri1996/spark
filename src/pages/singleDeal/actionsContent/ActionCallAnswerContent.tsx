import { useState } from "react";
import { useAction } from "../../../context/ActionContext";
import { responseTypeNext } from "../../../data";
import { RadioGroupComponent } from "../../../components";

function ActionCallAnswerContent() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const { setCallActionStep } = useAction();

  const handleClick = () => {
    setCallActionStep(selectedValue);
  };

  return (
    <RadioGroupComponent
      list={responseTypeNext}
      setState={setSelectedValue}
      handleClick={handleClick}
      state={selectedValue}
    />
  );
}

export default ActionCallAnswerContent;
