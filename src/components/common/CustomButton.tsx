import { Button } from "@mui/material";
import { PropsWithChildren } from "react";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset";
}

function CustomButton({
  children,
  disabled = false,
  onClick,
  sx,
  type = "button",
}: PropsWithChildren<Props>) {
  return (
    <Button
      component="button" 
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      sx={sx}
      type={type} 
    >
      {children}
    </Button>
  );
}

export default CustomButton;
