import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { OnboardingModal } from './components/OnboardingModal';
import { CertificateModal } from './components/CertificateModal';
import { AuthModal } from './components/AuthModal';

import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { CourseDetailView } from './views/CourseDetailView';
import { AcademicHubView } from './views/AcademicHubView';
import { DataLabView } from './views/DataLabView';
import { PracticeView } from './views/PracticeView';
import { CareerHubView } from './views/CareerHubView';
import { DashboardView } from './views/DashboardView';
import { ProfileView } from './views/ProfileView';

// Backward compatibility views
import { CodingLabView } from './views/CodingLabView';
import { ProjectLabView } from './views/ProjectLabView';
import { RoadmapsView } from './views/RoadmapsView';
import { ResourcesView } from './views/ResourcesView';
import { StudyPlannerView } from './views/StudyPlannerView';
import { AdminDashboardView } from './views/AdminDashboardView';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      {/* 7 Core Views */}
      {currentView === 'home' && <HomeView />}
      {currentView === 'courses' && <CoursesView />}
      {currentView === 'course-detail' && <CourseDetailView />}
      {currentView === 'academic-hub' && <AcademicHubView />}
      {currentView === 'data-lab' && <DataLabView />}
      {currentView === 'practice' && <PracticeView />}
      {currentView === 'career-hub' && <CareerHubView />}
      {currentView === 'dashboard' && <DashboardView />}
      {currentView === 'profile' && <ProfileView />}

      {/* Aliases / Fallbacks */}
      {currentView === 'coding-lab' && <PracticeView />}
      {currentView === 'project-lab' && <ProjectLabView />}
      {currentView === 'roadmaps' && <CareerHubView />}
      {currentView === 'resources' && <ResourcesView />}
      {currentView === 'study-planner' && <StudyPlannerView />}
      {currentView === 'admin' && <AdminDashboardView />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />

        {/* Global Modals */}
        <GlobalSearchModal />
        <OnboardingModal />
        <CertificateModal />
        <AuthModal />
      </div>
    </AppProvider>
  );
}
