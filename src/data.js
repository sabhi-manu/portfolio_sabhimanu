import {
  CSS3,
  Express,
  HTML5,
  Javascript,
  Mongodb,
  Nodejs,
  Reactjs,
  Redux,
  chatAppImg,
  portfolioImg,
  youTubeImg
} from "./assets";



export const tools = [
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "React",
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
 
];

export const skills = [
  {
    name: "ReactJs",
    value: 98,
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    value: 96,
    icon: Nodejs,
  },
 
  {
    name: "MongoDB",
    value: 98,
    icon: Mongodb,
  },
  {
    name: "CSS3",
    value: 98,
    icon: CSS3,
  },
  {
    name: "HTML5",
    value: 98,
    icon: HTML5,
  },
  {
    name: "JavaScript",
    value: 88,
    icon: Javascript,
  },
 
  {
    name: "Redux",
    value: 88,
    icon: Redux,
  },
 
];

export const projects = [
  {
    id: 1,
    title: "YouTube Clone",
    description: "A fully responsive YouTube clone built with modern web technologies featuring video browsing, search functionality, authentication, and dynamic video playback using API integration.",
    sourceCode: "https://github.com/sabhi-manu/youTube-client",
    img: youTubeImg,
    liveLink: 'https://you-tube-client-orpin.vercel.app/'
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "A real-time chat application that allows users to send and receive instant messages with authentication, user management, and dynamic message updates using modern full-stack technologies.",
    sourceCode: "https://github.com/sabhi-manu/db_chat_app",
    img: chatAppImg,
    liveLink: 'https://db-chat-appfrontend.vercel.app/'
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio website designed to showcase projects, skills, and contact information with clean UI, smooth layout, and strong personal branding focus.",
    sourceCode: "https://github.com/sabhi-manu/portfolio_sabhimanu",
    img: portfolioImg,
    liveLink: ''
  },
];


export const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Sheryians Private Limited ",
    employmentType: "Internship",
    location: "Bhopal, India",
    duration: "Nov 2025 - Jan 2026",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    responsibilities: [
      "Developed full-stack web applications using MERN stack.",
      "Built REST APIs and integrated frontend with backend.",
      "Implemented JWT authentication and role-based access.",
      "Collaborated with team members using Git and GitHub."
    ]
  },
 
];
