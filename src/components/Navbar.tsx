import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Menu, 
  X, 
  User, 
  GraduationCap, 
  BookOpen, 
  BarChart3, 
  Terminal, 
  Compass, 
  LayoutDashboard
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    setIsSearchOpen, 
    setIsAuthModalOpen, 
    user 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: any) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNav('home')}
              className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-sky-700 transition-colors flex items-center gap-2 text-left"
            >
              <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tighter">
                TH
              </div>
              <span>TechStudy Hub</span>
            </button>
          </div>

          {/* Main Navigation (7 core items): Home, Courses, Academic, Data Lab, Practice, Career, Dashboard */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button 
              onClick={() => handleNav('home')}
              className={`hover:text-slate-900 transition-colors ${currentView === 'home' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('courses')}
              className={`hover:text-slate-900 transition-colors ${currentView === 'courses' || currentView === 'course-detail' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''}`}
            >
              Courses
            </button>
            <button 
              onClick={() => handleNav('academic-hub')}
              className={`hover:text-slate-900 transition-colors ${currentView === 'academic-hub' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''}`}
            >
              Academic
            </button>
            <button 
              onClick={() => handleNav('data-lab')}
              className={`hover:text-slate-900 transition-colors ${currentView === 'data-lab' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''}`}
            >
              Data Lab
            </button>
            <button 
              onClick={() => handleNav('practice')}
              className={`hover:text-slate-900 transition-colors ${currentView === 'practice' || currentView === 'coding-lab' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''}`}
            >
              Practice
            </button>
            <button 
              onClick={() => handleNav('career-hub')}
              className={`hover:text-slate-900 transition-colors ${currentView === 'career-hub' || currentView === 'roadmaps' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''}`}
            >
              Career
            </button>
            <button 
              onClick={() => handleNav('dashboard')}
              className={`hover:text-slate-900 transition-colors ${currentView === 'dashboard' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''}`}
            >
              Dashboard
            </button>
          </nav>

          {/* Right Section: Global Search + Profile */}
          <div className="flex items-center gap-3">
            {/* Global Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors flex items-center gap-1.5 text-xs"
              title="Search TechStudy Hub (⌘K / Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline text-slate-500 font-normal">Search</span>
              <span className="hidden md:inline text-slate-400 font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">⌘K</span>
            </button>

            {/* Profile Dropdown / Trigger */}
            <button
              onClick={() => handleNav('profile')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                currentView === 'profile'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{user.name.split(' ')[0] || 'Profile'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Hamburger Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 text-sm font-medium text-slate-700 shadow-xl">
          <button 
            onClick={() => handleNav('home')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'home' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <span>Home</span>
          </button>
          <button 
            onClick={() => handleNav('courses')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'courses' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Courses</span>
          </button>
          <button 
            onClick={() => handleNav('academic-hub')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'academic-hub' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <GraduationCap className="w-4 h-4 text-slate-400" />
            <span>Academic</span>
          </button>
          <button 
            onClick={() => handleNav('data-lab')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'data-lab' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <BarChart3 className="w-4 h-4 text-slate-400" />
            <span>Data Lab</span>
          </button>
          <button 
            onClick={() => handleNav('practice')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'practice' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            <span>Practice</span>
          </button>
          <button 
            onClick={() => handleNav('career-hub')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'career-hub' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <Compass className="w-4 h-4 text-slate-400" />
            <span>Career</span>
          </button>
          <button 
            onClick={() => handleNav('dashboard')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'dashboard' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <LayoutDashboard className="w-4 h-4 text-slate-400" />
            <span>Dashboard</span>
          </button>
          <button 
            onClick={() => handleNav('profile')}
            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center gap-3 ${currentView === 'profile' ? 'bg-slate-100 text-slate-900 font-bold' : 'hover:bg-slate-50'}`}
          >
            <User className="w-4 h-4 text-slate-400" />
            <span>Profile</span>
          </button>

          <div className="pt-3 border-t border-slate-200">
            <button 
              onClick={() => { setIsAuthModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full py-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200"
            >
              Sign In / Switch Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
