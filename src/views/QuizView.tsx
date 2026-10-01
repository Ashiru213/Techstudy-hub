import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { sampleQuizzes, quizQuestionsBank } from '../data/quizzesData';
import { Quiz, QuizQuestion } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  BookOpen 
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const { recordQuizAttempt, setCurrentView } = useApp();

  const [activeQuiz, setActiveQuiz] = useState<Quiz>(sampleQuizzes[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(activeQuiz.durationMinutes * 60);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const handleSelectQuiz = (q: Quiz) => {
    setActiveQuiz(q);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setSecondsRemaining(q.durationMinutes * 60);
  };

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    let score = 0;
    activeQuiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        score += 1;
      }
    });
    recordQuizAttempt(activeQuiz.id, activeQuiz.title, score, activeQuiz.questions.length);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setSecondsRemaining(activeQuiz.durationMinutes * 60);
  };

  const questions = activeQuiz.questions;
  const currentQ = questions[currentQuestionIndex];

  // Calculate results if submitted
  const correctCount = questions.filter((q, i) => selectedAnswers[i] === q.correctAnswer).length;
  const accuracy = Math.round((correctCount / questions.length) * 100);

  // Identify topics needing revision
  const wrongTopics = Array.from(new Set(
    questions.filter((q, i) => selectedAnswers[i] !== q.correctAnswer).map(q => q.topic)
  ));

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4" />
          <span>Academic Knowledge Self-Assessment</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Interactive Quiz Center
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Test your comprehension with topic-based exam quizzes. Receive instant answer rationales, accuracy scoring, and automated revision topic recommendations.
        </p>
      </div>

      {/* Quiz Selector Pills */}
      <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-xs flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {sampleQuizzes.map(qz => (
          <button
            key={qz.id}
            onClick={() => handleSelectQuiz(qz)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeQuiz.id === qz.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {qz.title} ({qz.questions.length} Qs)
          </button>
        ))}
      </div>

      {/* SUBMITTED RESULTS SUMMARY */}
      {isSubmitted ? (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Assessment Results
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                  {activeQuiz.title}
                </h2>
                <div className="text-xs text-slate-500 mt-1">
                  Completed in {activeQuiz.durationMinutes - Math.ceil(secondsRemaining / 60)} minutes
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums">
                    {correctCount} / {questions.length}
                  </div>
                  <div className="text-[11px] text-slate-500">Raw Score</div>
                </div>
                <div className="border-l border-slate-200 pl-4 text-center">
                  <div className={`text-2xl font-extrabold font-mono tabular-nums ${accuracy >= 75 ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {accuracy}%
                  </div>
                  <div className="text-[11px] text-slate-500">Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* Revision Recommendations */}
            {wrongTopics.length > 0 ? (
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 space-y-2">
                <div className="text-xs font-bold text-amber-950 uppercase flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  <span>Recommended Revision Focus Areas:</span>
                </div>
                <p className="text-xs text-amber-900">
                  Based on missed questions, we recommend reviewing lecture notes in: <strong>{wrongTopics.join(', ')}</strong>.
                </p>
              </div>
            ) : (
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Flawless 100% mastery! You demonstrated comprehensive conceptual clarity across all topics.</span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleRetake}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={() => setCurrentView('courses')}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs font-medium transition-colors"
              >
                Browse Recommended Courses
              </button>
            </div>
          </div>

          {/* Question Breakdown with Explanations */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Comprehensive Answers & Explanations Review</h3>
            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div key={q.id} className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-500">Question {idx + 1} of {questions.length} · {q.topic}</span>
                      <span className={`font-semibold flex items-center gap-1 text-[11px] ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        <span>{isCorrect ? 'Correct (+1)' : 'Incorrect'}</span>
                      </span>
                    </div>

                    <p className="text-sm font-bold text-slate-900">
                      {q.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isSelectedOpt = userAns === optIdx;
                        const isCorrectOpt = q.correctAnswer === optIdx;
                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-lg border flex items-center justify-between ${
                              isCorrectOpt 
                                ? 'border-emerald-500 bg-emerald-50/60 font-semibold text-emerald-950' 
                                : isSelectedOpt 
                                  ? 'border-red-400 bg-red-50 text-red-900' 
                                  : 'border-slate-200 text-slate-600 bg-slate-50/50'
                            }`}
                          >
                            <span>{opt}</span>
                            {isCorrectOpt && <span className="text-[10px] text-emerald-700 uppercase">Correct Answer</span>}
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                      <strong className="text-slate-900">Theoretical Explanation:</strong>
                      <p className="text-[11px] leading-relaxed">{q.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* ACTIVE QUESTION WORKSPACE */
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
          {/* Header Status Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {activeQuiz.category} · {currentQ.topic}
              </div>
              <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                {activeQuiz.title}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>

            {/* Answer Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectAnswer(currentQuestionIndex, i)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-800 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span>{opt}</span>
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-mono shrink-0 ${isSelected ? 'border-white text-white' : 'border-slate-300 text-slate-400'}`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40"
            >
              Previous Question
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold transition-colors"
              >
                Submit Quiz & View Results
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
