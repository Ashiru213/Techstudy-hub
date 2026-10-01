import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { projectsData } from '../data/projectsData';
import { 
  User, 
  Award, 
  BookOpen, 
  FolderGit2, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  Edit2,
  Check
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { user, updateUserProfile, setViewingCertificate, navigateToCourse, navigateToProject } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [careerGoal, setCareerGoal] = useState(user.careerGoal);

  const completedCourses = coursesData.filter(c => user.completedCourseIds.includes(c.id));
  const activeProjects = projectsData.slice(0, 3); // Sample student portfolio projects

  const handleSave = () => {
    updateUserProfile({ name, careerGoal });
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Profile Overview Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-sm shrink-0">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-xl font-bold text-slate-900 border border-slate-300 rounded px-2 py-0.5"
                  />
                ) : (
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {user.name}
                  </h1>
                )}
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Active Student
                </span>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-2 flex-wrap">
                <span>{user.department}</span>
                <span aria-hidden="true">·</span>
                <span>{user.academicLevel}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-slate-400">{user.email}</span>
              </div>

              <div className="text-xs text-slate-700 pt-1">
                Target Specialization:{' '}
                {isEditing ? (
                  <input
                    type="text"
                    value={careerGoal}
                    onChange={(e) => setCareerGoal(e.target.value)}
                    className="text-xs font-semibold text-slate-900 border border-slate-300 rounded px-2 py-0.5 ml-1"
                  />
                ) : (
                  <strong className="text-slate-900">{user.careerGoal}</strong>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Profile</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Areas of Interest & Competencies */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs text-slate-400">
          Areas of Academic & Technical Focus
        </h2>
        <div className="flex flex-wrap gap-2">
          {user.interests.map(item => (
            <span
              key={item}
              className="px-3 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-medium border border-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Completed Courses & Verified Certificates */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">
            Verified Course Credentials & Diplomas ({user.certificates.length})
          </h2>
          <span className="text-xs text-slate-400 font-mono">Issued by TechStudy Hub Academic Board</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {user.certificates.map(cert => (
            <div
              key={cert.id}
              className="p-5 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-700 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>{cert.grade}</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400">ID: {cert.verificationCode}</span>
              </div>

              <h3 className="text-sm font-bold text-slate-900">{cert.courseName}</h3>
              <div className="text-xs text-slate-500">Conferred on {cert.issueDate}</div>

              <div className="pt-2 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setViewingCertificate({ ...cert, studentName: user.name })}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors"
                >
                  View Credential Document
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Portfolio Projects */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Student Technical Portfolio
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Projects built and verified through the TechStudy Project Lab.</p>
          </div>
          <button
            onClick={() => navigateToProject('proj-lms-platform')}
            className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
          >
            <span>Explore More Blueprints</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeProjects.map(proj => (
            <div
              key={proj.id}
              className="border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-slate-300 transition-all bg-white"
            >
              <div>
                <div className="text-[11px] font-semibold text-slate-500 mb-1">
                  <span>{proj.tier}</span> · <span>{proj.category}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{proj.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {proj.technologies.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] bg-slate-100 font-mono text-slate-600 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-emerald-700 font-medium">Verified Project</span>
                <button
                  onClick={() => navigateToProject(proj.id)}
                  className="text-xs font-bold text-slate-900 hover:text-sky-700"
                >
                  Blueprint Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
