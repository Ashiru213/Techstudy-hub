import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { careerPathsData } from '../data/careerRoadmapsData';
import { RoadmapStep, CareerPath } from '../types';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  FolderGit2 
} from 'lucide-react';

export const RoadmapsView: React.FC = () => {
  const { selectedRoadmapId, setCurrentView, navigateToCourse } = useApp();

  const [activeCareer, setActiveCareer] = useState<CareerPath>(() => {
    return careerPathsData.find(c => c.id === selectedRoadmapId) || careerPathsData[0];
  });

  // Track step completion states in component state (synced with localStorage)
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('tsh_roadmap_steps');
    return saved ? JSON.parse(saved) : {
      'career-data-analyst-1': true,
      'career-data-analyst-2': true,
      'career-data-analyst-3': false,
      'career-data-scientist-1': true,
      'career-software-developer-1': true
    };
  });

  const toggleStep = (stepKey: string) => {
    setCompletedSteps(prev => {
      const updated = { ...prev, [stepKey]: !prev[stepKey] };
      localStorage.setItem('tsh_roadmap_steps', JSON.stringify(updated));
      return updated;
    });
  };

  const steps = activeCareer.roadmapSteps;
  const completedCount = steps.filter(s => completedSteps[`${activeCareer.id}-${s.step}`]).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Map className="w-4 h-4" />
          <span>Interactive Technology Milestones</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Career Roadmaps
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Follow step-by-step career milestones. Click on each step to mark as completed, track your trajectory, and view recommended courses and portfolio projects.
        </p>
      </div>

      {/* Roadmap Selector Horizontal Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {careerPathsData.map(c => (
          <button
            key={c.id}
            onClick={() => setActiveCareer(c)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeCareer.id === c.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {c.title} ({c.roadmapSteps.length} Steps)
          </button>
        ))}
      </div>

      {/* Roadmap Overview Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Active Milestone Roadmap
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {activeCareer.title} Roadmap
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              {activeCareer.shortOverview}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 min-w-48 text-right sm:text-left">
            <div className="text-xs text-slate-500 mb-1 flex justify-between">
              <span>Roadmap Progress:</span>
              <strong className="font-mono text-slate-900">{progressPercent}%</strong>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-600 h-full rounded-full transition-all" 
                style={{ width: `${progressPercent}%` }} 
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">
              {completedCount} of {steps.length} milestones checked
            </div>
          </div>
        </div>
      </div>

      {/* Sequential Roadmap Steps Timeline */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-slate-200">
        {steps.map(s => {
          const stepKey = `${activeCareer.id}-${s.step}`;
          const isDone = completedSteps[stepKey] || false;

          return (
            <div key={s.step} className="relative flex items-start gap-4 group">
              {/* Step Status Check Button */}
              <button
                onClick={() => toggleStep(stepKey)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 z-10 transition-transform group-hover:scale-105 shadow-xs ${
                  isDone 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white border-2 border-slate-300 text-slate-700 hover:border-slate-900'
                }`}
                title={isDone ? 'Mark milestone incomplete' : 'Mark milestone complete'}
              >
                {isDone ? <CheckCircle2 className="w-6 h-6" /> : <span className="font-mono">{s.step}</span>}
              </button>

              {/* Step Card Content */}
              <div className={`flex-1 rounded-xl border p-5 sm:p-6 transition-all bg-white ${
                isDone ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                      Milestone {s.step}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {s.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => toggleStep(stepKey)}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                      isDone 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isDone ? 'Completed ✓' : 'Mark Complete'}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {s.description}
                </p>

                {/* Sub-grid of Skills, Tools, and Project Idea */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs border-t border-slate-100">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">Key Competencies:</span>
                    <div className="flex flex-wrap gap-1">
                      {s.keySkills.map(sk => (
                        <span key={sk} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 block mb-1">Recommended Tools:</span>
                    <div className="text-slate-600">
                      {s.tools.join(', ')}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 block mb-1">Milestone Project Goal:</span>
                    <div className="text-slate-700 font-medium">
                      {s.projectIdea}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
