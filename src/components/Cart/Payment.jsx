import React from 'react';
import styles from './cart.module.css';

export default function Payment() {
  return (
    <div className={styles.cardPayment}>
      <h2 className={styles.cardPaymentTitle}>Card Payment</h2>
      <form>
        <div className={styles.formGroup}>
          {/* <label htmlFor="cardNumber">Card Number</label> */}
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9123 4567"
            maxLength="16"
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          {/* <label htmlFor="cardName">Cardholder Name</label> */}
          <input
            type="text"
            id="cardName"
            name="cardName"
            placeholder="Your Name"
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            {/* <label htmlFor="expiryDate">Expiry Date</label> */}
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              maxLength="5"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="cvv">CVV</label> */}
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              maxLength="3"
              required
              className={styles.inputField}
            />
          </div>
        </div>
        <button type="submit" className={styles.paymentButton}>
          Submit Payment
        </button>
      </form>
    </div>
  );
}
