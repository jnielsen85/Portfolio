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
  paragraphOne: "I offer a unique combination of soft and now proud to say hard skills, having recently completed Genral Assembly's Software Engineering immersive.",
  paragraphTwo: "I am academic and analytical, with a natural aptitude for stakeholder and relationship management.  Im an avowed life learner and always in pursuit of the 'why', which has twice lead me back to study as an adult.  First completing my MBA (conferred with distinction) and most recently the aforementioned GA course.",
  paragraphThree: "My goal now is to combine my repertoire of soft and technical skills and pursue a role as a technically qualified Field Fep or Sales Savy Solutions Engineer (one with a keen appreciation of their role in revenue generation)",
  resume: 'https://drive.google.com/file/d/0B8KOklVpF6RZdWFkdi0zamVQb01EaXpoOXQ1b0RpZUU2a0pN/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA of soft skills and new found tech skills to a role within the technology sector.   A Unicorn Employee.. maybe
export const projectsData = [
  {
    id: nanoid(),
    img: 'JNSsurf.gif',
    title: 'JNS Surf (Under development)',
    info: 'A Gatsby v2 and Netlify CMS powered site for JNS Surfboards. A local shaper of custom boards from the Gold Coast QLD.  Follows JAMstack architecture by using Git as a single source of truth, Netlify for continuous deployment, and CDN distribution. Stripe Checkout is used for payment collection.',
    info2: 'Netlify hosted | Netlify CMS for Content Management | ElasticLunr Search | Contact and New Board Order Form (Netlify Forms) | SEO Friendly (Sitemap, Schemas, Meta Tags)',
    url: 'https://hopeful-raman-c3c7d5.netlify.app/',
    repo: 'https://github.com/jnielsen85/FinalProject/tree/master/gatsby-JNS%20Surfboards', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coviddrinkinggif.gif',
    title: 'Covid Social',
    info: 'The say necessity is the mother of invention. The brainchild of 4 aspiring (and social) web developers, lockeddown due to COVID yet wanting to spend quality, albeit, socially distanced time together. The goal then, was to bridge the digital and social divide between remote GA Students with a lighthearted drinking game.',
    info2: '',
    url: 'https://drinking-game-663f5.web.app/',
    repo: 'https://github.com/jnielsen85/CovidSocialDrinks', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'beerpedia.gif',
    title: 'BeerPeedia',
    info: 'A beer database for homebrew enthusiasts.  Built with Ruby on Rails, postgreSQL and deployed on Heroku, signup, login, create a profile start browsing recipes contributed by other homebrew afficionados or submit your own.  Browse recipes by style, or the brewer who submitted.  RubyonRails, postgreSQL, Heroku, Bcrypt (authentication).',
    info2: '',
    url: 'https://project1herokupush1.herokuapp.com/',
    repo: 'https://github.com/jnielsen85/Beerpedia', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TTTv2.gif',
    title: 'Tic Tac Toe',
    info: 'A classic game and one many asiring deverlopers cut their teeth on.  My first foray into the world of building apps, built with Vanilla JS and Jquery.  A classic game with a classic retro feel (no small amount of CSS styling was required).',
    info2: '',
    url: 'https://jnielsen85.github.io/project0-tictactoe/index.html',
    repo: 'https://github.com/jnielsen85/project0-tictactoe', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a role you think I might be a good fit for?',
  btn: "Let's Talk",
  email: 'thisisjn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jamesnielsen1',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jnielsen85',
    },
    {
      id: nanoid(),
      name: 'send',
      url: 'mailto:thisisjn@gmail.com',
    },
  ],
};
