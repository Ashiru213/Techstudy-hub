import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import { 
  FolderGit2, 
  Search, 
  Layers, 
  Database, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Lightbulb, 
  ExternalLink,
  Code
} from 'lucide-react';

export const ProjectLabView: React.FC = () => {
  const { selectedProjectId, navigateToProject } = useApp();

  const [tierFilter, setTierFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [search, setSearch] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(() => {
    return projectsData.find(p => p.id === selectedProjectId) || null;
  });

  const filteredProjects = projectsData.filter(p => {
    if (tierFilter !== 'All' && p.tier !== tierFilter) return false;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      const matchesTitle = p.title.toLowerCase().includes(q);
      const matchesDesc = p.description.toLowerCase().includes(q);
      const matchesTech = p.technologies.some(t => t.toLowerCase().includes(q));
      if (!matchesTitle && !matchesDesc && !matchesTech) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <FolderGit2 className="w-4 h-4" />
          <span>Real-World Implementation Blueprints</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          The Project Lab ({projectsData.length})
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Build industry-ready applications to consolidate academic theory into verifiable portfolio projects for internships and tech careers.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Tier Buttons */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold">
          {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map(tier => (
            <button
              key={tier}
              onClick={() => setTierFilter(tier)}
              className={`px-3.5 py-1.5 rounded-md transition-colors ${
                tierFilter === tier 
                  ? 'bg-slate-900 text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tier === 'All' ? 'All Projects' : tier}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by tech (e.g. React, SQL)..."
            className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(proj => (
          <div
            key={proj.id}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
          >
            <div>
              {/* Header metadata (Zero-Pill Discipline) */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>{proj.tier} Level</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-700">{proj.category}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {proj.title}
              </h3>

              <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                {proj.description}
              </p>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-1 mt-4">
                {proj.technologies.map(t => (
                  <span key={t} className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">{proj.developmentSteps.length} step guide</span>
              <button
                onClick={() => setActiveProjectModal(proj)}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>View Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Project Blueprint Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50 sticky top-0 z-10">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span>{activeProjectModal.tier} Project</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeProjectModal.category}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {activeProjectModal.title}
                </h2>
              </div>
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeProjectModal.description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Recommended Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.technologies.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded text-xs font-mono font-medium text-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Objectives & Core Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase">Learning Objectives:</div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {activeProjectModal.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase">Required Key Features:</div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {activeProjectModal.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture & Suggested Database */}
              <div className="p-4 bg-sky-50/50 rounded-lg border border-sky-100 space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-sky-700" />
                  <span>Architecture & Database Recommendation:</span>
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div><strong>Architecture:</strong> {activeProjectModal.suggestedArchitecture}</div>
                  <div><strong>Database:</strong> {activeProjectModal.suggestedDatabase}</div>
                </div>
              </div>

              {/* Step-by-Step Development Roadmap */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Step-by-Step Implementation Steps
                </h4>
                <div className="space-y-3">
                  {activeProjectModal.developmentSteps.map(st => (
                    <div key={st.step} className="p-3.5 bg-white rounded-lg border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {st.step}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{st.title}</div>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Presentation Tips */}
              <div className="p-4 bg-emerald-50/60 rounded-lg border border-emerald-200 space-y-2">
                <div className="text-xs font-bold text-emerald-950 uppercase flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-emerald-700" />
                  <span>Portfolio Presentation & Interview Advice:</span>
                </div>
                <ul className="list-disc pl-5 text-xs text-emerald-900 space-y-1">
                  {activeProjectModal.portfolioPresentationTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
