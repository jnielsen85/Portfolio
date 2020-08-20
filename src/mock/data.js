import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'James | Developer, AE, Dad', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'James',
  subtitle: 'Certified Developer, Accomplished Salesman, MBA Holder.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'James Headshot B_W.jpg',
  paragraphOne: "I offer a unique combination of soft and now proud to say, hard skills having recently completed Genral Assembly's Software Engineering immersive.",
  paragraphTwo: "I am academic and analytical, with a natural aptitude for stakeholder and relationship management.  Im an avowed life learner and always in pursuit of the 'why', which has twice lead me back to study as an adult.  First completing my MBA (conferred with distinction) and most recently the aforementioned GA Software Engineering Immersive.",
  paragraphThree: "My goal now is to combine my repertoire of soft and technical skills and pursue a role as a technically qualified Field Fep or Sales Savy Solutions Engineer (one with a keen appreciation of their role in revenue generation)",
  resume: 'https://drive.google.com/file/d/1SfLIm2C2pq_nvjOunQc4vdwVSqAdAeX-/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA of soft skills and new found tech skills to a role within the technology sector.   A Unicorn Employee.. maybe
export const projectsData = [
  {
    id: nanoid(),
    img: 'tictactoe.png',
    title: 'TTT',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covidsocial.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
