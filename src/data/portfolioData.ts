import { SkillItem, ProjectItem, JourneyStep, FutureGoalItem, SocialLinks } from '../types';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/derangulanandeep-star',
  linkedin: 'https://www.linkedin.com/in/derangula-nandeep-nandeep-a92627439/',
  email: 'nandeepn786@gmail.com',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    level: 'Basic',
    category: 'Frontend & UI',
    description: 'HTML5, CSS3, and JavaScript basics for structuring, styling, and adding interactivity to beginner-friendly web pages.',
    iconName: 'Globe',
  },
  {
    id: 'gen-ai',
    name: 'Generative AI',
    level: 'Basic',
    category: 'AI Concepts',
    description: 'Hands-on exploration of prompt design, generative AI tools, and foundational concepts behind modern language and vision models.',
    iconName: 'Sparkles',
  },
  {
    id: 'prog-fund',
    name: 'Programming Fundamentals',
    level: 'Foundational',
    category: 'Core Coding',
    description: 'Variables, conditional branching, loops, functions, basic data structures, and problem-solving through clean procedural logic.',
    iconName: 'Code2',
  },
  {
    id: 'cs-fund',
    name: 'Computer Science Fundamentals',
    level: 'Foundational',
    category: 'Academics',
    description: 'First-year university curriculum covering computing basics, binary logic, algorithms overview, and computer system organization.',
    iconName: 'Binary',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'grade-calculator',
    title: 'Student Grade Calculator',
    description:
      'A beginner-friendly project that calculates student grades based on marks and demonstrates basic programming and application logic.',
    category: 'Web Development / Logic',
    statusBadge: 'Student Project',
    features: [
      'Input subject marks and evaluate average percentages',
      'Conditional grading logic (A+, A, B, C, F)',
      'Grade Point Average (GPA) computation',
      'Input validation for accurate academic scoring',
    ],
    type: 'grade-calculator',
  },
  {
    id: 'voting-system',
    title: 'Voting System',
    description:
      'A basic voting system project created to understand application logic, user interaction, and fundamental programming concepts.',
    category: 'Programming Logic / App Flow',
    statusBadge: 'Student Project',
    features: [
      'Candidate ballot selection and secure vote logging',
      'Duplicate vote prevention and voter validation logic',
      'Real-time vote count tracking and calculation',
      'Winner determination and percentage breakdown',
    ],
    type: 'voting-system',
  },
];

export const JOURNEY_DATA: JourneyStep[] = [
  {
    stepNumber: 1,
    title: 'Started B.Tech CSE',
    status: 'Completed',
    description:
      'Embarked on the Computer Science Engineering journey, building initial academic foundations in computer systems, mathematics, and analytical reasoning.',
  },
  {
    stepNumber: 2,
    title: 'Learning Web Development',
    status: 'Completed',
    description:
      'Gained hands-on familiarity with web fundamentals—HTML, CSS, and JavaScript—learning how interfaces connect with code logic.',
  },
  {
    stepNumber: 3,
    title: 'Exploring Generative AI',
    status: 'In Progress',
    description:
      'Diving into the mechanics of Generative AI, experimenting with foundation models, prompting techniques, and AI-assisted tooling.',
  },
  {
    stepNumber: 4,
    title: 'Building Beginner Projects',
    status: 'In Progress',
    description:
      'Applying programming concepts through hands-on practice projects like grade evaluation calculators and interactive voting systems.',
  },
  {
    stepNumber: 5,
    title: 'Working Toward Becoming an AI Engineer',
    status: 'Upcoming',
    description:
      'Progressively deepening skills in Python, machine learning mathematics, neural networks, and developing real-world AI software.',
  },
];

export const FUTURE_GOALS_DATA: FutureGoalItem[] = [
  {
    id: 'goal-1',
    title: 'Strengthen programming fundamentals',
    category: 'Core Logic',
    description: 'Master data structures, algorithm problem-solving, and clean, readable coding habits.',
  },
  {
    id: 'goal-2',
    title: 'Learn Python deeply',
    category: 'Core AI Language',
    description: 'Build a deep grasp of Python syntax, object-oriented concepts, and key libraries like NumPy and Pandas.',
  },
  {
    id: 'goal-3',
    title: 'Explore Artificial Intelligence and Machine Learning',
    category: 'AI & ML',
    description: 'Study supervised and unsupervised learning, mathematical foundations, and model training methodologies.',
  },
  {
    id: 'goal-4',
    title: 'Build more Generative AI projects',
    category: 'Generative AI',
    description: 'Develop intelligent applications utilizing modern LLMs, multimodal generation, and retrieval workflows.',
  },
  {
    id: 'goal-5',
    title: 'Develop real-world applications',
    category: 'Practical Engineering',
    description: 'Shift from academic exercises to end-to-end usable software that solves genuine everyday problems.',
  },
  {
    id: 'goal-6',
    title: 'Contribute to open-source projects',
    category: 'Community & Collaboration',
    description: 'Engage with developer communities on GitHub, read production codebases, and submit impactful contributions.',
  },
  {
    id: 'goal-7',
    title: 'Become a skilled AI Engineer',
    category: 'Career Vision',
    description: 'Combine solid software engineering discipline with advanced AI architectures to engineer reliable intelligent systems.',
  },
];
