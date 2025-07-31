import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Cyber Security Red Teaming",
    icon: mobile,
  },
  {
    title: "SOC Analyst",
    icon: backend,
  },
  {
    title: "AI and ML Integration with Cybersecurity ",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Mobile Guarding Security Framework – MOBIGUARD",
    companyName: "Associated with National Vocational and Technical Training Commission (NAVTTC)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 - October 2024",
    points: [
    "Worked on the Mobile Guarding Security Framework (MOBIGUARD), an automated mobile application security assessment tool.",
    "Performed static and dynamic analysis of Android, iOS, and Windows mobile apps to detect malware and vulnerabilities.",
    "Collaborated with cybersecurity professionals under NAVTTC to design and test penetration testing features.",
    "Conducted malware analysis and security testing as part of a mobile app hardening and risk assessment process.",
    "Documented results and presented analysis reports based on real-world mobile app security scenarios.",
    ],
  },
  {
    title: "Object Detection and Recognition - YOLOv5 ",
    companyName: "Associated with National Vocational and Technical Training Commission (NAVTTC)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2024 - August 2024",
    points: [
    "Built a Real-Time Object Recognition and Interaction system using Python, OpenCV, and the YOLO model under NAVTTC.",
    "Captured and processed live video streams to detect and classify objects in real time with high accuracy.",
    "Integrated user interaction features such as object highlighting and information overlays for a more interactive system.",
    "Demonstrated use cases in surveillance, robotics, and augmented reality through hands-on implementation.",
    "Focused on optimizing detection speed and accuracy for real-world object recognition tasks.",
    ],
  },
  {
    title: "Internee: Cybersecurity IT-Engineer",
    companyName: "National Electronic Complex of Pakistan - NECOP",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2024 - November 2024",
    points: [
      "Carried out day to day tasks including working on IOT Project.",
      "Involved Pen Testing on Websites using Kali Linux Tools Under supervision of my Project Manager.",
      "Reporting and Updating on the Tasks Including Audit and Compliance IOT.",
    ],
  },
  {
    title: "AI and ML Projects",
    companyName: "Personal",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2025 - Present",
    points: [
    "Currently working on various projects based on AI/ML and Cybersecurity, applying theoretical knowledge to practical, real-world systems.",
    "Developing intelligent models, analyzing security logs, and building solutions that combine automation with threat detection and prevention.",
    "Continuously exploring the intersection of Artificial Intelligence and Information Security to build efficient and smart security frameworks.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a Object Detection and Recognition Project but Nasir proved me wrong.",
    name: "Umer Ali",
    designation: "Developer",
    company: "Software House ",
    image: "https://i.postimg.cc/qMM3cXHF/user.jpg",
  },
  {
    testimonial:
      "Nasir demonstrated outstanding cybersecurity skills during his internship at MOBIGUARD. His ability to perform real-time mobile app analysis and detect vulnerabilities was impressive. A dedicated and quick learner.",    
    name: "Engr. Muhammad Usman",
    designation: "Software Engineer",
    company: "Software House",
    image: "https://i.postimg.cc/qMM3cXHF/user.jpg",
  },
  {
    testimonial:
      "Great to work with Nasir! A Talented Young Boy with drastic skills, keep it up your doing a great job",
    name: "Haider Manzoor",
    designation: "Developer",
    company: "Hightec Solutions",
    image: "https://i.postimg.cc/qMM3cXHF/user.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Mobile Guarding Security Framework – MOBIGUARD",
    description:
      "Customized a Desktop Application for static and Dynamic application testing. Deployed on Docker hub and dockerization concepts Implemented",
    tags: [
      {
        name: "MobiGuard",
        color: "blue-text-gradient",
      },
      {
        name: "Cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: starbucks,
    sourceCodeLink: "https://github.com/Nasir-Sharif",
  },
  {
    name: "Object Detection and Recognition - YOLOv5 ",
    description:
      "A Project in which real time object is detected using Live Video Camera and it is recognized: Industrial use: E-commerce, Stores, Enhanced Frame Rendering and Enabled Preview of Confidence score.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "datamodels",
        color: "green-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Nasir-Sharif",
  },
  {
    name: "CAN: Intrusion Detection System CAN BUS Security",
    description:
      "A Cybersecurity Project Based on AI and Machine Learning Data Model that Detects and Analyze the Attacks and predicts using prediction model trained on the dataset using Random Forest.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Nasir-Sharif",
  },
];

export { services, technologies, experiences, testimonials, projects };
