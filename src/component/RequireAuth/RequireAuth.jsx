import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const RequireAuth = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  return (
    <>
      {auth?.user ? (
        <Outlet />
      ) : (
        (alert("you are not autherized login first"),
        (<Navigate to="/signin" state={{ from: location }} replace />))
      )}
    </>
  );
};

export default RequireAuth;
