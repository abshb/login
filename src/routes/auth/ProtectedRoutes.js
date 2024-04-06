import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token === null) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isLoggedIn]);
  return children;
}
