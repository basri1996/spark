import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/RouteGroups";
import queryClient from "./config/queryClient";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import keycloak from "./config/keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { refreshToken } from "./utils";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}  >
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={theme}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  </ReactKeycloakProvider>
);
