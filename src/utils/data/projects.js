import {
  rp01,
  rp02,
  rp03,
  rp04,
  rp05,
  // rp06,
  // rp07,
  // rp08,
  siddhi,
  coffeeLanding,
  cssFundamental,
  colors,
  units,
  typography
} from "../../assests/images";

export const projects = [
  {
    id: 0,
    category: "react",
    name: "birthday-reminder-list",
    info: "Utilized useState hook with map array method for iterating data. enabled reset button when length of birthdays equaled to one use conditional rendering.",
    image: rp01,
    url: "https://rp-birthday-reminder-ui.netlify.app/",
    technologyUsed: ["react", "tailwind"],
  },
  {
    id: 2,
    category: "react",
    name: "github-users-list",
    info: "Fetched data through api, using async await in useEffect hooks with empty dependency to run it only on its first render.(https://api.github.com/users) ",
    image: rp02,
    url: "https://rp-github-users.netlify.app/",
    technologyUsed: ["react", "tailwind"],
  },
  {
    id: 3,
    category: "react",
    name: "tours-list",
    info: "Used conditional rendering for read more and show less. implemented try and catch method for fetching the data from api, and passed functions through prop drilling. ",
    image: rp03,
    url: "https://rp-tours-card.netlify.app/",
    technologyUsed: ["react", "tailwind"],
  },
  {
    id: 4,
    category: "react",
    name: "testimonials",
    info: "useState is used to change the reviews and math random method we generated random indexes to populate the reviews. ",
    image: rp04,
    url: "https://rp-reviews.netlify.app/",
    technologyUsed: ["react", "tailwind"],
  },
  {
    id: 5,
    category: "react",
    name: "accordion",
    info: "Basic question and answer accordion, made with conditionally rendering to display answers on demand. Data fetched is locally stored and iterated in reuseable component singlequestion.",
    image: rp05,
    url: "",
    technologyUsed: ["react", "tailwind"],
  },
  {
    id: 6,
    category: "feature",
    name: "landing-page",
    info: "Build a landing page for my client siddhivinayak logistics. Made it simple with little bit of animations and responsive design. ",
    image: siddhi,
    url: "https://siddhilogistics.netlify.app/",
    technologyUsed: ["react", "tailwind"],
  },
  {
    id: 7,
    category: "html-css",
    name: "coffee-landing-page",
    info: "This is a practise project using just html. revising most of the html tags used. ",
    image: coffeeLanding,
    url: "https://html-css-project-coffee-landing-page.netlify.app/",
    technologyUsed: ["html"],
  },
  {
    id: 8,
    category: "html-css",
    name: "css-fundamental",
    info: "This is a practise project using just html and css using combine selectors. ",
    image: cssFundamental,
    url: "https://html-css-project-fundamental.netlify.app/",
    technologyUsed: ["html, css"],
  },
  {
    id: 9,
    category: "html-css",
    name: "colors",
    info: "This is a practise project using just html and css using combine selectors and using different colors mode like rgba, rgb, hex, colors/ ",
    image: colors,
    url: "https://html-css-projects-colors.netlify.app/",
    technologyUsed: ["html, css"],
  },
  {
    id: 10,
    category: "html-css",
    name: "units",
    info: "This is a practise project using just html and css using combine selectors and using units and methods like cal(), min-height, max-height ",
    image: units,
    url: "https://html-css-projects-units.netlify.app/",
    technologyUsed: ["html, css"],
  },
  {
    id: 11,
    category: "html-css",
    name: "typography",
    info: "This is a practise project using just html and css using properties like text-transform, line-height, letter-spacing and word-spacing. ",
    image: typography,
    url: "https://html-css-projects-typography.netlify.app/",
    technologyUsed: ["html, css"],
  },
];
