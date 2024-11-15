import Facebook from "../../assets/social icons/Facebook.svg";
import Instagram from "../../assets/social icons/Instagram.svg";
import LinkedIn from "../../assets/social icons/LinkedIn.svg";

import BUG from "../../assets/posters/Bug.png";
import CODE_ON_THE_CORNER from "../../assets/posters/Code - Corner.png";
import C_NOOBIES from "../../assets/posters/C Noob.png";
import CONNEXIONS from "../../assets/posters/Connexions.png";
import DAVIS from "../../assets/posters/Davis.png";
import DETECTIVE_SQL from "../../assets/posters/DSQL.png";
import ENTREPRENEUR from "../../assets/posters/Entrepreneur.png";
import INSIGHT_QUEST from "../../assets/posters/InQuest.png";
import NON_TECH from "../../assets/posters/non-tech.png";
import OOPS_ODYSSEY from "../../assets/posters/OOps.png";
import OpenSourceGDG from "../../assets/posters/OpenSourceGDG.png";
import SHARK_TANK from "../../assets/posters/Shark Tank.png";
import SQL_AUCTION_HOUSE from "../../assets/posters/SQL Auction.png";
import TECHNOMIMES from "../../assets/posters/TechNoMimes.png";
import TREASURE_HUNT from "../../assets/posters/Treasure.png";
import WEB_DEV_RELAY_RACE_POSTER from "../../assets/posters/Web.png";
import MEGA_EVENT_POSTER from "../../assets/posters/Megaevent.png";

export const socials = [
  {
    id: 2,
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/act.mit/",
  },
  {
    id: 3,
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/act.mitindia.1",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/prayatna-mit/",
  },
];

