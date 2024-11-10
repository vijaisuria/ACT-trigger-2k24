import Facebook from "../../assets/social icons/Facebook.svg";
import Instagram from "../../assets/social icons/Instagram.svg";
import LinkedIn from "../../assets/social icons/LinkedIn.svg";

import QUERYIT_POSTER from "../../assets/posters/QUERYIT.png";
import CODE_IN_CHAOS_POSTER from "../../assets/posters/CODE IN CHAOS.png";
import VALORANT_POSTER from "../../assets/posters/VALORANT.png";
import SHARK_TANK_POSTER from "../../assets/posters/SHARK TANK.png";
import BATTLE_OF_WORDS_POSTER from "../../assets/posters/BATTLE OF WORDS.png";
import OLPC_POSTER from "../../assets/posters/OLPC.png";
import PYMARATHON_POSTER from "../../assets/posters/PYMARATHON.png";
import REVERSE_CODING_POSTER from "../../assets/posters/REVERSE CODING.png";
import SIGHT_ON_SIGHT_POSTER from "../../assets/posters/SIGHT ON SIGHT.png";
import CONNEXIONS_POSTER from "../../assets/posters/CONNEXIONS.png";

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
      description: "A mystery-inspired SQL-based investigation where participants solve SQL queries to reveal clues and uncover the culprit.",
      poster: "DETECTIVE_SQL_POSTER",
      registrationLink: "https://example.com/detective-sql",
      tags: ["Technical","SQL"],
      teamSize: 2,
      venue: "CB 101",
      schedule: "25th November, 2024 10:00 AM",
      organizers: [
          {
              name: "Organizer 1",
              "mobileNumber": "+91 98765 43210"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: MCQs and basic SQL queries (written)",
          "Round 2: Solve SQL clues to find the culprit"
      ]
  },
  {
      id: 2,
      title: "SQL Auction House",
      description: "An SQL challenge where participants use virtual currency to bid on SQL problems, aiming to maximize points.",
      poster: "SQL_AUCTION_HOUSE_POSTER",
      registrationLink: "https://example.com/sql-auction-house",
      tags: ["Technical", "SQL"],
      teamSize: 2,
      venue: "CB 102",
      schedule: "25th November, 2024 1:00 PM",
      organizers: [
          {
              name: "Organizer 2",
              "mobileNumber": "+91 91234 56789"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: MCQs and basic SQL queries (written)",
          "Round 2: Bid on SQL problems using virtual currency"
      ]
  },
  {
      id: 3,
      title: "Bug Hunt Show Down",
      description: "A high-energy debugging challenge where participants locate and fix bugs in code snippets.",
      poster: "BUG_HUNT_SHOW_DOWN_POSTER",
      registrationLink: "https://example.com/bug-hunt-show-down",
      tags: ["Technical", "Programming"],
      teamSize: 2,
      venue: "CB 103",
      schedule: "26th November, 2024 10:00 AM",
      organizers: [
          {
              name: "Organizer 3",
              "mobileNumber": "+91 99876 54321"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: MCQs and find errors in code snippets (written)",
          "Round 2: Race to fix bugs in code snippets"
      ]
  },
  {
      id: 4,
      title: "Code on the Corner",
      description: "A coding challenge with playful distractions where participants must stay focused on coding tasks despite interruptions.",
      poster: "CODE_ON_THE_CORNER_POSTER",
      registrationLink: "https://example.com/code-on-the-corner",
      tags: ["Technical", "Programming"],
      teamSize: 2,
      venue: "CB 104",
      schedule: "26th November, 2024 1:00 PM",
      organizers: [
          {
              name: "Organizer 4",
              "mobileNumber": "+91 98765 12345"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: MCQs on basic programming strategies",
          "Round 2: Coding tasks with playful interruptions"
      ]
  },
  {
      id: 5,
      title: "C Noobies",
      description: "An individual programming event focusing on foundational concepts and coding skills.",
      poster: "C_NOOBIES_POSTER",
      registrationLink: "https://example.com/c-noobies",
      tags: ["Technical", "Programming"],
      teamSize: 1,
      venue: "Lab 1",
      schedule: "27th November, 2024 10:00 AM",
      organizers: [
          {
              name: "Organizer 5",
              "mobileNumber": "+91 96543 21098"
          }
      ],
      rules: [
          "Individual event",
          "Round 1: MCQs on basic programming concepts",
          "Round 2: Programming contest in lab"
      ]
  },
  {
      id: 6,
      title: "Web Dev Relay Race",
      description: "A team web development race where participants swap roles to build a website within a set time.",
      poster: "WEB_DEV_RELAY_RACE_POSTER",
      registrationLink: "https://example.com/web-dev-relay-race",
      tags: ["Technical", "Web Development"],
      teamSize: 2,
      venue: "CB 105",
      schedule: "27th November, 2024 1:00 PM",
      organizers: [
          {
              name: "Organizer 6",
              "mobileNumber": "+91 95432 10987"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: MCQs on web development concepts",
          "Round 2: Team relay to build a website, swapping roles periodically"
      ]
  },
  {
      id: 7,
      title: "Insight Quest",
      description: "A data analysis challenge where teams uncover insights from a dataset and present their findings.",
      poster: "INSIGHT_QUEST_POSTER",
      registrationLink: "https://example.com/insight-quest",
      tags: ["Technical", "Machine Learning", "Data Science"],
      teamSize: 2,
      venue: "CB 106",
      schedule: "28th November, 2024 10:00 AM",
      organizers: [
          {
              name: "Organizer 7",
              "mobileNumber": "+91 94321 09876"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: MCQs on data analysis basics",
          "Round 2: Analyze data and present insights"
      ]
  },
  {
      id: 8,
      title: "OOPs Odyssey",
      description: "An OOP-based adventure where participants model an imaginative environment using object-oriented principles.",
      poster: "OOPS_ODYSSEY_POSTER",
      registrationLink: "https://example.com/oops-odyssey",
      tags: ["Technical", "OOP"],
      teamSize: 2,
      venue: "CB 107",
      schedule: "28th November, 2024 1:00 PM",
      organizers: [
          {
              name: "Organizer 8",
              "mobileNumber": "+91 93210 87654"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: MCQs on OOP concepts",
          "Round 2: Use OOP to model an imaginative adventure environment"
      ]
  },
  {
      id: 9,
      title: "TechNoMimes",
      description: "A mime-based event where participants act out technical terms to help their teammate guess.",
      poster: "TECHNOMIMES_POSTER",
      registrationLink: "https://example.com/technomimes",
      tags: ["Fun Tech"],
      teamSize: 2,
      venue: "CB 108",
      schedule: "29th November, 2024 10:00 AM",
      organizers: [
          {
              name: "Organizer 9",
              "mobileNumber": "+91 92108 76543"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: Act out basic technical terms",
          "Round 2: Act out advanced terms with time constraint"
      ]
  },
  {
      id: 10,
      title: "Connexions",
      description: "A game of connecting images to technical terms, followed by guessing terms based on clues.",
      poster: "CONNEXIONS_POSTER",
      registrationLink: "https://example.com/connexions",
      tags: ["Fun Tech"],
      teamSize: 2,
      venue: "CB 109",
      schedule: "29th November, 2024 1:00 PM",
      organizers: [
          {
              name: "Organizer 10",
              "mobileNumber": "+91 91087 65432"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: Connect pictures to find technical terms",
          "Round 2: Guess words from clues based on Round 1 terms"
      ]
  },
  {
      id: 11,
      title: "Treasure Hunt",
      description: "A high-energy scavenger hunt with a mix of crossword puzzles and clue-based treasure hunting.",
      poster: "TREASURE_HUNT_POSTER",
      registrationLink: "https://example.com/treasure-hunt",
      tags: ["Fun Tech"],
      teamSize: 2,
      venue: "Campus",
      venue: "Campus Grounds",
      schedule: "30th November, 2024 10:00 AM",
      organizers: [
          {
              name: "Organizer 11",
              "mobileNumber": "+91 90876 54321"
          }
      ],
      rules: [
          "Teams of max 2 members",
          "Round 1: Solve a crossword puzzle amidst chaos",
          "Round 2: Follow clues across the campus to find the hidden treasure"
      ]
  },
  {
    id: 12,
    title: "Code in Chaos",
    description:
      "Our mind is said to work differently when put in disarray. Let's test your problem solving skills and coding knowledge in a chaotic environment",
    poster: CODE_IN_CHAOS_POSTER,
    registrationLink: "https://forms.gle/n3UQxJYcFf3AdpYRA",
    tags: ["Non Technical"],
    teamSize: 2,
    venue: "CB 103",
    schedule: "26th November, 2022 01:00 PM",
    organizers: [
      {
        name: "Swetha B",
        mobileNumber: "+91 93903 99405",
      },
      {
        name: "Chandana",
        mobileNumber: "+91 63021 40219",
      },
    ],
    rules: [
      "A team may contain maximum of 2 members",
      "Round 1 will be a Pen and Paper Round any interested participants can take part",
      "The shortlists of Round 1 can participate in Round 2",
      "Round 2 will be a hands-on coding round",
    ],
  },

  {
    id: 13,
    title: "Query It",
    description:
      "A team of 2 members were they should write the queries for the given questions",
    poster: QUERYIT_POSTER,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfxIZJ6vN7MRWbGTgvjFUwOXBHaVYY0FGtrWTIXIOmeLCfeVg/viewform?usp=sf_link",
    tags: ["Non Technical"],
    teamSize: 2,
    venue: "CB 206",
    schedule: "26th November, 2022 01:00 PM",
    organizers: [
      {
        name: "Rubak Preyan G",
        mobileNumber: "+91 79046 43141",
      },
      {
        name: "Sudharsan GV",
        mobileNumber: "+91 88389 24764",
      },
    ],
    rules: [
      "A team of 2 members can partcipate in this.",
      "Two rounds will be conducted.",
      "First Round: 20 MCQ question will be given and it need to be completed in 30 minutes.",
      "Second Round: selected teams from round 1 will be given next set of questions. They should write the queries with 30 minutes.",
    ],
  },

  {
    id: 14,
    title: "Sight on site",
    description:
      "Sight on site will test your memory power, attention to detail and also how well can your act and remember things!",
    poster: SIGHT_ON_SIGHT_POSTER,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdTbD_jE0ZcIcXu7dINHeb1dGXDQ0pWWDHqAybUv14EWnv5wg/viewform?usp=sf_link",
    tags: ["Workshop"],
    teamSize: 3,
    venue: "CB 302",
    schedule: "26th November, 2022 01:00 PM",
    organizers: [
      {
        name: "Hafna Fathima M",
        mobileNumber: "+91 82486 62716",
      },
      {
        name: "Sowmya J",
        mobileNumber: "+91 90875 72646",
      },
    ],
    rules: [
      "Team of 2 - 3 members",
      "ROUNDS: Round 1->Prelims: An image will be displayed and the participants have to observe it carefully within in 1 min. Later questions will be asked based on their observations.15 questions - 10 mins.",
      "Round2-> Finals: Those who are qualified from the prelims will attend the final round.",
      "This is more like dumbcharades except with a twist. Any one participants will be given a set of 10 words to memorize with in the given timelimit. Later they have to act it to their team mates based on how many words they remember.",
    ],
  },

  {
    id: 15,
    title: "Battle of words",
    description:
      "This event is a debate ,where students can put forward their views on a given  topic and showcase their oratory and debating skills.",
    poster: BATTLE_OF_WORDS_POSTER,
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfyKpjB9uk6bn0CwYFRgVuanyP7h-0hQZt_e-Qs58E15-ExOA/viewform?usp=sf_link",
    tags: ["Workshop"],
    teamSize: 1,
    venue: "CB Conference Hall - Ground floor",
    schedule: "26th November, 2022 01:00 PM",
    organizers: [
      {
        name: "Shri Nikhithaa R M",
        mobileNumber: "+91 63802 79903",
      },
      {
        name: "Keerthika M",
        mobileNumber: "+91 94923 56084",
      },
    ],
    rules: [
      "Team size 1(this is an individual event)",
      "There will be 2 rounds, prelims and finals.Students qualifying the prelims will get to the final round.",
      "Students will be divided into two groups randomly and topic for the debate will be given.",
      "Students should speak on the affirmative or the negative side of the topic, as allocated to their team.",
      "Since it's an individual event ,students' speaking skills will be assessed based on their individual participation and the winner will be selected based on certain marking criteria.",
      "Topics for the debate will be given on the spot.",
    ],
  }
]

export const technicalEventManager = {
  name: "Danush Gupta",
  mobileNumber: "+91 91766 21042",
};

export const nonTechnicalEventManager = {
  name: "Saravana Sethu G",
  mobileNumber: "+91 81249 27271",
};

export const aboutContent =
  "ACT established in the year 2010, comprises of aspiring students and elite faculty members of the Department of Computer Technology, Anna University, MIT campus. Our association is a rendezvous for all technology enthusiasts to communicate their ideas and excel in the field of computer science. ACT fosters a strong spirit of collaboration and partnering with the industry. Trigger is as an Intra College Technical Fest hosted by Association of Computer Technologists (ACT) under the Department of Computer Technology. It is conducted during the month of August. Students participate in Trigger to show case their talents on both technical and non-technical events which will boost them up in developing their skills. Collaboration among the students from other departments help them in attaining knowledge on various flavors of thrust areas.";
