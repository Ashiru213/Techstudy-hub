import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Lock, Mail, User } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, loginAs, setIsOnboardingOpen } = useApp();
  const [tab, setTab] = useState<'login' | 'signup' | 'forgot'>('login');

  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [academicLevel, setAcademicLevel] = useState('Year 2');
  const [fieldOfStudy, setFieldOfStudy] = useState('Computer Science');
  const [errorMessage, setErrorMessage] = useState('');
  const [resetSent, setResetSent] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (tab === 'forgot') {
      setResetSent(true);
      return;
    }

    if (tab === 'signup') {
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match. Please verify.');
        return;
      }
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters.');
        return;
      }
      // Register new user, trigger short onboarding
      loginAs('student', fullName || 'Student User', email || 'student@techstudy.edu');
      setIsOnboardingOpen(true);
      return;
    }

    // Login
    loginAs('student', fullName || 'Alex Chen', email || 'alex.chen@student.techstudy.edu');
  };

  const handleGoogleSignIn = () => {
    loginAs('student', 'Alex Chen (Google)', 'alex.chen.student@gmail.com');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
              TH
            </div>
            <span className="text-sm font-bold text-slate-900">TechStudy Hub</span>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              100% Free
            </span>
          </div>
          <button 
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        {tab !== 'forgot' && (
          <div className="grid grid-cols-2 border-b border-slate-200 text-xs font-semibold text-center">
            <button
              onClick={() => { setTab('login'); setErrorMessage(''); }}
              className={`py-3 border-b-2 transition-colors ${tab === 'login' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setTab('signup'); setErrorMessage(''); }}
              className={`py-3 border-b-2 transition-colors ${tab === 'signup' ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Create Free Account
            </button>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {errorMessage && (
            <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded">
              {errorMessage}
            </div>
          )}

          {tab === 'forgot' ? (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Forgot Password?</h3>
                <p className="text-xs text-slate-500 mt-1">Enter your registered email address to receive password reset instructions.</p>
              </div>

              {resetSent ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                  Password reset link sent to <span className="font-semibold">{email || 'your email'}</span>. Check your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@techstudy.edu"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 text-white rounded-md text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Reset Link
                  </button>
                </form>
              )}

              <div className="pt-2 text-center">
                <button
                  onClick={() => { setTab('login'); setResetSent(false); }}
                  className="text-xs text-sky-700 hover:underline font-medium"
                >
                  Already have an account? Sign In
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Optional Continue with Google */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full py-2 px-3 border border-slate-300 hover:bg-slate-50 rounded-md text-xs font-medium text-slate-700 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <div className="flex items-center gap-2 my-2">
                <div className="flex-1 border-t border-slate-200" />
                <span className="text-[10px] text-slate-400 uppercase">or with email</span>
                <div className="flex-1 border-t border-slate-200" />
              </div>

              {/* Sign Up Fields */}
              {tab === 'signup' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Alex Chen"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Academic Level (Optional)</label>
                      <select
                        value={academicLevel}
                        onChange={(e) => setAcademicLevel(e.target.value)}
                        className="w-full px-2 py-2 text-xs border border-slate-300 rounded-md bg-white"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Year 1">Year 1</option>
                        <option value="Year 2">Year 2</option>
                        <option value="Year 3">Year 3</option>
                        <option value="Year 4">Year 4</option>
                        <option value="Self Learner">Self Learner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-slate-700 mb-1">Field of Study (Optional)</label>
                      <select
                        value={fieldOfStudy}
                        onChange={(e) => setFieldOfStudy(e.target.value)}
                        className="w-full px-2 py-2 text-xs border border-slate-300 rounded-md bg-white"
                      >
                        <option value="Computer Science">Computer Science</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Software Engineering">Software Eng</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Information Technology">IT</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@techstudy.edu"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-slate-700">Password</label>
                  {tab === 'login' && (
                    <button
                      type="button"
                      onClick={() => setTab('forgot')}
                      className="text-[11px] text-sky-700 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
                  />
                </div>
              </div>

              {/* Confirm Password on Signup */}
              {tab === 'signup' && (
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Confirm Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-slate-900 text-white rounded-md text-xs font-semibold hover:bg-slate-800 transition-colors mt-2"
              >
                {tab === 'login' ? 'Sign In for Free' : 'Create Free Account'}
              </button>

              <div className="text-center pt-2">
                {tab === 'login' ? (
                  <button
                    type="button"
                    onClick={() => { setTab('signup'); setErrorMessage(''); }}
                    className="text-xs text-sky-700 hover:underline font-medium"
                  >
                    Don&apos;t have an account? Sign Up
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setTab('login'); setErrorMessage(''); }}
                    className="text-xs text-sky-700 hover:underline font-medium"
                  >
                    Already have an account? Sign In
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Quick Demo Login Option */}
          <div className="mt-5 pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={() => loginAs('student', 'Alex Chen', 'alex.chen@student.techstudy.edu')}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-medium transition-colors"
            >
              One-Click Demo Student (Alex Chen)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
