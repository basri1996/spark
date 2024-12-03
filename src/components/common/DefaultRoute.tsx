import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DefaultRoute() {
  const { principal } = useAuth();

  const redirectPath = principal?.resource_access?.spark?.roles?.includes(
    "call-center"
  )
    ? "/call-center"
    : "/deals";
  return <Navigate to={redirectPath} replace />;
}

export default DefaultRoute;
