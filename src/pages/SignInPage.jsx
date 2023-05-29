import { SignIn } from "../components/forms";
import { changeTitle } from "../helpers";

export const SignInPage = () => {
  changeTitle("Blog: Sign In");
  return <SignIn />;
};
