import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileCard}>
        <img className={styles.avatar} src={avatar} alt="Avatar" width="125" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.text}>Followers</span>
          <span className={styles.number}>{stats.followers}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.text}>Views</span>
          <span className={styles.number}>{stats.views}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.text}>Likes</span>
          <span className={styles.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
