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
    tensorflow,
    tailwind,
    racket,
    c,
    git,
    java,
    python,
    code_ninjas,
    landingX,
    tks,
    hippocampus,
    website,
    mnist,
    aimtrainer,
    article,
    pytorch,
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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Machine Learning Researcher",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
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
      name: "Java",
      icon: java,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Racket",
      icon: racket,
    },
    {
      name: "ReactJs",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
  ];
  
  const experiences = [
    {
      title: "Camp Leader & Code Sensai",
      company_name: "Code Ninjas",
      icon: code_ninjas,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Collaborated with a cross-functional to develop a programming cirriculum for programming beginners and intermediates.",
        "Worked with Lua and other related technologies to develop interactive games and tutorials for them.",
        "Responsible for the programming development of up to 15 children at a time.",
        "Participating in code reviews and providing constructive feedback to youth programmers.",
      ],
    },
    {
      title: "CEO & Founder",
      company_name: "LandingX",
      icon: landingX,
      iconBg: "#E6DEDD",
      date: "July 2023 - present",
      points: [
        "Created high-quality landing pages for individuals and businesses as a paid service.",
        "Implemented libraries like node.js, react.js and three.js for seemeless frontend to backend integration.",
        "Communicated with clients and team members to ensure clients needs were met, both functionally and visually.",
      ],
    },
    {
      title: "Innovator",
      company_name: "TKS (The Knowledge Society)",
      icon: tks,
      iconBg: "#383E56",
      date: "September 2022 - June 2023",
      points: [
        "Researched and developed newsletters and articles regarding ML which garnered thousands of impressions online.",
        "Worked alongside CIBC to develop an 8-year plan to attract and retain GenZ customers using AI automation and a modern mobile app.",
        "Selected by MasterCard Foundation Executives and worked with the African Development Bank to pitch revolutionary irrigation technology in Uganda, creating 2.75M jobs by 2030.",
      ],
    },
    {
      title: "Coding Instructor & Cirriculum Developer",
      company_name: "Hippocampus Learning",
      icon: hippocampus,
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Collaborated with a cross-functional to develop summer camp cirriculums for programming beginners and intermediates.",
        "Worked with block-based programming applications and robotics platforms to develop well-rounded lesson plans ",
        "Communicated with superiors and team-members to devise challenging modules while considering the needs of the consumers.",
        "Participating in code reviews and providing constructive feedback to youth programmers.",
      ],
    },
  ];
  
  const testimonials = [ // need to update once I hear back from those I reached out to
    {
      testimonial:
        "check back soon!",
      name: "xyz",
      designation: "xyz",
      company: "xyz",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "check back soon!",
      name: "xyz",
      designation: "xyz",
      company: "xyz",
      image: "https://randomuser.me/api/portraits/men/5.jpg", 
    },
    {
      testimonial:
        "check back soon!",
      name: "xyz",
      designation: "xyz",
      company: "xyz",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Website",
      description:
        "Online portfolio complete with interactive 3D models, modern look, mobile compatability, email functionality, and smooth animations using industry-standard libraries.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      source_code_link: "https://github.com/",
    },
    {
      name: "MNIST Digit Classifier",
      description:
        "A CNN trained to recognize handwritten numbers, using the MNIST dataset. The network is built using Keras, an API incorporated in Tensorflow. (work in progress)",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: mnist,
      source_code_link: "https://github.com/",
    },
    {
      name: "Aim Trainer",
      description:
        "Interactive game to improve user's aim in FPS and TPS games. Complete with live statistics such as accuracy, speed, lives, etc. Includes a range of difficulty levels. ",
      tags: [
        {
          name: "pygame",
          color: "blue-text-gradient",
        },
        {
          name: "VScode",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: aimtrainer,
      source_code_link: "https://github.com/",
    },

    {
      name: "Neural Networks Guide",
      description:
        "Article explaining the technical components of various neural networks in a beginner friendly format. Garnered hundreds of interactions across social media channels.",
      tags: [
        {
          name: "medium",
          color: "blue-text-gradient",
        },
        {
          name: "neuralnetworks",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: article,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  