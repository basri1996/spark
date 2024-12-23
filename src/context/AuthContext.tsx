import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useKeycloak } from "@react-keycloak/web";
import { api } from "../config/api";

interface AuthContextProps {
  principal: any;
  roleChecker: (role: string) => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { keycloak, initialized } = useKeycloak();
  const [principal, setPrincipal] = useState<any>({resource_access:{spark:{roles:["lead-manager"]}}});
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (initialized && !keycloak?.authenticated) {
      keycloak?.login({ redirectUri: window.location.origin });
    }

    if (initialized && keycloak?.authenticated) {
      setPrincipal(jwtDecode(keycloak.token!));
    }
  }, [initialized, keycloak]);

  useEffect(() => {
    const responseInterceptor = api.interceptors.request.use((config) => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      inactivityTimerRef.current = setTimeout(() => {
        keycloak.logout();
      }, 15 * 60 * 1000);
      return config;
    });
    return () => {
      api.interceptors.response.eject(responseInterceptor);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [keycloak]);

  if (!keycloak?.authenticated) return null;

  const roleChecker = (role: string) => {
    return principal?.resource_access?.spark?.roles?.includes(role) ?? false;
  };

  return (
    <AuthContext.Provider value={{ principal, roleChecker }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
