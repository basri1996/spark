import { Box, TextField } from "@mui/material";

function CommentInput({ value, onChange, label }: any) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextField
        value={value}
        id="filled-multiline-flexible"
        onChange={(e) => onChange(e.target.value)}
        multiline
        rows={4}
        label={label}
        fullWidth
        sx={{
          height: "100px",
          "& .MuiInputBase-root": {
            paddingTop: "30px",
          },
        }}
      />
    </Box>
  );
}

export default CommentInput;
