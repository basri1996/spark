import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/icons/MainLogo.png";
import FormComponent from "../../components/form/FormComponent";
import ControlledInput from "../../components/form/ControlledElements/ControlledInput";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export interface PasswordTypes {
  email?: string;
  password?: string;
}
function SignIn() {
  const { setLogIn } = useAuth();
  const navigate = useNavigate();

  const methods: UseFormReturn<PasswordTypes> = useForm<PasswordTypes>({
    defaultValues: {},
  });

  const onSubmit = (value: PasswordTypes) => {
    setLogIn(true);
    navigate("/deals");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
        gap: "40px",
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="Logo"
        sx={{ height: "50px", width: "150px" }}
      />
      <FormComponent methods={methods} onSubmit={onSubmit}>
        <Box
          sx={{
            width: "490px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "16px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Typography
            onClick={() => setLogIn(true)}
            sx={{ fontSize: "24px", lineHeight: "32px", fontWeight: "700" }}
          >
            Sign In
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <ControlledInput
              name="email"
              type="text"
              label="Email"
              disabled={false}
            />
            <ControlledInput
              name="password"
              type="text"
              label="Password"
              disabled={false}
            />
          </Box>
          <Button
            type="submit"
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#5080ff",
              color: "white",
              borderRadius: "12px",
            }}
          >
            Sign In
          </Button>
        </Box>
      </FormComponent>
    </Box>
  );
}

export default SignIn;
