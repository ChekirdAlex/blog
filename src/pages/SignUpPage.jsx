import { SignUp } from "../components/forms";
import { changeTitle } from "../helpers";

export const SignUpPage = () => {
  changeTitle("Blog: Sign Up");
  return <SignUp />;
};
