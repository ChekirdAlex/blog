import { Link } from "react-router-dom";
import { Button, Tag } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

import { formatDate } from "../../helpers";
import defaultAvatar from "../../assets/img/avatar.png";

import styles from "./ShortenItem.module.scss";

export const ShortenItem = ({ article }) => {
  const { slug, title, favorited, favoritesCount, tagList, author, createdAt, description } = article;
  const { username, image } = author;

  const titleText = title.length ? title : "[anonymous article]";

  const isClicked = favorited ? <HeartFilled /> : <HeartOutlined />; // Todo button logic

  const tags = tagList.map((tag, index) => {
    const key = `${slug}${index}`;
    return (
      <li key={key}>
        <Tag className={styles["item__tag"]}>{tag}</Tag>
      </li>
    );
  });

  const avatar = image || defaultAvatar;
  return (
    <article className={styles.article}>
      <div className={styles.item}>
        <header className={styles["item__header"]}>
          <Link to={`/articles/${slug}`} className={styles["item__title"]}>
            {titleText}
          </Link>
          <div className={styles["item__likes"]}>
            <Button icon={isClicked} type="ghost" className={styles["item__like-icon"]} />
            <span className={styles["item__like-count"]}>{favoritesCount}</span>
          </div>
          <ul className={styles["item__tag-list"]}>{tags}</ul>
        </header>
        <div className={styles["item__user-info"]}>
          <span className={styles["item__user-name"]}>{username}</span>
          <span className={styles["item__date"]}>{formatDate(createdAt)}</span>
          <img src={avatar} alt="avatar" className={styles["item__avatar"]} />
        </div>
        <div className={styles["item__description"]}>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};
