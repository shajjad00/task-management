import { useContext } from "react";
import { DataContext } from "../Provider/Provider";

const useAuth = () => {
  const authData = useContext(DataContext);
  console.log(authData);
  return authData;
};

export default useAuth;
