import { useAuthContext } from "./userAuthContext";

export const SellerLogout = () => {
  const { dispatch } = useAuthContext();

  const sLogout = () => {
    // remove user from storage
    localStorage.removeItem("seller");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  }

  return {sLogout}
};