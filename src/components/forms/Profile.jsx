import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import cn from "classnames";

import { useUpdateUserMutation } from "../../redux/blog-api";
import { prepareErrorsText, setCookie, setStorageUser } from "../../helpers";
import { clearErrorMessages, setErrorMessages, setUserData } from "../../redux/userSlice";

import styles from "./form.module.scss";

export const Profile = () => {
  const [updateUser] = useUpdateUserMutation();
  const errorMessages = useSelector((state) => state.user.errorMessages);
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { username: "", email: "", password: "", image: "" } });

  const errorMessage = (name) => {
    if (errors[name]) {
      return <div className={styles.errorMessage}>{errors[name].message}</div>;
    }
  };

  const onSubmit = async (user) => {
    const { data, error } = await updateUser({ user: { ...user } });
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

  const formError = (messages) =>
    messages.map((item) => (
      <li key={item} className={styles.formError}>
        {item}
      </li>
    ));

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Edit Profile</h2>
      {errorMessages.length > 0 ? <ol className={styles.errorList}>{formError(errorMessages)}</ol> : null}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          <div className={styles.labelText}>Username</div>
          <input
            className={cn(styles.input, { [styles.errorInput]: errors.username })}
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Username"
            {...register("username", {
              required: "This field is required",
              minLength: { value: 3, message: "Your username needs to be at least 3 characters." },
              maxLength: { value: 20, message: "Your username must be no more than 20 characters." },
              pattern: {
                value: /^[a-z][a-z0-9]*$/,
                message: "You can only use lowercase English letters and numbers",
              },
            })}
          />
          {errorMessage("username")}
        </label>
        <label htmlFor="email">
          <div className={styles.labelText}>Email address</div>
          <input
            className={cn(styles.input, { [styles.errorInput]: errors.email })}
            type="text"
            id="email"
            autoComplete="off"
            placeholder="Email Address"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[0-9a-z][a-z0-9._\-^s]*@[a-z]*\.[a-z]+/,
                message: "Email must be in the correct form",
              },
            })}
          />
          {errorMessage("email")}
        </label>
        <label htmlFor="password">
          <div className={styles.labelText}>New Password</div>
          <input
            className={cn(styles.input, { [styles.errorInput]: errors.password })}
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            {...register("password", {
              required: "This field is required",
              minLength: { value: 6, message: "Your password needs to be at least 6 characters." },
              maxLength: { value: 40, message: "Your password must be no more than 40 characters." },
            })}
          />
          {errorMessage("password")}
        </label>
        <label htmlFor="avatar">
          <div className={styles.labelText}>Avatar image (url)</div>
          <input
            className={cn(styles.input, { [styles.errorInput]: errors.image })}
            type="text"
            id="avatar"
            autoComplete="off"
            placeholder="Avatar image"
            {...register("image", {
              pattern: {
                value: /(^https?:\/\/)?[a-z0-9~_\-.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i,
                message: "Url must be in the correct form",
              },
            })}
          />
          {errorMessage("image")}
        </label>
        <label htmlFor="submit">
          <input type="submit" id="submit" value="Save" className={styles.submit} />
        </label>
      </form>
    </div>
  );
};
