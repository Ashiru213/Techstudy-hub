import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AcademicLevel, Department } from '../types';
import { X, Check, ArrowRight } from 'lucide-react';

export const OnboardingModal: React.FC = () => {
  const { isOnboardingOpen, setIsOnboardingOpen, user, updateUserProfile, setCurrentView } = useApp();

  const [step, setStep] = useState(1);
  const [department, setDepartment] = useState<Department>(user.department || 'Computer Science');
  const [interests, setInterests] = useState<string[]>(user.interests || ['Programming', 'Data Analysis']);
  const [academicLevel, setAcademicLevel] = useState<AcademicLevel>(user.academicLevel || 'Year 2');

  if (!isOnboardingOpen) return null;

  // 1. What are you studying?
  const studyingOptions: Department[] = [
    'Computer Science',
    'Data Analysis',
    'Data Science',
    'Information Technology',
    'Software Engineering',
    'Cybersecurity',
    'Networking'
  ];

  // 2. What are you interested in?
  const interestOptions = [
    'Programming',
    'Web Development',
    'Data Analysis',
    'Data Science',
    'Cybersecurity',
    'AI',
    'Networking',
    'Databases',
    'Cloud Computing'
  ];

  // 3. Current Level
  const levelOptions: AcademicLevel[] = [
    'Beginner',
    'Year 1',
    'Year 2',
    'Year 3',
    'Year 4',
    'Final Year',
    'Graduate',
    'Self Learner'
  ];

  const toggleInterest = (item: string) => {
    setInterests(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleFinish = () => {
    updateUserProfile({
      department,
      interests,
      academicLevel
    });
    setIsOnboardingOpen(false);
    setCurrentView('dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider">
              Student Setup · Step {step} of 3
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              Personalize Your Learning Path
            </h3>
          </div>
          <button 
            onClick={() => setIsOnboardingOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        <div className="w-full bg-slate-100 h-1">
          <div 
            className="bg-slate-900 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="p-6">
          {/* STEP 1: What are you studying? */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">What are you studying?</h4>
                <p className="text-xs text-slate-500 mt-0.5">Select your primary degree or core area of focus.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {studyingOptions.map(opt => {
                  const isSelected = department === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => setDepartment(opt)}
                      className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: What are you interested in? */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">What are you interested in?</h4>
                <p className="text-xs text-slate-500 mt-0.5">Choose all topics you would like to explore.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {interestOptions.map(opt => {
                  const isSelected = interests.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleInterest(opt)}
                      className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-sky-800 bg-sky-900 text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={interests.length === 0}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Current Level */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">What is your current level?</h4>
                <p className="text-xs text-slate-500 mt-0.5">We will tailor course recommendations and difficulty to your stage.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {levelOptions.map(lvl => {
                  const isSelected = academicLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      onClick={() => setAcademicLevel(lvl)}
                      className={`p-3 rounded-lg border text-center text-xs font-semibold transition-all ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                      }`}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleFinish}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Check className="w-4 h-4" />
                  <span>Go to My Dashboard</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
