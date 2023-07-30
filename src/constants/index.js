import {
  informatic,
  backend,
  instructor,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  nodejs,
  mongodb,
  git,
  docker,
  cima,
  globant,
  ulearning,
  freelancer,
  cimaapp,
  ulearningapp,
  unprgmaps,
  ceti,
  angular,
  sql
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Informatic Engineer",
    icon: informatic,
  },
  {
    title: "Online Instructor",
    icon: instructor,
  },
];

const technologies = [
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
    name: "Angular",
    icon: angular,
  },


  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web UI Developer / Full-time",
    company_name: "Globant",
    icon: globant,
    iconBg: "#E6DEDD",
    date: "Since June 2022",
    points: [
        "Developing and maintaining web applications using tools like Angular, DatoCMS, Google Analytics ecosistem, Docker, Jenkins, etc",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Ensure the application complies with industry best practices, security standards, and legal requirements.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in pair coding reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Online Instructor / Seasonal",
    company_name: "CETI",
    icon: ceti,
    iconBg: "#E6DEDD",
    date: "Since July 2022",
    points: [
       "Creating and updating a comprehensive curriculum that covers various frontend technologies, concepts, and best practices.",
       "Designing engaging and interactive lessons that cater to different learning styles and levels of expertise.",
       "Working with Javascript fundamentals, Angular and React handling, including projects",
    ],
  },
  {
    title: "Front-End Developer / Full-time",
    company_name: "Ulearning - USS",
    icon: ulearning,
    iconBg: "#E6DEDD",
    date: "August 2021 - June 2022",
    points: [
      "Developing and maintaining web applications using Angular, React and PHP (Frontend Focus)",
      "Leading student and mentor module teams (Front lead)",
      "Collaboring with payment module",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer / Full-time",
    company_name: "CIMA",
      icon: cima,
    iconBg: "#E6DEDD",
    date: "January 2021 - December 2021",
    points: [
      "Developing and maintaining web applications using Angular, SpringBoot and PostgreSQL (Frontend focus)",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "TI Assistant / Full-time",
    company_name: "CIMA",
    icon: cima,
    iconBg: "#E6DEDD",
    date: "February 2020 - December 2020",
    points: [
      "Search and implement online education's tools",
      "Creation of practical web modules to help teachers with automation tasks in online classes",
      "Training of teachers in the use of online educational tools",
    ],
  },
  {
    title: "Full stack developer / Seasonal",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Since April 2019",
    points: [
      "Develop of the front-end and back-end application of a product using robust tools",
      "Creation of a project plan, including timelines and milestones.",
      "Collaboration with designers to implement visual elements and user interface enhancements.",
      "Supporting the client with user training and documentation, if required.",
      "Working with tools like: Angular, React, Vue, NodeJs, Firebase, Python, PostgreSQL, MongoDB, etc."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Second place - GP Hackaton",
    designation: "Gentleman programming",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    imageAchivement: "https://media.licdn.com/dms/image/C4D22AQF1E1Vkpd_Fgg/feedshare-shrink_800/0/1633570071588?e=1693440000&v=beta&t=GlFfObLWpTp7pk8D1-03jYKxAQ7008Mt10wYY9gjxWA",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "B2 english level finished",
    designation: "Global English",
    company: "Global English",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    imageAchivement: "https://media.licdn.com/dms/image/C4D2DAQFjrBCjETYaMg/profile-treasury-image-shrink_800_800/0/1632844849430?e=1691290800&v=beta&t=F7gzHD8GC5bEpIm6A2EsIf9QJnrxsUVDZ4GojrVn1yY",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mentoring certificate",
    designation: "CETI",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    imageAchivement: "https://media.licdn.com/dms/image/D4E2DAQEzbRzTey37CA/profile-treasury-document-images_800/1/1664484816395?e=1691625600&v=beta&t=X0EARieCeE188kTNFARcom6TUT7U32WKUiw7S_qmt5A",
  },
];

const projects = [
  {
    name: "CIMA School app",
    description:
      "PWA platform that allows students and teachers to search, book, and manage online classes materials, schedule online assessments and othe important actions.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: cimaapp,
  },
  {
    name: "U-learning app",
    description:
      "Web application that enables users to take online courses about tech and enterprise management, people can edit profile, manage sessions, class material, etc.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: ulearningapp,
  },
  {
    name: "UNPRG search map",
    description:
      "PWA app that uses the Google Map APIs, searches for places with text and voice and can guide you on a virtual tour of all the university facilities",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: unprgmaps,
  },
];

export { services, technologies, experiences, testimonials, projects };
