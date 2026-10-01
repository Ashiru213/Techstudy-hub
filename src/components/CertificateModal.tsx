import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Award, CheckCircle, Download, Printer } from 'lucide-react';

export const CertificateModal: React.FC = () => {
  const { viewingCertificate, setViewingCertificate } = useApp();

  if (!viewingCertificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions Bar */}
        <div className="px-6 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50 print:hidden">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <CheckCircle className="w-4 h-4" />
            <span>Verified TechStudy Hub Credential</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button 
              onClick={() => setViewingCertificate(null)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas */}
        <div className="p-8 sm:p-12 bg-white text-center border-8 border-slate-100 relative m-4 rounded-lg shadow-inner">
          {/* Subtle watermark seal */}
          <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none">
            <Award className="w-96 h-96 text-slate-900" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Header Lockup */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                TH
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">TechStudy Hub</span>
            </div>

            <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Academic & Technical Achievement Certificate
            </div>

            <p className="text-xs text-slate-500 italic max-w-md mx-auto">
              This official document certifies that the designated student has rigorously completed all instructional modules, laboratory exercises, and evaluations for:
            </p>

            {/* Course Title */}
            <div className="py-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {viewingCertificate.courseName}
              </h2>
              <div className="text-xs font-medium text-sky-800 mt-1">
                Academic Standing: {viewingCertificate.grade || 'Passed with Distinction'}
              </div>
            </div>

            <div className="text-xs text-slate-500">Awarded to:</div>

            {/* Student Name */}
            <div className="text-xl sm:text-2xl font-bold text-slate-800 border-b-2 border-slate-900/20 pb-2 max-w-sm mx-auto">
              {viewingCertificate.studentName}
            </div>

            {/* Signatures & Verification Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-6 border-t border-slate-200 text-left text-[11px] text-slate-600">
              <div>
                <div className="font-semibold text-slate-900">Prof. David Adeleke</div>
                <div className="text-slate-500">Chair, Academic Curriculum Board</div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">Faculty of Technology</div>
              </div>

              <div>
                <div className="font-semibold text-slate-900">Dr. Priya Sharma</div>
                <div className="text-slate-500">Director of Technical Laboratories</div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">TechStudy Hub</div>
              </div>

              <div className="sm:text-right">
                <div className="font-medium text-slate-700">Issue Date: {viewingCertificate.issueDate}</div>
                <div className="font-mono text-slate-900 font-semibold mt-0.5">ID: {viewingCertificate.verificationCode}</div>
                <div className="text-[10px] text-slate-400 mt-1 break-all">
                  https://techstudyhub.org/verify/{viewingCertificate.verificationCode}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 print:hidden">
          This digital credential is authenticated on the TechStudy Hub cryptographic registry.
        </div>
      </div>
    </div>
  );
};
