import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { 
  BookOpen, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Bookmark, 
  Compass,
  PlayCircle,
  Sparkles
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { 
    user, 
    navigateToCourse, 
    setCurrentView, 
    setPracticeTab,
    setViewingCertificate 
  } = useApp();

  // Active enrolled courses
  const enrolledCourses = coursesData.filter(c => user.enrolledCourseIds.includes(c.id));
  const completedCourses = coursesData.filter(c => user.completedCourseIds.includes(c.id));
  const savedCourses = coursesData.filter(c => user.savedCourseIds.includes(c.id));

  // Targeted Recommendations based on student's field and career goal
  const recommendedCourses = React.useMemo(() => {
    const goal = user.careerGoal.toLowerCase();
    const dept = user.department.toLowerCase();

    if (goal.includes('analyst') || dept.includes('analysis')) {
      return coursesData.filter(c => 
        c.id === 'da-excel-mastery' || 
        c.id === 'da-sql-data-analysis' || 
        c.id === 'da-power-bi-dashboards'
      );
    } else if (goal.includes('scientist') || dept.includes('science')) {
      return coursesData.filter(c => 
        c.id === 'prog-python-bootcamp' || 
        c.id === 'da-python-pandas-analysis' || 
        c.id === 'ds-machine-learning-supervised'
      );
    } else if (goal.includes('cyber') || dept.includes('cyber')) {
      return coursesData.filter(c => 
        c.id === 'sec-cyber-fundamentals' || 
        c.id === 'net-computer-networks' || 
        c.id === 'sec-network-security'
      );
    } else {
      // Default to high-value computer science & web development courses
      return coursesData.filter(c => 
        c.id === 'cs-intro-101' || 
        c.id === 'cs-data-structures-201' || 
        c.id === 'web-fullstack-node-react'
      );
    }
  }, [user.careerGoal, user.department]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. WELCOME BACK BANNER */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1">
            Student Learning Dashboard
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Welcome Back, {user.name}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Continue building your skills in {user.department} · Goal: {user.careerGoal}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('courses')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors shadow-xs"
          >
            Browse Free Courses
          </button>
          <button
            onClick={() => {
              setPracticeTab('coding');
              setCurrentView('practice');
            }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs font-medium transition-colors"
          >
            Practice Code
          </button>
        </div>
      </div>

      {/* 2. STATS ROW */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-xs text-slate-400 font-medium">Enrolled Courses</div>
          <div className="text-2xl font-bold text-slate-900 mt-1">{user.enrolledCourseIds.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-xs text-slate-400 font-medium">Completed Courses</div>
          <div className="text-2xl font-bold text-emerald-700 mt-1">{user.completedCourseIds.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-xs text-slate-400 font-medium">Certificates Earned</div>
          <div className="text-2xl font-bold text-sky-700 mt-1">{user.certificates.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-xs text-slate-400 font-medium">Challenges Solved</div>
          <div className="text-2xl font-bold text-slate-900 mt-1">{user.completedChallengeIds.length}</div>
        </div>
      </div>

      {/* 3. CONTINUE LEARNING (ACTIVE COURSES) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">
            Continue Learning
          </h2>
          <span className="text-xs text-slate-500 font-mono">{enrolledCourses.length} active</span>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 text-center text-xs text-slate-500 space-y-2">
            <BookOpen className="w-6 h-6 text-slate-400 mx-auto" />
            <p>You haven&apos;t enrolled in any courses yet.</p>
            <button
              onClick={() => setCurrentView('courses')}
              className="text-sky-700 font-semibold hover:underline"
            >
              Browse course catalog &rarr;
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrolledCourses.map(course => {
              const progress = user.courseProgress[course.id] || 0;
              const isCompleted = progress >= 100;

              return (
                <div 
                  key={course.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition-all space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">{course.category}</span>
                      <span className="font-mono font-bold text-slate-900">{progress}%</span>
                    </div>

                    <h3 
                      onClick={() => navigateToCourse(course.id)}
                      className="text-sm font-bold text-slate-900 hover:text-sky-700 cursor-pointer leading-snug line-clamp-2"
                    >
                      {course.title}
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${isCompleted ? 'bg-emerald-600' : 'bg-sky-600'}`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">{course.duration}</span>
                    <button
                      onClick={() => navigateToCourse(course.id)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1"
                    >
                      <span>{isCompleted ? 'Review' : 'Continue'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. RECOMMENDED COURSES & QUICK ROADMAP */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Recommended for Your Career */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">
              Recommended for {user.careerGoal}
            </h2>
            <button
              onClick={() => setCurrentView('courses')}
              className="text-xs font-semibold text-sky-700 hover:underline"
            >
              View All Courses &rarr;
            </button>
          </div>

          <div className="space-y-3">
            {recommendedCourses.map(c => (
              <div 
                key={c.id}
                className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between gap-4 hover:border-slate-300 transition-all"
              >
                <div>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-0.5">
                    {c.code && <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1 rounded">{c.code}</span>}
                    <span>{c.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-semibold">Free</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{c.shortDescription}</p>
                </div>

                <button
                  onClick={() => navigateToCourse(c.id)}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs font-semibold whitespace-nowrap transition-colors"
                >
                  Start Course
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Career Path & Certificates */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900">
            Career Learning Path
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 text-xs">
            <div className="font-semibold text-slate-900 flex items-center justify-between">
              <span>Target: {user.careerGoal}</span>
              <span className="text-emerald-700 font-mono">Step 2 of 3</span>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1. Fundamentals (Completed)</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-sky-800">
                <div className="w-4 h-4 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px]">2</div>
                <span>2. Core Skills & Tools (In Progress)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px]">3</div>
                <span>3. Practice & Portfolio Projects</span>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('career-hub')}
              className="w-full mt-2 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Open Career Hub</span>
            </button>
          </div>

          {/* Certificates Card */}
          {user.certificates.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Earned Certificates ({user.certificates.length})</span>
              </div>
              <div className="space-y-2">
                {user.certificates.map(cert => (
                  <div 
                    key={cert.id}
                    onClick={() => setViewingCertificate({ ...cert, studentName: user.name })}
                    className="p-2.5 bg-slate-50 border border-slate-200 rounded cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 truncate">{cert.courseName}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{cert.verificationCode} · {cert.issueDate}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
