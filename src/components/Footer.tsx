import React from 'react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentView, setPracticeTab, setDataLabTab } = useApp();

  const handleNav = (view: any, tabSetter?: () => void) => {
    if (tabSetter) tabSetter();
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-white text-slate-900 flex items-center justify-center font-bold text-xs tracking-tighter">
                TH
              </div>
              <span className="text-base font-bold text-white tracking-tight">TechStudy Hub</span>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                100% Free
              </span>
            </div>
            <p className="text-slate-300 font-medium text-sm">
              Learn. Practice. Build. Prepare for Tech Careers.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A free technology learning platform for Computer Science, Data Analysis, Data Science, and IT students. Zero subscription, zero paywalls, open to all learners.
            </p>
          </div>

          {/* Learning Sections */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Learning Hubs
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-white transition-colors">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academic-hub')} className="hover:text-white transition-colors">
                  Academic (Curriculum)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('data-lab', () => setDataLabTab('learn'))} className="hover:text-white transition-colors">
                  Data Lab (Learn & Datasets)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('data-lab', () => setDataLabTab('analyze'))} className="hover:text-white transition-colors">
                  Data Lab (Analyze)
                </button>
              </li>
            </ul>
          </div>

          {/* Practice & Career */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Practice & Careers
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('practice', () => setPracticeTab('coding'))} className="hover:text-white transition-colors">
                  Coding Practice
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('practice', () => setPracticeTab('quizzes'))} className="hover:text-white transition-colors">
                  Topic Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('practice', () => setPracticeTab('challenges'))} className="hover:text-white transition-colors">
                  Challenges
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('career-hub')} className="hover:text-white transition-colors">
                  Career Paths & Roadmaps
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dashboard')} className="hover:text-white transition-colors">
                  Student Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Free Guarantee */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Platform Commitment
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="text-emerald-400 font-medium">✓ Completely Free Forever</li>
              <li>✓ No Credit Cards Needed</li>
              <li>✓ No Locked Lessons</li>
              <li>✓ Free Verifiable Certificates</li>
              <li>
                <button onClick={() => handleNav('profile')} className="hover:text-white transition-colors text-slate-400 mt-2 block">
                  My Profile & Portfolio
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} TechStudy Hub. <strong className="text-slate-300 font-bold">Developed by &ldquo;Ashiru Rosheedah O&rdquo;</strong> · Empowering technology students worldwide for free.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Find → Learn → Practice → Track → Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
