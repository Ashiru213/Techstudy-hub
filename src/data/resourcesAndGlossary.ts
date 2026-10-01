import { ResourceItem, GlossaryTerm } from '../types';

export const resourceLibraryData: ResourceItem[] = [
  {
    id: 'res-sql-cheat-sheet',
    title: 'Complete SQL Syntax & Window Functions Quick Reference',
    category: 'Databases & SQL',
    courseRelated: 'DAT 201 / CSC 301',
    academicLevel: 'Year 2',
    type: 'SQL Reference',
    description: 'Comprehensive 4-page quick reference covering SELECT, GROUP BY, HAVING, all JOIN variations, Common Table Expressions (CTEs), and window functions (ROW_NUMBER, DENSE_RANK, LAG, LEAD).',
    fileSize: '1.2 MB PDF',
    downloadCount: 4210
  },
  {
    id: 'res-python-pandas-reference',
    title: 'Pandas & NumPy Data Wrangling Cheat Sheet',
    category: 'Data Analysis',
    courseRelated: 'DAT 205',
    academicLevel: 'Year 2',
    type: 'Cheat Sheet',
    description: 'Essential syntax guide for DataFrame slicing (.loc vs .iloc), groupby aggregations, handling missing data, pivot tables, and vectorized array math.',
    fileSize: '950 KB PDF',
    downloadCount: 5680
  },
  {
    id: 'res-data-structures-guide',
    title: 'Data Structures & Algorithmic Complexity Comprehensive Guide',
    category: 'Computer Science',
    courseRelated: 'CSC 201',
    academicLevel: 'Year 2',
    type: 'Study Guide',
    description: 'Visual memory diagrams and Big-O cheat sheet for Arrays, Linked Lists, Stacks, Queues, BSTs, AVL Trees, Heaps, and Graph traversal algorithms.',
    fileSize: '3.4 MB PDF',
    downloadCount: 6890
  },
  {
    id: 'res-operating-systems-notes',
    title: 'Operating Systems Revision Notes: Concurrency, Deadlocks & Memory',
    category: 'Computer Science',
    courseRelated: 'CSC 202',
    academicLevel: 'Year 2',
    type: 'Lecture Notes',
    description: 'Concise academic revision notes on the Coffman deadlock conditions, semaphores, paging, TLB address translation, and LRU page replacement algorithms.',
    fileSize: '2.1 MB PDF',
    downloadCount: 3120
  },
  {
    id: 'res-machine-learning-math',
    title: 'Mathematics of Machine Learning: Formulas & Derivations',
    category: 'Data Science',
    courseRelated: 'DSC 201 / MTH 201',
    academicLevel: 'Year 2',
    type: 'Study Guide',
    description: 'Step-by-step mathematical derivations of Ordinary Least Squares regression, Gradient Descent weight updates, Logistic loss, and Backpropagation matrix calculus.',
    fileSize: '2.8 MB PDF',
    downloadCount: 4450
  },
  {
    id: 'res-cybersecurity-defense',
    title: 'Network Defense & Packet Analysis Reference Manual',
    category: 'Cybersecurity',
    courseRelated: 'SEC 201',
    academicLevel: 'Year 2',
    type: 'Study Guide',
    description: 'Practical reference covering Wireshark display filter syntax, TCP flags, CIDR subnetting binary charts, Snort IDS rule syntax, and common port registries.',
    fileSize: '1.8 MB PDF',
    downloadCount: 2980
  },
  {
    id: 'res-git-github-workflow',
    title: 'Professional Git & GitHub Collaborative Workflow Reference',
    category: 'Software Engineering',
    courseRelated: 'CSC 205',
    academicLevel: 'Year 1',
    type: 'Cheat Sheet',
    description: 'Clear visual guide to branch workflows, resolving merge conflicts, interactive rebasing, git stash, cherry-picking, and pull request etiquette.',
    fileSize: '840 KB PDF',
    downloadCount: 7120
  },
  {
    id: 'res-react-typescript-patterns',
    title: 'React 19 & TypeScript Design Patterns Reference',
    category: 'Web Development',
    courseRelated: 'WEB 201',
    academicLevel: 'Year 2',
    type: 'Programming Reference',
    description: 'Clean coding patterns for typed React props, polymorphic components, custom state hooks, context providers, and performance optimization.',
    fileSize: '1.4 MB PDF',
    downloadCount: 5200
  },
  {
    id: 'res-discrete-math-exam-prep',
    title: 'Discrete Mathematics Past Examination Questions & Model Solutions',
    category: 'Mathematics & Statistics',
    courseRelated: 'MTH 103',
    academicLevel: 'Year 1',
    type: 'Exam Prep',
    description: 'Curated collection of 40 past university examination problems covering mathematical induction proofs, truth tables, relations, and graph planar proofs.',
    fileSize: '3.1 MB PDF',
    downloadCount: 3890
  },
  {
    id: 'res-data-analyst-interview',
    title: 'The Data Analyst Technical Interview Preparation Manual',
    category: 'Career Guides',
    courseRelated: 'Career Hub',
    academicLevel: 'Year 3',
    type: 'Project Guide',
    description: '50 real interview questions asked at top tech companies covering live SQL queries, product analytics metrics, A/B testing interpretation, and portfolio design.',
    fileSize: '2.5 MB PDF',
    downloadCount: 8400
  }
];

