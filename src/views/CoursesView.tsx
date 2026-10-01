import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { Search, Filter, Bookmark, Check, ArrowRight, BookOpen } from 'lucide-react';

export const CoursesView: React.FC = () => {
  const { navigateToCourse, toggleSaveCourse, user } = useApp();

  const [search, setSearch] = useState('');
  const [selectedMainCategory, setSelectedMainCategory] = useState<'All' | 'Computer Science' | 'Data' | 'Technology'>('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Academic' | 'Career'>('All');

  // 3 Primary Categories with specific sub-categories
  const subCategoryMap: Record<string, string[]> = {
    'Computer Science': [
      'All',
      'Programming',
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Architecture',
      'Software Engineering',
      'Networking',
      'Databases'
    ],
    'Data': [
      'All',
      'Data Analysis',
      'Data Science',
      'Statistics',
      'Machine Learning',
      'Data Visualization'
    ],
    'Technology': [
      'All',
      'Web Development',
      'Cybersecurity',
      'Cloud Computing',
      'Mobile Development',
      'UI/UX'
    ]
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter(c => {
      // 1. Text Search
      const q = search.trim().toLowerCase();
      if (q) {
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesCode = c.code?.toLowerCase().includes(q);
        const matchesDesc = c.shortDescription.toLowerCase().includes(q);
        const matchesTech = c.technologies.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCode && !matchesDesc && !matchesTech) return false;
      }

      // 2. Main Category Filter
      if (selectedMainCategory === 'Computer Science') {
        const isCS = c.category === 'Computer Science' || 
                     c.category === 'Software Engineering' || 
                     c.category === 'Database Management' || 
                     c.category === 'Networking';
        if (!isCS) return false;
      } else if (selectedMainCategory === 'Data') {
        const isData = c.category === 'Data Analysis' || 
                       c.category === 'Data Science' || 
                       c.category === 'Mathematics & Statistics' || 
                       c.category === 'Artificial Intelligence';
        if (!isData) return false;
      } else if (selectedMainCategory === 'Technology') {
        const isTech = c.category === 'Web Development' || 
                       c.category === 'Cybersecurity' || 
                       c.category === 'Cloud Computing' || 
                       c.category === 'Mobile Development' || 
                       c.category === 'UI/UX Design';
        if (!isTech) return false;
      }

      // 3. Sub-Category Filter
      if (selectedSubCategory !== 'All') {
        const sub = selectedSubCategory.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(sub);
        const matchesCat = c.category.toLowerCase().includes(sub);
        const matchesTech = c.technologies.some(t => t.toLowerCase().includes(sub));
        if (!matchesTitle && !matchesCat && !matchesTech) return false;
      }

      // 4. Clean Filters: Beginner | Intermediate | Advanced | Academic | Career
      if (selectedFilter === 'Beginner' && c.difficulty !== 'Beginner') return false;
      if (selectedFilter === 'Intermediate' && c.difficulty !== 'Intermediate') return false;
      if (selectedFilter === 'Advanced' && c.difficulty !== 'Advanced') return false;
      if (selectedFilter === 'Academic' && !c.code) return false;
      if (selectedFilter === 'Career' && !c.duration.includes('weeks')) return false;

      return true;
    });
  }, [search, selectedMainCategory, selectedSubCategory, selectedFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1">
          100% Free · Open to All Students
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Courses
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Comprehensive, academic, and practical tech courses organized cleanly into Computer Science, Data, and Technology.
        </p>
      </div>

      {/* Main Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses by keyword, topic, or technology (e.g. Python, SQL, React, Algorithms)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* 3 Main Categories: Computer Science | Data | Technology */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Main Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['All', 'Computer Science', 'Data', 'Technology'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedMainCategory(cat);
                  setSelectedSubCategory('All');
                }}
                className={`py-2 px-3 text-xs font-semibold rounded-lg text-center border transition-all ${
                  selectedMainCategory === cat
                    ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-categories if a main category is selected */}
        {selectedMainCategory !== 'All' && subCategoryMap[selectedMainCategory] && (
          <div className="pt-2 border-t border-slate-100">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Topics in {selectedMainCategory}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {subCategoryMap[selectedMainCategory].map(sub => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                    selectedSubCategory === sub
                      ? 'bg-sky-900 text-white font-medium'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Focused Filters: Beginner | Intermediate | Advanced | Academic | Career */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-slate-400 font-semibold uppercase text-[11px] mr-1">Filter:</span>
            {(['All', 'Beginner', 'Intermediate', 'Advanced', 'Academic', 'Career'] as const).map(f => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  selectedFilter === f
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="text-slate-500 text-xs">
            Showing <strong className="text-slate-900">{filteredCourses.length}</strong> courses
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => {
          const isEnrolled = user.enrolledCourseIds.includes(course.id);
          const isSaved = user.savedCourseIds.includes(course.id);
          const progress = user.courseProgress[course.id] || 0;

          return (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div className="p-6 space-y-3">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    {course.code && (
                      <span className="font-mono text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded">
                        {course.code}
                      </span>
                    )}
                    <span className="font-medium text-slate-700">{course.category}</span>
                  </div>
                  <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded">
                    Free
                  </span>
                </div>

                {/* Course Title */}
                <h3 
                  onClick={() => navigateToCourse(course.id)}
                  className="text-base font-bold text-slate-900 hover:text-sky-700 cursor-pointer leading-snug line-clamp-2"
                >
                  {course.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {course.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="pt-1 flex flex-wrap gap-1">
                  {course.technologies.slice(0, 3).map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-[11px] border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {course.technologies.length > 3 && (
                    <span className="text-[11px] text-slate-400 self-center">
                      +{course.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Enrollment Progress if Enrolled */}
                {isEnrolled && (
                  <div className="pt-2">
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Progress</span>
                      <span className="font-mono font-semibold text-slate-900">{progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-sky-600 h-full rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Metadata & Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="text-slate-500 space-x-2">
                  <span>{course.difficulty}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleSaveCourse(course.id)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"
                    title={isSaved ? "Saved" : "Save for later"}
                    aria-label="Save course"
                  >
                    <Bookmark className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} />
                  </button>

                  <button
                    onClick={() => navigateToCourse(course.id)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>{isEnrolled ? 'Continue' : 'Start Course'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-xs text-slate-500 space-y-2">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="font-semibold text-slate-800 text-sm">No courses match your filter</div>
          <p>Try resetting the category or difficulty filters to see all available courses.</p>
        </div>
      )}
    </div>
  );
};
