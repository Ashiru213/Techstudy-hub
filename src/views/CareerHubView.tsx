import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { careerPathsData } from '../data/careerRoadmapsData';
import { CareerPath } from '../types';
import { 
  Compass, 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Wrench, 
  Layers, 
  GraduationCap,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';

// The 10 focused careers requested in prompt:
// Software Developer, Web Developer, Data Analyst, Data Scientist, Cybersecurity Analyst, AI/ML Engineer, Cloud Engineer, Database Administrator, Network Engineer, UI/UX Designer
const primaryCareerIds = [
  'career-software-developer',
  'career-web-developer',
  'career-data-analyst',
  'career-data-scientist',
  'career-cybersecurity-analyst',
  'career-aiml-engineer',
  'career-cloud-engineer',
  'career-dba',
  'career-network-engineer',
  'career-uiux-designer'
];

export const CareerHubView: React.FC = () => {
  const { selectedCareerId, navigateToCourse } = useApp();

  const filteredCareerList = React.useMemo(() => {
    return careerPathsData.filter(c => primaryCareerIds.includes(c.id));
  }, []);

  const [activeCareer, setActiveCareer] = useState<CareerPath>(() => {
    return filteredCareerList.find(c => c.id === selectedCareerId) || filteredCareerList[0] || careerPathsData[0];
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Compass className="w-4 h-4" />
          <span>Technology Careers & Clear Learning Paths</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Career Hub
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Explore top technology roles with clear skill requirements, recommended courses, common tools, hands-on projects, and structured 3-stage roadmaps.
        </p>
      </div>

      {/* Main Layout: Career List (left) + Career Page (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 10 Core Careers */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Target Career Paths ({filteredCareerList.length})
          </div>
          <div className="space-y-2">
            {filteredCareerList.map(c => {
              const isSelected = activeCareer.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCareer(c)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                    isSelected
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-semibold uppercase ${isSelected ? 'text-sky-300' : 'text-slate-500'}`}>
                      {c.category}
                    </span>
                    <span className={`font-mono text-[11px] font-semibold ${isSelected ? 'text-emerald-300' : 'text-emerald-700'}`}>
                      {c.averageEntrySalary}
                    </span>
                  </div>
                  <div className="font-bold text-sm leading-snug">{c.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Structured Career Page */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-8">
          {/* 1. CAREER OVERVIEW */}
          <div className="border-b border-slate-100 pb-6 space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{activeCareer.category}</span>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                Avg Entry: {activeCareer.averageEntrySalary}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {activeCareer.title}
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-800">{activeCareer.shortOverview}</p>
              <p>{activeCareer.fullOverview}</p>
            </div>

            {/* Responsibilities list */}
            {activeCareer.responsibilities && (
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-700 mb-2">What this career involves day-to-day:</div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeCareer.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 2. SKILLS */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-700" />
              <span>Skills Students Need</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {activeCareer.requiredSkills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 3. RECOMMENDED COURSES */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>Recommended Courses on TechStudy Hub</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCareer.recommendedCourses.map((cName, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs font-medium text-slate-800">
                  <span>{cName}</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Free</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. TOOLS */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>Common Technologies & Tools Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {activeCareer.recommendedTools.map(tool => (
                <span key={tool} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md font-mono text-xs text-slate-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 5. PROJECTS */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-purple-600" />
              <span>Projects Students Can Build for Their Portfolio</span>
            </h3>
            <div className="space-y-2">
              {activeCareer.portfolioProjects.map((proj, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">{proj}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. ROADMAP: Fundamentals -> Skills -> Practice */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-700" />
              <span>Simple 3-Stage Career Learning Path</span>
            </h3>

            <div className="space-y-3">
              {/* Stage 1: Fundamentals */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">1</span>
                    <span>Stage 1: Fundamentals</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Core Theory</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  Master computer science foundations, basic programming constructs, and the core mathematical or technical concepts underpinning {activeCareer.title.toLowerCase()}.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="text-slate-400 text-xs">↓</div>
              </div>

              {/* Stage 2: Skills */}
              <div className="p-4 bg-sky-50/50 border border-sky-200 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">2</span>
                    <span>Stage 2: Core Skills & Tools</span>
                  </div>
                  <span className="text-[11px] text-sky-700 font-mono font-medium">Applied Competence</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  Gain direct hands-on proficiency with required industry tools ({activeCareer.recommendedTools.slice(0, 3).join(', ')}), frameworks, and architectural principles.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="text-slate-400 text-xs">↓</div>
              </div>

              {/* Stage 3: Practice */}
              <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">3</span>
                    <span>Stage 3: Practice & Portfolio Projects</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-mono font-medium">Career Readiness</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  Solve real challenges in Practice, build 2-3 end-to-end portfolio projects, and prepare for internships and technical interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