export const events = [
  {
    id: 1,
    title: "Detective SQL",
    description:
      "A mystery-inspired SQL-based investigation where participants solve SQL queries to reveal clues and uncover the culprit.",
    poster: DETECTIVE_SQL,
    tags: ["Technical", "SQL"],
    teamSize: 2,
    venue: "DCL Lab",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Darshan B",
        mobileNumber: "+91 9087 05309",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: MCQs and basic SQL queries (written)",
      "Round 2: Solve SQL clues to find the culprit",
    ],
  },
  {
    id: 2,
    title: "SQL Auction House",
    description:
      "An SQL challenge where participants use virtual currency to bid on SQL problems, aiming to maximize points.",
    poster: SQL_AUCTION_HOUSE,
    tags: ["Technical", "SQL"],
    teamSize: 2,
    venue: "CB103",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Rajkumar M",
        mobileNumber: "+91 93610 27620",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: MCQs and basic SQL queries (written)",
      "Round 2: Bid on SQL problems using virtual currency",
    ],
  },
  {
    id: 3,
    title: "Bug Hunt Show Down",
    description:
      "A high-energy debugging challenge where participants locate and fix bugs in code snippets.",
    poster: BUG,
    tags: ["Technical", "Programming"],
    teamSize: 2,
    venue: "CB103",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Vibiksha Bharathi P K",
        mobileNumber: "+91 76395 30116",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: MCQs and find errors in code snippets (written)",
      "Round 2: Race to fix bugs in code snippets",
    ],
  },
  {
    id: 4,
    title: "Code on the Corner",
    description:
      "A coding challenge with playful distractions where participants must stay focused on coding tasks despite interruptions.",
    poster: CODE_ON_THE_CORNER,
    tags: ["Technical", "Programming"],
    teamSize: 2,
    venue: "CB103",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Nithish Kumar S",
        mobileNumber: "+91 63793 24267",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: MCQs on basic programming strategies",
      "Round 2: Coding tasks with playful interruptions",
    ],
  },
  {
    id: 5,
    title: "C Noobies",
    description:
      "An individual programming event focusing on foundational concepts and coding skills.",
    poster: C_NOOBIES,
    tags: ["Technical", "Programming"],
    teamSize: 1,
    venue: "CB203",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Aishwarya Devi R",
        mobileNumber: "+91 84388 07215",
      },
    ],
    rules: [
      "Individual event",
      "Round 1: MCQs on basic programming concepts",
      "Round 2: Programming contest in lab",
    ],
  },
  {
    id: 6,
    title: "Web Dev Relay Race",
    description:
      "A team web development race where participants swap roles to build a website within a set time.",
    poster: WEB_DEV_RELAY_RACE_POSTER,
    tags: ["Technical", "Web Development"],
    teamSize: 2,
    venue: "CB 105",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Babith Sarish S",
        mobileNumber: "+91 94864 46388",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: MCQs on web development concepts",
      "Round 2: Team relay to build a website, swapping roles periodically",
    ],
  },
  {
    id: 7,
    title: "Insight Quest",
    description:
      "A data analysis challenge where teams uncover insights from a dataset and present their findings.",
    poster: INSIGHT_QUEST,
    tags: ["Technical", "Machine Learning", "Data Science"],
    teamSize: 2,
    venue: "CB206",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Varun D",
        mobileNumber: "+91 98942 96618",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: MCQs on data analysis basics",
      "Round 2: Analyze data and present insights",
    ],
  },
  {
    id: 8,
    title: "OOPs Odyssey",
    description:
      "An OOP-based adventure where participants model an imaginative environment using object-oriented principles.",
    poster: OOPS_ODYSSEY,
    tags: ["Technical", "OOP"],
    teamSize: 2,
    venue: "CB302",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Nishika Chellaum S",
        mobileNumber: "+91 86376 50773",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: MCQs on OOP concepts",
      "Round 2: Play with Class-Object Relationship",
    ],
  },
  {
    id: 9,
    title: "TechNoMimes",
    description:
      "A mime-based event where participants act out technical terms to help their teammate guess.",
    poster: TECHNOMIMES,
    tags: ["Fun-Tech"],
    teamSize: 2,
    venue: "CB206",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Durga K",
        mobileNumber: "+91 6379634919",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: Act out basic technical terms",
      "Round 2: Act out advanced terms with time constraint",
    ],
  },
  {
    id: 10,
    title: "Connexions",
    description:
      "A game of connecting images to technical terms, followed by guessing terms based on clues.",
    poster: CONNEXIONS,
    tags: ["Fun-Tech"],
    teamSize: 2,
    venue: "DCL",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Shubhakarini",
        mobileNumber: "+91 8637641770",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: Connect pictures to find technical terms",
      "Round 2: Guess words from clues based on Round 1 terms",
    ],
  },
  {
    id: 11,
    title: "Treasure Hunt",
    description:
      "A high-energy scavenger hunt with a mix of crossword puzzles and clue-based treasure hunting.",
    poster: TREASURE_HUNT,
    tags: ["Fun-Tech"],
    teamSize: 2,
    venue: "HPC",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Daphny Jessica",
        mobileNumber: "+91 7305689591",
      },
    ],
    rules: [
      "Teams of max 2 members",
      "Round 1: Solve a crossword puzzle amidst chaos",
      "Round 2: Follow clues across the campus to find the hidden treasure",
    ],
  },
  {
    id: 12,
    title: "Mega Event",
    description:
      "Get a taste of the real interview process with Trigger'24's exclusive interview simulation! Designed specifically for pre-final year students gearing up for internships, this event offers an authentic experience, starting with an online assessment and followed by a live interview conducted by a Senior Director at TalentNeuron.",
    poster: MEGA_EVENT_POSTER,
    tags: ["Technical", "Coding"],
    teamSize: 1,
    venue: "DCL, HPC",
    schedule: "Nov 15 and 16",
    organizers: [
      {
        name: "Vijai Suria",
        mobileNumber: "+91 6381544020",
      },
    ],
    rules: [
      "Who can participate: Pre-final year student",
      "Round 1: Test your coading skill",
      "Round 2: Mock interview",
    ],
    registrationLink: "https://forms.gle/eaagdEdYsAMVZcLq9",
  },
  {
    id: 13,
    title: "GitHub & Open Source Contribution",
    description:
      "This workshop is designed to introduce participants to the world of open source, covering essential concepts, tools, and practices that empower them to become active contributors. Through a mix of lecture and hands-on practice, participants will learn how to navigate Git and GitHub, understand the process of contributing to open-source projects, and gain practical experience by contributing. For more information, visit the https://gdg.community.dev/e/mwwkry/",
    poster: OpenSourceGDG,
    tags: ["Workshop", "GDG"],
    teamSize: 1,
    venue: "HPC",
    schedule: "Nov 16",
    organizers: [
      {
        name: "Vijai Suria",
        mobileNumber: "+91 6381544020",
      },
      {
        name: "Mugundh J B",
        mobileNumber: "+91 90800 24186",
      },
    ],
    rules: [],
    registrationLink:
      "https://gdg.community.dev/events/details/google-gdg-on-campus-madras-institute-of-technology-chennai-india-presents-getting-started-with-github-amp-open-source-contributions/",
  },
  {
    id: 14,
    title: "Docking deep : Fundamentals of docker",
    tags: ["Workshop"],
    teamSize: 1,
    description:
      "This workshop will provide a comprehensive introduction to Docker, a powerful platform for developing, shipping, and running applications inside containers. Participants will learn the core concepts behind containerization, how Docker simplifies development workflows, and how to manage containers effectively.",
    poster: DAVIS,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfYAjn8rffOw_SxaSE9OIZ7Wclj3J2OnKCPBik1LjDVacvThA/viewform?usp=send_form",
    venue: "CB Conference Hall",
    schedule: "Nov 16 , 9.00 - 12:30PM",
    organizers: [
      {
        name: "JayaPrakash S M",
        mobileNumber: "+91 93636 96070",
      },
    ],
    Presenter: "Mr. SIVA HARI A S, software engineer, navis",
  },
  {
    id: 15,
    title: "Elevate entrepreneurial mindset",
    tags: ["Workshop"],
    teamSize: 1,
    description:
      "This session is designed to inspire and cultivate a growth-oriented entrepreneurial mindset. Participants will explore key traits of successful entrepreneurs, such as resilience, creativity, risk-taking, and problem-solving. The workshop will focus on strategies for overcoming challenges, turning ideas into actionable plans, and building a business-oriented mindset for innovation and success. Through interactive discussions and practical exercises, attendees will learn how to think like entrepreneurs, embrace failure as part of the learning process, and develop the confidence to take bold steps in their ventures.",
    poster: ENTREPRENEUR,
    registrationLink: "https://forms.gle/kcFufNqcq7YDfjNc8",
    venue: "DCL Lab GJ Block",
    schedule: "Nov 16 , 9.00 - 12:30PM",
    organizers: [
      {
        name: "Kanishka P",
        mobileNumber: "+91 77086 19770",
      },
    ],
    Presenter: "AUSEC, MIT",
  },
];

export const generalSecretary = {
  name: "Siva Jegadeesh C B",
  mobileNumber: "+91 95241 77935",
};

export const chairman = {
  name: "Mohammed Riffath",
  mobileNumber: "+91 86675 46405",
};

export const aboutContent =
  "ACT established in the year 2010, comprises of aspiring students and elite faculty members of the Department of Computer Technology, Anna University, MIT campus. Our association is a rendezvous for all technology enthusiasts to communicate their ideas and excel in the field of computer science. ACT fosters a strong spirit of collaboration and partnering with the industry. Trigger is as an Intra College Technical Fest hosted by Association of Computer Technologists (ACT) in the Department of Computer Technology. It is conducted every year. Students participate in Trigger to show case their talents on both technical and non-technical events which will boost them up in developing their skills. Collaboration among the students from other departments help them in attaining knowledge on various flavors of thrust areas.";
