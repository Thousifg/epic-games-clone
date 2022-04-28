import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import styles from "./payment.module.css";
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const CardDetails = () => {
  const navigate = useNavigate()

  const handlePaymentPage = (id)=>{
    alert("Payment Successfull");
    navigate(`/Checkout`)
  }

  return (
    <>
      <div className={styles.card_details}>
        <div className={styles.header}>
          <p className={styles.heading}>CARD DETAILS</p>
          <div className={styles.icons}>
          <Icon icon="logos:visa" width="150" height="30" />
          <Icon icon="logos:mastercard" width="150" height="35" />
          </div>
        </div>

        <TextField
          sx={{ mt: 3, width: "100%" }}
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
        />

        <div className={styles.input_div}>
          <TextField
            sx={{ mt: 2, width: "100%" }}
            id="outlined-basic"
            label="Expiration"
            variant="outlined"
          />

          <TextField
            sx={{ mt: 2, width: "100%" }}
            id="outlined-basic"
            label="CVV"
            variant="outlined"
          />
        </div>
        <div className={styles.lower_text}>
          <p className={styles.text}>
            Saved credit cards are authorized for future purchases.
          </p>

          <div className={styles.checkbox_div}>
            <Checkbox sx={{ margin: "0px", padding: "0px" }} />
            <p className={styles.label}>
              Do not save my credit card.{" "}
              <span className={styles.underline_text}>Learn More</span>
            </p>
          </div>
        </div>
        <button
          onClick={()=>handlePaymentPage()}
          type="text"
          className={styles.paymentbtn}
        >
          Proceed To Buy
        </button>
      </div>
    </>
  );
};

export default CardDetails;
