import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Yen Wei Tan | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yen Wei Tan',
  subtitle: 'Software Engineer' ,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'about1cropped.png',
  paragraphOne: 'Hi there!!! 🚀',
  paragraphTwo: 'My name is Yen Wei from Malaysia. I just graduated with a B.S in Software Engineering from University of Central Missouri.',
  paragraphThree: 'Ever since the later stages of high school, I have always been intrigued and passionate about technological advancements; always curious to know the inner workings of a piece of tech or software. ' + 
                  'Although challenging, I get great satisfaction with problem-solving and technological solutions once hurdled and solved. '+ 
                  'After attending my first ever programming class in C++ during pre-university, I was marvelled by it and further fueled to learn more about programming in general and other facets of technology.',
  paragraphFour: 'Since then, my computer science journey has developed from coding, to the various programming competitions I\'ve participated in, and developing full-stack applications encompassing various technologies today. '+
                 'My other interests include IOT, web development, software engineering and hardware technological development with both technical and business side of things.',
  paragraphFive: 'On a side note, personally I am an avid basketball and NBA fan, and has always been active in various other sports such as soccer and ultimate frisbee. '+
                  'I\'m currently actively seeking opportunies to develop my skills as a developer and engineer, consistently learning new things in tech and within the industry. ' +
                  'Feel free to contact me!',
  resume: 'https://drive.google.com/file/d/1EWGqVJq50WE0wfbH-nCiDkGrIRM25mYn/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'https://media.giphy.com/media/TLaSNpXVlpqaawvgRp/source.gif',
    title: 'AppointMe',
    info: 'This web app was my senior project team project I worked on with 5 other members. I was developing prototype frontend webpages and appointment interfaces for preliminary testing purposes and the actual web app itself. At later sprints, I then dived into the Spring MVC side of things to encorporate the professor section and done basic UI input and query testing with TestCafe JS and Selenium. ',
    info2: 'Technologies used: React, Spring MVC, MySQL',
    url: 'https://github.com/yenweitan/ApptApp',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'https://media.giphy.com/media/efIN0dfU5aztkHL6QW/source.gif',
    title: 'Covid-19 Tracker',
    info: 'A web app I worked on during my first month of quarantine and transition to online classes during college.',
    info2: 'Technologies used: React, Axios',
    url: 'https://github.com/yenweitan/covid19-tracker-site-react',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'https://i.imgur.com/aUcKUQjl.jpg',
    title: 'JavaFX Chat Application',
    info: 'A Java based application utilizing multithreading with a server and clients conducting simple chat conversations. ',
    info2: 'Technologies used: Java, JavaFX, CSS',
    url: 'https://github.com/yenweitan/javaFX-chatapp',
    repo: '', // if no repo, the button will not show up
  },
];

export const progressBarData = [
  {
    label: 'Java',
    percentage: '90',
    label2: 'C++',
    percentage2: '80',
  },
  {
    label: 'Javascript',
    percentage: '90',
    label2: 'C',
    percentage2: '80',
  },
  {
    label: 'ReactJS',
    percentage: '90',
    label2: 'C# & .NET',
    percentage2: '70',
  },
];

//  ADDITIONAL SKILLS DATA
export const additionalskillsData = [
  {
    name: 'Python',
  },
  {
    name: 'SQL',
  },
  {
    name: 'Anaconda',
  },
  {
    name: 'Beautiful Soup',
  },
  {
    name: 'GatsbyJS',
  },
  {
    name: 'Axios',
  },
  {
    name: 'Spring MVC',
  },
  {
    name: 'HTML5',
  },
  {
    name: 'CSS',
  },
  {
    name: 'Selenium',
  },
  {
    name: 'LINUX/UNIX Environments',
  },
  {
    name: 'Algorithm Analysis',
  },
  {
    name: 'Data Structures',
  },
  {
    name: 'REST APIs',
  },
  {
    name: 'MS Office Suite',
  },
  {
    name: 'Project Management',
  },
  {
    name: 'Atlassian JIRA',
  },
  {
    name: 'Software Engineering Design Patterns',
  },
  {
    name: 'Agile Methodologies',
  },
  {
    name: 'SDLC',
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'I am open to opportunities! Let me know if you would want to work with me!',
  btn: '',
  email: 'yenwei9761@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yen-wei-tan-588326160/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/yenweitan',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://yenwei-blog.netlify.app/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
