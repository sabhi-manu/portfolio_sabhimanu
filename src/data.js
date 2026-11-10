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
  youTubeImg,
 memorbitImg
 
} from "./assets";


 


import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaAws, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs, SiRedux, SiTailwindcss, SiExpress, SiMongodb, SiRedis,
  SiPostman, SiJsonwebtokens,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdApi, MdQueue } from "react-icons/md";



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
    title: "Memorbit: Travel Story App",
    description:
      "MERN travel story app with JWT authentication and image upload to a private S3 bucket. Deployed on AWS with a custom VPC, ALB, CloudFront, Auto Scaling and CloudWatch alerts.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    sourceCode: "https://github.com/sabhi-manu/Memorbit",
    img: memorbitImg,
    liveLink: "https://app.sabhimanu.cyou",
  },
  {
    id: 2,
    title: "StreamHub: Video Streaming Platform",
    description:
      "Full-stack video streaming platform with JWT authentication, background jobs for video processing and email notifications, and Cloudinary media storage.",
    tech: ["React", "Express", "MongoDB", "Redis", "BullMQ"],
    sourceCode: "https://github.com/sabhi-manu/youTube_backend",
    img: youTubeImg,
    liveLink: "https://you-tube-client-orpin.vercel.app/",
  },
 
];

export const experienceData = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Sheryians Private Limited",
    employmentType: "Internship",
    location: "Bhopal, India",
    duration: "Nov 2025 - Feb 2026",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Redis"],
    responsibilities: [
      "Reduced API response latency from 3s to 100ms by implementing Redis caching and message queues for low-priority tasks.",
      "Built Next.js (CSR) applications with TanStack React Query, reducing redundant API calls through caching and background refetching.",
      "Designed a repository-pattern backend so the data layer can be swapped without changing business logic.",
      "Resolved N+1 query issues using MongoDB aggregation pipelines and reference-based schema design.",
      "Built Node.js background workers and strengthened API reliability with request validation and rate limiting."
    ]
  },
];


export const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: MdApi, color: "#22D3EE" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#F472B6" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Cloud",
    items: [{ name: "AWS", icon: FaAws, color: "#FF9900" }],
    tags: [
      "EC2", "Auto Scaling", "ALB", "VPC", "S3", "CloudFront",
      "IAM", "Route 53", "CloudWatch",
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "BullMQ", icon: MdQueue, color: "#F97316" },
    ],
  },
];