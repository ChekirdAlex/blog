import { SignIn } from "../components/UserForms";
import { changeTitle } from "../helpers";
import { useAuthCheck } from "../hooks";

export const SignInPage = () => {
  useAuthCheck(true);
  changeTitle("Blog: Sign In");
  return <SignIn />;
};
