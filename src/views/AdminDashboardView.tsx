import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { datasetsLibrary, dataChallenges } from '../data/datasetsAndChallenges';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Database, 
  FolderGit2, 
  TrendingUp, 
  Plus, 
  Trash2, 
  Edit 
} from 'lucide-react';

export const AdminDashboardView: React.FC = () => {
  const { setCurrentView } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'datasets' | 'students'>('overview');

  const stats = [
    { label: 'Total Registered Students', value: '14,820', icon: Users, change: '+14% this month' },
    { label: 'Active Learning Sessions', value: '3,410', icon: TrendingUp, change: 'Across 42 universities' },
    { label: 'Total Published Courses', value: coursesData.length.toString(), icon: BookOpen, change: '15 Academic departments' },
    { label: 'Cumulative Enrollments', value: '38,900', icon: CheckCircle2, change: 'Avg 2.6 per student' },
    { label: 'Verified Certificates Issued', value: '4,810', icon: Award, change: '100% cryptographic verify' },
    { label: 'Data Challenges Solved', value: '6,320', icon: Database, change: 'Validated automatically' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Institutional Administration & Accreditation Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            TechStudy Hub Admin Console
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Oversee university curriculum standards, monitor student learning engagement, audit dataset sandboxes, and manage certificates.
          </p>
        </div>

        <button
          onClick={() => setCurrentView('dashboard')}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-semibold self-start sm:self-auto"
        >
          Return to Student View
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((st, i) => {
          const Icon = st.icon;
          return (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold">{st.label}</span>
                <Icon className="w-4 h-4 text-slate-600" />
              </div>
              <div className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                {st.value}
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {st.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Admin Tab Navigation */}
      <div className="border-b border-slate-200">
        <nav className="flex items-center gap-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors ${activeTab === 'overview' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            System Activity Log
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-3 border-b-2 transition-colors ${activeTab === 'courses' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            Curriculum Courses ({coursesData.length})
          </button>
          <button
            onClick={() => setActiveTab('datasets')}
            className={`py-3 border-b-2 transition-colors ${activeTab === 'datasets' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            Dataset Repositories ({datasetsLibrary.length})
          </button>
        </nav>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">Recent Student Activity & Progress Submissions</h3>
            <span className="text-xs text-emerald-700 font-mono">Live Ingestion Stream Active</span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Alex Chen (Year 2)</span>
                <span className="text-slate-500"> completed lesson &ldquo;Partitioning Over Window Frames&rdquo; in DAT 201</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">2 mins ago</span>
            </div>
            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Fatima Bello (Year 3)</span>
                <span className="text-slate-500"> passed Quiz with 92% accuracy on &ldquo;Theory of Computation&rdquo;</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">8 mins ago</span>
            </div>
            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Liam O’Connor (Year 1)</span>
                <span className="text-slate-500"> claimed verifiable certificate for &ldquo;CSC 101 Introduction to CS&rdquo;</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">15 mins ago</span>
            </div>
            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900">Chidi Okafor (Year 4)</span>
                <span className="text-slate-500"> submitted solution for &ldquo;Financial Fraud Detection Model&rdquo;</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">24 mins ago</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: COURSES */}
      {activeTab === 'courses' && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800">
            <span>Course Catalog Database Records</span>
            <span className="text-slate-500 font-normal">All 50+ courses indexed in system database</span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-2.5">Code</th>
                  <th className="px-4 py-2.5">Title</th>
                  <th className="px-4 py-2.5">Category</th>
                  <th className="px-4 py-2.5">Level</th>
                  <th className="px-4 py-2.5">Enrollments</th>
                  <th className="px-4 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {coursesData.slice(0, 12).map(c => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-mono font-bold text-slate-900">{c.code || 'PRG-X'}</td>
                    <td className="px-4 py-2.5 font-semibold text-slate-800">{c.title}</td>
                    <td className="px-4 py-2.5 text-slate-600">{c.category}</td>
                    <td className="px-4 py-2.5 text-slate-600">{c.level}</td>
                    <td className="px-4 py-2.5 font-mono tabular-nums text-slate-700">{c.enrolledCount.toLocaleString()}</td>
                    <td className="px-4 py-2.5">
                      <span className="px-2 py-0.5 text-[10px] bg-emerald-50 text-emerald-700 font-semibold rounded">
                        Published
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: DATASETS */}
      {activeTab === 'datasets' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900">Data Lab Virtual Telemetry Repositories</h3>
            <span className="text-xs text-slate-500 font-mono">15 Curated CSVs Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {datasetsLibrary.map(d => (
              <div key={d.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{d.name}</span>
                  <span className="font-mono text-slate-500">{d.rows.toLocaleString()} rows</span>
                </div>
                <div className="text-slate-500">Category: {d.category} · Format: {d.fileFormat} ({d.dataSize})</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
