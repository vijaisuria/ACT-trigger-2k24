import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../../shared/data";
import styles from "./styles.module.scss";

const EventsSection = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Technical");
  const categories = ["Technical", "Non Technical", "Fun Tech", "Workshop"];

  const filteredEvents = events.filter((event) =>
    event.tags.includes(selectedCategory)
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const onClick = (event) => {
    navigate(`/trigger/event/${event}`);
  };

  return (
    <div className={styles.events_section} id="events">
      <h1>EVENTS</h1>

      <div className={styles.navbar}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.nav_item} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className={styles.card}
            onClick={() => onClick(event.id)}
          >
            <div className={styles.body}>
              <h2>{event.title}</h2>
              <div className={styles.tags}>
                {event.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <b>
                <p>{event.description}</p>
              </b>
            </div>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.button}
                onClick={() => window.open(event.registrationLink, "_blank")}
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
