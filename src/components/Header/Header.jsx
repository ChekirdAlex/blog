import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <Link to="/articles" className={styles["header__title"]}>
      Realworld Blog
    </Link>
    <Link to="/" className={styles["header__auth"]}>
      Sign In
    </Link>
    <Link to="/" className={classNames(styles["header__link"], styles["header__link--sign-up"])}>
      Sign Up
    </Link>
  </header>
);
