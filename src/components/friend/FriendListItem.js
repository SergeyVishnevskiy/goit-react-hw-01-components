import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.listItem} key={id}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="50" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
