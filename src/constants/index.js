import {
  pokedex,
  todolist,
  weather,
  videotube,
  blog,
  css,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  threejs,
  bootstrap,
  material,
  mongodb,
  nodejs,
  expressjs,
  postman,
  cpp,
  c,
  python,
  git,
  githublogo,
  vscode,
  logo,
  mobile,
  web,
  github,
  education_icon,
  nextjslogo
} from "../assets";

export const navLinks = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const EducationDetails = [
  {
    id: 1,
    date: "2021-2025",
    name: "B.Tech In ECE",
    description:
      "I am a 3rd Year B.Tech student of Ramkrishna Mahato Government Engineering College in Electronic and Communication Engineering Department.I got 9.33 YGPA in 1st Year.",
    icon: education_icon,
    iconBg: "#383E56",
  },
  {
    id: 2,
    date: "2018-2020",
    name: "Higher Secondary",
    description:
      "I have done my Higher Secondary Education at Bishnupur High School affiliated to West Bengal Council of Higher Secondary Education with 465 out of 500 marks in the year of 2020",
    icon: education_icon,
    iconBg: "#383E56",
  },
  {
    id: 3,
    date: "2013-2018",
    name: "Secondary",
    description:
      "I have done my Secondary Education at Maniklal Singha Smrity Madhayamik Vidyalaya affiliated to West Bengal Council of Higher Secondary Education with 648 out of 700 marks in the year of 2018",
    icon: education_icon,
    iconBg: "#383E56",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
    catagory: "web",
  },
  {
    name: "CSS 3",
    icon: css,
    catagory: "web",
  },
  {
    name: "JavaScript",
    icon: javascript,
    catagory: "web",
  },
  {
    name: "React JS",
    icon: reactjs,
    catagory: "web",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    catagory: "web",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    catagory: "web",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    catagory: "web",
  },
  {
    name: "Material UI",
    icon: material,
    catagory: "web",
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  //   catagory: "web",
  // },
  {
    name: "Node JS",
    icon: nodejs,
    catagory: "web",
  },
  {
    name: "Express JS",
    icon: expressjs,
    catagory: "web",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    catagory: "web",
  },
  {
    name: "Next js",
    icon: nextjslogo,
    catagory: "web",
  },
  {
    name: "C ++",
    icon: cpp,
    catagory: "language",
  },
  {
    name: "C ",
    icon: c,
    catagory: "language",
  },
  {
    name: "Python",
    icon: python,
    catagory: "language",
  },
  {
    name: "JavaScript",
    icon: javascript,
    catagory: "language",
  },
  {
    name: "Postman Api",
    icon: postman,
    catagory: "tools",
  },
  {
    name: "Git",
    icon: git,
    catagory: "tools",
  },
  {
    name: "Github",
    icon: github,
    catagory: "tools",
  },
  {
    name: "VS Code",
    icon: vscode,
    catagory: "tools",
  },
  {
    name: "Web Development",
    catagory: "tech",
  },
  {
    name: "APIs",
    catagory: "tech",
  },
  {
    name: "UI/UX Design",
    catagory: "tech",
  },
  {
    name: "Open Source",
    catagory: "tech",
  },
  {
    name: "Data Stracture and Algorithem",
    catagory: "tech",
  },
  {
    name: "Photo & Video Editing",
    catagory: "non_tech",
  },
  {
    name: "Time Management",
    catagory: "non_tech",
  },
  {
    name: "Team Work",
    catagory: "non_tech",
  },
  {
    name: "Communication",
    catagory: "non_tech",
  },
  {
    name: "Bengali",
    proficiency: "Native/Bilingual profiency",
    catagory: "speak",
  },
  {
    name: "English ",
    proficiency: "Full professional proficiency",
    catagory: "speak",
  },
  {
    name: "Hindi",
    proficiency: "Full professional proficiency",
    catagory: "speak",
  },
];

export const ProjectDetails = [
  {
    id: 1,
    duration: 0.3,
    image: videotube,
    name: "VideoTube",
    description:
      "Developed a fully responsive youtube based full stack web application using MERN",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/YouTube-Clone",
    demolink: "https://you-tube-clone-virid.vercel.app/",
  },
  {
    id: 2,
    duration: 0.5,
    image: blog,
    name: "Blog Application",
    description:
      "Developed a real time blog application using React and Appwrite",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/Blog_Application",
    demolink: "https://blog-application-ten-rho.vercel.app/",
  },
  {
    id: 3,
    duration: 0.7,
    image: pokedex,
    name: "PokeDex App",
    description:
      "Created and deployed fully responsive pokemon details website using React and Tailwind and Pokemon Api",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/Pokemon_Application",
    demolink: "https://pokemon-application-tawny.vercel.app/",
  },
  {
    id: 4,
    duration: 0.8,
    image: todolist,
    name: "Advance TodoList",
    description:
      "Created and deployed an awesom advance Todo list using React and Tailwind and store data in local storage",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "localStorage",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/Advance_Todolist",
    demolink: "https://advance-todolist.vercel.app/",
  },
  {
    id: 5,
    duration: 1,
    image: weather,
    name: "Weather App",
    description:
      "Created and deployed fully responsive Weather app using React and Tailwind and  to fetch weather data of any city using AXIOS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/Weather_Application",
    demolink: "https://weather-application-topaz.vercel.app/",
  },
];
