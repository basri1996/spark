import { Box, Popover } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface Props {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}
function PopOver({
  id,
  open,
  anchorEl,
  handleClose,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{ marginTop: "10px" }}
    >
      <Box sx={{ padding: "20px" }}>{children}</Box>
    </Popover>
  );
}

export default PopOver;
