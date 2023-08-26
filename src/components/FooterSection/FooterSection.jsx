import React from "react";
import styles from "./FooterSection.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const FooterSection = () => {
  return (
    <>   
    <div className={styles.heading} >
      <h1> Discover innovation <br/>opportunities </h1>
    </div>
    <div className={`${styles.footer_container} container`}>
     
      <button className={styles.footer_btns}>
        <span>Talent</span>
        <div>
          <AiOutlineArrowRight />
        </div>
      </button>
      <button className={styles.footer_btns}>
        <span>Entrepreneur</span>
        <div>
          <AiOutlineArrowRight />
        </div>
      </button>
      <button className={styles.footer_btns}>
        <span>Investors</span>
        <div>
          <AiOutlineArrowRight />
        </div>
      </button>
    </div>
    </>
 
  );
};

export default FooterSection;
