import React from "react";
import styles from "./styles.module.scss";
import ABOUT from "../../assets/About.svg";
import Button from "../Button";
import { aboutContent } from "../../shared/data";

const AboutSection = (props) => {
    return (
        <div id="about" className={styles.about_section}>
            <div className={styles.text}>
                <h1>ABOUT US</h1>
                <p>{ aboutContent }</p>
                <Button 
                    type="button" 
                    label="Get In Touch" 
                    onClick={() => window.open("mailto:contact.actmit@gmail.com", "_current")}
                />
            </div>
            <div className={styles.image}>
                <img src={ABOUT} alt="About"/>
            </div>
        </div>
    );
}

export default AboutSection;