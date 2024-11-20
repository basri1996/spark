import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

interface ActionContextProps {
  actionType: string;
  setActionType: Dispatch<SetStateAction<string>>;
  callActionStep: string;
  setCallActionStep: Dispatch<SetStateAction<string>>;
}

const ActionContext = createContext<ActionContextProps | undefined>(undefined);

export const ActionContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [actionType, setActionType] = useState("");
  const [callActionStep, setCallActionStep] = useState("INITIAL");

  return (
    <ActionContext.Provider
      value={useMemo(
        () => ({
          actionType,
          setActionType,
          callActionStep,
          setCallActionStep,
        }),
        [actionType, setActionType, callActionStep, setCallActionStep]
      )}
    >
      {children}
    </ActionContext.Provider>
  );
};

export const useAction = (): ActionContextProps => {
  const context = useContext(ActionContext);

  if (context === undefined) {
    throw new Error("useAction must be used within a ActionContextProvider");
  }
  return context;
};
