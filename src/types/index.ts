export type AcademicLevel = 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4' | 'Final Year' | 'Graduate' | 'Beginner' | 'Self Learner';

export type Semester = 'Semester 1' | 'Semester 2';

export type Department = 
  | 'Computer Science'
  | 'Data Analysis'
  | 'Data Science'
  | 'Software Engineering'
  | 'Cybersecurity'
  | 'Information Technology'
  | 'Networking'
  | 'Artificial Intelligence'
  | 'Database Systems'
  | 'Cloud Computing'
  | 'Web Development'
  | 'Mobile Development';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'lab' | 'quiz';
  completed?: boolean;
  content?: string;
  codeSnippet?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  code?: string;
  category: string;
  department?: Department;
  level: AcademicLevel;
  difficulty: Difficulty;
  duration: string;
  rating: number;
  enrolledCount: number;
  instructor: {
    name: string;
    title: string;
    avatar?: string;
  };
  shortDescription: string;
  fullDescription: string;
  learningObjectives: string[];
  prerequisites: string[];
  technologies: string[];
  modules: Module[];
  practiceQuestions?: {
    question: string;
    answer: string;
    explanation: string;
  }[];
  pastQuestions?: {
    year: string;
    semester: string;
    question: string;
    modelAnswer: string;
  }[];
  resources?: {
    title: string;
    type: 'pdf' | 'notes' | 'code' | 'dataset';
    size: string;
    url?: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
  difficulty: Difficulty;
  isTrueFalse?: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  topic: string;
  category: string;
  durationMinutes: number;
  questions: QuizQuestion[];
}

export interface DatasetColumn {
  name: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  sampleValues: (string | number | boolean)[];
  mean?: number;
  median?: number;
  min?: number;
  max?: number;
  stdDev?: number;
  nullCount: number;
}

export interface Dataset {
  id: string;
  name: string;
  category: 'Education' | 'Business' | 'Finance' | 'Healthcare' | 'Transportation' | 'E-commerce' | 'Technology' | 'Environment' | 'Sports' | 'Agriculture';
  rows: number;
  columnsCount: number;
  difficulty: Difficulty;
  description: string;
  suggestedAnalysis: string[];
  fileFormat: string;
  dataSize: string;
  sampleRows: Record<string, string | number>[];
  columns: DatasetColumn[];
}

export interface ChallengeTask {
  id: string;
  description: string;
  expectedResult: string;
  completed?: boolean;
}

export interface DataChallenge {
  id: string;
  title: string;
  category: string;
  datasetName: string;
  datasetId: string;
  difficulty: Difficulty;
  problem: string;
  tasks: ChallengeTask[];
  hints: string[];
  expectedSkills: string[];
  solutionExplanation: string;
  starterSql?: string;
  starterPython?: string;
  expectedOutputSnippet: string;
}

export interface CodingExercise {
  id: string;
  title: string;
  language: 'python' | 'javascript' | 'java' | 'cpp' | 'c' | 'sql';
  difficulty: Difficulty;
  category: 'Algorithms' | 'Data Structures' | 'Data Analysis' | 'SQL Query' | 'Debugging' | 'Web Basics';
  prompt: string;
  initialCode: string;
  solutionCode: string;
  hints: string[];
  testCases: {
    input: string;
    expected: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tier: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  technologies: string[];
  description: string;
  objectives: string[];
  features: string[];
  requirements: string[];
  developmentSteps: {
    step: number;
    title: string;
    details: string;
  }[];
  suggestedDatabase: string;
  suggestedArchitecture: string;
  portfolioPresentationTips: string[];
}

export interface RoadmapStep {
  step: number;
  title: string;
  description: string;
  keySkills: string[];
  recommendedCourses: string[];
  tools: string[];
  projectIdea: string;
  status?: 'not_started' | 'in_progress' | 'completed';
}

export interface CareerPath {
  id: string;
  title: string;
  category: string;
  shortOverview: string;
  fullOverview: string;
  responsibilities: string[];
  requiredSkills: string[];
  averageEntrySalary: string;
  recommendedCourses: string[];
  recommendedTools: string[];
  roadmapSteps: RoadmapStep[];
  portfolioProjects: string[];
  internshipPreparation: string[];
  interviewPreparation: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  courseRelated: string;
  academicLevel: AcademicLevel;
  type: 'Lecture Notes' | 'Study Guide' | 'Cheat Sheet' | 'Programming Reference' | 'SQL Reference' | 'Exam Prep' | 'Project Guide';
  description: string;
  fileSize: string;
  downloadCount: number;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  simpleDefinition: string;
  technicalDefinition: string;
  example: string;
  codeSnippet?: string;
  relatedConcepts: string[];
}

export interface StudyTask {
  id: string;
  title: string;
  course: string;
  dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  timeAllocatedHours: number;
  deadline?: string;
  type: 'study' | 'quiz' | 'assignment' | 'project' | 'revision';
  completed: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
  academicLevel: AcademicLevel;
  department: Department;
  interests: string[];
  careerGoal: string;
  enrolledCourseIds: string[];
  courseProgress: Record<string, number>; // courseId -> percentage
  completedCourseIds: string[];
  savedCourseIds: string[];
  certificates: {
    id: string;
    courseId: string;
    courseName: string;
    issueDate: string;
    verificationCode: string;
    grade: string;
  }[];
  quizAttempts: {
    quizId: string;
    quizTitle: string;
    score: number;
    total: number;
    date: string;
  }[];
  completedChallengeIds: string[];
  weeklyStudyHoursGoal: number;
  weeklyStudyHoursLogged: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'progress' | 'quiz' | 'challenge' | 'certificate' | 'reminder';
}
