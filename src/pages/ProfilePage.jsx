import { Profile } from "../components/UserForms";
import { changeTitle } from "../helpers";
import { useAuthCheck } from "../hooks";

export const ProfilePage = () => {
  useAuthCheck();
  changeTitle("Blog: profile");
  return <Profile />;
};
