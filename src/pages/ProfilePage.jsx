import { Profile } from "../components/forms";
import { changeTitle } from "../helpers";
import { useAuthCheck } from "../hooks";

export const ProfilePage = () => {
  useAuthCheck();
  changeTitle("Blog: profile");
  return <Profile />;
};
