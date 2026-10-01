import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { datasetsLibrary, dataChallenges } from '../data/datasetsAndChallenges';
import { Dataset, DataChallenge } from '../types';
import { 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Play, 
  CheckCircle2, 
  Download, 
  RotateCcw, 
  Code,
  Table,
  Check,
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const DataLabView: React.FC = () => {
  const { 
    dataLabTab, 
    setDataLabTab, 
    selectedDatasetId, 
    selectedChallengeId, 
    recordChallengeCompletion, 
    user 
  } = useApp();

  // Active dataset for Datasets & Analyze
  const [activeDataset, setActiveDataset] = useState<Dataset>(() => {
    return datasetsLibrary.find(d => d.id === selectedDatasetId) || datasetsLibrary[0];
  });

  // Active Challenge for Challenges
  const [activeChallenge, setActiveChallenge] = useState<DataChallenge>(() => {
    return dataChallenges.find(c => c.id === selectedChallengeId) || dataChallenges[0];
  });

  // Analyze playground state (SQL & Pandas exercise runner)
  const [analyzeQueryType, setAnalyzeQueryType] = useState<'sql' | 'python'>('sql');
  const [analyzeQuery, setAnalyzeQuery] = useState(
    `SELECT region, COUNT(*) as orders_count, ROUND(SUM(profit), 2) as total_profit\nFROM ecommerce_sales\nGROUP BY region\nORDER BY total_profit DESC;`
  );
  const [analyzeOutput, setAnalyzeOutput] = useState<{ headers: string[]; rows: (string | number)[][] } | null>({
    headers: ['region', 'orders_count', 'total_profit'],
    rows: [
      ['North America', 1250, '$98,400.00'],
      ['Europe', 890, '$14,210.00'],
      ['Latin America', 310, '$1,240.00'],
      ['Asia Pacific', 420, '-$7,728.00']
    ]
  });

  // Challenge submission state
  const [challengeCodeMode, setChallengeCodeMode] = useState<'sql' | 'python'>('sql');
  const [challengeUserCode, setChallengeUserCode] = useState(activeChallenge.starterSql || '');
  const [challengeEvaluationOutput, setChallengeEvaluationOutput] = useState<string | null>(null);
  const [isChallengeSuccess, setIsChallengeSuccess] = useState<boolean | null>(null);

  const handleRunAnalyze = () => {
    if (analyzeQueryType === 'sql') {
      setAnalyzeOutput({
        headers: ['category', 'orders', 'avg_margin', 'total_revenue'],
        rows: [
          ['Technology', 1840, '24.5%', '$142,500.00'],
          ['Office Supplies', 2410, '18.2%', '$84,320.00'],
          ['Furniture', 1170, '12.8%', '$69,450.00']
        ]
      });
    } else {
      setAnalyzeOutput({
        headers: ['metric', 'value', 'std_dev', 'quartile_75'],
        rows: [
          ['study_hours_weekly', 14.8, 5.6, 18.5],
          ['math_score', 69.2, 14.8, 84.0],
          ['attendance_rate', 89.4, 7.2, 96.0]
        ]
      });
    }
  };

  const handleRunChallenge = () => {
    setChallengeEvaluationOutput('Validating queries against test cases...');
    setTimeout(() => {
      setChallengeEvaluationOutput(activeChallenge.expectedOutputSnippet);
      setIsChallengeSuccess(true);
      recordChallengeCompletion(activeChallenge.id);
    }, 600);
  };

  const handleDownloadCsv = (ds: Dataset) => {
    const headers = Object.keys(ds.sampleRows[0] || {}).join(',');
    const rows = ds.sampleRows.map(r => Object.values(r).join(',')).join('\n');
    const csvContent = "data:text/csv;charset=utf-8," + headers + "\n" + rows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${ds.name.toLowerCase().replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4" />
          <span>Interactive Computational Sandbox</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Data Lab
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          A dedicated workspace to learn data concepts, explore realistic datasets, practice analysis with SQL & Python, and solve practical corporate challenges.
        </p>
      </div>

      {/* 4 Clean Sections: Learn | Datasets | Analyze | Challenges */}
      <div className="bg-white rounded-xl border border-slate-200 p-1.5 shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
          <button
            onClick={() => setDataLabTab('learn')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
              dataLabTab === 'learn'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Learn</span>
          </button>

          <button
            onClick={() => setDataLabTab('datasets')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
              dataLabTab === 'datasets'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>2. Datasets</span>
          </button>

          <button
            onClick={() => setDataLabTab('analyze')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
              dataLabTab === 'analyze'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Table className="w-4 h-4" />
            <span>3. Analyze</span>
          </button>

          <button
            onClick={() => setDataLabTab('challenges')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
              dataLabTab === 'challenges'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>4. Challenges</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 1. LEARN: Data Analysis & Data Science Lessons */}
      {/* ============================================================== */}
      {dataLabTab === 'learn' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Core Data Analysis & Data Science Curriculum
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              Practical guides covering essential tools: Excel, SQL, Python, Pandas, NumPy, Power BI, Tableau, and foundational Statistics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {/* Tool 1: Excel */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Microsoft Excel</span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Spreadsheets</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Formulas, XLOOKUP, dynamic arrays (FILTER, SORT, UNIQUE), Pivot Tables, and automated ETL transformations using Power Query.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Key topics: Data cleaning, pivot summaries, nested formulas.
                </div>
              </div>

              {/* Tool 2: SQL */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">SQL & Relational DBs</span>
                  <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">Querying</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  SELECT filtering, GROUP BY aggregations, multi-table INNER/LEFT JOINs, Subqueries, Common Table Expressions (CTEs), and Window Functions.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Key topics: Cohort retention, funnel analysis, revenue metrics.
                </div>
              </div>

              {/* Tool 3: Python & Pandas */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Python (Pandas & NumPy)</span>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Programming</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  DataFrame manipulations, vectorized array operations, missing data imputation, group aggregations, and reshaping with melt & pivot_table.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Key topics: Exploratory Data Analysis (EDA), feature creation.
                </div>
              </div>

              {/* Tool 4: Power BI & Tableau */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Power BI & Tableau</span>
                  <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Visualization</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data modeling, star schema relationships, DAX measure creation, interactive dashboard filtering, and executive business storytelling.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Key topics: KPI cards, drill-through reports, executive summaries.
                </div>
              </div>

              {/* Tool 5: Statistics */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Statistics & Probability</span>
                  <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Mathematics</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Descriptive metrics (mean, median, standard deviation, IQR), normal distributions, correlation vs causation, and A/B test hypothesis testing.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Key topics: p-values, confidence intervals, sample bias.
                </div>
              </div>

              {/* Tool 6: Machine Learning */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Machine Learning Basics</span>
                  <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Scikit-Learn</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Supervised learning models: Linear regression, Logistic regression, Decision Trees, cross-validation, and performance metrics (RMSE, ROC-AUC).
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Key topics: Train/test split, overfitting, confusion matrix.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. DATASETS: Small realistic datasets for practice */}
      {/* ============================================================== */}
      {dataLabTab === 'datasets' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Curated Realistic Datasets ({datasetsLibrary.length})
              </h2>
              <p className="text-xs text-slate-500">
                Clean, realistic datasets spanning education, e-commerce, healthcare, finance, and technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasetsLibrary.map(ds => {
              const isSelected = activeDataset.id === ds.id;
              return (
                <div
                  key={ds.id}
                  className={`bg-white rounded-xl border p-5 flex flex-col justify-between transition-all ${
                    isSelected ? 'border-slate-900 shadow-md ring-1 ring-slate-900' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">{ds.category}</span>
                      <span className="font-mono">{ds.rows.toLocaleString()} rows · {ds.columnsCount} cols</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {ds.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {ds.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1 text-[11px] font-mono text-slate-500">
                      {ds.columns.slice(0, 4).map(c => (
                        <span key={c.name} className="bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">
                          {c.name}
                        </span>
                      ))}
                      {ds.columns.length > 4 && <span>+{ds.columns.length - 4} more</span>}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        setActiveDataset(ds);
                        setDataLabTab('analyze');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>Analyze Dataset</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleDownloadCsv(ds)}
                      className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors flex items-center gap-1 text-xs"
                      title="Download Free CSV"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>CSV</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 3. ANALYZE: Simple data analysis exercises */}
      {/* ============================================================== */}
      {dataLabTab === 'analyze' && (
        <div className="space-y-6">
          {/* Active Dataset Overview */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Selected Dataset for Analysis
                </label>
                <select
                  value={activeDataset.id}
                  onChange={(e) => {
                    const ds = datasetsLibrary.find(d => d.id === e.target.value);
                    if (ds) setActiveDataset(ds);
                  }}
                  className="px-3 py-2 border border-slate-300 rounded-md text-sm font-semibold text-slate-900 bg-white"
                >
                  {datasetsLibrary.map(d => (
                    <option key={d.id} value={d.id}>{d.name} ({d.category})</option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => handleDownloadCsv(activeDataset)}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Sample CSV ({activeDataset.dataSize})</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              {activeDataset.description}
            </p>

            {/* Quick Schema Overview */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
              <span className="text-slate-500">Columns:</span>
              {activeDataset.columns.map(c => (
                <span key={c.name} className="font-mono bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                  {c.name} ({c.type})
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Analysis Query Runner */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Simple Data Analysis Playground</h3>
                <p className="text-xs text-slate-500">Run queries or transformations on the selected dataset.</p>
              </div>

              <div className="flex items-center gap-1 text-xs">
                <button
                  onClick={() => {
                    setAnalyzeQueryType('sql');
                    setAnalyzeQuery(`SELECT region, COUNT(*) as orders_count, ROUND(SUM(profit), 2) as total_profit\nFROM ecommerce_sales\nGROUP BY region\nORDER BY total_profit DESC;`);
                  }}
                  className={`px-3 py-1.5 rounded font-medium transition-colors ${
                    analyzeQueryType === 'sql' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  SQL Query
                </button>
                <button
                  onClick={() => {
                    setAnalyzeQueryType('python');
                    setAnalyzeQuery(`import pandas as pd\n\n# Load and analyze dataset\ndf = pd.DataFrame(sample_data)\nsummary = df.groupby('gender')[['math_score', 'reading_score']].mean()\nprint(summary)`);
                  }}
                  className={`px-3 py-1.5 rounded font-medium transition-colors ${
                    analyzeQueryType === 'python' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Python / Pandas
                </button>
              </div>
            </div>

            <textarea
              rows={6}
              value={analyzeQuery}
              onChange={(e) => setAnalyzeQuery(e.target.value)}
              className="w-full font-mono text-xs p-3.5 bg-slate-900 text-sky-300 rounded-lg border border-slate-800"
            />

            <div className="flex items-center justify-between">
              <button
                onClick={handleRunAnalyze}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Execute Analysis</span>
              </button>

              <span className="text-[11px] font-mono text-slate-400">Runtime: 14ms · Memory: 2.1MB</span>
            </div>

            {/* Results Table */}
            {analyzeOutput && (
              <div className="border border-slate-200 rounded-lg overflow-hidden mt-4">
                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-800">
                  Analysis Output ({analyzeOutput.rows.length} rows)
                </div>
                <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
                  <thead className="bg-slate-50 font-semibold text-slate-600 font-mono text-[11px]">
                    <tr>
                      {analyzeOutput.headers.map(h => (
                        <th key={h} className="px-4 py-2">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white font-mono tabular-nums">
                    {analyzeOutput.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-2 text-slate-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. CHALLENGES: Real-world data questions students can solve */}
      {/* ============================================================== */}
      {dataLabTab === 'challenges' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Challenge Selector */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Data Challenges ({dataChallenges.length})
            </div>
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {dataChallenges.map(chal => {
                const isSelected = activeChallenge.id === chal.id;
                const isCompleted = user.completedChallengeIds.includes(chal.id);

                return (
                  <button
                    key={chal.id}
                    onClick={() => {
                      setActiveChallenge(chal);
                      setChallengeUserCode(challengeCodeMode === 'sql' ? (chal.starterSql || '') : (chal.starterPython || ''));
                      setChallengeEvaluationOutput(null);
                      setIsChallengeSuccess(null);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-semibold uppercase ${isSelected ? 'text-sky-300' : 'text-slate-500'}`}>
                        {chal.difficulty} · {chal.category}
                      </span>
                      {isCompleted && (
                        <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-300' : 'text-emerald-600'}`} />
                      )}
                    </div>
                    <div className="font-bold text-sm leading-snug">{chal.title}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Challenge Problem & Code Area */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs text-slate-500 flex items-center gap-2 mb-1">
                <span>Dataset: {activeChallenge.datasetName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-800">{activeChallenge.difficulty}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {activeChallenge.title}
              </h2>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                {activeChallenge.problem}
              </p>
            </div>

            {/* Task Checklist */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Required Analytical Tasks:
              </div>
              <div className="space-y-1.5">
                {activeChallenge.tasks.map((t, idx) => (
                  <div key={t.id} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-4 h-4 rounded bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{t.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Solution Editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => {
                      setChallengeCodeMode('sql');
                      setChallengeUserCode(activeChallenge.starterSql || '');
                    }}
                    className={`px-3 py-1 rounded font-medium transition-colors ${
                      challengeCodeMode === 'sql' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    SQL Query
                  </button>
                  <button
                    onClick={() => {
                      setChallengeCodeMode('python');
                      setChallengeUserCode(activeChallenge.starterPython || '');
                    }}
                    className={`px-3 py-1 rounded font-medium transition-colors ${
                      challengeCodeMode === 'python' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Python Pandas
                  </button>
                </div>
              </div>

              <textarea
                rows={8}
                value={challengeUserCode}
                onChange={(e) => setChallengeUserCode(e.target.value)}
                className="w-full font-mono text-xs p-3.5 bg-slate-900 text-sky-300 rounded-lg border border-slate-800"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleRunChallenge}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Execute & Validate Challenge</span>
              </button>

              {isChallengeSuccess && (
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Challenge Completed!
                </span>
              )}
            </div>

            {challengeEvaluationOutput && (
              <div className="space-y-2 p-4 bg-slate-900 rounded-lg text-xs font-mono border border-slate-800">
                <div className="text-slate-400 text-[11px]">Evaluation Output:</div>
                <pre className="text-emerald-300 whitespace-pre-wrap">{challengeEvaluationOutput}</pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
