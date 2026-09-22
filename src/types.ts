export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: string;
  category: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  statusBadge: string;
  features: string[];
  type: 'grade-calculator' | 'voting-system';
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
}

export interface FutureGoalItem {
  id: string;
  title: string;
  category: string;
  description: string;
}
