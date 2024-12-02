import { PropsWithChildren } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  role: string;
}

function ProtectedRoutes({ children, role }: PropsWithChildren<Props>) {
  const { roleChecker } = useAuth();

  if (!roleChecker(role)) return <Navigate to="/call-center"/>

  return children;
}

export default ProtectedRoutes;
