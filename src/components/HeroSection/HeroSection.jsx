import React from "react";
import styles from "./HeroSection.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
   
      <div className={`${styles.content_section} style.image `}
        style={{
          backgroundImage: `url(./images/greece.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <h1 >
          <span style={{ backgroundColor: "#f0f7ff", borderRadius: '60px', padding: "16px", color: "#1a4d80" }} >Greece</span> <span style={{ backgroundColor: "#f0f7ff", padding: "16px", color: "#1a4d80" }}  > the </span><br />
          <span style={{ backgroundColor: "#f0f7ff",  padding: "16px", color: "#1a4d80" }} > birthplace </span> <span style={{ backgroundColor: "#f0f7ff", borderRadius: '60px', padding: "16px", marginLeft: "5px", color: "#1a4d80" }}> of ideas </span>
        </h1>
        <p>
          Right in the cradle of Western civilization and at the heart of
          contemporary innovation, we invite innovative minds, ecosystem-driving
          entrepreneurs and leading investors to explore, grow, and invest in a
          country that blends rich history, captivating culture and a promising
          entrepreneurial ecosystem.
        </p>
        <div className={styles.btn}>
          <Button
            text="Become a citizen"
            icon={
              <AiOutlineArrowRight
                fontSize={"24px"}
                style={{ background: "none" }}
              />
            }
          />
        </div>
      </div>
  );
};

export default HeroSection;
