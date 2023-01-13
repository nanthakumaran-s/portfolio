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
    name: 'Tweet Bot',
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
