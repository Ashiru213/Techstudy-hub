import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { datasetsLibrary, dataChallenges } from '../data/datasetsAndChallenges';
import { codingExercisesData } from '../data/codingExercises';
import { careerPathsData } from '../data/careerRoadmapsData';
import { Search, X, BookOpen, Database, Compass, ArrowRight, Terminal } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    navigateToCourse, 
    navigateToDataset, 
    navigateToCareer,
    setPracticeTab,
    setCurrentView 
  } = useApp();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      } else if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.trim().toLowerCase();

  // Search Results
  const matchedCourses = q 
    ? coursesData.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.code?.toLowerCase().includes(q) || 
        c.technologies.some(t => t.toLowerCase().includes(q)) ||
        c.category.toLowerCase().includes(q)
      ).slice(0, 5)
    : coursesData.slice(0, 3);

  const matchedDatasets = q
    ? datasetsLibrary.filter(d => 
        d.name.toLowerCase().includes(q) || 
        d.category.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedCoding = q
    ? codingExercisesData.filter(ex => 
        ex.title.toLowerCase().includes(q) || 
        ex.language.toLowerCase().includes(q) ||
        ex.prompt.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedCareers = q
    ? careerPathsData.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.requiredSkills.some(s => s.toLowerCase().includes(q))
      ).slice(0, 2)
    : [];

  const hasAnyResults = matchedCourses.length > 0 || matchedDatasets.length > 0 || matchedCoding.length > 0 || matchedCareers.length > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, academic syllabus, datasets, coding practice, or careers..."
            className="w-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!hasAnyResults ? (
            <div className="py-12 text-center text-xs text-slate-500">
              No results found for &ldquo;<span className="font-semibold text-slate-700">{query}</span>&rdquo;.
            </div>
          ) : (
            <>
              {/* Courses Results */}
              {matchedCourses.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Courses & Academic Subjects</span>
                  </div>
                  <div className="space-y-1">
                    {matchedCourses.map(c => (
                      <div
                        key={c.id}
                        onClick={() => {
                          navigateToCourse(c.id);
                          setIsSearchOpen(false);
                        }}
                        className="p-2.5 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-sky-700 flex items-center gap-2">
                            {c.code && (
                              <span className="font-mono text-[11px] bg-slate-100 px-1 rounded text-slate-700">
                                {c.code}
                              </span>
                            )}
                            <span>{c.title}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {c.shortDescription}
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          Free
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Datasets */}
              {matchedDatasets.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>Datasets (Data Lab)</span>
                  </div>
                  <div className="space-y-1">
                    {matchedDatasets.map(d => (
                      <div
                        key={d.id}
                        onClick={() => {
                          navigateToDataset(d.id);
                          setIsSearchOpen(false);
                        }}
                        className="p-2.5 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-sky-700">
                            {d.name}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono">
                            {d.category} · {d.rows} rows · {d.fileFormat}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coding Exercises */}
              {matchedCoding.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Practice Exercises</span>
                  </div>
                  <div className="space-y-1">
                    {matchedCoding.map(ex => (
                      <div
                        key={ex.id}
                        onClick={() => {
                          setPracticeTab('coding');
                          setCurrentView('practice');
                          setIsSearchOpen(false);
                        }}
                        className="p-2.5 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-sky-700">
                            {ex.title}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono uppercase">
                            {ex.language} · {ex.difficulty}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Paths */}
              {matchedCareers.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Career Paths</span>
                  </div>
                  <div className="space-y-1">
                    {matchedCareers.map(c => (
                      <div
                        key={c.id}
                        onClick={() => {
                          navigateToCareer(c.id);
                          setIsSearchOpen(false);
                        }}
                        className="p-2.5 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-sky-700">
                            {c.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {c.shortOverview}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer Key Hint */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Navigate with mouse or keyboard</span>
          <span className="font-mono">Esc to close</span>
        </div>
      </div>
    </div>
  );
};
