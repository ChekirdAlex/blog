import { clearErrorMessages, setErrorMessages, setUserData } from "../redux/userSlice";

import { prepareErrorsText } from "./textFormatHelpers";
import { setStorageUser } from "./storageHelpers";
import { setCookie } from "./cookieHelpers";

export const submitUserData = async (user, callback, dispatch, reset) => {
  const { data, error } = await callback({ user: { ...user } });
  if (error) {
    const errorsArray = prepareErrorsText(error.data.errors);
    dispatch(setErrorMessages(errorsArray));
    return;
  }
  const { token, username, email, image } = data.user;
  dispatch(clearErrorMessages());
  setStorageUser(username, email, image);
  setCookie("Token", token, { SameSite: "strict" });
  dispatch(setUserData({ username, email, image }));
  reset();
};
