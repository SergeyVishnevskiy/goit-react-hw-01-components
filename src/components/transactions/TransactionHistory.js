import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transaction}>
      <table className={styles.transactionTable}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.type}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((item) => (
            <tr key={item.id}>
              <th className={styles.type}>{item.type}</th>
              <th>{item.amount}</th>
              <th>{item.currency}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
