import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/RouteGroups";
import queryClient from "./query/queryClient";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { AuthContextProvider } from "./context/AuthContext";
import keycloak from "./keycloak/keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import ErrorBoundary from "./error/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <ErrorBoundary>
            <RouterProvider
              router={router}
              future={{
                v7_startTransition: true,
              }}
            />
          </ErrorBoundary>
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ReactKeycloakProvider>
);
