import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StudyTask } from '../types';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Clock, 
  BookOpen, 
  Check 
} from 'lucide-react';

export const StudyPlannerView: React.FC = () => {
  const { studyTasks, addStudyTask, toggleTaskCompleted, deleteStudyTask } = useApp();

  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('DAT 205 Python for Data Analysis');
  const [newDay, setNewDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>('Monday');
  const [newHours, setNewHours] = useState(2);
  const [newDeadline, setNewDeadline] = useState('');
  const [newType, setNewType] = useState<'study' | 'quiz' | 'assignment' | 'project' | 'revision'>('study');

  const days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addStudyTask({
      title: newTitle.trim(),
      course: newCourse,
      dayOfWeek: newDay,
      timeAllocatedHours: Number(newHours),
      deadline: newDeadline || 'This week',
      type: newType,
      completed: false
    });
    setNewTitle('');
    setIsAdding(false);
  };

  const totalAllocatedHours = studyTasks.reduce((acc, t) => acc + t.timeAllocatedHours, 0);
  const completedHours = studyTasks.filter(t => t.completed).reduce((acc, t) => acc + t.timeAllocatedHours, 0);
  const completionPct = totalAllocatedHours > 0 ? Math.round((completedHours / totalAllocatedHours) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>Weekly Schedule & Exam Deadline Tracker</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            My Study Planner
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Structure your academic study sessions, pace your project deadlines, and meet weekly university exam preparation goals.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Study Session</span>
        </button>
      </div>

      {/* Progress & Weekly Summary Box */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Weekly Study Completion
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
            {completionPct}%
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
            <div 
              className="bg-emerald-600 h-full rounded-full transition-all" 
              style={{ width: `${completionPct}%` }} 
            />
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            {completedHours} of {totalAllocatedHours} hours completed
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Scheduled Sessions
          </div>
          <div className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
            {studyTasks.filter(t => t.completed).length} / {studyTasks.length}
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {studyTasks.length - studyTasks.filter(t => t.completed).length} active deadlines pending completion
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Target Focus Courses
          </div>
          <div className="text-xs text-slate-700 space-y-1 font-medium mt-1">
            <div>· DAT 205 Python for Data Analysis</div>
            <div>· CSC 201 Data Structures (CSC 201)</div>
            <div>· CSC 301 Relational Database Systems</div>
          </div>
        </div>
      </div>

      {/* Add Task Modal / Collapse */}
      {isAdding && (
        <form onSubmit={handleCreateTask} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm animate-in fade-in duration-150">
          <h3 className="text-sm font-bold text-slate-900">Add New Study Plan Task</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-medium mb-1">Task Title</label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Practice AVL Tree Rotations"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Related Course</label>
              <input
                type="text"
                required
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Day of Week</label>
              <select
                value={newDay}
                onChange={(e: any) => setNewDay(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white"
              >
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">Duration (Hours)</label>
              <input
                type="number"
                min="0.5"
                max="8"
                step="0.5"
                value={newHours}
                onChange={(e) => setNewHours(Number(e.target.value))}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-1.5 text-xs text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-slate-900 text-white rounded text-xs font-semibold"
            >
              Save Session
            </button>
          </div>
        </form>
      )}

      {/* 7-Day Weekly Breakdown Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        {days.map(day => {
          const dayTasks = studyTasks.filter(t => t.dayOfWeek === day);
          return (
            <div key={day} className="bg-white rounded-xl border border-slate-200 p-4 space-y-3 min-h-64 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                  <span className="font-bold text-xs text-slate-900">{day}</span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {dayTasks.reduce((acc, t) => acc + t.timeAllocatedHours, 0)}h
                  </span>
                </div>

                <div className="space-y-2">
                  {dayTasks.length === 0 ? (
                    <div className="text-[11px] text-slate-400 italic py-4 text-center">Rest / Open</div>
                  ) : (
                    dayTasks.map(task => (
                      <div
                        key={task.id}
                        className={`p-2.5 rounded-lg border text-xs space-y-1.5 transition-all ${
                          task.completed 
                            ? 'bg-slate-50 border-slate-200 opacity-60' 
                            : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <button
                            onClick={() => toggleTaskCompleted(task.id)}
                            className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors"
                          >
                            {task.completed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Circle className="w-3.5 h-3.5" />}
                          </button>
                          <span className={`flex-1 font-semibold text-[11px] leading-tight ${task.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                            {task.title}
                          </span>
                          <button
                            onClick={() => deleteStudyTask(task.id)}
                            className="text-slate-300 hover:text-red-500 p-0.5"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-[10px] text-slate-500 truncate">
                          {task.course}
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                          <span>{task.timeAllocatedHours} hr</span>
                          <span className="capitalize">{task.type}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setNewDay(day);
                  setIsAdding(true);
                }}
                className="w-full py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 border border-dashed border-slate-200 rounded hover:bg-slate-50 transition-colors flex items-center justify-center gap-1"
              >
                <Plus className="w-3 h-3" />
                <span>Add</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
