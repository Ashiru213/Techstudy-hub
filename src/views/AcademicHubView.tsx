import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { academicCurriculum, AcademicCourseReference } from '../data/academicData';
import { Department } from '../types';
import { 
  GraduationCap, 
  Search, 
  BookOpen, 
  FileText, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

export const AcademicHubView: React.FC = () => {
  const { navigateToCourse } = useApp();

  const [search, setSearch] = useState('');
  const [selectedField, setSelectedField] = useState<Department>('Computer Science');
  const [selectedLevel, setSelectedLevel] = useState<string>('Year 2');
  const [selectedSemester, setSelectedSemester] = useState<'semester1' | 'semester2'>('semester1');
  const [selectedCourseRef, setSelectedCourseRef] = useState<AcademicCourseReference | null>(null);

  // Field Options (Focused on target academic fields)
  const fields: Department[] = [
    'Computer Science',
    'Data Analysis',
    'Data Science',
    'Software Engineering',
    'Cybersecurity',
    'Information Technology'
  ];

  const levels = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

  // Current courses from curriculum
  const currentCourses = React.useMemo(() => {
    // If user typed a search query, search across all academic courses
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      const results: AcademicCourseReference[] = [];
      Object.keys(academicCurriculum).forEach(deptKey => {
        const deptObj = academicCurriculum[deptKey as Department];
        if (!deptObj) return;
        Object.keys(deptObj).forEach(yrKey => {
          const yrObj = deptObj[yrKey];
          if (!yrObj) return;
          (yrObj.semester1 || []).concat(yrObj.semester2 || []).forEach(c => {
            if (
              c.title.toLowerCase().includes(q) ||
              c.code.toLowerCase().includes(q) ||
              c.description.toLowerCase().includes(q)
            ) {
              results.push(c);
            }
          });
        });
      });
      return results;
    }

    return academicCurriculum[selectedField]?.[selectedLevel]?.[selectedSemester] || [];
  }, [selectedField, selectedLevel, selectedSemester, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4" />
          <span>University Curriculum & Degree Coursework</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Academic
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Helping students with university schoolwork: organized simply by Field → Level → Semester → Course with study notes, topics, practice questions, and quizzes.
        </p>
      </div>

      {/* Global Academic Search Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-xs flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search academic courses by code, title, or topic (e.g. CSC 201, Data Structures, Calculus)..."
          className="w-full text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="text-xs text-slate-400 hover:text-slate-600 px-2"
          >
            Clear
          </button>
        )}
      </div>

      {/* Structured Organization: Field → Level → Semester */}
      {!search && (
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          {/* 1. Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              1. Field of Study
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {fields.map(f => (
                <button
                  key={f}
                  onClick={() => {
                    setSelectedField(f);
                    setSelectedCourseRef(null);
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                    selectedField === f
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Level & 3. Semester */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                2. Academic Level
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {levels.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setSelectedLevel(lvl);
                      setSelectedCourseRef(null);
                    }}
                    className={`py-2 text-xs font-medium rounded-md text-center border transition-all ${
                      selectedLevel === lvl
                        ? 'border-slate-900 bg-slate-900 text-white font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                3. Semester
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setSelectedSemester('semester1');
                    setSelectedCourseRef(null);
                  }}
                  className={`py-2 text-xs font-medium rounded-md text-center border transition-all ${
                    selectedSemester === 'semester1'
                      ? 'border-slate-900 bg-slate-900 text-white font-semibold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  Semester 1
                </button>
                <button
                  onClick={() => {
                    setSelectedSemester('semester2');
                    setSelectedCourseRef(null);
                  }}
                  className={`py-2 text-xs font-medium rounded-md text-center border transition-all ${
                    selectedSemester === 'semester2'
                      ? 'border-slate-900 bg-slate-900 text-white font-semibold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  Semester 2
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content: Course List (left) & Course View (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Academic Course Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {search ? `Search Results (${currentCourses.length})` : `${selectedField} → ${selectedLevel} → ${selectedSemester === 'semester1' ? 'Sem 1' : 'Sem 2'}`}
          </div>

          {currentCourses.length === 0 ? (
            <div className="p-8 bg-white rounded-xl border border-slate-200 text-center text-xs text-slate-500">
              No registered courses found for this selection. Try Year 1 or Year 2 for Computer Science / Data Analysis.
            </div>
          ) : (
            currentCourses.map(course => {
              const isSelected = selectedCourseRef?.code === course.code;
              return (
                <div
                  key={course.code}
                  onClick={() => setSelectedCourseRef(course)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer bg-white ${
                    isSelected
                      ? 'border-slate-900 shadow-md ring-1 ring-slate-900'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
                      {course.code}
                    </span>
                    <span>{course.credits} Credits</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mt-1">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-600">
                    <span>{course.syllabus.length} Topics · {course.lectureNotes.length} Study Notes</span>
                    <span className="text-sky-700 flex items-center gap-0.5">
                      Open Course <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Inside the Course (Overview, Topics, Study Notes, Practice Questions, Quiz, Assignments) */}
        <div className="lg:col-span-7">
          {selectedCourseRef ? (
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
              {/* 1. OVERVIEW */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">{selectedCourseRef.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCourseRef.department}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCourseRef.semester}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedCourseRef.title}
                </h2>
                <div className="mt-3 space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overview:</div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedCourseRef.description}
                  </p>
                </div>
              </div>

              {/* 2. TOPICS */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Curriculum Topics
                </h4>
                <div className="space-y-3">
                  {selectedCourseRef.syllabus.map(u => (
                    <div key={u.unit} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="text-xs font-bold text-slate-900">
                        Topic {u.unit}: {u.title}
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {u.topics.map((t, idx) => (
                          <span key={idx} className="text-[11px] text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. STUDY NOTES */}
              {selectedCourseRef.lectureNotes.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Study Notes & Key Formulas
                  </h4>
                  <div className="space-y-3">
                    {selectedCourseRef.lectureNotes.map((ln, idx) => (
                      <div key={idx} className="p-4 bg-sky-50/50 rounded-lg border border-sky-100 space-y-2">
                        <div className="text-xs font-bold text-slate-900">
                          Week {ln.week}: {ln.topic}
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {ln.summary}
                        </p>
                        <div className="text-[11px] text-slate-600 space-y-1 pt-1">
                          {ln.keyTakeaways.map((k, ki) => (
                            <div key={ki} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                              <span>{k}</span>
                            </div>
                          ))}
                        </div>
                        {ln.formulaOrCode && (
                          <pre className="p-2.5 bg-slate-900 text-sky-300 font-mono text-[11px] rounded overflow-x-auto mt-2">
                            {ln.formulaOrCode}
                          </pre>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. PRACTICE QUESTIONS */}
              {selectedCourseRef.pastQuestions.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Practice Questions & Model Solution Guides
                  </h4>
                  <div className="space-y-3">
                    {selectedCourseRef.pastQuestions.map((pq, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="font-semibold text-slate-800">{pq.year} · {pq.semester}</span>
                          <span className="font-mono text-slate-600 font-semibold">[{pq.marks} Marks]</span>
                        </div>
                        <p className="text-xs text-slate-900 font-medium">
                          {pq.question}
                        </p>
                        <div className="p-3 bg-emerald-50/60 rounded border border-emerald-200 text-xs text-emerald-950 mt-2 space-y-1">
                          <div className="font-semibold text-emerald-900 text-[11px]">Solution Guide:</div>
                          <p className="text-[11px] leading-relaxed">{pq.solutionGuide}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. QUIZ & ASSIGNMENTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Course Quiz</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Test your understanding of {selectedCourseRef.code} topics with 10 interactive questions and instant explanations.
                  </p>
                  <button
                    onClick={() => navigateToCourse('cs-intro-101')}
                    className="mt-2 text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>Launch Quiz</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-sky-600" />
                    <span>Course Assignments</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Weekly practical homework problem sets, coding exercises, and laboratory lab instructions.
                  </p>
                  <div className="text-[11px] text-slate-500 font-mono mt-1">
                    {selectedCourseRef.syllabus.length} assignments assigned
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-xl border border-dashed border-slate-300 p-12 text-center text-xs text-slate-500 space-y-2">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
              <div className="font-semibold text-slate-800 text-sm">Select an academic course to inspect</div>
              <p className="max-w-md mx-auto">
                Click on any course from the curriculum list on the left to view overview, topics, study notes, practice questions, quizzes, and assignments.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
