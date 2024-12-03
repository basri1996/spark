import { PropsWithChildren } from "react";
import { useAuth } from "../../context/AuthContext";

interface Props {
  role: string;
}

function ProtectedRoutes({ children, role }: PropsWithChildren<Props>) {
  const { roleChecker } = useAuth();

  if (!roleChecker(role)) return null

  return children;
}

export default ProtectedRoutes;
