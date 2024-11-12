import React from "react";
import styles from "./styles.module.scss";
import GitHubCat from "../../assets/github-cat.gif";

function MegaEvent() {
  return (
    <div className={styles.container}>
      {/* Top Section with Illustration */}
      <div className={styles.imageWrapper}>
        <img
          src={GitHubCat} // Replace with the actual path to the GitHub image
          alt="GitHub Mascot Illustration"
          className={styles.image}
        />
      </div>

      {/* Heading and Description */}
      <h1 className={styles.heading}>Trigger'24 Mega Event</h1>
      <h2>Win Cash Prizes up to ₹1500!</h2>
      <p className={styles.description}>
        Get a taste of the real interview process with Trigger'24’s exclusive
        interview simulation! Designed specifically for pre-final year students
        gearing up for internships, this event offers an authentic experience,
        starting with an online assessment and followed by a live interview
        conducted by a Senior Director at TalentNeuron.
      </p>

      {/* Input and Buttons */}
      <div className={styles.actionContainer}>
        <button
          className={styles.signupButton}
          onClick={() =>
            window.open("https://forms.gle/eaagdEdYsAMVZcLq9", "_blank")
          }
        >
          Register Now!
        </button>
      </div>
    </div>
  );
}

export default MegaEvent;
