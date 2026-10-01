import { CareerPath } from '../types';

export const careerPathsData: CareerPath[] = [
  // ===============================
  // DATA ANALYST (10-STEP ROADMAP)
  // ===============================
  {
    id: 'career-data-analyst',
    title: 'Data Analyst',
    category: 'Data & Analytics',
    shortOverview: 'Transform raw corporate data into actionable business insights, dashboards, and strategic growth opportunities.',
    fullOverview: 'Data Analysts bridge the gap between technical database systems and executive business leaders. They query large data warehouses using SQL, clean and transform messy datasets using Python and Excel, design interactive BI dashboards with Power BI or Tableau, and conduct statistical experiments like A/B tests to optimize business operations.',
    responsibilities: [
      'Write complex SQL queries, JOINs, and CTEs to extract data from enterprise warehouses.',
      'Design, maintain, and automate executive KPI dashboards in Power BI or Tableau.',
      'Perform Exploratory Data Analysis (EDA) to diagnose operational bottlenecks.',
      'Communicate data-backed recommendations clearly to non-technical department managers.'
    ],
    requiredSkills: ['SQL & Relational Databases', 'Microsoft Excel (Power Query, XLOOKUP)', 'Python (Pandas, NumPy)', 'Power BI / Tableau', 'Descriptive & Inferential Statistics', 'Business Storytelling'],
    averageEntrySalary: '$72,000 / year',
    recommendedCourses: ['DAT 101 Data Analysis Fundamentals', 'DAT 105 Excel for Data Analysis', 'DAT 201 SQL for Data Analysis', 'DAT 205 Python for Data Analysis', 'DAT 210 Power BI Dashboards'],
    recommendedTools: ['PostgreSQL', 'Power BI', 'Tableau', 'Jupyter Notebooks', 'Git'],
    roadmapSteps: [
      {
        step: 1,
        title: 'Step 1: Spreadsheet Mastery (Excel / Google Sheets)',
        description: 'Learn formulas, XLOOKUP, INDEX/MATCH, dynamic arrays, Pivot Tables, and automated data cleaning with Power Query.',
        keySkills: ['XLOOKUP', 'Pivot Tables', 'Power Query', 'Conditional Formatting'],
        recommendedCourses: ['DAT 105 Excel for Data Analysis'],
        tools: ['Excel', 'Google Sheets'],
        projectIdea: 'Build a dynamic 12-month student personal budget and expense dashboard with visual spending alerts.'
      },
      {
        step: 2,
        title: 'Step 2: Applied Statistics & Probability',
        description: 'Master central tendency (mean, median, mode), standard deviation, normal distributions, and hypothesis testing.',
        keySkills: ['Variance', 'Z-Scores', 'p-values', 'Central Limit Theorem'],
        recommendedCourses: ['DAT 220 Statistics for Data Analysis'],
        tools: ['Excel Analysis Toolpak', 'SciPy'],
        projectIdea: 'Analyze university exam score distributions and determine statistical normality across departments.'
      },
      {
        step: 3,
        title: 'Step 3: Relational Databases & SQL',
        description: 'Write SELECT queries, multi-table JOINs, GROUP BY aggregations, CTEs, subqueries, and window functions.',
        keySkills: ['INNER/LEFT JOIN', 'HAVING', 'Window Functions (DENSE_RANK, LAG)', 'CTEs'],
        recommendedCourses: ['DAT 201 SQL for Data Analysis'],
        tools: ['PostgreSQL', 'DBeaver', 'MySQL'],
        projectIdea: 'Write SQL queries analyzing retail customer cohort retention and repeat purchasing rates.'
      },
      {
        step: 4,
        title: 'Step 4: Systematic Data Cleaning',
        description: 'Audit dirty datasets, handle missing values, coerce incorrect data types, parse timestamps, and eliminate duplicate records.',
        keySkills: ['Missing Value Imputation', 'Regex Text Parsing', 'Type Coercion'],
        recommendedCourses: ['DAT 225 Practical Data Cleaning & Prep'],
        tools: ['OpenRefine', 'Pandas'],
        projectIdea: 'Clean and standardize an inconsistent 10,000-row international customer contact address registry.'
      },
      {
        step: 5,
        title: 'Step 5: Python for Data Analysis (Pandas & NumPy)',
        description: 'Perform programmatic data manipulation using DataFrames, vectorized arrays, and automated ETL workflows.',
        keySkills: ['Pandas DataFrames', 'NumPy Vectorization', 'Groupby Aggregations', 'Merging'],
        recommendedCourses: ['DAT 205 Python for Data Analysis: NumPy & Pandas'],
        tools: ['Python 3', 'Jupyter Lab', 'VS Code'],
        projectIdea: 'Scrape and analyze real-time job listings to map the top in-demand skills in your region.'
      },
      {
        step: 6,
        title: 'Step 6: Data Visualization & Exploratory Analysis',
        description: 'Choose appropriate visual encodings (box plots, scatter plots, heatmaps) to uncover hidden trends.',
        keySkills: ['Matplotlib', 'Seaborn', 'Visual Grammar', 'Outlier Detection'],
        recommendedCourses: ['DAT 230 Exploratory Data Analysis Masterclass'],
        tools: ['Seaborn', 'Plotly'],
        projectIdea: 'Perform full exploratory multivariate analysis on city air pollution telemetry.'
      },
      {
        step: 7,
        title: 'Step 7: Business Intelligence Dashboards (Power BI / Tableau)',
        description: 'Model star schemas, author DAX or LOD calculations, and construct responsive self-service dashboards.',
        keySkills: ['Star Schema Modeling', 'DAX Measures', 'Level of Detail (LOD)', 'Bookmarks'],
        recommendedCourses: ['DAT 210 Power BI Dashboards', 'DAT 215 Tableau Storytelling'],
        tools: ['Microsoft Power BI', 'Tableau Desktop'],
        projectIdea: 'Publish an interactive multi-page executive sales dashboard with regional drill-downs.'
      },
      {
        step: 8,
        title: 'Step 8: Real-World Domain Projects',
        description: 'Execute commercial case studies tackling actual business challenges in E-commerce, Healthcare, or Finance.',
        keySkills: ['Customer Lifetime Value', 'Churn Analysis', 'A/B Test Evaluation'],
        recommendedCourses: ['DAT 299 Data Analysis Capstone'],
        tools: ['PostgreSQL', 'Power BI', 'GitHub'],
        projectIdea: 'Conduct an end-to-end customer churn risk analysis quantifying recurring revenue at risk.'
      },
      {
        step: 9,
        title: 'Step 9: Professional Portfolio & GitHub Presence',
        description: 'Document case studies with executive summaries, methodology writeups, schema diagrams, and live dashboard links.',
        keySkills: ['Technical Documentation', 'GitHub Markdown', 'Data Storytelling'],
        recommendedCourses: ['DAT 299 Data Analysis Capstone'],
        tools: ['GitHub', 'Notion', 'Loom Video Demos'],
        projectIdea: 'Assemble a 3-project portfolio repository featuring SQL scripts, Jupyter notebooks, and live BI dashboards.'
      },
      {
        step: 10,
        title: 'Step 10: Internship & Interview Preparation',
        description: 'Practice live SQL whiteboard tests, business metrics case studies (CAC, LTV, ROI), and behavioral STAR questions.',
        keySkills: ['SQL Live Coding', 'Product Metrics', 'Case Interviewing'],
        recommendedCourses: ['DAT 201 SQL for Data Analysis'],
        tools: ['LeetCode SQL', 'TechStudy Hub Quizzes'],
        projectIdea: 'Complete 30 intermediate-to-advanced SQL challenges and a mock 45-minute live interview.'
      }
    ],
    portfolioProjects: [
      'E-Commerce Regional Revenue & Margin Optimization Analysis',
      'Hospital 30-Day Patient Readmission Risk Dashboard',
      'Subscriber Cohort Retention & Churn Predictive Evaluation'
    ],
    internshipPreparation: [
      'Be able to write window functions and multi-table JOINs on a whiteboard without syntax errors.',
      'Understand core SaaS metrics: Customer Acquisition Cost (CAC), Lifetime Value (LTV), Monthly Recurring Revenue (MRR), and Churn Rate.',
      'Prepare a 5-minute slide deck presentation explaining one of your portfolio projects as if presenting to the VP of Marketing.'
    ],
    interviewPreparation: [
      'Common question: "Explain the difference between WHERE and HAVING in SQL with a practical code example."',
      'Common question: "How would you handle a dataset where 30% of customer income values are missing?"',
      'Common question: "Walk me through how you designed your Power BI star schema to prevent many-to-many relationship traps."'
    ]
  },

  // ===============================
  // DATA SCIENTIST (12-STEP ROADMAP)
  // ===============================
  {
    id: 'career-data-scientist',
    title: 'Data Scientist',
    category: 'Data Science & AI',
    shortOverview: 'Harness advanced statistical theory, machine learning, and deep neural networks to build predictive software models.',
    fullOverview: 'Data Scientists formulate predictive hypotheses, engineer predictive features from massive raw datasets, train supervised and unsupervised machine learning models, evaluate mathematical risk, and deploy automated inference microservices into production.',
    responsibilities: [
      'Develop machine learning models for classification, regression, and clustering.',
      'Design feature engineering pipelines transforming raw signals into predictive inputs.',
      'Conduct rigorous cross-validation and hyperparameter optimization.',
      'Deploy containerized models via REST APIs and monitor for statistical data drift.'
    ],
    requiredSkills: ['Python & PyTorch/Scikit-Learn', 'Multivariable Calculus & Linear Algebra', 'Probability & Inferential Statistics', 'Supervised & Unsupervised ML', 'Feature Engineering', 'MLOps & Docker'],
    averageEntrySalary: '$95,000 / year',
    recommendedCourses: ['DSC 101 Introduction to Data Science', 'DSC 201 Supervised Machine Learning', 'DSC 301 Deep Learning & Neural Nets', 'MTH 201 Linear Algebra', 'DSC 401 MLOps'],
    recommendedTools: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'Docker', 'FastAPI', 'MLflow'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Python Programming Foundations', description: 'Master control flow, functions, OOP, and data structures in Python 3.', keySkills: ['Python OOP', 'List Comprehensions', 'Virtual Environments'], recommendedCourses: ['PRG 101 Python Bootcamp'], tools: ['Python 3', 'VS Code'], projectIdea: 'Build a CLI data processor with custom file parsers and unit tests.' },
      { step: 2, title: 'Step 2: Linear Algebra & Matrix Calculus', description: 'Vectors, matrix multiplications, dot products, eigenvalues, and gradient vectors.', keySkills: ['Eigenvalues', 'Matrix Decomposition', 'Gradient Vectors'], recommendedCourses: ['MTH 201 Linear Algebra'], tools: ['NumPy'], projectIdea: 'Implement matrix multiplication and 2D geometric transformations from scratch.' },
      { step: 3, title: 'Step 3: Probability & Mathematical Statistics', description: 'Bayes Theorem, probability density functions, maximum likelihood estimation, and hypothesis tests.', keySkills: ['Bayes Theorem', 'Hypothesis Testing', 'MLE'], recommendedCourses: ['DAT 220 Statistics'], tools: ['SciPy'], projectIdea: 'Simulate the Monty Hall problem and calculate empirical Bayesian probabilities.' },
      { step: 4, title: 'Step 4: Relational SQL for Feature Stores', description: 'Extract historical training datasets using partitioned SQL queries and window aggregations.', keySkills: ['Complex JOINs', 'Window Functions', 'Data Aggregation'], recommendedCourses: ['DAT 201 SQL'], tools: ['PostgreSQL'], projectIdea: 'Extract a rolling 30-day user engagement feature table from raw web logs.' },
      { step: 5, title: 'Step 5: Data Cleaning & Preprocessing', description: 'Imputation strategies, handling outliers, and encoding categorical variables.', keySkills: ['KNN Imputation', 'One-Hot Encoding', 'Scaling'], recommendedCourses: ['DAT 225 Data Cleaning'], tools: ['Scikit-Learn'], projectIdea: 'Build an automated preprocessing pipeline with Scikit-Learn ColumnTransformer.' },
      { step: 6, title: 'Step 6: Exploratory Data Analysis & Feature Engineering', description: 'Target encoding, interaction terms, polynomial features, and correlation heatmaps.', keySkills: ['Target Encoding', 'Mutual Information', 'Feature Selection'], recommendedCourses: ['DSC 210 Feature Engineering'], tools: ['Seaborn', 'Pandas'], projectIdea: 'Engineer behavioral recency-frequency-monetary (RFM) features for transaction data.' },
      { step: 7, title: 'Step 7: Supervised Machine Learning', description: 'Linear regression, logistic regression, decision trees, random forests, and XGBoost.', keySkills: ['Gradient Descent', 'Ensemble Trees', 'Cross-Validation'], recommendedCourses: ['DSC 201 Supervised ML'], tools: ['Scikit-Learn', 'XGBoost'], projectIdea: 'Train an XGBoost model predicting credit loan defaults with hyperparameter tuning.' },
      { step: 8, title: 'Step 8: Model Evaluation & Cost-Sensitive Thresholds', description: 'ROC-AUC, Precision-Recall curves, confusion matrices, and profit-maximizing thresholds.', keySkills: ['PR-AUC', 'F1-Score', 'Brier Score'], recommendedCourses: ['DSC 201 Supervised ML'], tools: ['Scikit-Learn'], projectIdea: 'Calibrate prediction probabilities on an imbalanced fraud detection dataset.' },
      { step: 9, title: 'Step 9: Deep Learning & Neural Networks', description: 'Multilayer perceptrons, backpropagation, CNNs for computer vision, and PyTorch.', keySkills: ['PyTorch Tensors', 'Backprop', 'CNNs', 'Dropout'], recommendedCourses: ['DSC 301 Deep Learning'], tools: ['PyTorch', 'TensorBoard'], projectIdea: 'Train a convolutional neural network classifying skin lesions from dermatological images.' },
      { step: 10, title: 'Step 10: Natural Language Processing (NLP) & LLMs', description: 'Tokenization, embeddings, Transformer self-attention, and Hugging Face fine-tuning.', keySkills: ['Transformers', 'BERT', 'Embeddings', 'LangChain'], recommendedCourses: ['DSC 305 NLP Fundamentals'], tools: ['Hugging Face', 'PyTorch'], projectIdea: 'Build a customer review sentiment analyzer using a fine-tuned DistilBERT model.' },
      { step: 11, title: 'Step 11: Production MLOps & Model Deployment', description: 'Containerize models with Docker, serve predictions via FastAPI, and monitor data drift.', keySkills: ['FastAPI', 'Docker', 'MLflow', 'Data Drift Detection'], recommendedCourses: ['DSC 401 MLOps'], tools: ['Docker', 'FastAPI', 'MLflow'], projectIdea: 'Deploy a containerized real-time inference microservice with automated health checks.' },
      { step: 12, title: 'Step 12: Capstone Portfolio & Career Launch', description: 'Publish comprehensive GitHub repositories with clean READMEs, benchmark charts, and interactive demo apps.', keySkills: ['Streamlit Demos', 'Technical Writing', 'Interview Preparation'], recommendedCourses: ['DSC 499 Capstone'], tools: ['Streamlit', 'GitHub'], projectIdea: 'Build an end-to-end predictive real estate valuation app with live Streamlit UI.' }
    ],
    portfolioProjects: [
      'Credit Card Fraud Detection with Cost-Sensitive Threshold Optimization',
      'Medical Imaging Chest X-Ray Pneumonia Classifier (PyTorch CNN)',
      'E-Commerce Customer Lifetime Value & Churn Prediction Pipeline'
    ],
    internshipPreparation: [
      'Be able to derive gradient descent weight updates on a whiteboard.',
      'Know when to choose tree-based ensembles (XGBoost/LightGBM) over neural networks.',
      'Have an active GitHub repository with reproducible requirements.txt and Dockerfile.'
    ],
    interviewPreparation: [
      'Explain the Bias-Variance tradeoff and how regularization (L1 vs L2) impacts each component.',
      'How would you address target leakage in cross-validation when doing target encoding?',
      'Describe the mathematical difference between Bagging and Boosting.'
    ]
  },

  // ===============================
  // SOFTWARE DEVELOPER / ENGINEER
  // ===============================
  {
    id: 'career-software-developer',
    title: 'Software Developer / Engineer',
    category: 'Software Engineering',
    shortOverview: 'Design, write, test, and maintain robust, scalable software applications and computational systems.',
    fullOverview: 'Software Engineers build the digital backbone of society. They apply rigorous computer science principles, data structures, algorithms, and design patterns to create performant web, mobile, desktop, and embedded software systems.',
    responsibilities: [
      'Write clean, modular, maintainable, and type-safe code adhering to SOLID principles.',
      'Design relational and non-relational database schemas and API specifications.',
      'Author automated unit, integration, and end-to-end tests.',
      'Collaborate via Git pull requests, code reviews, and CI/CD pipelines.'
    ],
    requiredSkills: ['Data Structures & Algorithms', 'TypeScript / Python / Java / C++', 'Object-Oriented & Functional Design', 'REST & GraphQL APIs', 'Database Architecture', 'Git & CI/CD'],
    averageEntrySalary: '$85,000 / year',
    recommendedCourses: ['CSC 101 Intro to CS', 'CSC 201 Data Structures', 'WEB 301 Full Stack Dev', 'CSC 308 Software Testing', 'CSC 306 DevOps'],
    recommendedTools: ['VS Code', 'Git / GitHub', 'Docker', 'Postman', 'Linux Terminal'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Core Programming Foundations', description: 'Variables, loops, functions, OOP, and memory pointers.', keySkills: ['Variables', 'OOP', 'Functions'], recommendedCourses: ['PRG 101 Python', 'PRG 104 C Systems'], tools: ['VS Code'], projectIdea: 'Build a CLI-based bank account management system.' },
      { step: 2, title: 'Step 2: Data Structures & Algorithms', description: 'Arrays, linked lists, stacks, queues, trees, graphs, sorting, and Big-O notation.', keySkills: ['Big-O', 'Trees', 'Graphs', 'Hash Tables'], recommendedCourses: ['CSC 201 Data Structures'], tools: ['Python', 'C++'], projectIdea: 'Implement an in-memory auto-complete search engine using a Trie data structure.' },
      { step: 3, title: 'Step 3: Web Protocols & REST APIs', description: 'HTTP/HTTPS, status codes, headers, JSON serialization, and CRUD API design.', keySkills: ['HTTP', 'REST', 'CRUD', 'Express / FastAPI'], recommendedCourses: ['WEB 205 Backend Engineering'], tools: ['Postman', 'curl'], projectIdea: 'Build a student task management REST API with JWT authentication.' },
      { step: 4, title: 'Step 4: Relational Databases & Schema Design', description: 'Tables, constraints, foreign keys, 3NF normalization, and indexing.', keySkills: ['SQL', 'Normalization', 'Indexing'], recommendedCourses: ['CSC 301 Database Systems'], tools: ['PostgreSQL'], projectIdea: 'Design a schema for a university library with student borrow reservations.' },
      { step: 5, title: 'Step 5: Frontend Interface Development', description: 'Responsive design, DOM manipulation, React component state, and hooks.', keySkills: ['React', 'TypeScript', 'Tailwind CSS'], recommendedCourses: ['WEB 201 Modern React'], tools: ['React', 'Vite'], projectIdea: 'Build a responsive kanban board with drag-and-drop task reordering.' },
      { step: 6, title: 'Step 6: Testing & Quality Assurance', description: 'Unit testing, mocking, integration tests, and Test-Driven Development (TDD).', keySkills: ['Unit Testing', 'TDD', 'PyTest / Jest'], recommendedCourses: ['CSC 308 Software Testing'], tools: ['Jest', 'Playwright'], projectIdea: 'Achieve 90%+ test coverage on a shopping cart calculation library.' },
      { step: 7, title: 'Step 7: Version Control & CI/CD Pipelines', description: 'Branching strategies, pull requests, and automated GitHub Actions workflows.', keySkills: ['Git', 'GitHub Actions', 'Docker'], recommendedCourses: ['CSC 205 Agile & Git', 'CSC 306 DevOps'], tools: ['Git', 'Docker'], projectIdea: 'Set up a CI/CD pipeline that runs tests and builds Docker images on every push.' },
      { step: 8, title: 'Step 8: System Design & Architecture', description: 'Microservices vs Monolith, caching (Redis), message queues, and load balancing.', keySkills: ['System Design', 'Caching', 'Load Balancing'], recommendedCourses: ['CSC 403 Distributed Systems'], tools: ['Redis', 'Docker Compose'], projectIdea: 'Design a high-throughput URL shortening service handling 10,000 req/sec.' }
    ],
    portfolioProjects: [
      'Full-Stack Learning Management System with Verifiable Certificates',
      'Real-Time Collaborative Code Editor with WebSockets',
      'High-Performance Distributed Cache Key-Value Store'
    ],
    internshipPreparation: [
      'Master LeetCode easy-to-medium questions in your language of choice.',
      'Understand how the internet works from browser URL to DNS, TCP, TLS, and HTTP response.',
      'Be prepared to walk through your code line by line and justify architectural decisions.'
    ],
    interviewPreparation: [
      'Describe how a Hash Map handles collisions (Chaining vs Open Addressing).',
      'Explain the difference between a process and a thread, including shared vs isolated memory.',
      'How does the browser event loop handle microtasks vs macrotasks in JavaScript?'
    ]
  },

  // ===============================
  // CYBERSECURITY ANALYST
  // ===============================
  {
    id: 'career-cybersecurity-analyst',
    title: 'Cybersecurity Analyst / SOC Engineer',
    category: 'Security & Networks',
    shortOverview: 'Protect enterprise infrastructure, detect cyber threats, triage incidents, and secure applications.',
    fullOverview: 'Cybersecurity Analysts defend organizations against digital adversaries. They monitor security event streams in SIEM platforms (Splunk), investigate anomalous network traffic with packet sniffers (Wireshark), audit systems for vulnerabilities, and execute rapid incident containment.',
    responsibilities: [
      'Monitor and triage alerts within Security Operations Center (SOC) environments.',
      'Investigate malicious network traffic, malware beacons, and phishing campaigns.',
      'Conduct vulnerability scans using Nessus and Nmap.',
      'Map attacker tactics to the MITRE ATT&CK framework and write detection rules.'
    ],
    requiredSkills: ['TCP/IP & Packet Analysis (Wireshark)', 'SIEM Platforms (Splunk, Elastic)', 'Linux System Administration', 'Vulnerability Assessment (Nmap)', 'Firewalls & IDS/IPS', 'Incident Response Lifecycles'],
    averageEntrySalary: '$82,000 / year',
    recommendedCourses: ['SEC 101 Cybersecurity Fundamentals', 'SEC 201 Network Security', 'SEC 301 Ethical Hacking', 'SEC 310 SOC & SIEM Analysis'],
    recommendedTools: ['Wireshark', 'Splunk', 'Kali Linux', 'Nmap', 'Burp Suite', 'Snort'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Computer Networks & Protocols', description: 'OSI 7-layer model, TCP/IP, IP addressing, DNS, DHCP, and ARP.', keySkills: ['OSI Model', 'TCP Handshake', 'Subnetting'], recommendedCourses: ['CSC 204 Computer Networks'], tools: ['Wireshark', 'Packet Tracer'], projectIdea: 'Capture and analyze unencrypted HTTP vs encrypted HTTPS traffic in Wireshark.' },
      { step: 2, title: 'Step 2: Linux Administration & Command Line', description: 'File permissions, processes, bash scripting, SSH keys, and system logs.', keySkills: ['Bash', 'Permissions (chmod/chown)', 'Syslog'], recommendedCourses: ['CSC 202 Operating Systems'], tools: ['Ubuntu / Kali Linux'], projectIdea: 'Write a bash script that audits user accounts with weak password policies.' },
      { step: 3, title: 'Step 3: Security Fundamentals & Threat Modeling', description: 'CIA triad, access controls (RBAC/ABAC), malware taxonomy, and phishing vectors.', keySkills: ['CIA Triad', 'Threat Modeling', 'NIST Framework'], recommendedCourses: ['SEC 101 Cyber Fundamentals'], tools: ['STRIDE Model'], projectIdea: 'Perform a threat model audit on a mobile banking application architecture.' },
      { step: 4, title: 'Step 4: Network Defense & Intrusion Detection', description: 'Firewall rule configurations (iptables), VPN tunnels, and Snort IDS signatures.', keySkills: ['Snort Rules', 'iptables', 'VPNs'], recommendedCourses: ['SEC 201 Network Security'], tools: ['Snort', 'pfsense'], projectIdea: 'Write custom Snort signatures that trigger alerts during active Nmap port scans.' },
      { step: 5, title: 'Step 5: SIEM Log Analysis & SOC Triage', description: 'Ingest security logs into Splunk or Elastic SIEM, write detection queries, and triage alerts.', keySkills: ['Splunk SPL', 'Alert Triage', 'Log Parsing'], recommendedCourses: ['SEC 310 SOC & SIEM'], tools: ['Splunk Enterprise', 'Elastic SIEM'], projectIdea: 'Build a Splunk dashboard monitoring failed SSH brute force attacks.' },
      { step: 6, title: 'Step 6: Vulnerability Scanning & Ethical Hacking Basics', description: 'Port scanning with Nmap, web vulnerability testing with Burp Suite, and patching.', keySkills: ['Nmap', 'Burp Suite', 'OWASP Top 10'], recommendedCourses: ['SEC 301 Ethical Hacking'], tools: ['Nmap', 'Burp Suite'], projectIdea: 'Conduct a vulnerability scan against an authorized lab environment and draft a remediation report.' },
      { step: 7, title: 'Step 7: Incident Response & Digital Forensics', description: 'Volatile memory dump analysis with Volatility, timeline analysis, and containment.', keySkills: ['Memory Forensics', 'Incident Containment', 'Timeline Analysis'], recommendedCourses: ['SEC 305 Digital Forensics'], tools: ['Volatility', 'Autopsy'], projectIdea: 'Analyze a memory dump from a compromised Windows machine to extract malware IP beacons.' }
    ],
    portfolioProjects: [
      'SOC Threat Intelligence & Incident Response Lab (Splunk + Zeek)',
      'Home Lab Virtual Network with pfSense Firewall and Snort IDS',
      'Web Application Vulnerability Assessment & Remediation Report'
    ],
    internshipPreparation: [
      'Set up a home virtual lab with VirtualBox running Kali Linux and Metasploitable.',
      'Be able to explain the exact steps of the Incident Response lifecycle (Preparation -> Identification -> Containment -> Eradication -> Recovery -> Lessons Learned).',
      'Familiarize yourself with CompTIA Security+ or Certified in Cybersecurity (CC) concepts.'
    ],
    interviewPreparation: [
      'Explain how a DNS amplification DDoS attack works.',
      'What is the difference between a Vulnerability, a Threat, and a Risk?',
      'If you notice a sudden spike in outbound traffic on port 443 at 3:00 AM, what immediate triage steps do you take?'
    ]
  },

  // ===============================
  // CLOUD & DEVOPS ENGINEER
  // ===============================
  {
    id: 'career-cloud-devops',
    title: 'Cloud & DevOps Engineer',
    category: 'Cloud & Infrastructure',
    shortOverview: 'Automate software delivery pipelines, manage cloud infrastructure, and guarantee 99.99% system availability.',
    fullOverview: 'Cloud and DevOps engineers bridge development and operations. They automate infrastructure provisioning using Infrastructure as Code (Terraform), orchestrate containerized workloads with Kubernetes, design resilient cloud environments on AWS or Azure, and maintain observability telemetry.',
    responsibilities: [
      'Build and maintain automated CI/CD deployment pipelines using GitHub Actions.',
      'Provision scalable multi-region cloud infrastructure using Terraform.',
      'Manage container orchestration clusters using Kubernetes (EKS/GKE).',
      'Implement Prometheus and Grafana monitoring, alerting, and incident response.'
    ],
    requiredSkills: ['Linux System Administration', 'Docker & Kubernetes', 'AWS / Azure / GCP', 'Terraform (IaC)', 'CI/CD (GitHub Actions)', 'Prometheus & Grafana'],
    averageEntrySalary: '$92,000 / year',
    recommendedCourses: ['CLD 201 Cloud Computing AWS', 'CSC 306 DevOps & CI/CD', 'CSC 202 Operating Systems', 'CSC 204 Computer Networks'],
    recommendedTools: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitHub Actions', 'Prometheus'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Linux & Networking Mastery', description: 'Bash scripting, systemd, permissions, TCP/IP, and SSH tunnels.', keySkills: ['Bash Scripting', 'systemd', 'Networking'], recommendedCourses: ['CSC 202 Operating Systems'], tools: ['Linux', 'Bash'], projectIdea: 'Write a script that monitors disk usage and automatically cleans old log files.' },
      { step: 2, title: 'Step 2: Containerization with Docker', description: 'Multi-stage Dockerfiles, image optimization, layer caching, and docker-compose.', keySkills: ['Docker', 'Multi-stage Builds', 'Docker Compose'], recommendedCourses: ['CSC 306 DevOps'], tools: ['Docker'], projectIdea: 'Containerize a full-stack React and Node application with separate production builds.' },
      { step: 3, title: 'Step 3: Public Cloud Architecture (AWS)', description: 'VPC subnets, EC2 instances, S3 buckets, IAM policies, and load balancers.', keySkills: ['AWS VPC', 'IAM', 'EC2', 'S3'], recommendedCourses: ['CLD 201 Cloud Computing AWS'], tools: ['AWS Management Console', 'AWS CLI'], projectIdea: 'Deploy a high-availability web service across two AWS Availability Zones.' },
      { step: 4, title: 'Step 4: Infrastructure as Code (Terraform)', description: 'Declarative resource provisioning, state files, variables, and reusable modules.', keySkills: ['Terraform', 'HCL', 'State Management'], recommendedCourses: ['CLD 201 Cloud Computing'], tools: ['Terraform'], projectIdea: 'Automate the deployment of a complete AWS VPC and web server cluster via Terraform.' },
      { step: 5, title: 'Step 5: Automated CI/CD Pipelines', description: 'Automated test runners, security scanning, image building, and continuous deployment.', keySkills: ['GitHub Actions', 'CI/CD', 'Automated Testing'], recommendedCourses: ['CSC 306 DevOps'], tools: ['GitHub Actions'], projectIdea: 'Build a pipeline that tests, builds, and pushes a Docker image to Docker Hub on every git tag.' },
      { step: 6, title: 'Step 6: Container Orchestration (Kubernetes)', description: 'Pods, Deployments, Services, Ingress controllers, and Helm charts.', keySkills: ['Kubernetes', 'kubectl', 'Helm', 'Ingress'], recommendedCourses: ['CSC 403 Distributed Systems'], tools: ['Minikube', 'kubectl'], projectIdea: 'Deploy a self-healing microservice with horizontal pod autoscaling (HPA) in Kubernetes.' },
      { step: 7, title: 'Step 7: Observability & Telemetry', description: 'Metrics collection with Prometheus, visualization dashboards in Grafana, and alerts.', keySkills: ['Prometheus', 'Grafana', 'Alertmanager'], recommendedCourses: ['CSC 306 DevOps'], tools: ['Prometheus', 'Grafana'], projectIdea: 'Build a Grafana dashboard visualizing real-time HTTP request latencies and error rates.' }
    ],
    portfolioProjects: [
      'Multi-Tier Web Application Infrastructure Deployed via Terraform on AWS',
      'End-to-End CI/CD Pipeline with Automated Unit Tests and Docker Deployment',
      'Kubernetes Microservices Cluster with Ingress Controller and Prometheus Monitoring'
    ],
    internshipPreparation: [
      'Earn an entry-level cloud certification like AWS Certified Cloud Practitioner or Solutions Architect Associate.',
      'Show that you understand how to debug failing Docker containers and inspect container logs.',
      'Demonstrate Infrastructure as Code principles: never click around in the AWS console when you can script it.'
    ],
    interviewPreparation: [
      'What is the difference between a Docker container and a Virtual Machine?',
      'How does Terraform manage state, and why is remote state locking crucial in team environments?',
      'Explain how a Kubernetes Service discovers and routes traffic to matching Pods using labels.'
    ]
  },

  // ===============================
  // FRONTEND DEVELOPER
  // ===============================
  {
    id: 'career-frontend-dev',
    title: 'Frontend Web Developer',
    category: 'Web & Mobile',
    shortOverview: 'Build high-performance, accessible, responsive user interfaces and client-side web applications.',
    fullOverview: 'Frontend Developers specialize in crafting the visual, interactive, and client-side experience of web applications. They master modern JavaScript/TypeScript, component frameworks like React, styling systems like Tailwind CSS, browser rendering performance, and web accessibility standards (WCAG).',
    responsibilities: [
      'Develop modular, reusable component libraries in React and TypeScript.',
      'Ensure cross-device responsiveness, fast load times, and accessibility compliance.',
      'Integrate client state management with backend REST and GraphQL APIs.',
      'Optimize web performance (Core Web Vitals) and reduce bundle sizes.'
    ],
    requiredSkills: ['JavaScript (ES6+) & TypeScript', 'React & Component Architecture', 'Tailwind CSS & Modern CSS Layouts', 'Responsive Design & WCAG Accessibility', 'State Management', 'Web Performance Optimization'],
    averageEntrySalary: '$78,000 / year',
    recommendedCourses: ['WEB 101 Responsive CSS', 'PRG 102 Modern JavaScript', 'PRG 106 TypeScript', 'WEB 201 Modern React'],
    recommendedTools: ['VS Code', 'React', 'Vite', 'Tailwind CSS', 'Chrome DevTools'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Semantic HTML5 & Modern CSS', description: 'CSS Flexbox, Grid, custom properties, and responsive media queries.', keySkills: ['HTML5', 'CSS Grid', 'Flexbox'], recommendedCourses: ['WEB 101 Responsive CSS'], tools: ['Chrome DevTools'], projectIdea: 'Build a pixel-perfect responsive product landing page without frameworks.' },
      { step: 2, title: 'Step 2: JavaScript Deep Dive', description: 'DOM manipulation, Event Loop, closures, Promises, and fetch API.', keySkills: ['Async/Await', 'DOM Manipulation', 'Closures'], recommendedCourses: ['PRG 102 Modern JavaScript'], tools: ['VS Code'], projectIdea: 'Build an interactive weather dashboard fetching real-time data from an open API.' },
      { step: 3, title: 'Step 3: TypeScript for Type Safety', description: 'Interfaces, types, generics, and strict compile-time checking.', keySkills: ['TypeScript', 'Interfaces', 'Generics'], recommendedCourses: ['PRG 106 TypeScript'], tools: ['TypeScript'], projectIdea: 'Refactor a JavaScript project into 100% strict TypeScript.' },
      { step: 4, title: 'Step 4: React Component Architecture', description: 'JSX, props, state, hooks (useState, useEffect, useMemo), and component lifecycles.', keySkills: ['React', 'Hooks', 'Component Design'], recommendedCourses: ['WEB 201 Modern React'], tools: ['React', 'Vite'], projectIdea: 'Build a multi-step checkout form with complex validation state.' },
      { step: 5, title: 'Step 5: Modern Styling with Tailwind CSS', description: 'Utility-first CSS, dark mode support, fluid typography, and design tokens.', keySkills: ['Tailwind CSS', 'Design Systems', 'Responsive Breakpoints'], recommendedCourses: ['WEB 201 Modern React'], tools: ['Tailwind CSS'], projectIdea: 'Implement a comprehensive design system with theme toggles in Tailwind.' },
      { step: 6, title: 'Step 6: Client Routing & State Management', description: 'React Router, URL state, optimistic updates, and global stores.', keySkills: ['React Router', 'URL State', 'Zustand / Context'], recommendedCourses: ['WEB 301 Full Stack Dev'], tools: ['React Router'], projectIdea: 'Build an e-commerce catalog with search filters reflected in URL search params.' },
      { step: 7, title: 'Step 7: Web Performance & Accessibility (a11y)', description: 'Core Web Vitals (LCP, CLS, INP), code-splitting, lazy loading, and ARIA attributes.', keySkills: ['Core Web Vitals', 'WCAG AA', 'Lighthouse'], recommendedCourses: ['WEB 201 Modern React'], tools: ['Lighthouse', 'axe DevTools'], projectIdea: 'Audit and optimize an existing web app to achieve a 95+ score on Google Lighthouse.' }
    ],
    portfolioProjects: [
      'Interactive SaaS Analytics Dashboard with Recharts and Tailwind',
      'Accessible E-Commerce Storefront with Search & Filter URL State',
      'Personal Academic & Engineering Portfolio Website'
    ],
    internshipPreparation: [
      'Build a portfolio website that looks polished and operates flawlessly on both mobile and 4K desktop.',
      'Understand how the browser paints pixels: DOM tree -> CSSOM -> Render Tree -> Layout -> Paint.',
      'Be prepared to explain state management tradeoffs (local state vs context vs global store).'
    ],
    interviewPreparation: [
      'What causes a component to re-render in React, and how do useMemo/useCallback prevent wasted renders?',
      'Explain the CSS Box Model (Content, Padding, Border, Margin) and box-sizing: border-box.',
      'How does Event Delegation work in JavaScript?'
    ]
  },

  // ===============================
  // BACKEND DEVELOPER
  // ===============================
  {
    id: 'career-backend-dev',
    title: 'Backend Web Engineer',
    category: 'Software Engineering',
    shortOverview: 'Design and build the server architecture, databases, authentication, and APIs powering digital products.',
    fullOverview: 'Backend Engineers create the engine that powers modern applications. They design scalable RESTful and GraphQL APIs, model high-performance database schemas, handle user authentication and session security, manage caching layers, and write asynchronous background worker services.',
    responsibilities: [
      'Design, implement, and document scalable RESTful and gRPC APIs.',
      'Optimize database queries, indexing strategies, and connection pooling.',
      'Implement secure authentication schemes (OAuth2, JWT, sessions).',
      'Build asynchronous background queue worker services for heavy workloads.'
    ],
    requiredSkills: ['Node.js / Python / Go / Java', 'PostgreSQL & Database Design', 'REST & GraphQL API Design', 'Authentication & Security (JWT, bcrypt)', 'Caching & Redis', 'Docker & Cloud Deployment'],
    averageEntrySalary: '$84,000 / year',
    recommendedCourses: ['WEB 205 Backend Node.js', 'CSC 301 Database Systems', 'PRG 107 Go Concurrency', 'CSC 202 Operating Systems'],
    recommendedTools: ['PostgreSQL', 'Redis', 'Docker', 'Postman', 'Linux'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Backend Language Mastery', description: 'Asynchronous event loops in Node.js, or concurrency in Go/Python.', keySkills: ['Async/Await', 'Event Loop', 'Error Handling'], recommendedCourses: ['WEB 205 Backend Node.js'], tools: ['Node.js', 'VS Code'], projectIdea: 'Build a multi-threaded file hash generator in your chosen language.' },
      { step: 2, title: 'Step 2: Relational Databases & SQL Modeling', description: 'Schema normalization, foreign keys, complex joins, and B-Tree indexes.', keySkills: ['SQL', 'Normalization', 'Indexing'], recommendedCourses: ['CSC 301 Database Systems'], tools: ['PostgreSQL'], projectIdea: 'Model a relational schema for a healthcare clinic scheduling system.' },
      { step: 3, title: 'Step 3: RESTful API Architecture', description: 'Routing, middleware pipelines, input validation, and HTTP status codes.', keySkills: ['REST APIs', 'Middleware', 'Zod Validation'], recommendedCourses: ['WEB 205 Backend Node.js'], tools: ['Express / FastAPI'], projectIdea: 'Build a secure REST API with comprehensive schema validation and pagination.' },
      { step: 4, title: 'Step 4: Authentication & Authorization (AuthN/AuthZ)', description: 'Password hashing with bcrypt, JWT token lifecycles, and Role-Based Access Control.', keySkills: ['JWT', 'bcrypt', 'RBAC Middleware'], recommendedCourses: ['WEB 205 Backend Node.js'], tools: ['Postman'], projectIdea: 'Implement refresh-token rotation and role-based route access controls.' },
      { step: 5, title: 'Step 5: High-Performance Caching with Redis', description: 'Cache-aside patterns, cache invalidation strategies, and rate limiting.', keySkills: ['Redis', 'Caching', 'Rate Limiting'], recommendedCourses: ['CSC 403 Distributed Systems'], tools: ['Redis'], projectIdea: 'Implement an IP-based API rate limiter preventing DDoS brute force attacks.' },
      { step: 6, title: 'Step 6: Asynchronous Task Queues', description: 'Background job processing with message brokers (BullMQ / RabbitMQ).', keySkills: ['Message Queues', 'Worker Processes', 'Idempotency'], recommendedCourses: ['CSC 403 Distributed Systems'], tools: ['RabbitMQ / Redis'], projectIdea: 'Build a background worker service that generates and emails PDF transcripts.' }
    ],
    portfolioProjects: [
      'Multi-Tenant SaaS Backend with Role-Based Access Control and Stripe Webhooks',
      'Real-Time Chat & Notification Microservice with Redis Pub/Sub',
      'High-Throughput Analytics Ingestion Pipeline with Asynchronous Worker Queues'
    ],
    internshipPreparation: [
      'Understand how relational databases store data on disk pages and how indexes accelerate queries.',
      'Be able to write raw SQL without relying exclusively on Object-Relational Mappers (ORMs).',
      'Understand common security threats: SQL injection, broken authentication, and CORS.'
    ],
    interviewPreparation: [
      'How do you prevent SQL injection, and why are parameterized queries superior to string sanitization?',
      'Explain the difference between optimistic and pessimistic database concurrency locking.',
      'How would you design a rate limiter in Redis to restrict users to 100 requests per minute?'
    ]
  },

  // ===============================
  // AI & MACHINE LEARNING ENGINEER
  // ===============================
  {
    id: 'career-ai-ml-engineer',
    title: 'AI & Machine Learning Engineer',
    category: 'Data Science & AI',
    shortOverview: 'Engineer production AI pipelines, fine-tune foundational models, build RAG systems, and deploy scalable ML services.',
    fullOverview: 'AI Engineers bridge the gap between machine learning research and enterprise software. They optimize deep neural networks, fine-tune Large Language Models (LLMs), build vector-search Retrieval-Augmented Generation (RAG) pipelines, and deploy low-latency inference microservices.',
    responsibilities: [
      'Fine-tune pre-trained foundational models using LoRA and PEFT techniques.',
      'Build end-to-end RAG pipelines connecting proprietary knowledge to LLMs.',
      'Quantize and optimize deep learning models for fast CPU/GPU inference.',
      'Integrate AI services into production software with latency and cost budgets.'
    ],
    requiredSkills: ['Python & PyTorch', 'LangChain & Vector Databases', 'Transformer Architectures', 'Model Fine-Tuning & Quantization', 'FastAPI & Async Microservices', 'Docker & GPU Optimization'],
    averageEntrySalary: '$105,000 / year',
    recommendedCourses: ['DSC 301 Deep Learning', 'AI 305 Generative AI & RAG', 'DSC 401 MLOps', 'PRG 101 Python'],
    recommendedTools: ['PyTorch', 'Hugging Face', 'ChromaDB', 'FastAPI', 'Docker', 'Ollama'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Python & Numerical Vectorization', description: 'Contiguous memory operations, broadcasting, and linear algebra in NumPy.', keySkills: ['NumPy', 'Matrix Math', 'Vectorization'], recommendedCourses: ['PRG 101 Python', 'MTH 201 Linear Algebra'], tools: ['NumPy'], projectIdea: 'Implement a multilayer perceptron forward and backward pass from scratch.' },
      { step: 2, title: 'Step 2: Deep Learning with PyTorch', description: 'Autograd, neural network modules, loss functions, optimizers, and DataLoader pipelines.', keySkills: ['PyTorch', 'Autograd', 'CUDA'], recommendedCourses: ['DSC 301 Deep Learning'], tools: ['PyTorch'], projectIdea: 'Train an image classifier on custom image datasets using transfer learning.' },
      { step: 3, title: 'Step 3: Transformers & Natural Language Processing', description: 'Self-attention mechanics, tokenization, BERT, and generative autoregressive decoders.', keySkills: ['Self-Attention', 'Tokenizers', 'Transformers'], recommendedCourses: ['DSC 305 NLP Fundamentals'], tools: ['Hugging Face'], projectIdea: 'Fine-tune a sentiment classification transformer on domain-specific customer support chat logs.' },
      { step: 4, title: 'Step 4: Vector Embeddings & Semantic Search', description: 'Dense vector embeddings, approximate nearest neighbors (HNSW), and vector databases.', keySkills: ['Vector Embeddings', 'Cosine Similarity', 'ChromaDB'], recommendedCourses: ['AI 305 Generative AI'], tools: ['ChromaDB / Pinecone'], projectIdea: 'Build a semantic academic research paper search engine matching queries by conceptual meaning.' },
      { step: 5, title: 'Step 5: Retrieval-Augmented Generation (RAG)', description: 'Document chunking, hybrid search, context re-ranking, and hallucination reduction.', keySkills: ['RAG', 'Prompt Engineering', 'LangChain'], recommendedCourses: ['AI 305 Generative AI'], tools: ['LangChain', 'LlamaIndex'], projectIdea: 'Build a textbook Q&A assistant providing verbatim page citations from uploaded course notes.' },
      { step: 6, title: 'Step 6: Model Serving & Optimization', description: 'Model quantization (GGUF/AWQ), TensorRT, vLLM, and asynchronous FastAPI microservices.', keySkills: ['FastAPI', 'Model Quantization', 'Inference Latency'], recommendedCourses: ['DSC 401 MLOps'], tools: ['FastAPI', 'Docker', 'vLLM'], projectIdea: 'Deploy a containerized LLM inference service streaming token responses via WebSockets.' }
    ],
    portfolioProjects: [
      'Context-Grounded Academic Q&A Assistant with Page Citations (RAG)',
      'Real-Time Computer Vision Defect Detection Pipeline in PyTorch',
      'Low-Latency Vector Search Microservice Benchmarked on 1 Million Documents'
    ],
    internshipPreparation: [
      'Understand the mathematical difference between Encoder-only (BERT), Decoder-only (GPT), and Encoder-Decoder (T5) architectures.',
      'Be able to articulate the tradeoffs between fine-tuning vs RAG for enterprise knowledge grounding.',
      'Show working demos deployed on Hugging Face Spaces or custom cloud instances.'
    ],
    interviewPreparation: [
      'Explain how Scaled Dot-Product Attention works step by step: Query, Key, and Value.',
      'What is the difference between dense vector retrieval and sparse keyword retrieval (BM25)?',
      'How does quantization (e.g. 4-bit INT4) reduce model memory footprint without catastrophic accuracy loss?'
    ]
  },

  // ===============================
  // DATABASE ADMINISTRATOR (DBA)
  // ===============================
  {
    id: 'career-dba',
    title: 'Database Administrator (DBA)',
    category: 'Database Management',
    shortOverview: 'Ensure enterprise data integrity, high availability, backup disaster recovery, and query performance.',
    fullOverview: 'Database Administrators oversee corporate storage engines. They tune complex query execution plans, design disaster recovery backup procedures, manage read replicas and sharding architectures, enforce data encryption at rest and in transit, and maintain 99.999% uptime.',
    responsibilities: [
      'Monitor and tune slow database queries using EXPLAIN ANALYZE and index optimization.',
      'Configure streaming replication, automatic failover, and point-in-time recovery (PITR).',
      'Enforce database security policies, encryption, and role-based permissions.',
      'Perform non-disruptive database migrations and version upgrades.'
    ],
    requiredSkills: ['PostgreSQL & MySQL Internals', 'Query Plan Analysis (EXPLAIN ANALYZE)', 'B-Tree & GiST Indexing', 'Replication & High Availability', 'Backup & Disaster Recovery', 'Database Security & Compliance'],
    averageEntrySalary: '$86,000 / year',
    recommendedCourses: ['CSC 301 Database Systems', 'DAT 201 SQL for Data Analysis', 'CSC 307 NoSQL Databases', 'CSC 202 Operating Systems'],
    recommendedTools: ['PostgreSQL', 'pgAdmin', 'Percona Toolkit', 'DBeaver', 'Linux'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Relational Theory & SQL Syntax', description: 'ACID transactions, relational algebra, DDL/DML, and schema design.', keySkills: ['SQL DDL/DML', 'ACID Transactions', 'Constraints'], recommendedCourses: ['CSC 301 Database Systems'], tools: ['PostgreSQL'], projectIdea: 'Design and normalize a complex multi-branch retail inventory schema.' },
      { step: 2, title: 'Step 2: Storage Engine Internals', description: 'WAL (Write-Ahead Logging), disk pages, MVCC (Multi-Version Concurrency Control), and vacuuming.', keySkills: ['WAL Logs', 'MVCC', 'Vacuuming'], recommendedCourses: ['CSC 301 Database Systems'], tools: ['PostgreSQL Internals'], projectIdea: 'Analyze table bloat and demonstrate how VACUUM recovers dead tuple disk space.' },
      { step: 3, title: 'Step 3: Query Optimization & Indexing', description: 'Reading EXPLAIN plans, index scans vs sequential scans, and partial indexes.', keySkills: ['EXPLAIN ANALYZE', 'B-Tree', 'Partial Indexes'], recommendedCourses: ['CSC 301 Database Systems'], tools: ['pg_stat_statements'], projectIdea: 'Optimize a slow 10-second multi-table query to execute in under 15 milliseconds.' },
      { step: 4, title: 'Step 4: Backup & Disaster Recovery', description: 'Physical vs logical backups (pg_dump vs pg_basebackup) and Point-In-Time Recovery.', keySkills: ['PITR', 'pg_dump', 'Disaster Recovery'], recommendedCourses: ['CSC 301 Database Systems'], tools: ['pgBackRest'], projectIdea: 'Simulate a catastrophic database corruption and execute a complete point-in-time recovery.' },
      { step: 5, title: 'Step 5: High Availability & Replication', description: 'Primary-replica streaming replication, logical replication, and failover automation.', keySkills: ['Streaming Replication', 'Failover', 'Connection Pooling'], recommendedCourses: ['CSC 403 Distributed Systems'], tools: ['Patroni', 'PgBouncer'], projectIdea: 'Configure a primary-replica cluster with PgBouncer connection pooling.' }
    ],
    portfolioProjects: [
      'High-Availability PostgreSQL Cluster with Streaming Replication and PgBouncer',
      'Comprehensive Database Performance Tuning Case Study (EXPLAIN Optimization)',
      'Automated Disaster Recovery Script with Automated Point-in-Time Verification'
    ],
    internshipPreparation: [
      'Understand how Multi-Version Concurrency Control (MVCC) enables non-blocking read operations.',
      'Demonstrate hands-on proficiency writing and debugging complex raw SQL queries.',
      'Know the difference between cold, warm, and hot database backup strategies.'
    ],
    interviewPreparation: [
      'How does a Write-Ahead Log (WAL) ensure Atomicity and Durability in case of sudden power loss?',
      'When would a sequential scan be faster than an index scan on a large table?',
      'Explain the difference between clustered and unclustered indexes.'
    ]
  },

  // ===============================
  // UI/UX PRODUCT DESIGNER
  // ===============================
  {
    id: 'career-uiux-designer',
    title: 'UI/UX Product Designer',
    category: 'Design & Product',
    shortOverview: 'Design intuitive, accessible, and aesthetically distinctive digital product experiences in Figma.',
    fullOverview: 'UI/UX Designers conduct user research, map complex user journeys, build interactive prototypes in Figma, craft comprehensive design systems, and ensure digital interfaces comply with WCAG accessibility standards.',
    responsibilities: [
      'Conduct user interviews, usability testing, and qualitative research.',
      'Build responsive wireframes, user flows, and interactive Figma prototypes.',
      'Establish and maintain cohesive design systems with reusable components.',
      'Collaborate closely with frontend engineers to ensure design fidelity.'
    ],
    requiredSkills: ['Figma & Prototyping', 'Design Systems & Auto-Layout', 'User Research & Journey Mapping', 'WCAG Accessibility Standards', 'Typography & Visual Hierarchy', 'Micro-Interactions'],
    averageEntrySalary: '$75,000 / year',
    recommendedCourses: ['DES 101 UI/UX Design Systems', 'WEB 101 Responsive CSS', 'WEB 201 Modern React'],
    recommendedTools: ['Figma', 'Miro', 'Lottie', 'Notion', 'Color Contrast Analyzers'],
    roadmapSteps: [
      { step: 1, title: 'Step 1: Visual Design Principles', description: 'Typography hierarchy, visual spacing math, contrast ratios, and color palettes.', keySkills: ['Typography', 'Contrast Ratios', 'Visual Balance'], recommendedCourses: ['DES 101 UI/UX Design'], tools: ['Figma'], projectIdea: 'Redesign an existing messy government or academic portal home screen.' },
      { step: 2, title: 'Step 2: Figma Mastery & Auto-Layout', description: 'Component variants, auto-layout 5.0, variables, and responsive constraints.', keySkills: ['Auto-Layout', 'Component Variants', 'Variables'], recommendedCourses: ['DES 101 UI/UX Design'], tools: ['Figma'], projectIdea: 'Create an e-commerce product card component with 6 responsive variant states.' },
      { step: 3, title: 'Step 3: User Research & Information Architecture', description: 'User persona creation, empathy mapping, card sorting, and user flow diagrams.', keySkills: ['User Flows', 'Card Sorting', 'Information Architecture'], recommendedCourses: ['DES 101 UI/UX Design'], tools: ['Miro', 'FigJam'], projectIdea: 'Map the complete user onboarding and course registration journey for a university.' },
      { step: 4, title: 'Step 4: Interactive Prototyping', description: 'Smart animate transitions, micro-interactions, drag gestures, and mobile flows.', keySkills: ['Smart Animate', 'Micro-Interactions', 'Prototyping'], recommendedCourses: ['DES 101 UI/UX Design'], tools: ['Figma'], projectIdea: 'Build a high-fidelity clickable mobile study timer prototype.' },
      { step: 5, title: 'Step 5: Scalable Design Systems', description: 'Design tokens (colors, radii, spacing, typography) and documentation handoff.', keySkills: ['Design Tokens', 'Design Systems', 'Developer Handoff'], recommendedCourses: ['DES 101 UI/UX Design'], tools: ['Figma Design Systems'], projectIdea: 'Build and document a full academic design system with 20+ accessible UI components.' }
    ],
    portfolioProjects: [
      'Academic Mobile Study Companion App (End-to-End Case Study)',
      'Enterprise Data Analysis Platform UI & Design System in Figma',
      'Accessible E-Commerce Storefront Redesign with Usability Test Findings'
    ],
    internshipPreparation: [
      'Prepare a portfolio with 2-3 in-depth case studies explaining your reasoning (problem -> research -> iterations -> final design -> metrics).',
      'Ensure every design in your portfolio complies with WCAG AA contrast standards.',
      'Be able to speak the language of frontend engineers (Flexbox, CSS variables, breakpoints).'
    ],
    interviewPreparation: [
      'Walk me through a design decision you made that was challenged by engineering, and how you resolved it.',
      'How do you determine whether a user problem requires a new UI component or an improvement to an existing pattern?',
      'What are design tokens and how do they streamline developer handoff?'
    ]
  }
];
