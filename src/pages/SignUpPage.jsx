import { SignUp } from "../components/UserForms";
import { changeTitle } from "../helpers";
import { useAuthCheck } from "../hooks";

export const SignUpPage = () => {
  useAuthCheck(true);
  changeTitle("Blog: Sign Up");
  return <SignUp />;
};
