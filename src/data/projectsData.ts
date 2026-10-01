import { Project } from '../types';

export const projectsData: Project[] = [
  // ===============================
  // BEGINNER PROJECTS (6 projects)
  // ===============================
  {
    id: 'proj-calc',
    title: 'Scientific Calculator & Unit Converter',
    tier: 'Beginner',
    category: 'Web & Programming',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Math.js'],
    description: 'A responsive scientific calculator supporting basic arithmetic, trigonometric calculations, exponentiation, parenthesis nesting, calculation history, and length/mass unit conversions.',
    objectives: [
      'Implement an expression parser or evaluate order of operations (PEMDAS/BODMAS).',
      'Manage calculation state and historical audit logs in localStorage.',
      'Handle keyboard event listeners and edge cases like division by zero.'
    ],
    features: [
      'Standard arithmetic (+, -, *, /) and scientific operations (sin, cos, tan, log, sqrt, ^).',
      'Persistent calculation history drawer.',
      'Unit conversion panel for Temperature, Length, and Data storage.',
      'Full physical keyboard typing support with backspace.'
    ],
    requirements: ['Node 18+ or standard browser runtime', 'Pure CSS or Tailwind', 'No external heavy UI frameworks needed'],
    developmentSteps: [
      { step: 1, title: 'UI Layout Grid', details: 'Design an ergonomic 5x4 button grid using CSS Grid with high-contrast display numbers.' },
      { step: 2, title: 'Token Evaluation Engine', details: 'Write a tokenizer or use Shunting-Yard algorithm to evaluate parenthesis expressions safely without eval().' },
      { step: 3, title: 'Memory & History Logging', details: 'Persist previous 20 calculations into browser localStorage.' },
      { step: 4, title: 'Unit Conversion Module', details: 'Implement standard metric-to-imperial conversion lookup ratios.' }
    ],
    suggestedDatabase: 'Browser localStorage or SQLite for native app',
    suggestedArchitecture: 'Single Page Model-View-Controller (MVC) with decoupled math engine.',
    portfolioPresentationTips: [
      'Emphasize your avoidance of eval() and explain how you safely parsed math tokens.',
      'Highlight edge case prevention (floating point IEEE-754 precision quirks like 0.1 + 0.2).'
    ]
  },
  {
    id: 'proj-todo',
    title: 'Productivity Task Matrix & Kanban Board',
    tier: 'Beginner',
    category: 'Frontend Development',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Drag-and-Drop API'],
    description: 'An interactive Eisenhower matrix task manager allowing students to categorize academic tasks into Urgent/Important quadrants with deadlines, tags, and drag-and-drop status moving.',
    objectives: ['Master React state management and immutable state updates.', 'Implement HTML5 Drag and Drop or mouse events.', 'Store user tasks persistently.'],
    features: ['4-Quadrant Eisenhower Matrix view and classic Kanban columns.', 'Tagging by Academic Course (e.g. CSC 201, MTH 101).', 'Due date countdown warnings.', 'Export tasks to JSON or Markdown.'],
    requirements: ['React 18/19', 'TypeScript', 'Tailwind CSS'],
    developmentSteps: [
      { step: 1, title: 'Component Hierarchy', details: 'Break layout into TaskCard, ColumnContainer, and TaskModal.' },
      { step: 2, title: 'State Transitions', details: 'Implement handlers for creating, editing, moving, and archiving tasks.' },
      { step: 3, title: 'Drag and Drop Interaction', details: 'Attach onDragStart and onDrop event handlers to calculate new column indexes.' }
    ],
    suggestedDatabase: 'IndexedDB or browser localStorage',
    suggestedArchitecture: 'Client-side SPA with React Context or Zustand store.',
    portfolioPresentationTips: ['Show a GIF of smooth drag-and-drop task reordering in your GitHub README.']
  },
  {
    id: 'proj-portfolio',
    title: 'Developer Academic & Project Portfolio',
    tier: 'Beginner',
    category: 'Web Development',
    technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'Vite'],
    description: 'A personal developer portfolio showcasing academic coursework, technical skills, GitHub repositories, live demo links, and resume download.',
    objectives: ['Craft a fast, responsive, SEO-optimized personal portfolio.', 'Implement dark/light theme switching with semantic tokens.'],
    features: ['Project showcase cards with interactive modal previews.', 'Filter projects by skill (Python, React, SQL, AI).', 'Interactive resume timeline.', 'Contact form with client-side validation.'],
    requirements: ['Vite', 'React', 'Tailwind CSS'],
    developmentSteps: [
      { step: 1, title: 'Wireframing & Typography', details: 'Establish 60-30-10 color scheme and clean editorial typography.' },
      { step: 2, title: 'Projects Data Structure', details: 'Model project items with tags, live links, and descriptions.' },
      { step: 3, title: 'Responsive Testing', details: 'Ensure touch targets >= 44px on mobile devices.' }
    ],
    suggestedDatabase: 'Static JSON or headless CMS',
    suggestedArchitecture: 'Static Site Generated (SSG) or lightweight Single Page Application.',
    portfolioPresentationTips: ['Deploy on Vercel or Cloudflare Pages with custom domain.']
  },
  {
    id: 'proj-quiz-app',
    title: 'Interactive Academic Flashcard & Quiz Engine',
    tier: 'Beginner',
    category: 'EdTech',
    technologies: ['JavaScript', 'React', 'CSS Animations'],
    description: 'A study engine for students to practice multiple-choice and true/false exam questions with spaced repetition hints and progress analytics.',
    objectives: ['Build timer intervals with useEffect cleanup.', 'Track score percentage and incorrect question review queue.'],
    features: ['Configurable timer per question.', 'Instant answer feedback with theoretical explanations.', 'Final score summary with topic review recommendations.', 'Review missed questions mode.'],
    requirements: ['React', 'TypeScript'],
    developmentSteps: [
      { step: 1, title: 'Quiz State Machine', details: 'Design state transitions: Idle -> InProgress -> Review -> Completed.' },
      { step: 2, title: 'Timer Component', details: 'Implement count-down timer with automatic submission on expiration.' }
    ],
    suggestedDatabase: 'LocalStorage or JSON bank',
    suggestedArchitecture: 'State machine driven SPA.',
    portfolioPresentationTips: ['Explain how you implemented cleanup for timer intervals to prevent memory leaks.']
  },
  {
    id: 'proj-student-reg',
    title: 'Student Course Registration System (CLI & Web)',
    tier: 'Beginner',
    category: 'Academic Systems',
    technologies: ['Python', 'SQLite', 'Flask' ,'HTML/Tailwind'],
    description: 'A university registration portal where students can browse course catalogs, verify prerequisite eligibility, enroll in courses within credit caps, and print course slips.',
    objectives: ['Enforce database constraints and foreign keys.', 'Implement business logic like max credit caps (e.g. 24 credits per semester).'],
    features: ['Student login with Matriculation Number.', 'Prerequisite checking (cannot take CSC 201 without passing CSC 101).', 'Credit cap calculation.', 'Printable course timetable slip.'],
    requirements: ['Python 3.10+', 'SQLite3', 'Flask or FastAPI'],
    developmentSteps: [
      { step: 1, title: 'Relational Schema', details: 'Create Students, Courses, Prerequisites, and Enrollments tables.' },
      { step: 2, title: 'Prerequisite Validator', details: 'Write SQL query checking student transcript against required courses.' },
      { step: 3, title: 'Enrollment Endpoint', details: 'Wrap enrollment inserts inside an ACID transaction to prevent over-enrollment.' }
    ],
    suggestedDatabase: 'SQLite3 with foreign key enforcement enabled',
    suggestedArchitecture: 'Monolithic Flask app with Jinja2 templates or lightweight REST API.',
    portfolioPresentationTips: ['Show the ER diagram highlighting how prerequisite joins are evaluated.']
  },
  {
    id: 'proj-expense-tracker',
    title: 'Student Budget & Expense Tracker with Charts',
    tier: 'Beginner',
    category: 'Finance & Data',
    technologies: ['React', 'Chart.js / Recharts', 'Tailwind CSS'],
    description: 'A personal finance dashboard for students to track monthly allowances, food, textbooks, rent, and calculate savings rates with visual pie and bar charts.',
    objectives: ['Transform flat transaction lists into aggregated monthly category totals.', 'Integrate charting libraries.'],
    features: ['Add income and expenses with customizable categories.', 'Visual budget limit progress bar (e.g. Food budget 80% used).', 'Monthly spending breakdown pie chart.'],
    requirements: ['React', 'Recharts or Chart.js'],
    developmentSteps: [
      { step: 1, title: 'Transaction Form', details: 'Capture date, description, amount, and category.' },
      { step: 2, title: 'Aggregator Functions', details: 'Write reduce() functions grouping expenses by category.' },
      { step: 3, title: 'Chart Integration', details: 'Render category slices using Recharts ResponsiveContainer.' }
    ],
    suggestedDatabase: 'LocalStorage or Supabase PostgreSQL',
    suggestedArchitecture: 'React Single Page App.',
    portfolioPresentationTips: ['Highlight data aggregation logic and responsive SVG charts.']
  },

  // ===================================
  // INTERMEDIATE PROJECTS (7 projects)
  // ===================================
  {
    id: 'proj-library-mgmt',
    title: 'University Library Management System',
    tier: 'Intermediate',
    category: 'Academic Software',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind CSS'],
    description: 'A multi-user library management system supporting student book reservations, barcode/ISBN cataloging, overdue fine calculation, and automated email reminders.',
    objectives: ['Design relational schema with many-to-many borrowing relations.', 'Calculate daily overdue fines automatically via scheduled cron jobs.'],
    features: ['Book search by title, author, category, or ISBN.', 'Hold reservation queue for popular textbooks.', 'Overdue fine calculation ($0.50/day).', 'Admin librarian dashboard for inventory check-in/out.'],
    requirements: ['Node.js 18+', 'PostgreSQL 14+', 'React 18+'],
    developmentSteps: [
      { step: 1, title: 'Database Design', details: 'Design Books, Authors, Users, Borrowings, and Fines tables with cascading constraints.' },
      { step: 2, title: 'Borrowing Logic API', details: 'Implement borrow endpoint that checks active student limits and copies availability.' },
      { step: 3, title: 'Scheduled Cron Job', details: 'Configure node-cron to inspect active borrowings daily and generate overdue fines.' }
    ],
    suggestedDatabase: 'PostgreSQL 15',
    suggestedArchitecture: 'RESTful API with Express backend, JWT auth, and React SPA frontend.',
    portfolioPresentationTips: ['Demonstrate how you prevented race conditions when two students simultaneously reserve the last copy of a book.']
  },
  {
    id: 'proj-inventory-system',
    title: 'Warehouse Inventory & Stock Reorder System',
    tier: 'Intermediate',
    category: 'Enterprise SaaS',
    technologies: ['TypeScript', 'Next.js / Express', 'PostgreSQL', 'Prisma ORM'],
    description: 'An inventory tracking solution with SKU barcode generation, low-stock reorder thresholds, supplier purchase orders, and stock adjustment logs.',
    objectives: ['Implement immutable audit trails for every physical inventory movement.', 'Generate dynamic purchase orders when stock dips below safety threshold.'],
    features: ['Real-time stock level dashboard.', 'Automated Reorder Point (ROP) alerts.', 'Supplier contact directory and purchase order generation.', 'CSV export of stock valuation.'],
    requirements: ['Node.js', 'PostgreSQL', 'Prisma'],
    developmentSteps: [
      { step: 1, title: 'Schema with Audit Logs', details: 'Create Products, StockLocations, and StockMovements tables.' },
      { step: 2, title: 'Transaction Ingestion', details: 'Execute stock adjustments within database transactions.' },
      { step: 3, title: 'Reporting View', details: 'Write SQL query calculating inventory turnover ratio and Days of Inventory on Hand (DOH).' }
    ],
    suggestedDatabase: 'PostgreSQL with Prisma ORM',
    suggestedArchitecture: 'Layered architecture: Controller -> Service -> Repository.',
    portfolioPresentationTips: ['Detail how database transactions guarantee stock counts never become negative.']
  },
  {
    id: 'proj-school-mgmt',
    title: 'Comprehensive School & Student Information System (SIS)',
    tier: 'Intermediate',
    category: 'EdTech',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    description: 'A multi-role platform for Teachers, Students, and Administrators to manage attendance, grade books, class schedules, and parental report cards.',
    objectives: ['Implement Role-Based Access Control (RBAC).', 'Generate weighted GPA scores across variable credit courses.'],
    features: ['Role-based dashboards (Admin, Lecturer, Student).', 'Attendance tracking with biometric or digital check-in.', 'Gradebook calculation supporting weighted midterms and finals.', 'PDF Report Card generation.'],
    requirements: ['Full stack React & Express with PostgreSQL'],
    developmentSteps: [
      { step: 1, title: 'RBAC Authorization Middleware', details: 'Create JWT middleware that verifies permissions before executing teacher/admin routes.' },
      { step: 2, title: 'Weighted Grade Calculator', details: 'Implement GPA calculation algorithms with honors weighting.' }
    ],
    suggestedDatabase: 'PostgreSQL with role-based schemas',
    suggestedArchitecture: 'Microservices or modular monolith with JWT token claims.',
    portfolioPresentationTips: ['Show the permissions matrix and how you secured sensitive student grade records.']
  },
  {
    id: 'proj-ecommerce',
    title: 'Modern E-Commerce Store with Stripe Integration',
    tier: 'Intermediate',
    category: 'Full Stack Web',
    technologies: ['React', 'TypeScript', 'Node.js / Express', 'Stripe API', 'Tailwind CSS'],
    description: 'A full-featured e-commerce storefront featuring product filtering, shopping cart drawer, guest checkout, Stripe payments, and order tracking.',
    objectives: ['Integrate Stripe Elements and Webhook event listeners.', 'Manage cart state across page reloads.'],
    features: ['Category and price range filters with search.', 'Shopping cart with optimistic updates.', 'Stripe checkout with webhook payment confirmation.', 'Customer order history.'],
    requirements: ['Node.js', 'Stripe test account', 'PostgreSQL or MongoDB'],
    developmentSteps: [
      { step: 1, title: 'Product Catalog API', details: 'Implement paginated product listing with multi-field search.' },
      { step: 2, title: 'Stripe Webhooks', details: 'Listen for payment_intent.succeeded webhook to mark orders paid in database.' }
    ],
    suggestedDatabase: 'PostgreSQL or MongoDB',
    suggestedArchitecture: 'Decoupled React client communicating with Express API and Stripe webhooks.',
    portfolioPresentationTips: ['Explain why webhook verification using raw body buffers is necessary to prevent payment spoofing.']
  },
  {
    id: 'proj-student-result-portal',
    title: 'University Result Checker & Transcript Generator',
    tier: 'Intermediate',
    category: 'Academic Systems',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'ReportLab'],
    description: 'An official university exam result portal allowing students to view semester results, calculate Cumulative GPA (CGPA), and download cryptographic PDF transcripts.',
    objectives: ['Compute semester GPA and cumulative CGPA across 4 academic years.', 'Generate tamper-evident downloadable PDF transcripts.'],
    features: ['Secure matriculation login.', 'Detailed semester-by-semester breakdown of grades (A, B, C, D, F) and grade points.', 'Visual CGPA trajectory line chart.', 'Downloadable official transcript PDF with QR code verification.'],
    requirements: ['Python FastAPI', 'PostgreSQL', 'React SPA'],
    developmentSteps: [
      { step: 1, title: 'Grading Logic Schema', details: 'Model standard 5-point university grading scale (70+ = A:5pts, 60-69 = B:4pts, etc.).' },
      { step: 2, title: 'CGPA Engine', details: 'Write SQL query calculating Quality Points = Units * GradePoint, and CGPA = Total Quality Points / Total Units.' },
      { step: 3, title: 'PDF Generator', details: 'Use ReportLab or Puppeteer to generate high-resolution transcripts with verification hash.' }
    ],
    suggestedDatabase: 'PostgreSQL with audit triggers',
    suggestedArchitecture: 'FastAPI microservice with asynchronous database drivers (asyncpg).',
    portfolioPresentationTips: ['Discuss the mathematical precision needed when calculating and displaying 2-decimal CGPAs.']
  },
  {
    id: 'proj-data-dashboard',
    title: 'Interactive Sales & Marketing Analytics Dashboard',
    tier: 'Intermediate',
    category: 'Data Analysis',
    technologies: ['React', 'Tailwind CSS', 'Recharts', 'Pandas', 'FastAPI'],
    description: 'An interactive executive analytics dashboard visualizing sales velocity, customer acquisition cost (CAC), regional heatmaps, and churn cohort tables.',
    objectives: ['Build high-performance interactive visual charts.', 'Implement date range pickers and metric aggregation toggles.'],
    features: ['Summary KPI metric cards with period-over-period percentage delta.', 'Interactive monthly revenue line chart with tooltip breakdown.', 'Customer acquisition channel bar chart.', 'Cohort retention heatmap table.'],
    requirements: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI or Express'],
    developmentSteps: [
      { step: 1, title: 'Data Aggregation Pipeline', details: 'Write backend queries returning daily, weekly, or monthly rolled-up statistics.' },
      { step: 2, title: 'Interactive Filters', details: 'Implement date range picker and regional dropdown updating all charts simultaneously.' }
    ],
    suggestedDatabase: 'PostgreSQL or DuckDB for fast analytical queries',
    suggestedArchitecture: 'Analytical dashboard querying pre-aggregated OLAP views.',
    portfolioPresentationTips: ['Show how using pre-aggregated SQL materialized views reduced dashboard load time by 90%.']
  },
  {
    id: 'proj-markdown-notes',
    title: 'Collaborative Markdown Study Notes & Wiki',
    tier: 'Intermediate',
    category: 'EdTech',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'KaTeX', 'Prism.js'],
    description: 'A study documentation tool for computing students featuring live Markdown rendering, KaTeX mathematical equations, syntax-highlighted code blocks, and tags.',
    objectives: ['Parse Markdown and render LaTeX math formulas securely.', 'Implement full-text search across academic notes.'],
    features: ['Split-screen editor with live preview.', 'LaTeX formula support for discrete math and calculus ($$ \\int x dx $$).', 'Syntax highlighting for Python, C++, SQL, Java.', 'Hierarchical folder organization by Course Code.'],
    requirements: ['React', 'KaTeX', 'Tailwind CSS'],
    developmentSteps: [
      { step: 1, title: 'Markdown Parser', details: 'Configure marked/remark with math and syntax highlighting plugins.' },
      { step: 2, title: 'Folder Tree Navigation', details: 'Implement recursive tree component representing courses and topics.' }
    ],
    suggestedDatabase: 'IndexedDB or PostgreSQL with full-text search (tsvector)',
    suggestedArchitecture: 'Client-first workspace with local caching.',
    portfolioPresentationTips: ['Highlight your implementation of KaTeX math equations alongside code syntax highlighting.']
  },

  // ===================================
  // ADVANCED PROJECTS (7 projects)
  // ===================================
  {
    id: 'proj-lms-platform',
    title: 'Full-Scale Learning Management System (LMS)',
    tier: 'Advanced',
    category: 'EdTech Platform',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS S3', 'Docker'],
    description: 'An enterprise educational platform featuring course creation, video lecture streaming, rich markdown study guides, automated quiz grading, assignment submissions with grading rubrics, and certificate issuance.',
    objectives: [
      'Architect a modular multi-tier educational platform with video streaming.',
      'Implement real-time lesson progress tracking and automated course completion certificates.',
      'Containerize full stack with Docker Compose for repeatable deployment.'
    ],
    features: [
      'Instructor course builder with drag-and-drop module and lesson reordering.',
      'Interactive quiz engine with instant score calculation and attempt history.',
      'Video lesson player with playback speed control and position bookmarking.',
      'Student dashboard with progress bars and verifiable digital certificates.',
      'Assignment submission portal supporting file uploads to cloud storage.'
    ],
    requirements: ['Node.js 18+', 'PostgreSQL 14+', 'Redis', 'Docker Compose', 'React 18+'],
    developmentSteps: [
      { step: 1, title: 'Domain Data Modeling', details: 'Design normalized tables for Courses, Modules, Lessons, Enrollments, QuizQuestions, Submissions, and Certificates.' },
      { step: 2, title: 'Progress Tracking API', details: 'Implement idempotent endpoint updating lesson completion status and recalculating overall course progress percentage.' },
      { step: 3, title: 'Automated Certificate Issuance', details: 'Trigger cryptographic certificate generation upon reaching 100% course completion.' },
      { step: 4, title: 'Docker Containerization', details: 'Write Dockerfile and docker-compose.yml orchestrating API, Postgres, Redis, and Web frontend.' }
    ],
    suggestedDatabase: 'PostgreSQL for relational domain; Redis for session caching and rate limiting',
    suggestedArchitecture: 'Modular monolith with background worker queues (BullMQ) for video processing and certificate generation.',
    portfolioPresentationTips: [
      'Detail your database schema design and show how progress calculation is optimized with indexed lookups.',
      'Highlight how Docker Compose simplifies local setup for hiring managers evaluating your repository.'
    ]
  },
  {
    id: 'proj-cybersecurity-dashboard',
    title: 'Security Information & Threat Intelligence Dashboard',
    tier: 'Advanced',
    category: 'Cybersecurity',
    technologies: ['Python', 'FastAPI', 'React', 'Elasticsearch / PostgreSQL', 'Tailwind CSS'],
    description: 'A SOC-inspired threat monitoring dashboard ingesting authentication logs, visualizing brute-force attack spikes, mapping attacker IP geolocation, and triggering automated containment rules.',
    objectives: ['Ingest high-velocity system logs and detect anomalies in real time.', 'Map threat indicators to MITRE ATT&CK tactics.'],
    features: ['Live event log stream with severity color coding.', 'Geographical attack origin map using MaxMind GeoIP.', 'Failed login anomaly detector triggering IP blocklist recommendation.', 'MITRE ATT&CK technique mapping matrix.'],
    requirements: ['FastAPI', 'React', 'Tailwind CSS', 'Docker'],
    developmentSteps: [
      { step: 1, title: 'Log Parser Pipeline', details: 'Write regex parsers extracting timestamps, IP addresses, usernames, and status from auth.log.' },
      { step: 2, title: 'Anomaly Detection Rule', details: 'Flag IP addresses with > 10 failed login attempts within a 60-second sliding window.' },
      { step: 3, title: 'Threat Intelligence Map', details: 'Enrich IP addresses with country coordinates and render on interactive map.' }
    ],
    suggestedDatabase: 'Elasticsearch or TimescaleDB',
    suggestedArchitecture: 'Event-driven ingestion pipeline with WebSocket push to client dashboard.',
    portfolioPresentationTips: ['Explain your sliding-window rate evaluation algorithm and false positive reduction strategy.']
  },
  {
    id: 'proj-ai-chatbot',
    title: 'AI Academic Tutor & Textbook Q&A Assistant (RAG)',
    tier: 'Advanced',
    category: 'Artificial Intelligence',
    technologies: ['Python', 'FastAPI', 'LangChain', 'ChromaDB / Pinecone', 'React', 'Tailwind CSS'],
    description: 'A context-grounded academic study assistant that allows students to upload PDF textbooks or lecture notes and ask theoretical questions with precise page citations.',
    objectives: ['Implement Retrieval-Augmented Generation (RAG) with vector embeddings.', 'Prevent AI hallucinations by constraining answers to uploaded document chunks.'],
    features: ['Drag-and-drop PDF textbook upload.', 'Document chunking with recursive character splitting.', 'Semantic vector similarity search using cosine similarity.', 'Streamed conversational response with verbatim source citations.'],
    requirements: ['Python 3.10+', 'FastAPI', 'ChromaDB or FAISS', 'React frontend'],
    developmentSteps: [
      { step: 1, title: 'PDF Ingestion & Chunking', details: 'Extract text from PDFs and split into 500-token chunks with 50-token overlap.' },
      { step: 2, title: 'Vector Embedding Indexing', details: 'Generate dense embeddings and store in ChromaDB vector index.' },
      { step: 3, title: 'Retrieval & Prompt Chain', details: 'Retrieve top 4 most relevant chunks for user query and pass to LLM context prompt.' }
    ],
    suggestedDatabase: 'ChromaDB for vector embeddings; SQLite for chat conversation history',
    suggestedArchitecture: 'RAG architecture: Document Processor -> Vector Database -> Orchestrator -> LLM -> Streaming Client.',
    portfolioPresentationTips: ['Explain why chunk overlap is vital to preserving context across document page boundaries.']
  },
  {
    id: 'proj-data-platform',
    title: 'End-to-End Cloud Data Analytics Platform',
    tier: 'Advanced',
    category: 'Data Engineering',
    technologies: ['Python', 'DuckDB', 'dbt', 'FastAPI', 'React', 'Tailwind CSS'],
    description: 'A cloud data warehouse prototype supporting automated CSV data ingestion, dbt transformation modeling, data quality testing, and an interactive query playground.',
    objectives: ['Implement ELT (Extract, Load, Transform) data pipeline principles.', 'Automate data quality assertions (uniqueness, not-null, referential integrity).'],
    features: ['Dataset upload and schema inference.', 'In-browser SQL query runner against multi-million row datasets.', 'Automated data transformation models.', 'Data lineage visual graph.'],
    requirements: ['Python 3.10+', 'DuckDB', 'React', 'TypeScript'],
    developmentSteps: [
      { step: 1, title: 'Fast Storage Engine', details: 'Integrate DuckDB columnar database for sub-second analytical aggregations.' },
      { step: 2, title: 'Query Execution Endpoint', details: 'Implement secure query runner with timeout limits and memory guards.' },
      { step: 3, title: 'Lineage Graph', details: 'Generate visual dependency DAG connecting raw tables to final marts.' }
    ],
    suggestedDatabase: 'DuckDB or ClickHouse',
    suggestedArchitecture: 'Modern Data Stack (MDS) prototype: Ingestion -> DuckDB OLAP -> API Gateway -> Visual Studio.',
    portfolioPresentationTips: ['Benchmark query response times comparing DuckDB against traditional row-based SQLite databases.']
  },
  {
    id: 'proj-movie-rec',
    title: 'Personalized Movie Recommendation Engine',
    tier: 'Advanced',
    category: 'Machine Learning',
    technologies: ['Python', 'Scikit-Learn', 'Surprise', 'FastAPI', 'React', 'Tailwind CSS'],
    description: 'A hybrid recommendation system combining Collaborative Filtering (Matrix Factorization / SVD) and Content-Based Filtering to suggest personalized movie recommendations.',
    objectives: ['Implement Singular Value Decomposition (SVD) on user-item rating matrices.', 'Mitigate the cold-start problem using genre and director metadata.'],
    features: ['User preference onboarding wizard.', 'Top-10 personalized movie recommendations with confidence scores.', 'Explanation generation ("Because you enjoyed Inception...").', 'Real-time rating feedback loop.'],
    requirements: ['Python', 'Scikit-Learn', 'FastAPI', 'React'],
    developmentSteps: [
      { step: 1, title: 'Matrix Factorization Model', details: 'Train TruncatedSVD on MovieLens dataset minimizing Root Mean Squared Error (RMSE).' },
      { step: 2, title: 'Content-Based Fallback', details: 'Compute cosine similarity over movie synopsis TF-IDF embeddings for cold-start users.' },
      { step: 3, title: 'Inference API', details: 'Build low-latency FastAPI endpoint returning top-k predictions.' }
    ],
    suggestedDatabase: 'PostgreSQL with pgvector or Redis for caching recommendations',
    suggestedArchitecture: 'Offline model training pipeline with online low-latency inference cache.',
    portfolioPresentationTips: ['Explain how you evaluated recommendation quality using RMSE and Normalized Discounted Cumulative Gain (NDCG).']
  },
  {
    id: 'proj-fraud-detection',
    title: 'Real-Time Financial Fraud Detection System',
    tier: 'Advanced',
    category: 'Data Science & FinTech',
    technologies: ['Python', 'XGBoost', 'Scikit-Learn', 'FastAPI', 'Docker', 'React'],
    description: 'A machine learning system detecting fraudulent credit card transactions in real time with imbalanced learning techniques (SMOTE), precision-recall threshold optimization, and SHAP interpretability.',
    objectives: ['Handle extreme class imbalance (99.8% legitimate vs 0.2% fraud).', 'Optimize classification decision threshold for cost-sensitive financial outcomes.'],
    features: ['Sub-50ms transaction fraud scoring API.', 'Interactive threshold slider balancing fraud caught vs customer friction.', 'SHAP feature importance waterfall chart explaining why an alert was triggered.'],
    requirements: ['Python', 'XGBoost', 'FastAPI', 'React'],
    developmentSteps: [
      { step: 1, title: 'Imbalanced Modeling', details: 'Apply SMOTE oversampling and train XGBoost with scale_pos_weight parameter.' },
      { step: 2, title: 'Threshold Tuning', details: 'Evaluate Precision-Recall AUC curve to select optimal operating threshold.' },
      { step: 3, title: 'Explainability Engine', details: 'Generate local SHAP values to explain individual transaction risk scores.' }
    ],
    suggestedDatabase: 'PostgreSQL for transaction records; Redis for velocity counters',
    suggestedArchitecture: 'Real-time scoring microservice with asynchronous log ingestion.',
    portfolioPresentationTips: ['Explain why accuracy is a misleading metric for fraud detection and how PR-AUC provides true signal.']
  },
  {
    id: 'proj-predictive-realestate',
    title: 'Predictive Real Estate Valuation & Market Trends',
    tier: 'Advanced',
    category: 'Data Science',
    technologies: ['Python', 'LightGBM', 'Pandas', 'FastAPI', 'React', 'Leaflet.js'],
    description: 'A machine learning web platform that estimates residential home valuations using geospatial coordinates, school ratings, historical price trends, and property attributes.',
    objectives: ['Engineer spatial and historical price features.', 'Deploy gradient boosted regression model with interactive map visualization.'],
    features: ['Interactive map with property value heatmaps.', 'Price prediction calculator with confidence intervals.', 'Feature sensitivity simulator (e.g. adding 1 bathroom increases value by $24,000).'],
    requirements: ['Python', 'LightGBM', 'FastAPI', 'React', 'Leaflet'],
    developmentSteps: [
      { step: 1, title: 'Spatial Feature Engineering', details: 'Calculate distance to nearest transit station and high-performing schools.' },
      { step: 2, title: 'Model Training & Validation', details: 'Train LightGBM regressor using K-Fold cross validation and log-transformed target price.' },
      { step: 3, title: 'Interactive Valuation UI', details: 'Build sliders allowing users to simulate home modifications and see real-time price updates.' }
    ],
    suggestedDatabase: 'PostgreSQL with PostGIS extensions',
    suggestedArchitecture: 'Geospatial database coupled with ML inference service and interactive web map.',
    portfolioPresentationTips: ['Discuss how handling target variable skewness via log transformation improved Mean Absolute Error (MAE).']
  }
];
