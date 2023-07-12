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
    fcl,
    hciLighting,
    lionbridge,
    carrent,
    jobit,
    tripguide,
    threejs,
    covidbackground,
    geometrydodge,
    hcilighting,
    traveladvisorbackground
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
    }
  ];
  
  const services = [
    {
      title: "Web Designer and Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Designer and Developer",
      icon: creator,
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
  
  const experiences = [
    {
      title: "Quality Analyst",
      company_name: "Lionbridge",
      icon: lionbridge,
      iconBg: "black",
      date: "February 2020 - January 2021",
      points: [
        "Analyzed and provided feedback on maps for leading search engines, using an online tool.",
        "Determined relevance and accuracy of information by performing online research and referring to the provided guidelines."
      ],
    },
    {
      title: "Wordpress Designer and Developer",
      company_name: "HCI Lighting",
      icon: hciLighting,
      iconBg: "#E6DEDD",
      date: "September 2021 - January 2022",
      points: [
        "Designed the layout of the website using relevant design tools.",
        "Developed the site using WordPress. Utilized PHP and CSS, along with WordPress plugins and functions."
      ],
    },
    {
      title: "UAT OMS Tester",
      company_name: "Federated Co-operatives Limited",
      icon: fcl,
      iconBg: "white",
      date: "May 2022 - September 2022",
      points: [
        "Conducted user acceptance testing to ensure that developed systems satisfied the needs of business clients as specified in the functional requirements.",
        "Collaborating with cross-functional teams including designers, product managers, and developers to create high-quality products.",
        "Logged any defects on ALM software as specified in the requirements.",
        "Recommended finely tuned changes to the developers to meet all guidelines.",
        "Captured and tested all modifications to proposed functional requirements."
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Covid-19 Visualizer",
      description:
        "A responsive web-app that retrieves JSON data from a remote server asynchronously and displays it on charts and a table.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "JQuery",
          color: "green-text-gradient",
        },
      ],
      image: covidbackground,
      source_code_link: "https://ahmedshussaini.github.io/covid19-visualizer",
    },
    {
      name: "WordPress Website",
      description:
        "A website I designed and created for a client using WordPress. Utilized PHP, CSS and built in WordPress plugins.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: hcilighting,
      source_code_link: "https://hcilighting.com/",
    },
    {
      name: "Travel Advisor",
      description:
        "A React app that uses APIs to find and display hotels, restuarants, attractions, and the current weather on a map.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: traveladvisorbackground,
      source_code_link: "https://ahmedshussaini.github.io/TravelAdvisor/",
    },
    {
      name: "Geometry Dodge",
      description:
        "A small game designed and developed in Unity2D using C#. Use the left and right arrow keys to move around and dodge the shapes.",
      tags: [
        {
          name: "Unity2D",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: geometrydodge,
      source_code_link: "https://ahmedshussaini.github.io/GeometryDodge/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };