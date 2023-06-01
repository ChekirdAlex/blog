import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getCookie } from "../helpers";

export const useAuthCheck = (isAuth = false) => {
  const user = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const location = useLocation();

  let navigateAddress;
  let condition;

  if (isAuth) {
    navigateAddress = "/articles";
    condition = user || getCookie("Token");
  } else {
    navigateAddress = "/sign-in";
    condition = !(user || getCookie("Token"));
  }

  useEffect(() => {
    if (condition) navigate(navigateAddress, { state: { from: location.pathname }, replace: true });
  }, [user, getCookie]);
};
