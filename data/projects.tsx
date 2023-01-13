export type projectsType = {
  name: string;
  description: string;
  stack: string[];
  img: string;
  github: string;
  link: string;
  caseStudy: boolean;
};

export const featured: projectsType[] = [
  {
    name: 'Documenting DevOps',
    description:
      "This is a documentation website containing all my learning on DevOps and it's related tools",
    stack: ['Networking', 'Docker', 'Kubernetes'],
    img: '/projects/documenting-devops.png',
    github: 'https://github.com/nanthakumaran-s/Documenting-DevOps',
    link: 'https://nanthakumaran-s.github.io/Documenting-DevOps/#/',
    caseStudy: false
  },
  {
    name: 'Tweet CLI',
    description: 'This is a CLI tool which allows users to tweet with their terminal',
    stack: ['Node Js', 'Twitter API'],
    img: '/projects/tweet-cli.png',
    github: 'https://github.com/nanthakumaran-s/Tweet-CLI',
    link: 'https://www.npmjs.com/package/tweet-cli-node',
    caseStudy: false
  },
  {
    name: 'Twitter Bot',
    description:
      "A Simple twitter bot powered by OpenAI's Davinci Model to generate tweets and tweet them. It can be easily deployed to AWS Lambda",
    stack: ['Python', 'Open AI', 'Twitter API'],
    img: '/projects/twitter-bot.png',
    github: 'https://github.com/nanthakumaran-s/twitterBot',
    link: '',
    caseStudy: false
  },
  {
    name: 'TheOwNews',
    description:
      'A community driven News app where the news is shared, moderated and consumed by the community',
    stack: ['Node Js', 'Express Js', 'Flutter', 'MongoDB', 'Redis', 'FCM', 'Docker', 'Python'],
    img: '/projects/theownews.png',
    github: '',
    link: 'https://theownews.vercel.app/',
    caseStudy: false
  },
  {
    name: 'Argon LMS',
    description:
      'A Learning Management System along with a CMS website for the sake of students and faculties',
    stack: ['Flutter / Dart', 'Firebase'],
    img: '/projects/argon-lms.png',
    github: '',
    link: 'https://xenonlabz.github.io/argon/',
    caseStudy: false
  }
];

export const previous: projectsType[] = [
  {
    name: 'Sorting Visualizer',
    description: 'A Sorting Visualizer made of React Js which includes 5 sorting algorithms.',
    stack: ['React Js'],
    img: '',
    github: 'https://github.com/nanthakumaran-s/sorting-visualizer',
    link: 'https://nanthakumaran-s.github.io/sorting-visualizer/',
    caseStudy: false
  },
  {
    name: 'Path Finding Visualizer',
    description:
      'A Path Finding Visualizer made of React Js and have cool algorithms which is used in path finding.',
    stack: ['React Js'],
    img: '',
    github: '',
    link: 'https://nanthakumaran-s.github.io/pathfinding-visualizer/',
    caseStudy: false
  },
  {
    name: 'Resize',
    description:
      'A Simple Responsive Design Approach for your Flutter Apps. Includes all the necessary things to design a responsive User Interface for your Apps.',
    stack: ['Flutter'],
    img: '',
    github: 'https://github.com/nanthakumaran-s/resize',
    link: 'https://pub.dev/packages/resize',
    caseStudy: false
  },
  {
    name: 'PrimoNotes',
    description:
      'A simple note taking app made with Kotlin. It is fully featured app which enables adding images, urls to the note and can give colors to each notes.',
    stack: ['Kotlin', 'SQLite'],
    img: '',
    github: 'https://github.com/nanthakumaran-s/PrimoNotes',
    link: '',
    caseStudy: false
  },
  {
    name: 'BookFinder',
    description:
      'Find used books within your campus. This will connect seniors with juniors and students with staffs and promotes the standard of learning.',
    stack: ['Flutter', 'Firebase', 'MongoDB'],
    img: '',
    github: 'https://github.com/nanthakumaran-s/BookFinder',
    link: '',
    caseStudy: false
  }
];
