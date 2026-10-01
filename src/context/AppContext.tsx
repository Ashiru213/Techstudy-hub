import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, NotificationItem, StudyTask } from '../types';

export type AppView = 
  | 'home'
  | 'courses'
  | 'course-detail'
  | 'academic-hub'
  | 'data-lab'
  | 'practice'
  | 'career-hub'
  | 'dashboard'
  | 'profile'
  // Preserved backwards compatibility aliases
  | 'coding-lab'
  | 'project-lab'
  | 'roadmaps'
  | 'resources'
  | 'study-planner'
  | 'admin';

interface AppContextType {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedCourseId: string | null;
  navigateToCourse: (courseId: string) => void;
  selectedProjectId: string | null;
  navigateToProject: (projectId: string) => void;
  selectedCareerId: string | null;
  navigateToCareer: (careerId: string) => void;
  selectedRoadmapId: string | null;
  navigateToRoadmap: (roadmapId: string) => void;
  selectedDatasetId: string | null;
  navigateToDataset: (datasetId: string) => void;
  selectedChallengeId: string | null;
  navigateToChallenge: (challengeId: string) => void;

  // Active sub-filters or tabs
  dataLabTab: 'learn' | 'datasets' | 'analyze' | 'challenges';
  setDataLabTab: (tab: 'learn' | 'datasets' | 'analyze' | 'challenges') => void;
  practiceTab: 'coding' | 'quizzes' | 'challenges';
  setPracticeTab: (tab: 'coding' | 'quizzes' | 'challenges') => void;
  resourcesTab: 'library' | 'glossary';
  setResourcesTab: (tab: 'library' | 'glossary') => void;

  // User Profile
  user: UserProfile;
  enrollInCourse: (courseId: string) => void;
  toggleSaveCourse: (courseId: string) => void;
  updateCourseProgress: (courseId: string, progress: number) => void;
  claimCertificate: (courseId: string, courseName: string) => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;

  // Study Tasks
  studyTasks: StudyTask[];
  addStudyTask: (task: Omit<StudyTask, 'id'>) => void;
  toggleTaskCompleted: (taskId: string) => void;
  deleteStudyTask: (taskId: string) => void;

  // Quizzes & Challenges
  recordQuizAttempt: (quizId: string, quizTitle: string, score: number, total: number) => void;
  recordChallengeCompletion: (challengeId: string) => void;

  // Modals & Search
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isOnboardingOpen: boolean;
  setIsOnboardingOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  viewingCertificate: {
    id: string;
    courseName: string;
    studentName: string;
    issueDate: string;
    verificationCode: string;
    grade: string;
  } | null;
  setViewingCertificate: (cert: any) => void;
  loginAs: (role: 'student' | 'admin', name?: string, email?: string) => void;
  logout: () => void;
}

const defaultUser: UserProfile = {
  id: 'usr_student_01',
  name: 'Alex Chen',
  email: 'alex.chen@student.techstudy.edu',
  role: 'student',
  academicLevel: 'Year 2',
  department: 'Computer Science',
  interests: ['Programming', 'Data Analysis', 'Data Science', 'Databases'],
  careerGoal: 'Data Analyst',
  enrolledCourseIds: [
    'da-python-pandas-analysis',
    'da-sql-data-analysis',
    'db-relational-design-sql',
    'cs-data-structures-201'
  ],
  courseProgress: {
    'da-python-pandas-analysis': 72,
    'da-sql-data-analysis': 45,
    'db-relational-design-sql': 30,
    'cs-data-structures-201': 15,
    'cs-intro-101': 100,
    'da-intro-fundamentals': 100
  },
  completedCourseIds: ['cs-intro-101', 'da-intro-fundamentals'],
  savedCourseIds: ['ds-intro-fundamentals', 'sec-cyber-fundamentals', 'web-frontend-react'],
  certificates: [
    {
      id: 'cert_101',
      courseId: 'cs-intro-101',
      courseName: 'Introduction to Computer Science',
      issueDate: 'January 18, 2026',
      verificationCode: 'TSH-CS101-9842A',
      grade: 'Distinction (94%)'
    },
    {
      id: 'cert_102',
      courseId: 'da-intro-fundamentals',
      courseName: 'Data Analysis Fundamentals',
      issueDate: 'February 12, 2026',
      verificationCode: 'TSH-DA101-7719B',
      grade: 'Excellence (96%)'
    }
  ],
  quizAttempts: [
    {
      quizId: 'quiz-cs-fundamentals',
      quizTitle: 'Computer Science & Systems Architecture Quiz',
      score: 9,
      total: 10,
      date: 'March 14, 2026'
    }
  ],
  completedChallengeIds: ['chal-sales-performance', 'chal-student-gpa-factors'],
  weeklyStudyHoursGoal: 15,
  weeklyStudyHoursLogged: 11.5
};

