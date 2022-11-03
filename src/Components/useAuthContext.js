import { useContext } from "react";
import AuthContext from "./AuthContext";
const useAuthContextjs = () => {
  const user = useContext(AuthContext);
  if (user === undefined) {
    throw new Error("UseAuthContext can only be used inside AuthProvider");
  }
  return user;
};
