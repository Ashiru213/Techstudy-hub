import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { resourceLibraryData, glossaryTermsData } from '../data/resourcesAndGlossary';
import { ResourceItem, GlossaryTerm } from '../types';
import { 
  BookOpen, 
  Search, 
  Download, 
  FileText, 
  Code, 
  Check, 
  HelpCircle,
  Tag
} from 'lucide-react';

export const ResourcesView: React.FC = () => {
  const { resourcesTab, setResourcesTab } = useApp();

  const [resourceSearch, setResourceSearch] = useState('');
  const [selectedResourceType, setSelectedResourceType] = useState('All');
  const [glossarySearch, setGlossarySearch] = useState('');
  const [selectedGlossaryCategory, setSelectedGlossaryCategory] = useState('All');
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  const handleDownload = (res: ResourceItem) => {
    setDownloadedIds(prev => [...prev, res.id]);
    const blob = new Blob([`${res.title}\n\n${res.description}\nCategory: ${res.category}\nRelated Course: ${res.courseRelated}`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${res.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredResources = resourceLibraryData.filter(res => {
    if (selectedResourceType !== 'All' && res.type !== selectedResourceType) return false;
    if (resourceSearch.trim()) {
      const q = resourceSearch.trim().toLowerCase();
      const matchTitle = res.title.toLowerCase().includes(q);
      const matchDesc = res.description.toLowerCase().includes(q);
      const matchCourse = res.courseRelated.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchCourse) return false;
    }
    return true;
  });

  const glossaryCategories = ['All', 'Computer Science', 'Databases', 'Data Analysis', 'Data Science', 'Programming', 'Cybersecurity', 'Operating Systems', 'Algorithms'];

  const filteredGlossary = glossaryTermsData.filter(term => {
    if (selectedGlossaryCategory !== 'All' && term.category !== selectedGlossaryCategory) return false;
    if (glossarySearch.trim()) {
      const q = glossarySearch.trim().toLowerCase();
      const matchTerm = term.term.toLowerCase().includes(q);
      const matchSimple = term.simpleDefinition.toLowerCase().includes(q);
      const matchTech = term.technicalDefinition.toLowerCase().includes(q);
      if (!matchTerm && !matchSimple && !matchTech) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          <span>Academic Knowledge Repository & Technical Lexicon</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Resources & Tech Glossary
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Download lecture notes, formula sheets, and past papers, or search the comprehensive 30+ term computing dictionary with code snippets.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="border-b border-slate-200">
        <nav className="flex items-center gap-6 text-xs font-semibold">
          <button
            onClick={() => setResourcesTab('library')}
            className={`py-3 border-b-2 transition-colors ${
              resourcesTab === 'library'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Resource Library ({resourceLibraryData.length} Study Guides & Cheatsheets)
          </button>
          <button
            onClick={() => setResourcesTab('glossary')}
            className={`py-3 border-b-2 transition-colors ${
              resourcesTab === 'glossary'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Technology Glossary ({glossaryTermsData.length} Terms with Code)
          </button>
        </nav>
      </div>

      {/* TAB 1: RESOURCE LIBRARY */}
      {resourcesTab === 'library' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={resourceSearch}
                onChange={(e) => setResourceSearch(e.target.value)}
                placeholder="Search resources, e.g. 'SQL', 'Pandas'..."
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto text-xs">
              <span className="font-semibold text-slate-500 uppercase text-[11px]">Type:</span>
              {['All', 'Lecture Notes', 'Study Guide', 'Cheat Sheet', 'SQL Reference', 'Exam Prep'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedResourceType(t)}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                    selectedResourceType === t 
                      ? 'bg-slate-900 text-white font-semibold' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Resources List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredResources.map(res => {
              const isDownloaded = downloadedIds.includes(res.id);
              return (
                <div
                  key={res.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-slate-700">{res.type}</span>
                      <span className="font-mono text-[11px] text-slate-500">{res.courseRelated}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {res.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      {res.fileSize} · {res.downloadCount.toLocaleString()} downloads
                    </span>

                    <button
                      onClick={() => handleDownload(res)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                        isDownloaded 
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {isDownloaded ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
                      <span>{isDownloaded ? 'Downloaded' : 'Download Guide'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: TECHNOLOGY GLOSSARY */}
      {resourcesTab === 'glossary' && (
        <div className="space-y-6">
          {/* Glossary Search & Category Filter */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Search 30+ technical terms, e.g. 'Algorithm', 'API', 'DataFrame', 'Recursion', 'SQL'..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar text-xs">
              {glossaryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedGlossaryCategory(cat)}
                  className={`px-3 py-1 rounded-md whitespace-nowrap transition-colors ${
                    selectedGlossaryCategory === cat 
                      ? 'bg-slate-900 text-white font-semibold' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Glossary Cards */}
          <div className="space-y-4">
            {filteredGlossary.map(item => (
              <div key={item.id} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.term}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-sky-50/50 rounded-lg border border-sky-100 space-y-1">
                    <div className="font-bold text-slate-900 uppercase text-[10px] text-sky-800">
                      Simple Everyday Definition:
                    </div>
                    <p className="text-slate-700 leading-relaxed">{item.simpleDefinition}</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 uppercase text-[10px] text-slate-500">
                      Technical Engineering Definition:
                    </div>
                    <p className="text-slate-700 leading-relaxed">{item.technicalDefinition}</p>
                  </div>
                </div>

                {item.example && (
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-900">Practical Example: </strong>
                    <span>{item.example}</span>
                  </div>
                )}

                {item.codeSnippet && (
                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Code Implementation & Usage:
                    </div>
                    <pre className="p-3 bg-slate-900 text-sky-300 font-mono text-xs rounded-lg overflow-x-auto leading-relaxed border border-slate-800">
                      {item.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* Related concepts */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex-wrap">
                  <span className="font-medium text-slate-700">Related Concepts:</span>
                  {item.relatedConcepts.map(rc => (
                    <span key={rc} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {rc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
