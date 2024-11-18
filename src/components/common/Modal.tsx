import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton as MuiIconButtonBase,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalTitle } from "./useStyles";

function Modal({ title, isDialogOpen, children, handleDialogClose }: any) {
  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: "16px",
          minWidth: "300px",
        },
      }}
      open={isDialogOpen}
      onClose={handleDialogClose}
    >
      <DialogTitle sx={ModalTitle} id="customized-dialog-title">
        {title}
        <MuiIconButtonBase
          aria-label="close"
          onClick={handleDialogClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </MuiIconButtonBase>
      </DialogTitle>

      <DialogContent
        sx={{
          padding: "25px",
          paddingTop: "10px !important",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
