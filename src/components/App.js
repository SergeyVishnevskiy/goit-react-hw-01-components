import React from "react";
import styles from "./App.module.css";
import data from "../data";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friend/FriendList";
import TransactionHistory from "./transactions/TransactionHistory";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Profile {...data.user} />
      <Statistics title="Upload stats" stats={data.statisticalData} />
      <Statistics stats={data.statisticalData} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </div>
  );
};

export default App;
