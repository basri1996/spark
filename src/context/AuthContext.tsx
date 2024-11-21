import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useKeycloak } from "@react-keycloak/web";

interface AuthContextProps {
  principal: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { keycloak, initialized } = useKeycloak();
  const [principal, setPrincipal] = useState();

  useEffect(() => {
    if (initialized && !keycloak?.authenticated) {
      keycloak?.login({ redirectUrl: window.location.href });
    }
    if (keycloak.token) {
      setPrincipal(jwtDecode(keycloak.token));
    }
  }, [keycloak, initialized, setPrincipal]);

  if (!keycloak?.authenticated) return null;

  return (
    <AuthContext.Provider value={{ principal }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
