import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "./style.module.scss";

import Vijai from "../../assets/team/Vijai.jpg";
import Navin from "../../assets/team/navin-v1.jpg";
import Teje from "../../assets/team/Tejesshree.jpg";
import Nishika from "../../assets/team/Nishika-v1.jpg";

const persons = [
  {
    name: "Vijai Suria",
    photo: Vijai,
    title: "Web Dev Lead",
    bio: 'I am Vijai Suria, a final-year Computer Science Engineering student passionate about driving innovation through technology. With a strong foundation in community contributions, I currently serve as the <strong>Web Master at ACT</strong>, where I oversee technical activities, including the development and deployment of websites. <br/><br/> Dedicated to lifelong learning, I enjoy coding and creating impactful products that serve others. I\'m currently the <strong>Lead / Organizer</strong> of <a href="https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/">Google Developer Groups On Campus at MIT (Madras Institute of Technology)</a>, fostering a culture of innovation and collaboration within the student community. <br/><br/> With a special interest in AI and ML, I’m excited to contribute to the future of mobile and web development by blending advanced technologies with user-centered design to drive transformative experiences.',
    social: {
      linkedin: "https://www.linkedin.com/in/vijaisuria/",
      github: "https://github.com/vijaisuria",
      portfolio: "https://vijaisuria.github.io/",
      instagram: ""
    },
  },
  {
    name: "Tejesshree",
    photo: Teje,
    title: "Project Incharge",
    bio: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {
      github: "https://github.com/NishikaChellaum",
      linkedin: "https://www.linkedin.com/in/tejesshree-s-4a490a316",
      instagram: "https://www.instagram.com/naturally_me_teju/profilecard",
    },
  },
  {
    name: "Nishika Chellaum",
    photo: Nishika,
    title: "Front-end Developer",
    bio: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {
      instagram: "https://www.instagram.com/nishika05_26/profilecard",
      github: "https://github.com/NishikaChellaum",
      linkedin: "https://www.linkedin.com/in/nishikachellaum/",
    },
  },
  {
    name: "Navin",
    photo: Navin,
    title: "Front-end Developer",
    bio: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
    social: {
      github: "https://github.com/Navin1710",
      instagram:
        "https://www.instagram.com/nxvin_17/profilecard/?igsh=MXZrc2FmcnF4ZjM4Yw==",
      linkedin: "https://www.linkedin.com/in/navin-s-46b321286/",
    },
  },
];

const Team = () => {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [selectedPersonData, setSelectedPersonData] = useState(null);

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of tsparticles for optimized bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    //console.log("Particles Loaded", container);
  };

  const selectPerson = (index, event) => {
    if (!isOk) {
      setSelectedPersonIndex(index);
      setIsSelected(true);
      setSelectedPersonData(persons[index]);

      // Simulate inline styles change as done in Vue code
      setTimeout(() => {
        setIsReady(true);
        setIsOk(true);
      }, 420);
    } else {
      reset();
    }
  };

  const removePerson = () => {
    setIsSelected(false);
    setIsOk(false);
    setTimeout(() => {
      setIsReady(false);
    }, 400);
  };

  const reset = () => {
    setIsReady(false);
    setTimeout(() => {
      setIsSelected(false);
      setIsOk(false);
    }, 400);
  };

  const styles1 = {
    sidebar: {
      height: "100vh",
      width: "80px",
      backgroundColor:
        "radial-gradient( circle at top left, #950923 10%, #111113 30%)",
      display: "flex",
      position: "fixed",
      left: 0,
      top: 0,
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  };

  return (
    <div className={styles.teambody}>
      {init && (  
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <div
        className={`${styles.container} ${
          isSelected ? styles["container-selected"] : ""
        } ${isReady ? styles["container-ready"] : ""}`}
      >
        <div className={styles["team-container"]}>
          <div className={styles.header}>
            <h2 className={styles["header-title"]}>Behind the Magic</h2>
            <h4 className={styles["header-tagline"]}>
              Where Ideas Come to Life.
            </h4>
          </div>
          <div className={styles["person-list"]}>
            {persons.map((person, index) => (
              <div
                key={index}
                className={styles.person}
                onClick={(e) => selectPerson(index, e)}
              >
                <img
                  className={styles["person-img"]}
                  src={person.photo}
                  alt={person.name}
                />
                <div className={styles["person-details"]}>
                  <h2 className={styles["person-title"]}>{person.name}</h2>
                  <p className={styles["person-desc"]}>{person.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isOk && (
          <div className={styles["team-detail"]}>
            <div style={styles1.sidebar} onClick={removePerson}>
              <span
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="ion-ios-arrow-back"
                style={{ fontSize: "32px", color: "#fff" }}
              ></span>
            </div>
            <div className={styles["team-detail-inner"]}>
              <div
                className={styles["team-detail-left"]}
                style={{ backgroundImage: `url(${selectedPersonData.photo})` }}
              >
                <div className={styles["team-detail-photo"]}>
                  <img
                    src={selectedPersonData.photo}
                    alt={selectedPersonData.name}
                  />
                </div>
              </div>
              <div className={styles["team-detail-right"]}>
                <div className={styles["team-detail-bio"]}>
                  <div className={styles["team-detail-header"]}>
                    <h2 className={styles["person-title"]}>
                      {selectedPersonData.name}
                    </h2>
                    <p className={styles["person-desc"]}>
                      {selectedPersonData.title}
                    </p>
                    <div className={styles.social}>
                      <a
                        href={selectedPersonData.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ion-social-instagram"
                      ></a>
                      <a
                        href={selectedPersonData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ion-social-github"
                      ></a>
                      <a
                        href={selectedPersonData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ion-social-linkedin"
                      ></a>
                    </div>
                  </div>
                  <div
                    className={styles["team-detail-bio-content"]}
                    dangerouslySetInnerHTML={{ __html: selectedPersonData.bio }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
