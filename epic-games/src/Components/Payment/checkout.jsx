import React from "react";
import { MdOutlineClose } from "react-icons/md";
import styles from "./checkout.module.css";
import { useNavigate } from 'react-router-dom';

export const Checkout = ({ title, handleModal, id }) => {

    const navigate = useNavigate()
    const handleCheckoutPage = (id)=>{
    navigate(`/`)
  }

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_container}>
        <div className={styles.closeIcon}>
          <MdOutlineClose style={{ fontSize: "24px" }} />
        </div>
        <div className={styles.main}>
          <div className={styles.upper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaB5rB_0g-uMdctrQKDi0yih9w-2WGp2ZMw&usqp=CAU" />
            <p className={styles.thank}>THANK YOU FOR BUYING</p>
          </div>
          <div className={styles.lower}>
            <p className={styles.heading}>Got Epic Games?</p>
            <p className={styles.subheading}>
              If you already have the Epic Games Launcher use the “Open” button
              otherwise download the Epic Games Launcher to play.
            </p>

            <button onClick={()=>handleCheckoutPage()} className={styles.btn}>
              Open Epic Games Launcher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;