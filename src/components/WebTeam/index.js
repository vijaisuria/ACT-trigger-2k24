import React, { useState } from "react";
import { WebTeam } from "../../shared/data"; 
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const WebTeamSection = () => {
    const filteredWebTeam = WebTeam; // Example variable, replace with your actual logic

    return (
        <div className={styles.WebTeam_section} id="WebTeam">
            <h1>WEB TEAM</h1>
            
            <div className={styles.grid}>
                {filteredWebTeam.map(event => (
                    <div key={event.id} className={styles.card}>
                        <div className={styles.body}>
                            <h2>{event.title}</h2>
                            <div className={styles.tags}>
                                {event.tags.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <b><p>{event.description}</p></b>

                            {/* Social media links */}
                            <div className={styles.socialIcons}>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WebTeamSection;
