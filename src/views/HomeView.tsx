import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { 
  ArrowRight, 
  Binary, 
  BarChart3, 
  GraduationCap, 
  Code2, 
  Terminal, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setCurrentView, navigateToCourse, setIsAuthModalOpen } = useApp();

  const primaryCategories = [
    {
      title: 'Computer Science',
      icon: Binary,
      desc: 'Programming, Data Structures, Algorithms, Operating Systems, Architecture & Networking.',
      linkView: 'courses'
    },
    {
      title: 'Data',
      icon: BarChart3,
      desc: 'Data Analysis, Data Science, Statistics, Machine Learning, Excel, SQL & Visualization.',
      linkView: 'data-lab'
    },
    {
      title: 'Technology',
      icon: Code2,
      desc: 'Web Development, Cybersecurity, Cloud Computing, Mobile Development & UI/UX Design.',
      linkView: 'courses'
    }
  ];

  const featuredCourses = coursesData.slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded">
                <span>100% Free Learning Platform for Technology Students</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-sky-200 bg-sky-950/70 border border-sky-700/60 px-3 py-1 rounded shadow-xs">
                <span className="text-slate-400">Platform Engineer:</span>
                <span className="font-extrabold text-white tracking-wide">Developed by &ldquo;Ashiru Rosheedah O&rdquo;</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Learn. Practice. Build. Prepare for Tech Careers.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              TechStudy Hub is built specifically for Computer Science, Data Analysis, Data Science, and IT students. Find free courses, master academic syllabi, analyze real datasets, practice code, and follow clear career roadmaps — no paywalls, ever.
            </p>

            {/* Prominent Lead Developer Attribution Card */}
            <div className="inline-flex items-center gap-3 p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl backdrop-blur-xs">
              <div className="w-9 h-9 rounded-lg bg-sky-600 text-white font-black text-sm flex items-center justify-center tracking-tighter shrink-0 shadow-inner">
                AO
              </div>
              <div className="text-xs">
                <div className="text-slate-400 font-medium">Platform Creator & Lead Software Engineer</div>
                <div className="text-sm font-extrabold text-white tracking-tight">
                  Developed by <span className="text-sky-300 underline decoration-sky-400 underline-offset-4">&ldquo;Ashiru Rosheedah O&rdquo;</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setCurrentView('courses')}
                className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-bold transition-colors shadow-sm flex items-center gap-2"
              >
                <span>Browse Free Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentView('academic-hub')}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>Academic Schoolwork</span>
              </button>

              <button
                onClick={() => setCurrentView('practice')}
                className="px-5 py-3 text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Practice Coding</span>
              </button>
            </div>

            {/* Free badge guarantees */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Zero Subscription Fees</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>All Courses & Labs Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE STUDENT LEARNING FLOW: Find -> Learn -> Practice -> Track -> Build */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider">
            How TechStudy Hub Works
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Find → Learn → Practice → Track → Build
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A straightforward, distraction-free platform that tells you what to learn, where to practice, and what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-sm text-slate-900">Find Courses</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore Computer Science, Data, and Tech courses filtered by beginner, academic, or career goals.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-sm text-slate-900">Learn Simply</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Concise modules, clear lessons, notes, and academic syllabus alignment for university students.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-sm text-slate-900">Practice & Test</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Interactive coding in Python, SQL, JS, Java, and C++, plus quizzes and data analysis problems.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
              4
            </div>
            <h3 className="font-bold text-sm text-slate-900">Track Progress</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your free student dashboard updates course completion, quizzes taken, and verified certificates.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
              5
            </div>
            <h3 className="font-bold text-sm text-slate-900">Build Careers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Follow 3-stage roadmaps (Fundamentals → Skills → Practice) for 10 high-demand tech careers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 3 MAIN LEARNING DOMAINS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Curriculum Organization
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Three Clean Subject Areas
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('courses')}
            className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {primaryCategories.map(cat => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.title}
                onClick={() => setCurrentView(cat.linkView as any)}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-700 gap-1">
                  <span>Explore Courses & Labs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED FREE COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Popular with Students
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Featured Foundational Courses
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('courses')}
            className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map(c => (
            <div
              key={c.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{c.category}</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">Free</span>
                </div>
                <h3 
                  onClick={() => navigateToCourse(c.id)}
                  className="text-base font-bold text-slate-900 hover:text-sky-700 cursor-pointer leading-snug"
                >
                  {c.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {c.shortDescription}
                </p>
                <div className="text-[11px] text-slate-500 pt-1">
                  {c.difficulty} · {c.duration} · {c.modules.length} modules
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">{c.code || 'CORE'}</span>
                <button
                  onClick={() => navigateToCourse(c.id)}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Start Learning for Free Today
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Create your free student account in 30 seconds. No credit card, no subscriptions, no locked lessons.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-lg text-xs font-bold transition-colors shadow-sm whitespace-nowrap"
            >
              Create Free Account
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors whitespace-nowrap"
            >
              Open Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