const initialStudyTasks: StudyTask[] = [
  { id: 'task-1', title: 'Pandas Groupby & Aggregation practice exercises', course: 'DAT 205 Python for Data Analysis', dayOfWeek: 'Monday', timeAllocatedHours: 2, deadline: 'Tonight, 8:00 PM', type: 'study', completed: true },
  { id: 'task-2', title: 'Complete SQL Window Functions Quiz (ROW_NUMBER, DENSE_RANK)', course: 'DAT 201 SQL for Data Analysis', dayOfWeek: 'Tuesday', timeAllocatedHours: 1.5, deadline: 'Tomorrow, 5:00 PM', type: 'quiz', completed: true },
  { id: 'task-3', title: 'Submit Sales Performance Data Challenge solution', course: 'Data Lab Challenge', dayOfWeek: 'Wednesday', timeAllocatedHours: 2, deadline: 'Wednesday, 11:59 PM', type: 'project', completed: false }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string | null>(null);
  const [selectedDatasetId, setSelectedDatasetId] = useState<string | null>(null);
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(null);

  const [dataLabTab, setDataLabTab] = useState<'learn' | 'datasets' | 'analyze' | 'challenges'>('learn');
  const [practiceTab, setPracticeTab] = useState<'coding' | 'quizzes' | 'challenges'>('coding');
  const [resourcesTab, setResourcesTab] = useState<'library' | 'glossary'>('library');

  // Persistence in localStorage
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('tsh_user_profile');
    return saved ? JSON.parse(saved) : defaultUser;
  });

  const [studyTasks, setStudyTasks] = useState<StudyTask[]>(() => {
    const saved = localStorage.getItem('tsh_study_tasks');
    return saved ? JSON.parse(saved) : initialStudyTasks;
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [viewingCertificate, setViewingCertificate] = useState<any>(null);

  useEffect(() => {
    localStorage.setItem('tsh_user_profile', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('tsh_study_tasks', JSON.stringify(studyTasks));
  }, [studyTasks]);

  // Navigation helpers
  const navigateToCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setPracticeTab('challenges');
    setCurrentView('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCareer = (careerId: string) => {
    setSelectedCareerId(careerId);
    setCurrentView('career-hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRoadmap = (roadmapId: string) => {
    setSelectedRoadmapId(roadmapId);
    setCurrentView('career-hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDataset = (datasetId: string) => {
    setSelectedDatasetId(datasetId);
    setDataLabTab('analyze');
    setCurrentView('data-lab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToChallenge = (challengeId: string) => {
    setSelectedChallengeId(challengeId);
    setDataLabTab('challenges');
    setCurrentView('data-lab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const enrollInCourse = (courseId: string) => {
    setUser(prev => {
      if (prev.enrolledCourseIds.includes(courseId)) return prev;
      return {
        ...prev,
        enrolledCourseIds: [...prev.enrolledCourseIds, courseId],
        courseProgress: {
          ...prev.courseProgress,
          [courseId]: prev.courseProgress[courseId] || 10
        }
      };
    });
  };

  const toggleSaveCourse = (courseId: string) => {
    setUser(prev => {
      const exists = prev.savedCourseIds.includes(courseId);
      return {
        ...prev,
        savedCourseIds: exists 
          ? prev.savedCourseIds.filter(id => id !== courseId)
          : [...prev.savedCourseIds, courseId]
      };
    });
  };

  const updateCourseProgress = (courseId: string, progress: number) => {
    const capped = Math.min(100, Math.max(0, progress));
    setUser(prev => {
      const updated = { ...prev.courseProgress, [courseId]: capped };
      const isComplete = capped >= 100;
      let completedIds = prev.completedCourseIds;
      if (isComplete && !completedIds.includes(courseId)) {
        completedIds = [...completedIds, courseId];
      }
      return {
        ...prev,
        courseProgress: updated,
        completedCourseIds: completedIds
      };
    });
  };

  const claimCertificate = (courseId: string, courseName: string) => {
    const certCode = `TSH-${courseId.toUpperCase().slice(0, 5)}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCert = {
      id: `cert_${Date.now()}`,
      courseId,
      courseName,
      issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      verificationCode: certCode,
      grade: 'Distinction (95%)'
    };

    setUser(prev => ({
      ...prev,
      certificates: [newCert, ...prev.certificates.filter(c => c.courseId !== courseId)]
    }));

    setViewingCertificate({
      ...newCert,
      studentName: user.name
    });
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addStudyTask = (task: Omit<StudyTask, 'id'>) => {
    const newTask: StudyTask = {
      ...task,
      id: `task_${Date.now()}`
    };
    setStudyTasks(prev => [newTask, ...prev]);
  };

  const toggleTaskCompleted = (taskId: string) => {
    setStudyTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const deleteStudyTask = (taskId: string) => {
    setStudyTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const recordQuizAttempt = (quizId: string, quizTitle: string, score: number, total: number) => {
    const attempt = {
      quizId,
      quizTitle,
      score,
      total,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setUser(prev => ({
      ...prev,
      quizAttempts: [attempt, ...prev.quizAttempts]
    }));
  };

  const recordChallengeCompletion = (challengeId: string) => {
    setUser(prev => {
      if (prev.completedChallengeIds.includes(challengeId)) return prev;
      return {
        ...prev,
        completedChallengeIds: [...prev.completedChallengeIds, challengeId]
      };
    });
  };

  const loginAs = (role: 'student' | 'admin', name = 'Alex Chen', email = 'alex.chen@student.techstudy.edu') => {
    setUser(prev => ({
      ...prev,
      name,
      email,
      role
    }));
    setIsAuthModalOpen(false);
    setCurrentView('dashboard');
  };

  const logout = () => {
    setUser(defaultUser);
    setCurrentView('home');
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedCourseId,
        navigateToCourse,
        selectedProjectId,
        navigateToProject,
        selectedCareerId,
        navigateToCareer,
        selectedRoadmapId,
        navigateToRoadmap,
        selectedDatasetId,
        navigateToDataset,
        selectedChallengeId,
        navigateToChallenge,
        dataLabTab,
        setDataLabTab,
        practiceTab,
        setPracticeTab,
        resourcesTab,
        setResourcesTab,
        user,
        enrollInCourse,
        toggleSaveCourse,
        updateCourseProgress,
        claimCertificate,
        updateUserProfile,
        studyTasks,
        addStudyTask,
        toggleTaskCompleted,
        deleteStudyTask,
        recordQuizAttempt,
        recordChallengeCompletion,
        isSearchOpen,
        setIsSearchOpen,
        isOnboardingOpen,
        setIsOnboardingOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        viewingCertificate,
        setViewingCertificate,
        loginAs,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
