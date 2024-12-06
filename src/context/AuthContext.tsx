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
  roleChecker:(role:string)=>boolean
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);


//lead-manager
export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { keycloak, initialized } = useKeycloak();
  const [principal, setPrincipal] = useState<any>({resource_access:{spark:{roles:["lead-manager"]}}});

  // useEffect(() => {
  //   if (initialized && !keycloak?.authenticated) {
  //     keycloak?.login({ redirectUri: window.location.origin });
  //   }
  //   if (keycloak.token) {
  //     setPrincipal(jwtDecode(keycloak.token));
  //   }
  // }, [keycloak, initialized, setPrincipal]);

  // if (!keycloak?.authenticated) return null;

  const roleChecker =(role:string)=>{
    if(principal?.resource_access?.spark?.roles?.includes(role)){
      return true 
    }else{
      return false
    }
   
  }

  return (
    <AuthContext.Provider value={{ principal ,roleChecker}}>
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
