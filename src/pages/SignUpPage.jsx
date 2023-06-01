import { SignUp } from "../components/UserForms";
import { changeTitle } from "../helpers";

export const SignUpPage = () => {
  changeTitle("Blog: Sign Up");
  return <SignUp />;
};
