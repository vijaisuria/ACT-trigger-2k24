import React from "react";
import styles from "./styles.module.scss";
import PHONE from "../../assets/Phone.svg";
import { socials, chairman, generalSecretary } from "../../shared/data";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <h2>TRIGGER 2K24</h2>
        <div className={styles.contacts}>
          <span className={styles.contact}>
            <p>Chairman</p>
            <span>
              <img src={PHONE} alt="phone" />
              <p>
                <a href={`tel:${chairman.mobileNumber}`}>
                  {chairman.mobileNumber}
                </a>
                &nbsp;&nbsp;({chairman.name})
              </p>
            </span>
          </span>
          <span className={styles.contact}>
            <p>General Secretary</p>
            <span>
              <img src={PHONE} alt="phone" />
              <p>
                <a href={`tel:${generalSecretary.mobileNumber}`}>
                  {generalSecretary.mobileNumber}
                </a>
                &nbsp;&nbsp;({generalSecretary.name})
              </p>
            </span>
          </span>
        </div>
        <div className={styles.social}>
          {socials.map((social) => (
            <a key={social.id} href={social.url}>
              <img alt="icon" src={social.icon} />
            </a>
          ))}
        </div>
        <div className={styles.copyright}>
          <p>
            &copy; 2024 ACT. Crafted with ❤️ by the{" "}
            <a
              href="trigger/team"
              style={{ color: "#27257b", fontWeight: "700" }}
            >
              Web Team
            </a>
            .
          </p>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Footer;