export const glossaryTermsData: GlossaryTerm[] = [
  {
    id: 'term-algorithm',
    term: 'Algorithm',
    category: 'Computer Science',
    simpleDefinition: 'A step-by-step set of unambiguous instructions designed to perform a specific task or solve a computational problem.',
    technicalDefinition: 'A well-defined computational procedure that takes some value or set of values as input and produces some value or set of values as output in a finite number of deterministic steps.',
    example: 'Binary Search is an algorithm that finds a target item in a sorted list by repeatedly halving the search interval in O(log N) time.',
    codeSnippet: 'def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1',
    relatedConcepts: ['Time Complexity', 'Pseudocode', 'Big-O Notation', 'Data Structure']
  },
  {
    id: 'term-api',
    term: 'API (Application Programming Interface)',
    category: 'Software Engineering',
    simpleDefinition: 'A software contract that allows two different computer programs to talk to and exchange information with each other.',
    technicalDefinition: 'A set of subroutine definitions, communication protocols, and tools that define the endpoints, message formats (like JSON), and HTTP methods (GET, POST, PUT, DELETE) used to query or manipulate software resources.',
    example: 'A weather mobile app calls an open weather API endpoint over HTTPS to receive real-time temperature data as a JSON payload.',
    codeSnippet: 'fetch("https://api.example.com/v1/students/101")\n  .then(res => res.json())\n  .then(data => console.log(data.name));',
    relatedConcepts: ['REST', 'HTTP', 'JSON', 'Endpoints', 'GraphQL']
  },
  {
    id: 'term-array',
    term: 'Array',
    category: 'Data Structures',
    simpleDefinition: 'An ordered list of items stored right next to each other in computer memory.',
    technicalDefinition: 'A contiguous block of memory holding elements of homogeneous data type, accessible via an integer index with O(1) random memory access time via pointer arithmetic: Address(A[i]) = BaseAddress + (i * ElementSize).',
    example: 'Storing the test scores of 5 students: scores = [85, 92, 78, 90, 88].',
    codeSnippet: 'int scores[5] = {85, 92, 78, 90, 88};\nprintf("%d", scores[2]); // prints 78 in O(1) time',
    relatedConcepts: ['Memory Address', 'Contiguous Memory', 'Pointer Arithmetic', 'Dynamic Array']
  },
  {
    id: 'term-database',
    term: 'Database',
    category: 'Databases',
    simpleDefinition: 'An organized, persistent digital electronic filing cabinet where large amounts of data can be safely stored, queried, and updated.',
    technicalDefinition: 'A structured collection of data managed by a Database Management System (DBMS) that provides physical data independence, concurrency control, transaction guarantees (ACID), and query processing.',
    example: 'A university uses a PostgreSQL database with relational tables for Students, Lecturers, Courses, and Examination Results.',
    codeSnippet: 'CREATE TABLE Students (\n    matric_no VARCHAR(20) PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    gpa NUMERIC(3,2) CHECK (gpa >= 0.0 AND gpa <= 5.0)\n);',
    relatedConcepts: ['DBMS', 'SQL', 'PostgreSQL', 'ACID', 'Table']
  },
  {
    id: 'term-dataset',
    term: 'Dataset',
    category: 'Data Science',
    simpleDefinition: 'A collection of related data, usually arranged in rows (individual records) and columns (attributes or variables).',
    technicalDefinition: 'A curated collection of observations corresponding to one or more tables or tabular matrices, often accompanied by metadata defining column types, provenance, and sampling methodology.',
    example: 'A CSV spreadsheet containing 5,000 retail sales transactions across product categories, order dates, prices, and customer locations.',
    codeSnippet: 'import pandas as pd\ndf = pd.read_csv("ecommerce_sales.csv")\nprint(df.info()) # prints column names, non-null counts, and data types',
    relatedConcepts: ['DataFrame', 'Exploratory Data Analysis', 'Features', 'Observations']
  },
  {
    id: 'term-dataframe',
    term: 'DataFrame',
    category: 'Data Analysis',
    simpleDefinition: 'A two-dimensional, spreadsheet-like data structure in programming languages like Python (Pandas) or R.',
    technicalDefinition: 'A heterogeneous, two-dimensional labeled data structure with columns of potentially different types, supported by index alignments and vectorized mathematical methods.',
    example: 'In Pandas, creating a DataFrame from a dictionary of lists to analyze student study hours and scores.',
    codeSnippet: 'import pandas as pd\ndf = pd.DataFrame({\n    "student": ["Alice", "Bob", "Charlie"],\n    "hours": [15.5, 8.0, 22.0],\n    "score": [88, 62, 95]\n})\nprint(df[df["score"] >= 80])',
    relatedConcepts: ['Pandas', 'Series', 'Vectorization', 'Data Cleaning']
  },
  {
    id: 'term-firewall',
    term: 'Firewall',
    category: 'Cybersecurity',
    simpleDefinition: 'A digital security barrier that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
    technicalDefinition: 'A network security device or software system that monitors packet headers and states across OSI layers 3, 4, or 7, inspecting IP addresses, ports, and protocols to permit or deny packet transit based on an access control list (ACL).',
    example: 'A company firewall blocks all external inbound traffic to port 22 (SSH) except from authorized corporate VPN IP addresses.',
    codeSnippet: '# Linux iptables firewall rule\nsudo iptables -A INPUT -p tcp --dport 22 -s 192.168.1.50 -j ACCEPT\nsudo iptables -A INPUT -p tcp --dport 22 -j DROP',
    relatedConcepts: ['Network Security', 'Packet Filtering', 'IP Address', 'Ports', 'Zero Trust']
  },
  {
    id: 'term-function',
    term: 'Function',
    category: 'Programming',
    simpleDefinition: 'A reusable block of code that performs a specific task and optionally returns a result.',
    technicalDefinition: 'A callable subroutine or computational unit that encapsulates statements, accepts parameterized inputs (arguments), executes a scope-isolated stack frame, and optionally yields a return value.',
    example: 'A function that takes a temperature in Fahrenheit and converts it to Celsius.',
    codeSnippet: 'def fahrenheit_to_celsius(f):\n    """Converts Fahrenheit degrees to Celsius."""\n    return (f - 32) * 5.0 / 9.0\n\nprint(fahrenheit_to_celsius(98.6)) # Output: 37.0',
    relatedConcepts: ['Parameters', 'Return Value', 'Scope', 'Recursion', 'Call Stack']
  },
  {
    id: 'term-git',
    term: 'Git',
    category: 'Software Engineering',
    simpleDefinition: 'A tool that tracks every change made to computer code files over time, allowing teams to collaborate without overwriting each other’s work.',
    technicalDefinition: 'A distributed version control system (DVCS) that models repository history as a directed acyclic graph (DAG) of immutable cryptographic commit snapshots identified by SHA hashes.',
    example: 'Creating a new git branch called feature/payment-gateway to build Stripe integration without breaking the main production branch.',
    codeSnippet: 'git checkout -b feature/payment-gateway\ngit add .\ngit commit -m "feat: add stripe checkout webhook handler"\ngit push origin feature/payment-gateway',
    relatedConcepts: ['Version Control', 'GitHub', 'Branch', 'Commit', 'Merge Conflict']
  },
  {
    id: 'term-machine-learning',
    term: 'Machine Learning',
    category: 'Artificial Intelligence',
    simpleDefinition: 'Teaching computers to learn patterns and make predictions from data instead of writing fixed rules for every situation.',
    technicalDefinition: 'A subfield of artificial intelligence focused on algorithms that optimize mathematical performance metrics P on task T through empirical experience E without being explicitly programmed with deterministic logic.',
    example: 'An email filter that inspects millions of emails to automatically predict whether an incoming message is spam or legitimate.',
    codeSnippet: 'from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)',
    relatedConcepts: ['Supervised Learning', 'Training Set', 'Loss Function', 'Overfitting']
  },
  {
    id: 'term-normalization',
    term: 'Normalization',
    category: 'Databases',
    simpleDefinition: 'The process of organizing data in a database to prevent duplicate information and avoid data inconsistencies.',
    technicalDefinition: 'A formal relational design technique of decomposing relations with functional redundancies into smaller, well-structured relations (1NF, 2NF, 3NF, BCNF) to eliminate insertion, update, and deletion anomalies.',
    example: 'Separating customer address data into a dedicated Customers table instead of duplicating the address on every single order row.',
    codeSnippet: '-- Before (redundant): Orders(order_id, cust_name, cust_address, product, price)\n-- After 3NF: Orders(order_id, cust_id, product_id) + Customers(cust_id, name, address)',
    relatedConcepts: ['Relational Database', 'Functional Dependency', '3NF', 'Primary Key']
  },
  {
    id: 'term-query',
    term: 'Query',
    category: 'Databases',
    simpleDefinition: 'A question or request for information sent to a database to retrieve specific data records.',
    technicalDefinition: 'A declarative or procedural statement written in a structured query language (like SQL) parsed by the DBMS query optimizer into a relational algebra plan to filter, join, and aggregate records.',
    example: 'Querying all students who earned a GPA greater than 4.5 in the Computer Science department.',
    codeSnippet: 'SELECT name, matric_no, gpa\nFROM students\nWHERE department = \'Computer Science\' AND gpa >= 4.5\nORDER BY gpa DESC;',
    relatedConcepts: ['SQL', 'SELECT', 'Query Execution Plan', 'Indexing']
  },
  {
    id: 'term-regression',
    term: 'Regression',
    category: 'Data Science & Statistics',
    simpleDefinition: 'A statistical technique used to predict a continuous numerical value (like house price, salary, or temperature) based on one or more factors.',
    technicalDefinition: 'A supervised predictive modeling method estimating the conditional expectation of a continuous dependent target variable Y given independent predictor features X: Y = beta_0 + beta_1 * X + epsilon.',
    example: 'Predicting final exam score based on weekly study hours: Score = 35 + (2.8 * StudyHours).',
    codeSnippet: 'from sklearn.linear_model import LinearRegression\nreg = LinearRegression()\nreg.fit(X_study_hours, y_exam_scores)\npredicted_score = reg.predict([[15.0]])',
    relatedConcepts: ['Linear Regression', 'Correlation', 'Least Squares', 'Dependent Variable']
  },
  {
    id: 'term-repository',
    term: 'Repository (Repo)',
    category: 'Software Engineering',
    simpleDefinition: 'The digital project folder where all your code files, assets, and the complete history of all changes are saved.',
    technicalDefinition: 'A directory containing code files alongside a .git tracking database storing all commit objects, branch pointers, tags, and configuration manifests.',
    example: 'The TechStudy Hub repository hosted on GitHub containing all frontend React components, documentation, and automated tests.',
    codeSnippet: 'git clone https://github.com/organization/techstudy-hub.git\ncd techstudy-hub',
    relatedConcepts: ['Git', 'GitHub', 'Clone', 'Commit', 'Working Directory']
  },
  {
    id: 'term-sql',
    term: 'SQL (Structured Query Language)',
    category: 'Databases',
    simpleDefinition: 'The universal programming language used to talk to and query relational databases.',
    technicalDefinition: 'An ANSI standard declarative domain-specific language used for managing data held in a relational database management system (RDBMS) via Data Definition (DDL), Data Manipulation (DML), and Data Control (DCL) commands.',
    example: 'Finding the average salary by department across 50,000 employees.',
    codeSnippet: 'SELECT department_id, COUNT(*) as employee_count, AVG(salary) as average_pay\nFROM employees\nGROUP BY department_id\nHAVING AVG(salary) > 80000;',
    relatedConcepts: ['PostgreSQL', 'MySQL', 'Relational Database', 'DDL', 'DML']
  },
  {
    id: 'term-variable',
    term: 'Variable',
    category: 'Programming',
    simpleDefinition: 'A named container used in computer programming to store a piece of information that can change.',
    technicalDefinition: 'A symbolic identifier associated with a specific memory location possessing a data type that dictates the representation and valid operations on the stored bit pattern.',
    example: 'Storing a student’s current grade: student_grade = "A".',
    codeSnippet: 'let studentGPA: number = 3.85;\nconst universityName: string = "Faculty of Technology";',
    relatedConcepts: ['Data Type', 'Scope', 'Memory', 'Constants', 'Declaration']
  },
  {
    id: 'term-boolean',
    term: 'Boolean',
    category: 'Computer Science',
    simpleDefinition: 'A binary data type that can have only one of two possible values: True or False.',
    technicalDefinition: 'An algebraic data type named after George Boole that embodies the truth values of propositional logic, typically implemented as a single bit (0 or 1) in computing systems.',
    example: 'Checking whether a student has paid their laboratory fees: is_enrolled = True.',
    codeSnippet: 'is_graduated = True\nif is_graduated:\n    print("Eligible for certificate issuance.")',
    relatedConcepts: ['Logic Gates', 'Truth Table', 'Conditionals', 'Binary']
  },
  {
    id: 'term-recursion',
    term: 'Recursion',
    category: 'Algorithms',
    simpleDefinition: 'A programming technique where a function solves a problem by calling itself with smaller inputs until it reaches a base stop case.',
    technicalDefinition: 'A computational problem-solving method where the solution depends on solutions to smaller instances of the same problem, executing through recursive function invocations pushed onto the system call stack until a terminating base condition is met.',
    example: 'Computing the factorial of 5: 5! = 5 * 4! = 5 * 4 * 3 * 2 * 1 = 120.',
    codeSnippet: 'def factorial(n):\n    if n <= 1: return 1  # Base Case\n    return n * factorial(n - 1)  # Recursive Case',
    relatedConcepts: ['Base Case', 'Call Stack', 'Stack Overflow', 'Divide and Conquer']
  },
  {
    id: 'term-pointer',
    term: 'Pointer',
    category: 'Computer Science',
    simpleDefinition: 'A variable that stores the physical memory address of another variable rather than the actual data value itself.',
    technicalDefinition: 'A typed or untyped memory address reference in programming languages like C and C++ enabling direct random access, dynamic memory management, and pointer arithmetic.',
    example: 'A pointer variable ptr storing the hexadecimal memory address 0x7ffd52 of variable count.',
    codeSnippet: 'int count = 42;\nint *ptr = &count; // ptr holds memory address of count\n*ptr = 100;        // dereference ptr to change count directly',
    relatedConcepts: ['Memory Address', 'Dereferencing', 'Heap Memory', 'Segmentation Fault']
  },
  {
    id: 'term-thread',
    term: 'Thread',
    category: 'Operating Systems',
    simpleDefinition: 'A lightweight path of execution inside a computer program allowing multiple tasks to run simultaneously.',
    technicalDefinition: 'The smallest sequence of programmed instructions that can be managed independently by an operating system scheduler. Multiple threads within the same process share the process’s address space, open files, and heap memory, but possess independent program counters and stacks.',
    example: 'A modern web browser using one thread to download an image while another thread renders user keystrokes smoothly.',
    codeSnippet: 'import threading\n\ndef worker():\n    print("Task running in parallel thread")\n\nt = threading.Thread(target=worker)\nt.start()\nt.join()',
    relatedConcepts: ['Process', 'Concurrency', 'Race Condition', 'Mutex', 'Deadlock']
  },
  {
    id: 'term-index',
    term: 'Index (Database)',
    category: 'Databases',
    simpleDefinition: 'A book-index-like data structure that allows database queries to find specific records blazingly fast without scanning every single row.',
    technicalDefinition: 'An auxiliary data structure (most commonly a balanced B+ Tree or Hash Map) maintained by the RDBMS that maps key attribute values directly to storage page record pointers, reducing search complexity from O(N) sequential scans to O(log N).',
    example: 'Creating an index on the email column in a Users table containing 2,000,000 accounts so login lookups happen in 1 millisecond.',
    codeSnippet: 'CREATE INDEX idx_users_email ON users(email);',
    relatedConcepts: ['B-Tree', 'Sequential Scan', 'Query Optimization', 'EXPLAIN ANALYZE']
  },
  {
    id: 'term-neural-network',
    term: 'Neural Network',
    category: 'Deep Learning',
    simpleDefinition: 'A computing system inspired by the human brain that learns to recognize complex patterns in images, audio, text, and numbers.',
    technicalDefinition: 'A parameterized mathematical architecture composed of interconnected layers of artificial nodes (perceptrons) that compute linear combinations followed by non-linear activations, iteratively updated via backpropagation and gradient descent.',
    example: 'A neural network that takes raw pixel values of handwritten digits and accurately classifies them into numbers 0 through 9.',
    codeSnippet: 'import torch.nn as nn\nclass SimpleNet(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc1 = nn.Linear(784, 128)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(128, 10)\n    def forward(self, x):\n        return self.fc2(self.relu(self.fc1(x)))',
    relatedConcepts: ['Backpropagation', 'Activation Function', 'Deep Learning', 'PyTorch']
  },
  {
    id: 'term-asymptotic-complexity',
    term: 'Asymptotic Complexity',
    category: 'Computer Science',
    simpleDefinition: 'A way to describe how much time or memory an algorithm takes as the amount of input data grows massive.',
    technicalDefinition: 'The mathematical study of the limiting behavior of an algorithm’s resource execution functions as input parameter n approaches infinity, classified using Big-O (upper bound), Big-Omega (lower bound), and Big-Theta (tight bound).',
    example: 'Searching an unsorted phonebook takes linear time O(N), while searching an alphabetically ordered phonebook takes logarithmic time O(log N).',
    codeSnippet: '// O(1) Constant Time vs O(N^2) Quadratic Time\nfunction constantTime(arr) { return arr[0]; }\nfunction quadraticTime(arr) {\n    for (let i of arr) {\n        for (let j of arr) { /* O(N^2) operations */ }\n    }\n}',
    relatedConcepts: ['Big-O Notation', 'Time Complexity', 'Space Complexity', 'Algorithms']
  },
  {
    id: 'term-object-oriented-programming',
    term: 'Object-Oriented Programming (OOP)',
    category: 'Programming',
    simpleDefinition: 'A way of structuring computer code around real-world concepts ("objects") that have properties and behaviors.',
    technicalDefinition: 'A programming paradigm organized around objects that bundle data (fields/attributes) and code (methods/procedures), governed by four core pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism.',
    example: 'Creating a Student class with properties like name and matric_number, and a method calculate_gpa().',
    codeSnippet: 'class Student:\n    def __init__(self, name, matric_no):\n        self.name = name\n        self.matric_no = matric_no\n    def get_summary(self):\n        return f"{self.name} ({self.matric_no})"',
    relatedConcepts: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Class']
  },
  {
    id: 'term-cryptography',
    term: 'Cryptography',
    category: 'Cybersecurity',
    simpleDefinition: 'The mathematical art of scrambling information so that only authorized parties with the secret key can read it.',
    technicalDefinition: 'The study and practice of mathematical techniques for securing communication in the presence of adversarial third parties, providing Confidentiality, Data Integrity, Authentication, and Non-Repudiation.',
    example: 'Using AES-256 encryption to protect student financial aid records stored in the cloud.',
    codeSnippet: '# Hash comparison for secure passwords\nimport hashlib\nhashed = hashlib.sha256(b"SuperSecretPassword123").hexdigest()\nprint(hashed)',
    relatedConcepts: ['Encryption', 'Hashing', 'RSA', 'AES', 'Public Key']
  },
  {
    id: 'term-cross-validation',
    term: 'Cross-Validation (K-Fold)',
    category: 'Data Science',
    simpleDefinition: 'A method for testing how well a machine learning model will perform on new, unseen data by testing it on multiple different splits.',
    technicalDefinition: 'A statistical resampling procedure where a dataset is partitioned into k equal-sized folds; the model is trained on k-1 folds and validated on the remaining fold, repeating k times to compute an unbiased performance estimate.',
    example: '5-Fold cross-validation trains the model 5 times, using 80% for training and 20% for testing each cycle, then averages the 5 test accuracy scores.',
    codeSnippet: 'from sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5)\nprint(f"Mean Accuracy: {scores.mean():.3f} ± {scores.std():.3f}")',
    relatedConcepts: ['Overfitting', 'Train-Test Split', 'Generalization', 'Machine Learning']
  },
  {
    id: 'term-etl',
    term: 'ETL (Extract, Transform, Load)',
    category: 'Data Engineering',
    simpleDefinition: 'The process of taking data from multiple messy sources, cleaning it up into a standard format, and saving it into a data warehouse.',
    technicalDefinition: 'A data integration pipeline architecture where raw data is extracted from disparate operational systems, transformed (cleaned, aggregated, enriched, validated) according to business rules, and loaded into an analytical target store.',
    example: 'An nightly ETL script that downloads sales CSVs from 20 stores, converts all currencies to USD, deduplicates records, and inserts them into PostgreSQL.',
    codeSnippet: '# ETL conceptual pipeline\nraw_data = extract_from_api()\nclean_data = transform_and_validate(raw_data)\nload_into_data_warehouse(clean_data)',
    relatedConcepts: ['Data Warehouse', 'Data Pipeline', 'ELT', 'Pandas']
  },
  {
    id: 'term-cloud-computing',
    term: 'Cloud Computing',
    category: 'Cloud Computing',
    simpleDefinition: 'Renting computer power, storage, and databases over the internet instead of buying and maintaining physical server racks in an office.',
    technicalDefinition: 'The on-demand delivery of IT resources over the internet with pay-as-you-go pricing, categorized into IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service) across multi-tenant data centers.',
    example: 'Hosting TechStudy Hub on an auto-scaling cloud cluster with managed PostgreSQL rather than running a physical machine under a desk.',
    codeSnippet: '# Terraform provisioning an AWS S3 bucket\nresource "aws_s3_bucket" "course_assets" {\n  bucket = "techstudy-hub-assets-2026"\n}',
    relatedConcepts: ['AWS', 'IaaS', 'Virtual Machine', 'Serverless', 'Scalability']
  },
  {
    id: 'term-ci-cd',
    term: 'CI/CD (Continuous Integration / Continuous Delivery)',
    category: 'DevOps',
    simpleDefinition: 'Automating the testing and deployment of software code whenever a developer saves new changes.',
    technicalDefinition: 'A modern DevOps practice where code commits automatically trigger compilation, automated unit and integration tests, container builds, and deployment to staging or production environments without manual human intervention.',
    example: 'A GitHub Actions workflow that automatically runs test suites on every pull request, preventing buggy code from entering main.',
    codeSnippet: '# .github/workflows/ci.yml\nname: CI Pipeline\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install && npm test',
    relatedConcepts: ['DevOps', 'GitHub Actions', 'Docker', 'Automated Testing']
  },
  {
    id: 'term-acid',
    term: 'ACID Properties',
    category: 'Databases',
    simpleDefinition: 'Four crucial guarantees (Atomicity, Consistency, Isolation, Durability) that ensure database transactions process safely without corruption.',
    technicalDefinition: 'A set of transaction properties in relational DBMS architectures: Atomicity (all-or-nothing execution), Consistency (data invariants preserved), Isolation (concurrent execution equivalent to serial execution), and Durability (committed changes persist through crashes).',
    example: 'Transferring $100 between bank accounts: the withdrawal from account A and deposit to account B both succeed together or neither happens (Atomicity).',
    codeSnippet: 'BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
    relatedConcepts: ['Transaction', 'Relational Database', 'Isolation Levels', 'Rollback']
  }
];
