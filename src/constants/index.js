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
    traveladvisorbackground,
    carshowcase,
    liimrasoft
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
            "Played a pivotal role in improving the quality of maps for leading search engines through meticulous analysis and precise feedback, resulting in enhanced search accuracy and user experience.",
            "Ensured the relevance and accuracy of map data by conducting thorough online research and strictly adhering to guidelines, contributing to the delivery of highly reliable search results",
        ],
    },
    {
        title: "Web Developer and Designer",
        company_name: "HCI Lighting",
        icon: hciLighting,
        iconBg: "#E6DEDD",
        date: "September 2021 - January 2022",
        points: [
            "Redesigned the company website, boosting user engagement by 30% and increasing online sales by 20%.",
            "Implemented and executed effective SEO strategies, contributing to a 25% surge in organic traffic.",
            "Provided leadership by training team members in WordPress best practices",
        ],
    },
    {
        title: "Software Quality Assurance Engineer",
        company_name: "Federated Co-operatives Limited",
        icon: fcl,
        iconBg: "white",
        date: "May 2022 - September 2022",
        points: [
            "Conducted rigorous user acceptance testing and quality assurance testing for proprietary software, ensuring adherence to established guidelines.",
            "Enhanced software quality by identifying and meticulously logging defects, accelerating resolution by close collaboration with development teams.",
            "Played a key role in delivering a highly reliable software product, employing strategic testing methodologies and defect management."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Liimrasoft Solutions LLC",
        icon: liimrasoft,
        iconBg: "#E6DEDD",
        date: "September 2022 - September 2023",
        points: [
            "Developed and maintained web applications using React and Node.js.",
            "Designed and implemented Restful APIs using Express and MongoDB.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Utilized Git for version control and collaborated with cross-functional teams to ensure seamless integration of front-end and back-end components.",
        ],
    },
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
        name: "Car Showcase",
        description:
            "A car showcase that allows users to browse cars based on various filters. Fully responsive and built using React.js and Next.js",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "React.js",
                color: "green-text-gradient",
            },
            {
                name: "Typescript",
                color: "pink-text-gradient",
            },
            {
                name: "API",
                color: "orange-text-gradient",
            },
        ],
        image: carshowcase,
        source_code_link: "https://car-showcase-29mh.vercel.app/",
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
