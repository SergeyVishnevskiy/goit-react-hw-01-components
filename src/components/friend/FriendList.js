import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friend}>
      <ul className={styles.list}>
        {friends.map((friend) => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
