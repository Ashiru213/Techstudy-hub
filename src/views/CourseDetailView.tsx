import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  Award, 
  Clock, 
  HelpCircle, 
  PlayCircle,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Check
} from 'lucide-react';

export const CourseDetailView: React.FC = () => {
  const { 
    selectedCourseId, 
    setCurrentView, 
    user, 
    enrollInCourse, 
    toggleSaveCourse, 
    updateCourseProgress, 
    claimCertificate 
  } = useApp();

  const [expandedModuleId, setExpandedModuleId] = useState<string | null>('mod-1');
  const [selectedLesson, setSelectedLesson] = useState<{ id: string; title: string; content?: string } | null>(null);

  const course = coursesData.find(c => c.id === selectedCourseId) || coursesData[0];
  const isEnrolled = user.enrolledCourseIds.includes(course.id);
  const isSaved = user.savedCourseIds.includes(course.id);
  const progress = user.courseProgress[course.id] || 0;

  // Total lessons count
  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);

  const handleCompleteLesson = (lessonId: string) => {
    if (!isEnrolled) {
      enrollInCourse(course.id);
    }
    // Calculate progress increment per lesson
    const step = Math.round(100 / Math.max(1, totalLessons));
    const newProgress = Math.min(100, progress + step);
    updateCourseProgress(course.id, newProgress);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back button */}
      <div>
        <button
          onClick={() => setCurrentView('courses')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses</span>
        </button>
      </div>

      {/* Clean Course Header Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {course.code && (
              <span className="font-mono text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded">
                {course.code}
              </span>
            )}
            <span className="font-medium text-slate-700">{course.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
              100% Free
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {course.title}
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            {course.shortDescription}
          </p>
        </div>

        {/* Metadata Bar: Difficulty, Estimated Duration, Number of Lessons, Course Progress */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
          <div>
            <div className="text-slate-400 font-medium">Difficulty</div>
            <div className="font-bold text-slate-900 mt-0.5">{course.difficulty}</div>
          </div>
          <div>
            <div className="text-slate-400 font-medium">Estimated Duration</div>
            <div className="font-bold text-slate-900 mt-0.5">{course.duration}</div>
          </div>
          <div>
            <div className="text-slate-400 font-medium">Number of Lessons</div>
            <div className="font-bold text-slate-900 mt-0.5">{totalLessons} lessons</div>
          </div>
          <div>
            <div className="text-slate-400 font-medium">Course Progress</div>
            <div className="font-bold text-slate-900 font-mono mt-0.5">{progress}%</div>
          </div>
        </div>

        {/* Progress Bar & Main Start / Continue Action */}
        <div className="space-y-4 pt-2">
          {isEnrolled && (
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
                <span>Learning Completion</span>
                <span className="font-mono font-bold text-slate-900">{progress}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-sky-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {!isEnrolled ? (
              <button
                onClick={() => enrollInCourse(course.id)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors shadow-xs"
              >
                Enroll Free & Start Learning
              </button>
            ) : progress >= 100 ? (
              <button
                onClick={() => claimCertificate(course.id, course.title)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>View Free Certificate</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  const step = Math.round(100 / Math.max(1, totalLessons));
                  updateCourseProgress(course.id, Math.min(100, progress + step));
                }}
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-xs font-semibold transition-colors shadow-xs"
              >
                Continue Learning Next Lesson
              </button>
            )}

            <button
              onClick={() => toggleSaveCourse(course.id)}
              className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <Bookmark className="w-3.5 h-3.5" fill={isSaved ? "currentColor" : "none"} />
              <span>{isSaved ? "Saved" : "Save for Later"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Lesson Reading Modal / Drawer (if user clicks a lesson) */}
      {selectedLesson && (
        <div className="p-6 bg-sky-50/60 border border-sky-200 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-600" />
              <h3 className="font-bold text-sm text-slate-900">{selectedLesson.title}</h3>
            </div>
            <button
              onClick={() => setSelectedLesson(null)}
              className="text-xs text-slate-500 hover:text-slate-800"
            >
              Close
            </button>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            {selectedLesson.content || 'In this lesson, you explore key computational concepts, theory, and implementation patterns. Review the materials carefully and proceed to practical exercises.'}
          </p>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                handleCompleteLesson(selectedLesson.id);
                setSelectedLesson(null);
              }}
              className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Mark as Completed & Continue</span>
            </button>
          </div>
        </div>
      )}

      {/* Simple Course Content Structure: Module 1 -> Lesson 1, Lesson 2, Lesson 3, Quiz */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Course Content</h2>
          <span className="text-xs text-slate-500 font-mono">{course.modules.length} Modules</span>
        </div>

        <div className="space-y-3">
          {course.modules.map((mod, modIdx) => {
            const isOpen = expandedModuleId === mod.id || expandedModuleId === `mod-${modIdx + 1}`;
            return (
              <div key={mod.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {/* Module Header Accordion */}
                <button
                  onClick={() => setExpandedModuleId(isOpen ? null : mod.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center">
                      {modIdx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Module {modIdx + 1}: {mod.title}</div>
                      <div className="text-xs text-slate-500">{mod.description}</div>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                {/* Module Lessons & Quiz */}
                {isOpen && (
                  <div className="border-t border-slate-100 divide-y divide-slate-100 bg-slate-50/40">
                    {/* Lessons */}
                    {mod.lessons.map((les, lesIdx) => (
                      <div
                        key={les.id}
                        className="p-3.5 sm:px-6 flex items-center justify-between hover:bg-white transition-colors"
                      >
                        <div 
                          onClick={() => setSelectedLesson(les)}
                          className="flex items-center gap-3 cursor-pointer flex-1"
                        >
                          <PlayCircle className="w-4 h-4 text-slate-400 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-slate-900 hover:text-sky-700">
                              Lesson {lesIdx + 1}: {les.title}
                            </div>
                            <div className="text-[11px] text-slate-500">{les.duration} · {les.type}</div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleCompleteLesson(les.id)}
                          className="px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-slate-200 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Complete</span>
                        </button>
                      </div>
                    ))}

                    {/* Module Quiz */}
                    <div className="p-3.5 sm:px-6 flex items-center justify-between bg-sky-50/30">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">
                            Module {modIdx + 1} Assessment Quiz
                          </div>
                          <div className="text-[11px] text-slate-500">10 practice questions · Instant score</div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const step = Math.round(100 / Math.max(1, totalLessons));
                          updateCourseProgress(course.id, Math.min(100, progress + step));
                        }}
                        className="px-3 py-1 bg-slate-900 text-white rounded text-[11px] font-semibold hover:bg-slate-800 transition-colors"
                      >
                        Take Quiz
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
