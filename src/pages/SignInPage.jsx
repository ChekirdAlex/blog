import { SignIn } from "../components/UserForms";
import { changeTitle } from "../helpers";

export const SignInPage = () => {
  changeTitle("Blog: Sign In");
  return <SignIn />;
};
