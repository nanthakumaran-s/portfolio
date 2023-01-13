export type skillsType = {
  heading: string;
  prompt: string;
};

export const software: skillsType[] = [
  {
    heading: 'Langs',
    prompt: 'Python, JavaScript, TypeScript, Dart'
  },
  {
    heading: 'Mobile',
    prompt: 'Flutter'
  },
  {
    heading: 'Web',
    prompt: 'React Js, Next Js'
  },
  {
    heading: 'Backend',
    prompt: 'Node Js, Flask'
  },
  {
    heading: 'Database',
    prompt: 'MongoDB, PostgreSQL, Redis'
  }
];

export const cloudNDevops: skillsType[] = [
  {
    heading: 'Provider',
    prompt: 'Amazon Web Service (AWS)'
  },
  {
    heading: 'Container Management',
    prompt: 'Docker'
  },
  {
    heading: 'Orchestration',
    prompt: 'Docker swarm, Kubernetes'
  },
  {
    heading: 'CI/ CD',
    prompt: 'GitHub Actions, Jenkins'
  },
  {
    heading: 'Infrastructure as Code',
    prompt: 'Terraform'
  }
];
