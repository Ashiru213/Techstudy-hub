import { Course } from '../types';

export const coursesData: Course[] = [
  // ==========================================
  // COMPUTER SCIENCE FUNDAMENTALS (15+ courses)
  // ==========================================
  {
    id: 'cs-intro-101',
    title: 'Introduction to Computer Science',
    code: 'CSC 101',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 1',
    difficulty: 'Beginner',
    duration: '8 weeks (32 hours)',
    rating: 4.8,
    enrolledCount: 3420,
    instructor: {
      name: 'Prof. David Adeleke',
      title: 'Head of Computer Science, Faculty of Technology'
    },
    shortDescription: 'Master the core foundational concepts of modern computing, binary architecture, software systems, and algorithmic thinking.',
    fullDescription: 'This academic foundation course introduces students to the principles of computing. Covering everything from binary number representation and logic gates to von Neumann computer architecture, operating system fundamentals, networks, and high-level programming paradigm abstractions.',
    learningObjectives: [
      'Understand binary, hexadecimal, and boolean logic systems.',
      'Explain how the CPU, memory, and storage communicate via system buses.',
      'Distinguish between procedural, functional, and object-oriented paradigms.',
      'Formulate algorithms using flowcharts and pseudocode.'
    ],
    prerequisites: ['Basic high school mathematics', 'Curiosity about computing'],
    technologies: ['Binary', 'Logic Gates', 'Pseudocode', 'Python Basics'],
    modules: [
      {
        id: 'mod-1',
        title: 'Binary Representation & Boolean Logic',
        description: 'How computers encode text, numbers, and logic.',
        lessons: [
          { id: 'les-1-1', title: 'Bits, Bytes, and Hexadecimal Number Systems', duration: '25 min', type: 'reading', content: 'Computers use binary states (0 and 1) to represent information using transistors...' },
          { id: 'les-1-2', title: 'Logic Gates: AND, OR, NOT, XOR Truth Tables', duration: '40 min', type: 'lab', content: 'Constructing half-adders and full-adders from logic gates...' },
          { id: 'les-1-3', title: 'Data Representation: Two-Complement and Floating Point', duration: '30 min', type: 'reading' }
        ]
      },
      {
        id: 'mod-2',
        title: 'Computer Architecture & The OS',
        description: 'Von Neumann model, instruction cycles, and kernel processes.',
        lessons: [
          { id: 'les-2-1', title: 'The Fetch-Decode-Execute Cycle of the CPU', duration: '35 min', type: 'reading' },
          { id: 'les-2-2', title: 'Memory Hierarchy: Registers, Cache, RAM, and Disk', duration: '30 min', type: 'reading' },
          { id: 'les-2-3', title: 'Operating System Kernels and Memory Management', duration: '45 min', type: 'lab' }
        ]
      },
      {
        id: 'mod-3',
        title: 'Algorithmic Thinking & Problem Formulation',
        description: 'Designing structured computational solutions.',
        lessons: [
          { id: 'les-3-1', title: 'Pseudocode Standards and Flowcharting', duration: '30 min', type: 'reading' },
          { id: 'les-3-2', title: 'Introduction to Asymptotic Growth (Big-O Basics)', duration: '45 min', type: 'lab' }
        ]
      }
    ],
    practiceQuestions: [
      {
        question: 'Convert the binary number 10110101 to decimal and hexadecimal.',
        answer: 'Decimal: 181, Hexadecimal: B5',
        explanation: '1*128 + 0*64 + 1*32 + 1*16 + 0*8 + 1*4 + 0*2 + 1*1 = 181. In hex, 1011 = B (11), 0101 = 5, yielding B5.'
      },
      {
        question: 'What is the role of the Program Counter (PC) in the CPU?',
        answer: 'It stores the memory address of the next machine instruction to be fetched and executed.',
        explanation: 'During the instruction cycle, the CPU fetches the instruction at the address currently pointed to by the PC, then increments the PC.'
      }
    ]
  },
  {
    id: 'cs-data-structures-201',
    title: 'Data Structures and Algorithms',
    code: 'CSC 201',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '10 weeks (45 hours)',
    rating: 4.9,
    enrolledCount: 5210,
    instructor: {
      name: 'Dr. Elena Rostova',
      title: 'Associate Professor of Theoretical Computer Science'
    },
    shortDescription: 'Comprehensive study of arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting, and algorithmic complexity.',
    fullDescription: 'CSC 201 is the bedrock of computing education. Students learn both memory-level layout and mathematical complexity for essential abstract data types (ADTs), implementing linear and non-linear data structures in C++ and Python.',
    learningObjectives: [
      'Implement singly, doubly, and circular linked lists with pointer arithmetic.',
      'Analyze worst, best, and average time/space complexities with Big-O notation.',
      'Construct Binary Search Trees, AVL Trees, and Min/Max Heaps.',
      'Apply Breadth-First and Depth-First traversal algorithms to solve graph problems.'
    ],
    prerequisites: ['CSC 101 Introduction to CS', 'Proficiency in Python or C++'],
    technologies: ['C++', 'Python', 'Algorithms', 'Big-O'],
    modules: [
      {
        id: 'mod-ds-1',
        title: 'Linear Data Structures',
        description: 'Contiguous arrays vs node-based linked references.',
        lessons: [
          { id: 'ds-1-1', title: 'Dynamic Arrays and Amortized Time Complexity', duration: '35 min', type: 'reading' },
          { id: 'ds-1-2', title: 'Singly and Doubly Linked Lists Implementation', duration: '50 min', type: 'lab' },
          { id: 'ds-1-3', title: 'Stacks & Queues: Ring Buffers and Monotonic Deques', duration: '40 min', type: 'lab' }
        ]
      },
      {
        id: 'mod-ds-2',
        title: 'Hierarchical & Tree Structures',
        description: 'Tree traversals, binary search trees, and balance factors.',
        lessons: [
          { id: 'ds-2-1', title: 'Binary Trees & Pre-order, In-order, Post-order Traversals', duration: '45 min', type: 'reading' },
          { id: 'ds-2-2', title: 'Self-Balancing AVL Trees and Red-Black Trees', duration: '60 min', type: 'lab' },
          { id: 'ds-2-3', title: 'Binary Heaps and Priority Queue Operations', duration: '45 min', type: 'lab' }
        ]
      },
      {
        id: 'mod-ds-3',
        title: 'Graphs and Network Algorithms',
        description: 'Adjacency representations, shortest paths, and spanning trees.',
        lessons: [
          { id: 'ds-3-1', title: 'Adjacency Matrix vs Adjacency List Representations', duration: '30 min', type: 'reading' },
          { id: 'ds-3-2', title: 'BFS, DFS, and Topological Sort', duration: '55 min', type: 'lab' },
          { id: 'ds-3-3', title: "Dijkstra's and Bellman-Ford Shortest Path", duration: '60 min', type: 'lab' }
        ]
      }
    ],
    practiceQuestions: [
      {
        question: 'What is the worst-case lookup time in an unbalanced Binary Search Tree versus an AVL Tree?',
        answer: 'Unbalanced BST: O(N); AVL Tree: O(log N).',
        explanation: 'If items are inserted in sorted order, an unbalanced BST degenerates into a singly linked list with height N. AVL trees enforce balance, guaranteeing O(log N) operations.'
      }
    ]
  },
  {
    id: 'cs-operating-systems-202',
    title: 'Operating Systems Architecture',
    code: 'CSC 202',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (36 hours)',
    rating: 4.7,
    enrolledCount: 2980,
    instructor: {
      name: 'Dr. Marcus Vance',
      title: 'Systems & Kernel Specialist'
    },
    shortDescription: 'Deep dive into concurrency, process scheduling, virtual memory, paging, file systems, and synchronization primitives.',
    fullDescription: 'Explore the fundamental bridge between physical hardware and user applications. Learn how kernel space executes privileged instructions, manages virtual address spaces via Translation Lookaside Buffers (TLB), avoids deadlocks, and coordinates POSIX threads.',
    learningObjectives: [
      'Understand context switching, PCB structures, and CPU scheduling algorithms.',
      'Implement semaphores, mutexes, and monitors to prevent race conditions.',
      'Explain virtual memory, page fault handling, and replacement policies.',
      'Evaluate file system disk block allocation and inode structures.'
    ],
    prerequisites: ['CSC 101', 'CSC 201'],
    technologies: ['C', 'Linux Kernel', 'POSIX Threads', 'GDB'],
    modules: [
      {
        id: 'os-1',
        title: 'Processes, Threads & Concurrency',
        description: 'Process state machine and multithreading synchronization.',
        lessons: [
          { id: 'os-1-1', title: 'Process Control Blocks (PCB) and Context Switching', duration: '40 min', type: 'reading' },
          { id: 'os-1-2', title: 'Mutual Exclusion: Mutexes, Semaphores, and Deadlock', duration: '60 min', type: 'lab' }
        ]
      },
      {
        id: 'os-2',
        title: 'Memory Management & Virtual Memory',
        description: 'Paging, segmentation, and page replacement strategies.',
        lessons: [
          { id: 'os-2-1', title: 'Virtual Address Translation and TLB Caches', duration: '45 min', type: 'reading' },
          { id: 'os-2-2', title: 'Page Replacement Algorithms (LRU, FIFO, Clock)', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-comp-org-102',
    title: 'Computer Organization & Architecture',
    code: 'CSC 102',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 1',
    difficulty: 'Intermediate',
    duration: '8 weeks (30 hours)',
    rating: 4.6,
    enrolledCount: 2150,
    instructor: { name: 'Dr. Samuel Kalu', title: 'Computer Engineering Faculty' },
    shortDescription: 'Instruction set architecture (RISC vs CISC), ALU design, pipelining, cache memory, and microcode.',
    fullDescription: 'Gain architectural mastery over processor pipelines, hazards, cache coherence protocols, and assembly language programming (MIPS/RISC-V).',
    learningObjectives: ['Write assembly routines for arithmetic and branch loops', 'Identify pipeline data and control hazards', 'Calculate direct-mapped and set-associative cache hit ratios'],
    prerequisites: ['CSC 101'],
    technologies: ['RISC-V', 'MIPS', 'Digital Logic', 'Assembly'],
    modules: [
      {
        id: 'arch-1',
        title: 'Instruction Set Architectures',
        description: 'MIPS registers and assembly instruction types.',
        lessons: [
          { id: 'arch-1-1', title: 'R-Type, I-Type, and J-Type Instructions', duration: '40 min', type: 'reading' },
          { id: 'arch-1-2', title: 'Simulating Assembly Execution in RARS', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-theory-computation-302',
    title: 'Theory of Computation & Automata',
    code: 'CSC 302',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '9 weeks (38 hours)',
    rating: 4.7,
    enrolledCount: 1840,
    instructor: { name: 'Prof. David Adeleke', title: 'Professor of Computing' },
    shortDescription: 'Finite automata (DFA/NFA), regular expressions, context-free grammars, Turing machines, and decidability.',
    fullDescription: 'Explore the theoretical boundaries of what computers can compute. Trace the Chomsky hierarchy, prove undecidability of the Halting Problem, and understand P vs NP complexity classes.',
    learningObjectives: ['Design Deterministic and Nondeterministic Finite Automata', 'Convert Regular Expressions to NFAs using Thompson construction', 'Construct Turing machine transition tables for language recognition'],
    prerequisites: ['Discrete Mathematics', 'CSC 201'],
    technologies: ['Formal Grammars', 'Automata', 'Turing Machines'],
    modules: [
      {
        id: 'toc-1',
        title: 'Regular Languages and Finite Automata',
        description: 'DFA, NFA, and equivalence proofs.',
        lessons: [
          { id: 'toc-1-1', title: 'DFA Formal 5-Tuple Definition and State Diagrams', duration: '35 min', type: 'reading' },
          { id: 'toc-1-2', title: 'The Pumping Lemma for Regular Languages', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-compiler-design-401',
    title: 'Compiler Design and Construction',
    code: 'CSC 401',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 4',
    difficulty: 'Advanced',
    duration: '10 weeks (42 hours)',
    rating: 4.9,
    enrolledCount: 1450,
    instructor: { name: 'Dr. Elena Rostova', title: 'Associate Professor' },
    shortDescription: 'Lexical analysis, LL/LR parsing, abstract syntax trees, semantic checks, intermediate code generation, and optimizations.',
    fullDescription: 'Learn how programming languages come alive. Write a lexer, build recursive descent and bottom-up LR parsers, emit three-address code, and apply dead-code elimination.',
    learningObjectives: ['Implement lexer token generators using regular expressions', 'Construct Abstract Syntax Trees (AST)', 'Emit Three-Address Code and apply register allocation'],
    prerequisites: ['CSC 302 Theory of Computation', 'CSC 201'],
    technologies: ['Flex', 'Bison', 'LLVM', 'C++'],
    modules: [
      {
        id: 'comp-1',
        title: 'Lexical & Syntax Analysis',
        description: 'From characters to tokens and parse trees.',
        lessons: [
          { id: 'comp-1-1', title: 'Tokenization and Finite State Lexers', duration: '40 min', type: 'reading' },
          { id: 'comp-1-2', title: 'LL(1) First and Follow Sets Calculation', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-discrete-math-103',
    title: 'Discrete Mathematics for Computing',
    code: 'MTH 103',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 1',
    difficulty: 'Beginner',
    duration: '8 weeks (34 hours)',
    rating: 4.8,
    enrolledCount: 4100,
    instructor: { name: 'Prof. Amara Chen', title: 'Faculty of Pure Mathematics' },
    shortDescription: 'Propositional logic, set theory, induction, relations, functions, graph theory, and combinatorics.',
    fullDescription: 'Build the rigorous mathematical reasoning essential for writing correct algorithms and formal software specifications.',
    learningObjectives: ['Construct formal mathematical proofs using direct, contrapositive, and induction methods', 'Model distributed networks with directed graphs and trees'],
    prerequisites: ['Secondary school algebra'],
    technologies: ['Propositional Logic', 'Graph Theory', 'Combinatorics'],
    modules: [
      {
        id: 'dm-1',
        title: 'Logic and Proof Techniques',
        description: 'Truth tables, predicates, and induction.',
        lessons: [
          { id: 'dm-1-1', title: 'Predicate Calculus and Quantifiers', duration: '35 min', type: 'reading' },
          { id: 'dm-1-2', title: 'Mathematical Induction and Structural Induction', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-distributed-systems-403',
    title: 'Distributed Systems & Cloud Architecture',
    code: 'CSC 403',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 4',
    difficulty: 'Advanced',
    duration: '10 weeks (40 hours)',
    rating: 4.9,
    enrolledCount: 2200,
    instructor: { name: 'Dr. Marcus Vance', title: 'Distributed Systems Architect' },
    shortDescription: 'CAP theorem, consensus protocols (Raft, Paxos), vector clocks, RPCs, microservices, and fault tolerance.',
    fullDescription: 'Design resilient systems that scale across thousands of nodes without single points of failure.',
    learningObjectives: ['Analyze trade-offs between Consistency, Availability, and Partition Tolerance', 'Implement leader election and log replication with Raft'],
    prerequisites: ['CSC 202 Operating Systems', 'Computer Networks'],
    technologies: ['gRPC', 'Raft Consensus', 'Docker', 'Redis'],
    modules: [
      {
        id: 'dist-1',
        title: 'Consensus & Coordination',
        description: 'How nodes agree in asynchronous networks.',
        lessons: [
          { id: 'dist-1-1', title: 'The Fallacies of Distributed Computing & CAP Theorem', duration: '35 min', type: 'reading' },
          { id: 'dist-1-2', title: 'Raft Consensus Algorithm: Elections and Log Replication', duration: '60 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-computational-thinking-100',
    title: 'Computational Thinking & Logic',
    code: 'CSC 100',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '4 weeks (16 hours)',
    rating: 4.9,
    enrolledCount: 6120,
    instructor: { name: 'Prof. David Adeleke', title: 'Lead Educator' },
    shortDescription: 'Decomposition, pattern recognition, abstraction, and step-by-step algorithm design for absolute beginners.',
    fullDescription: 'Demystify how programmers and computer scientists break down massive problems into elegant, manageable procedural steps.',
    learningObjectives: ['Deconstruct complex real-world workflows into modular sub-tasks', 'Identify algorithmic patterns across diverse domains'],
    prerequisites: ['No prior experience required'],
    technologies: ['Logic Models', 'Visual Flowcharts', 'Scratch/Python'],
    modules: [
      {
        id: 'ct-1',
        title: 'The Four Pillars of Computational Thinking',
        description: 'Decomposition, Pattern Recognition, Abstraction, Algorithm Design.',
        lessons: [
          { id: 'ct-1-1', title: 'Decomposition: Dissecting Massive Problems', duration: '20 min', type: 'reading' },
          { id: 'ct-1-2', title: 'Building Your First Algorithm Flowchart', duration: '30 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-crypto-security-405',
    title: 'Applied Cryptography and Security',
    code: 'CSC 405',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Year 4',
    difficulty: 'Advanced',
    duration: '8 weeks (34 hours)',
    rating: 4.8,
    enrolledCount: 1720,
    instructor: { name: 'Dr. Tariq Al-Mansoor', title: 'Cryptographic Security Researcher' },
    shortDescription: 'Symmetric & asymmetric ciphers, SHA hashing, digital signatures, RSA, Elliptic Curves, and zero-knowledge concepts.',
    fullDescription: 'Theoretical and applied cryptographic constructions that safeguard modern web commerce, cryptocurrencies, and military communications.',
    learningObjectives: ['Implement AES block cipher modes and HMAC message integrity', 'Perform RSA key generation and Diffie-Hellman key exchange'],
    prerequisites: ['MTH 103 Discrete Math', 'CSC 201'],
    technologies: ['OpenSSL', 'RSA', 'ECC', 'Python Cryptography'],
    modules: [
      {
        id: 'crypto-1',
        title: 'Symmetric Ciphers & Hash Functions',
        description: 'AES, Galois Counter Mode, and collision resistance.',
        lessons: [
          { id: 'crypto-1-1', title: 'Block Ciphers vs Stream Ciphers (AES-256-GCM)', duration: '40 min', type: 'reading' },
          { id: 'crypto-1-2', title: 'Cryptographic Hashes and SHA-256 Merkle Trees', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-parallel-computing-408',
    title: 'Parallel & High-Performance Computing',
    code: 'CSC 408',
    category: 'Computer Science',
    department: 'Computer Science',
    level: 'Final Year',
    difficulty: 'Advanced',
    duration: '8 weeks (32 hours)',
    rating: 4.7,
    enrolledCount: 1190,
    instructor: { name: 'Dr. Marcus Vance', title: 'Systems Architect' },
    shortDescription: 'Multi-core OpenMP, MPI distributed message passing, GPU programming with CUDA, and cache synchronization.',
    fullDescription: 'Harness supercomputing clusters and modern multi-GPU accelerators to process massive scientific simulations.',
    learningObjectives: ['Write thread-parallel programs with OpenMP directives', 'Distribute compute jobs across nodes with MPI'],
    prerequisites: ['CSC 201', 'C/C++ proficiency'],
    technologies: ['C++', 'CUDA', 'OpenMP', 'MPI'],
    modules: [
      {
        id: 'hpc-1',
        title: 'Shared Memory Multiprocessing',
        description: 'OpenMP threads and memory coherency.',
        lessons: [
          { id: 'hpc-1-1', title: 'Amdahl’s Law and Gustafson’s Law in Practice', duration: '30 min', type: 'reading' },
          { id: 'hpc-1-2', title: 'Parallelizing Matrix Multiplication with OpenMP', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-system-analysis-303',
    title: 'System Analysis and Design',
    code: 'CSC 303',
    category: 'Computer Science',
    department: 'Software Engineering',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.7,
    enrolledCount: 2310,
    instructor: { name: 'Dr. Sarah Mitchell', title: 'Enterprise Solutions Consultant' },
    shortDescription: 'UML diagrams, data flow modeling, requirements engineering, object-oriented design patterns, and case studies.',
    fullDescription: 'Bridge user business requirements with technical architectural design. Master Class diagrams, Sequence diagrams, and structural design patterns.',
    learningObjectives: ['Design complete UML 2.0 system blueprints', 'Translate functional requirements into data models'],
    prerequisites: ['CSC 201'],
    technologies: ['UML', 'Draw.io', 'Lucidchart', 'Design Patterns'],
    modules: [
      {
        id: 'sad-1',
        title: 'Requirements & Architectural Modeling',
        description: 'Use Cases, Sequence diagrams, and Activity diagrams.',
        lessons: [
          { id: 'sad-1-1', title: 'Use Case Modeling and Actor Identification', duration: '30 min', type: 'reading' },
          { id: 'sad-1-2', title: 'Drafting Sequence Diagrams for Microservice Workflows', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-devops-fundamentals-306',
    title: 'DevOps & CI/CD Fundamentals',
    code: 'CSC 306',
    category: 'Computer Science',
    department: 'Software Engineering',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '6 weeks (26 hours)',
    rating: 4.8,
    enrolledCount: 3890,
    instructor: { name: 'Tariq Al-Mansoor', title: 'DevOps & SRE Specialist' },
    shortDescription: 'Docker containers, GitHub Actions pipelines, Kubernetes orchestration, infrastructure as code, and observability.',
    fullDescription: 'Bridge software development and IT operations through automated test suites, containerization, and continuous delivery.',
    learningObjectives: ['Containerize multi-tier web applications with Docker', 'Author robust automated GitHub Actions pipelines', 'Deploy scalable workloads on Kubernetes clusters'],
    prerequisites: ['Git basics', 'Linux terminal'],
    technologies: ['Docker', 'GitHub Actions', 'Kubernetes', 'Terraform'],
    modules: [
      {
        id: 'devops-1',
        title: 'Containerization & Automation',
        description: 'Dockerfiles, multi-stage builds, and CI pipelines.',
        lessons: [
          { id: 'devops-1-1', title: 'Docker Containers vs Hypervisor Virtual Machines', duration: '30 min', type: 'reading' },
          { id: 'devops-1-2', title: 'Writing Production Multi-Stage Dockerfiles', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-software-testing-308',
    title: 'Software Testing & Quality Assurance',
    code: 'CSC 308',
    category: 'Computer Science',
    department: 'Software Engineering',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '6 weeks (24 hours)',
    rating: 4.6,
    enrolledCount: 2040,
    instructor: { name: 'Dr. Sarah Mitchell', title: 'Senior QA Architect' },
    shortDescription: 'Unit testing, integration testing, end-to-end automation with Playwright/Jest, test-driven development (TDD), and performance profiling.',
    fullDescription: 'Discover how top engineering organizations eliminate bugs, ensure code reliability, and maintain continuous release velocity.',
    learningObjectives: ['Write comprehensive unit tests with mocks and stubs', 'Practice Test-Driven Development (Red-Green-Refactor)', 'Run automated end-to-end browser tests'],
    prerequisites: ['Proficiency in Python or JavaScript'],
    technologies: ['Jest', 'PyTest', 'Playwright', 'TDD'],
    modules: [
      {
        id: 'test-1',
        title: 'Test-Driven Development (TDD)',
        description: 'Unit testing principles, assertions, and mocks.',
        lessons: [
          { id: 'test-1-1', title: 'The Test Pyramid: Unit, Integration, and E2E', duration: '30 min', type: 'reading' },
          { id: 'test-1-2', title: 'Practicing TDD with PyTest or Jest', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'cs-agile-git-205',
    title: 'Agile Software Engineering & Git',
    code: 'CSC 205',
    category: 'Computer Science',
    department: 'Software Engineering',
    level: 'Year 2',
    difficulty: 'Beginner',
    duration: '5 weeks (20 hours)',
    rating: 4.9,
    enrolledCount: 5800,
    instructor: { name: 'Dr. Sarah Mitchell', title: 'Agile Coach & Lead' },
    shortDescription: 'Scrum, Kanban, Git branch workflows, pull request reviews, issue tracking, and team collaboration best practices.',
    fullDescription: 'Essential professional collaboration toolkit for student engineers preparing for real-world software internships.',
    learningObjectives: ['Master Git branching, rebasing, and merge conflict resolution', 'Organize sprints with Jira/GitHub Projects'],
    prerequisites: ['Basic command line familiarity'],
    technologies: ['Git', 'GitHub', 'Kanban', 'Scrum'],
    modules: [
      {
        id: 'git-1',
        title: 'Version Control Mastery',
        description: 'Commits, trees, rebasing, and GitHub collaboration.',
        lessons: [
          { id: 'git-1-1', title: 'Git Plumbing & Porcelain: How Objects Are Stored', duration: '35 min', type: 'reading' },
          { id: 'git-1-2', title: 'Simulating Team Pull Requests & Merge Conflict Fixing', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // DATA ANALYSIS CATEGORY (10+ courses)
  // ==========================================
  {
    id: 'da-intro-fundamentals',
    title: 'Data Analysis Fundamentals',
    code: 'DAT 101',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 1',
    difficulty: 'Beginner',
    duration: '6 weeks (24 hours)',
    rating: 4.9,
    enrolledCount: 7100,
    instructor: { name: 'Maya Lin', title: 'Senior Data Analyst' },
    shortDescription: 'Learn the end-to-end data analysis lifecycle: data collection, cleaning, exploratory data analysis, and executive storytelling.',
    fullDescription: 'This comprehensive course equips beginners with core analytical instincts. Understand raw data types, formulate business hypotheses, identify missing data anomalies, calculate central tendencies, and turn raw tables into clear strategic decisions.',
    learningObjectives: [
      'Define the 6 phases of the modern data analysis workflow.',
      'Identify and remediate data quality issues like duplicates and outliers.',
      'Perform Exploratory Data Analysis (EDA) to uncover distribution shapes.',
      'Structure executive data presentations with data-backed recommendations.'
    ],
    prerequisites: ['Basic computer skills', 'No coding required'],
    technologies: ['Data Cleaning', 'EDA', 'Descriptive Stats', 'Reporting'],
    modules: [
      {
        id: 'da-fund-1',
        title: 'The Data Analysis Workflow',
        description: 'Ask, Prepare, Process, Analyze, Share, and Act.',
        lessons: [
          { id: 'da-f-1', title: 'Framing Analytical Business Questions', duration: '25 min', type: 'reading' },
          { id: 'da-f-2', title: 'Data Cleaning: Handling Missing Values & Duplicates', duration: '45 min', type: 'lab' }
        ]
      }
    ],
    practiceQuestions: [
      {
        question: 'When should you prefer the Median over the Mean as a measure of central tendency?',
        answer: 'When the dataset has significant skewness or extreme outliers.',
        explanation: 'The mean is pulled heavily by extreme outliers (e.g. CEO salaries in income analysis), whereas the median represents the exact 50th percentile.'
      }
    ]
  },
  {
    id: 'da-excel-mastery',
    title: 'Excel for Data Analysis & Business Intelligence',
    code: 'DAT 105',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '7 weeks (28 hours)',
    rating: 4.9,
    enrolledCount: 9400,
    instructor: { name: 'Maya Lin', title: 'Senior Data Analyst' },
    shortDescription: 'Master XLOOKUP, INDEX/MATCH, dynamic array functions, Pivot Tables, Power Query, conditional formatting, and interactive KPI dashboards.',
    fullDescription: 'Spreadsheet mastery is the #1 tool demanded by corporate employers. Learn how to transform messy spreadsheet exports into automated analytical dashboards.',
    learningObjectives: [
      'Utilize XLOOKUP, SUMIFS, COUNTIFS, and nested logic formulas.',
      'Automate data ingest and transformation with Excel Power Query (M).',
      'Create multi-dimensional Pivot Tables with slicers and calculated fields.',
      'Design clean, corporate-grade interactive executive dashboards.'
    ],
    prerequisites: ['Basic familiarization with spreadsheets'],
    technologies: ['Microsoft Excel', 'Power Query', 'Pivot Tables', 'XLOOKUP'],
    modules: [
      {
        id: 'xls-1',
        title: 'Formulas & Dynamic Lookups',
        description: 'Core calculation formulas for daily business analysis.',
        lessons: [
          { id: 'xls-1-1', title: 'Modern Lookups: XLOOKUP vs INDEX/MATCH', duration: '35 min', type: 'reading' },
          { id: 'xls-1-2', title: 'Building Dynamic Array Formulas (FILTER, UNIQUE, SORT)', duration: '45 min', type: 'lab' }
        ]
      },
      {
        id: 'xls-2',
        title: 'Pivot Tables & Dashboard Design',
        description: 'Slicers, timelines, and visual KPI cards.',
        lessons: [
          { id: 'xls-2-1', title: 'Building Multi-Metric Pivot Tables & Calculated Fields', duration: '40 min', type: 'lab' },
          { id: 'xls-2-2', title: 'Designing an Executive Sales KPI Dashboard in Excel', duration: '60 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-sql-data-analysis',
    title: 'SQL for Data Analysis & Reporting',
    code: 'DAT 201',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (32 hours)',
    rating: 4.9,
    enrolledCount: 8350,
    instructor: { name: 'Kweku Mensah', title: 'Data Engineer & Analytics Specialist' },
    shortDescription: 'Master SELECT queries, complex multi-table JOINs, GROUP BY aggregations, CTEs, window functions, and real-world cohort analysis.',
    fullDescription: 'SQL is the universal language of data. Learn how to extract, slice, summarize, and rank multi-million-row corporate database tables with PostgreSQL and MySQL.',
    learningObjectives: [
      'Write clean SQL queries with WHERE, HAVING, GROUP BY, and ORDER BY.',
      'Execute INNER, LEFT, RIGHT, and FULL OUTER JOINs without duplicate inflation.',
      'Calculate running totals, moving averages, and ranks with Window Functions.',
      'Structure complex queries using Common Table Expressions (CTEs).'
    ],
    prerequisites: ['DAT 101 or basic spreadsheet familiarity'],
    technologies: ['PostgreSQL', 'SQL', 'Window Functions', 'CTEs'],
    modules: [
      {
        id: 'sql-1',
        title: 'Querying and Filtering Data',
        description: 'Foundations of relational database querying.',
        lessons: [
          { id: 'sql-1-1', title: 'SELECT, WHERE, IN, LIKE, and NULL evaluations', duration: '30 min', type: 'reading' },
          { id: 'sql-1-2', title: 'Aggregating Metrics with SUM, AVG, and GROUP BY / HAVING', duration: '45 min', type: 'lab' }
        ]
      },
      {
        id: 'sql-2',
        title: 'Advanced Analytics with Window Functions',
        description: 'ROW_NUMBER, RANK, DENSE_RANK, LAG, and LEAD.',
        lessons: [
          { id: 'sql-2-1', title: 'Partitioning and Ordering Over Window Frames', duration: '50 min', type: 'lab' },
          { id: 'sql-2-2', title: 'Cohort Retention and Month-over-Month Growth Calculation', duration: '60 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-python-pandas-analysis',
    title: 'Python for Data Analysis: NumPy & Pandas',
    code: 'DAT 205',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (35 hours)',
    rating: 4.9,
    enrolledCount: 6900,
    instructor: { name: 'Dr. Priya Sharma', title: 'Senior Data Scientist' },
    shortDescription: 'Master Pandas DataFrames, NumPy vectorization, data wrangling, missing data imputation, groupby transformations, and time series.',
    fullDescription: 'Elevate your analytical power beyond spreadsheet limitations. Learn to ingest messy CSVs, JSON, and SQL dumps into Pandas DataFrames, clean millions of rows in seconds, and execute exploratory data analyses.',
    learningObjectives: [
      'Perform vectorized array computations with NumPy arrays.',
      'Filter, slice, reshape (melt/pivot), and merge Pandas DataFrames.',
      'Clean dates, strings, and categorical columns efficiently.',
      'Extract statistical trends using groupby aggregations and lambda functions.'
    ],
    prerequisites: ['Basic Python fundamentals'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
    modules: [
      {
        id: 'pda-1',
        title: 'NumPy & Pandas Foundations',
        description: 'Vectorized computing and Series / DataFrames.',
        lessons: [
          { id: 'pda-1-1', title: 'NumPy Arrays, Broadcasting, and Slicing', duration: '35 min', type: 'reading' },
          { id: 'pda-1-2', title: 'Pandas DataFrames: Indexing, loc, and iloc', duration: '50 min', type: 'lab' }
        ]
      },
      {
        id: 'pda-2',
        title: 'Data Wrangling & Transformation',
        description: 'Handling null values, regex string cleanup, and merges.',
        lessons: [
          { id: 'pda-2-1', title: 'Dealing with Missing Data: Imputation vs Drop Strategies', duration: '40 min', type: 'lab' },
          { id: 'pda-2-2', title: 'Reshaping Data: Pivot Tables, Melts, and Concat', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-power-bi-dashboards',
    title: 'Power BI: Interactive Visualizations & DAX',
    code: 'DAT 210',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '6 weeks (26 hours)',
    rating: 4.8,
    enrolledCount: 5120,
    instructor: { name: 'Maya Lin', title: 'BI Consultant' },
    shortDescription: 'Build professional enterprise dashboards with Microsoft Power BI, star schema data modeling, and DAX calculations.',
    fullDescription: 'Learn how corporate enterprises transform business data into live interactive dashboards. Model dimensional schemas and write DAX measures for Year-over-Year calculations.',
    learningObjectives: [
      'Model star schemas with Fact and Dimension tables.',
      'Write DAX measures using CALCULATE, FILTER, and ALL.',
      'Create interactive drill-down reports with bookmarks and tooltips.'
    ],
    prerequisites: ['DAT 105 Excel Fundamentals'],
    technologies: ['Power BI', 'DAX', 'Star Schema', 'Data Modeling'],
    modules: [
      {
        id: 'pbi-1',
        title: 'Data Modeling & Star Schemas',
        description: 'Connecting relationships, cardinality, and filter directions.',
        lessons: [
          { id: 'pbi-1-1', title: 'One-to-Many Relationships and Referential Integrity', duration: '30 min', type: 'reading' },
          { id: 'pbi-1-2', title: 'Authoring Your First DAX Measures (CALCULATE and RELATED)', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-tableau-storytelling',
    title: 'Tableau for Data Visualization & Storytelling',
    code: 'DAT 215',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 2',
    difficulty: 'Beginner',
    duration: '5 weeks (22 hours)',
    rating: 4.7,
    enrolledCount: 3950,
    instructor: { name: 'Maya Lin', title: 'BI Consultant' },
    shortDescription: 'Master visual encodings, interactive Tableau stories, dual-axis charts, level of detail (LOD) expressions, and dashboard publishing.',
    fullDescription: 'Unleash the power of visual storytelling. Connect Tableau to diverse data sources, choose the ideal chart grammar, and build narrative presentations.',
    learningObjectives: ['Choose chart types aligned with data types', 'Author FIXED, INCLUDE, and EXCLUDE LOD calculations'],
    prerequisites: ['Basic data concepts'],
    technologies: ['Tableau', 'Data Storytelling', 'LOD Expressions'],
    modules: [
      {
        id: 'tab-1',
        title: 'Tableau Visual Architecture',
        description: 'Marks, shelves, pills, and dual-axis charts.',
        lessons: [
          { id: 'tab-1-1', title: 'Continuous vs Discrete Fields in Tableau', duration: '30 min', type: 'reading' },
          { id: 'tab-1-2', title: 'Building Interactive Filters & Parameter Actions', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-statistics-analysis',
    title: 'Statistics for Data Analysis & A/B Testing',
    code: 'DAT 220',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.8,
    enrolledCount: 4620,
    instructor: { name: 'Prof. Amara Chen', title: 'Applied Statistician' },
    shortDescription: 'Descriptive & inferential statistics, normal distribution, z-scores, p-values, hypothesis testing, t-tests, and A/B test experiment design.',
    fullDescription: 'Never get fooled by statistical noise. Learn how data analysts test whether differences between user groups or product variations are statistically significant.',
    learningObjectives: [
      'Calculate variance, standard deviation, and interquartile ranges.',
      'Formulate null and alternative hypotheses with significance levels.',
      'Conduct two-sample t-tests and Chi-Square tests of independence.',
      'Design reliable A/B test experiments calculating sample size power.'
    ],
    prerequisites: ['High school algebra'],
    technologies: ['Hypothesis Testing', 'p-values', 'A/B Testing', 'SciPy'],
    modules: [
      {
        id: 'stat-1',
        title: 'Distributions & Probability Foundations',
        description: 'Normal curves, central limit theorem, and z-scores.',
        lessons: [
          { id: 'stat-1-1', title: 'The Central Limit Theorem and Sampling Distributions', duration: '35 min', type: 'reading' },
          { id: 'stat-1-2', title: 'Calculating Confidence Intervals in Python', duration: '40 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-data-cleaning-prep',
    title: 'Practical Data Cleaning & Preparation',
    code: 'DAT 225',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '5 weeks (20 hours)',
    rating: 4.8,
    enrolledCount: 3100,
    instructor: { name: 'Kweku Mensah', title: 'Data Engineer' },
    shortDescription: 'Techniques for identifying corrupted records, fuzzy string matching, parsing messy date formats, type coercion, and deduplication.',
    fullDescription: '80% of a data analyst’s time is spent cleaning data. This practical hands-on course teaches production techniques to clean chaotic dirty datasets.',
    learningObjectives: ['Audit datasets for structural and semantic errors', 'Apply fuzzy matching algorithms (Levenshtein distance) to standardize names'],
    prerequisites: ['Python or SQL basics'],
    technologies: ['Python', 'OpenRefine', 'Regex', 'Pandas'],
    modules: [
      {
        id: 'clean-1',
        title: 'Auditing & Standardization',
        description: 'Spotting silent data errors and building automated pipelines.',
        lessons: [
          { id: 'clean-1-1', title: 'Regular Expressions for Cleaning Messy Phone & Address Data', duration: '35 min', type: 'reading' },
          { id: 'clean-1-2', title: 'Fuzzy Matching with Python FuzzyWuzzy', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-exploratory-eda',
    title: 'Exploratory Data Analysis (EDA) Masterclass',
    code: 'DAT 230',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '6 weeks (24 hours)',
    rating: 4.9,
    enrolledCount: 4280,
    instructor: { name: 'Dr. Priya Sharma', title: 'Senior Data Scientist' },
    shortDescription: 'Univariate, bivariate, and multivariate analysis. Correlation heatmaps, pairplots, outlier detection (IQR, z-score), and insight generation.',
    fullDescription: 'Discover how to interrogate a dataset until it reveals its deepest insights. Learn visual and mathematical EDA patterns using Seaborn and Matplotlib.',
    learningObjectives: ['Detect anomalies using boxplots and isolation techniques', 'Evaluate Pearson vs Spearman rank correlation coefficients'],
    prerequisites: ['DAT 205 Python for Data Analysis'],
    technologies: ['Seaborn', 'Matplotlib', 'EDA', 'Pandas'],
    modules: [
      {
        id: 'eda-1',
        title: 'Multivariate Exploration',
        description: 'Analyzing interactions between numerical and categorical features.',
        lessons: [
          { id: 'eda-1-1', title: 'Correlation Matrices and Multicollinearity', duration: '35 min', type: 'reading' },
          { id: 'eda-1-2', title: 'Visualizing Categorical Distributions with Seaborn', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'da-capstone-portfolio',
    title: 'Data Analysis Capstone & Portfolio Projects',
    code: 'DAT 299',
    category: 'Data Analysis',
    department: 'Data Analysis',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '8 weeks (32 hours)',
    rating: 4.9,
    enrolledCount: 2900,
    instructor: { name: 'Maya Lin', title: 'Lead Mentor' },
    shortDescription: 'Execute 3 end-to-end data analysis portfolio projects from raw data ingestion to interactive dashboard and executive GitHub documentation.',
    fullDescription: 'Build the exact portfolio pieces hiring managers look for. Tackle real-world messy datasets in E-commerce, Healthcare, and Finance.',
    learningObjectives: ['Complete 3 industry-grade data analysis case studies', 'Format professional GitHub documentation and interactive presentations'],
    prerequisites: ['SQL, Excel, and Python for Data Analysis'],
    technologies: ['SQL', 'Python', 'Power BI', 'GitHub Portfolio'],
    modules: [
      {
        id: 'cap-1',
        title: 'E-commerce Cohort Analysis Project',
        description: 'End-to-end project on customer lifetime value and churn.',
        lessons: [
          { id: 'cap-1-1', title: 'Project Brief: Formulating the Analytical Objectives', duration: '20 min', type: 'reading' },
          { id: 'cap-1-2', title: 'SQL & Python Data Pipeline Execution', duration: '90 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // DATA SCIENCE & ML (10+ courses)
  // ==========================================
  {
    id: 'ds-intro-fundamentals',
    title: 'Introduction to Data Science & Workflow',
    code: 'DSC 101',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Year 1',
    difficulty: 'Beginner',
    duration: '8 weeks (30 hours)',
    rating: 4.9,
    enrolledCount: 6800,
    instructor: { name: 'Dr. Priya Sharma', title: 'Senior Data Scientist' },
    shortDescription: 'Explore the data science lifecycle: problem formulation, data collection, feature engineering, machine learning modeling, and deployment.',
    fullDescription: 'Understand what makes data science the driving force behind modern algorithmic society. Study the mathematical principles of data science alongside hands-on Python workflows.',
    learningObjectives: [
      'Explain the difference between Data Analysis, Data Science, and Machine Learning.',
      'Execute feature scaling (MinMax, Standard Scaler) and categorical encoding.',
      'Train basic regression and classification predictive models in Scikit-Learn.',
      'Evaluate model generalization using train-test split and cross-validation.'
    ],
    prerequisites: ['Basic Python and high school mathematics'],
    technologies: ['Python', 'Scikit-Learn', 'Feature Engineering', 'Jupyter'],
    modules: [
      {
        id: 'dsc-1',
        title: 'The Data Science Mindset',
        description: 'Formulating predictive vs descriptive tasks.',
        lessons: [
          { id: 'dsc-1-1', title: 'Supervised vs Unsupervised Learning Paradigms', duration: '30 min', type: 'reading' },
          { id: 'dsc-1-2', title: 'Feature Engineering: Imputation, One-Hot Encoding, and Scaling', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-machine-learning-supervised',
    title: 'Supervised Machine Learning: Regression & Classification',
    code: 'DSC 201',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '10 weeks (40 hours)',
    rating: 4.9,
    enrolledCount: 5740,
    instructor: { name: 'Dr. Priya Sharma', title: 'Senior Data Scientist' },
    shortDescription: 'Linear regression, logistic regression, decision trees, random forests, gradient boosting (XGBoost), and bias-variance tradeoff.',
    fullDescription: 'The core algorithms that power predictive intelligence. Derive loss functions, master gradient descent, and optimize decision trees with hyperparameter tuning.',
    learningObjectives: [
      'Derive ordinary least squares and gradient descent optimization.',
      'Calculate classification metrics: Precision, Recall, F1-Score, and ROC-AUC.',
      'Tune hyperparameters using GridSearchCV and Bayesian optimization.',
      'Train high-performance ensemble models using Random Forests and XGBoost.'
    ],
    prerequisites: ['DSC 101', 'DAT 205 Python for Data Analysis'],
    technologies: ['Scikit-Learn', 'XGBoost', 'Gradient Descent', 'ROC-AUC'],
    modules: [
      {
        id: 'sml-1',
        title: 'Linear & Logistic Regression',
        description: 'Mathematical intuition, cost functions, and regularization.',
        lessons: [
          { id: 'sml-1-1', title: 'Cost Functions (MSE) and Gradient Descent Intuition', duration: '40 min', type: 'reading' },
          { id: 'sml-1-2', title: 'L1 (Lasso) and L2 (Ridge) Regularization in Python', duration: '50 min', type: 'lab' }
        ]
      },
      {
        id: 'sml-2',
        title: 'Tree-Based Ensemble Methods',
        description: 'From single decision trees to gradient boosted trees.',
        lessons: [
          { id: 'sml-2-1', title: 'Gini Impurity and Information Gain', duration: '35 min', type: 'reading' },
          { id: 'sml-2-2', title: 'Tuning XGBoost Hyperparameters for Customer Churn', duration: '60 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-unsupervised-learning',
    title: 'Unsupervised Learning & Clustering',
    code: 'DSC 205',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '6 weeks (26 hours)',
    rating: 4.7,
    enrolledCount: 3200,
    instructor: { name: 'Dr. Elena Rostova', title: 'Associate Professor' },
    shortDescription: 'K-Means clustering, hierarchical clustering, DBSCAN, Principal Component Analysis (PCA), t-SNE, and customer segmentation.',
    fullDescription: 'Discover hidden structures within unlabeled data. Segment customer personas, compress high-dimensional feature spaces, and detect anomalies.',
    learningObjectives: ['Determine optimal clusters using the Elbow Method and Silhouette scores', 'Apply PCA for dimensionality reduction and visualization'],
    prerequisites: ['Linear Algebra', 'Python proficiency'],
    technologies: ['K-Means', 'DBSCAN', 'PCA', 't-SNE'],
    modules: [
      {
        id: 'unsup-1',
        title: 'Clustering Algorithms',
        description: 'Partitioning vs density-based clustering.',
        lessons: [
          { id: 'unsup-1-1', title: 'K-Means Lloyd’s Algorithm and Centroid Initialization', duration: '35 min', type: 'reading' },
          { id: 'unsup-1-2', title: 'Customer Segmentation using RFM and K-Means', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-deep-learning-neural-nets',
    title: 'Deep Learning & Neural Networks',
    code: 'DSC 301',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '10 weeks (44 hours)',
    rating: 4.9,
    enrolledCount: 4890,
    instructor: { name: 'Dr. Alex Mercer', title: 'AI Research Director' },
    shortDescription: 'Perceptrons, backpropagation, activation functions, convolutional neural networks (CNNs), recurrent networks (LSTMs), and PyTorch.',
    fullDescription: 'Dive into the mathematics and code behind modern deep neural networks. Train multilayer perceptrons from scratch, build image classifiers with PyTorch, and master Adam optimization.',
    learningObjectives: [
      'Implement forward propagation and backpropagation using matrix calculus.',
      'Train deep convolutional networks for image classification with PyTorch.',
      'Mitigate overfitting with Dropout, Batch Normalization, and Data Augmentation.'
    ],
    prerequisites: ['Linear Algebra', 'Calculus', 'Supervised Machine Learning'],
    technologies: ['PyTorch', 'TensorFlow', 'CNNs', 'Backpropagation'],
    modules: [
      {
        id: 'dl-1',
        title: 'Neural Network Foundations',
        description: 'Forward pass, loss functions, and backpropagation.',
        lessons: [
          { id: 'dl-1-1', title: 'The Multilayer Perceptron & Activation Functions (ReLU, GELU)', duration: '40 min', type: 'reading' },
          { id: 'dl-1-2', title: 'Writing Backpropagation from Scratch with NumPy', duration: '60 min', type: 'lab' }
        ]
      },
      {
        id: 'dl-2',
        title: 'Convolutional Neural Networks (CNNs)',
        description: 'Kernels, feature maps, pooling, and ResNet architectures.',
        lessons: [
          { id: 'dl-2-1', title: 'Convolutional Arithmetic: Stride, Padding, and Receptive Fields', duration: '45 min', type: 'reading' },
          { id: 'dl-2-2', title: 'Training a Medical X-Ray Classifier in PyTorch', duration: '75 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-nlp-fundamentals',
    title: 'Natural Language Processing & LLM Architecture',
    code: 'DSC 305',
    category: 'Data Science',
    department: 'Artificial Intelligence',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '8 weeks (36 hours)',
    rating: 4.9,
    enrolledCount: 5100,
    instructor: { name: 'Dr. Alex Mercer', title: 'AI Research Director' },
    shortDescription: 'Tokenization, word embeddings (Word2Vec), Transformer architecture, Self-Attention mechanisms, BERT, and fine-tuning LLMs with Hugging Face.',
    fullDescription: 'Learn how modern AI models understand and generate human text. Master the Transformer attention equation, sentiment analysis, and text generation.',
    learningObjectives: [
      'Explain the Scaled Dot-Product Attention mechanism in Transformers.',
      'Fine-tune pre-trained models using Hugging Face Transformers.',
      'Implement text preprocessing pipelines with tokenizers.'
    ],
    prerequisites: ['Deep Learning fundamentals', 'PyTorch'],
    technologies: ['Hugging Face', 'Transformers', 'BERT', 'PyTorch'],
    modules: [
      {
        id: 'nlp-1',
        title: 'From Embeddings to Self-Attention',
        description: 'Vector representations and the Transformer revolution.',
        lessons: [
          { id: 'nlp-1-1', title: 'Word Embeddings and Cosine Similarity', duration: '35 min', type: 'reading' },
          { id: 'nlp-1-2', title: 'Understanding Query, Key, Value Attention Mechanisms', duration: '55 min', type: 'reading' }
        ]
      }
    ]
  },
  {
    id: 'ds-computer-vision',
    title: 'Computer Vision & Object Detection',
    code: 'DSC 310',
    category: 'Data Science',
    department: 'Artificial Intelligence',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '8 weeks (34 hours)',
    rating: 4.8,
    enrolledCount: 2600,
    instructor: { name: 'Dr. Alex Mercer', title: 'AI Research Director' },
    shortDescription: 'OpenCV image processing, edge detection, feature matching, YOLO real-time object detection, and image segmentation.',
    fullDescription: 'Teach machines to perceive the physical world. Build practical vision applications ranging from real-time webcam object detection to automated defect inspection.',
    learningObjectives: ['Process digital images using OpenCV transformations', 'Train and deploy YOLO models for custom bounding-box detection'],
    prerequisites: ['DSC 301 Deep Learning'],
    technologies: ['OpenCV', 'YOLOv8', 'PyTorch', 'Image Segmentation'],
    modules: [
      {
        id: 'cv-1',
        title: 'Image Processing & Filters',
        description: 'Convolution kernels, thresholding, and morphological operations.',
        lessons: [
          { id: 'cv-1-1', title: 'Sobel Kernels, Canny Edge Detection, and Blurring', duration: '35 min', type: 'reading' },
          { id: 'cv-1-2', title: 'Real-Time Object Tracking with YOLO in Python', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-time-series-forecasting',
    title: 'Time Series Analysis & Forecasting',
    code: 'DSC 315',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.7,
    enrolledCount: 2890,
    instructor: { name: 'Prof. Amara Chen', title: 'Quantitative Analytics' },
    shortDescription: 'Stationarity, autocorrelation (ACF/PACF), ARIMA, SARIMAX, Facebook Prophet, and deep learning for temporal forecasting.',
    fullDescription: 'Predict the future of stock prices, energy consumption, and retail demand. Deconstruct trend, seasonality, and residual components.',
    learningObjectives: ['Test for stationarity with Augmented Dickey-Fuller tests', 'Tune SARIMA order parameters and forecast retail sales trends'],
    prerequisites: ['Python for Data Analysis', 'Descriptive Statistics'],
    technologies: ['Statsmodels', 'Prophet', 'ARIMA', 'Pandas'],
    modules: [
      {
        id: 'ts-1',
        title: 'Temporal Decomposition & Stationarity',
        description: 'Trend, seasonality, cyclical, and noise separation.',
        lessons: [
          { id: 'ts-1-1', title: 'Testing for Stationarity: ADF Test and Differencing', duration: '35 min', type: 'reading' },
          { id: 'ts-1-2', title: 'Forecasting Monthly Sales Demand with Prophet', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-recommender-systems',
    title: 'Recommendation Systems & Collaborative Filtering',
    code: 'DSC 320',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '6 weeks (25 hours)',
    rating: 4.8,
    enrolledCount: 2450,
    instructor: { name: 'Dr. Priya Sharma', title: 'Senior Data Scientist' },
    shortDescription: 'User-based and item-based collaborative filtering, Matrix Factorization (SVD), content-based filtering, and neural rankers.',
    fullDescription: 'Learn how Netflix, Spotify, and Amazon suggest products with uncanny accuracy. Implement SVD matrix decomposition and evaluate with NDCG.',
    learningObjectives: ['Implement user-item cosine similarity matrices', 'Factorize sparse matrices with Singular Value Decomposition (SVD)'],
    prerequisites: ['DSC 201 Supervised ML'],
    technologies: ['Matrix Factorization', 'Cosine Similarity', 'Surprise Lib', 'Python'],
    modules: [
      {
        id: 'rec-1',
        title: 'Collaborative vs Content-Based Filtering',
        description: 'Building the user-item interaction matrix.',
        lessons: [
          { id: 'rec-1-1', title: 'The Cold Start Problem & Content-Based Vector Sim', duration: '30 min', type: 'reading' },
          { id: 'rec-1-2', title: 'Building a Movie Recommender with Truncated SVD', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-mlops-model-deployment',
    title: 'MLOps: Model Deployment & Monitoring',
    code: 'DSC 401',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Final Year',
    difficulty: 'Advanced',
    duration: '8 weeks (32 hours)',
    rating: 4.9,
    enrolledCount: 3120,
    instructor: { name: 'Tariq Al-Mansoor', title: 'MLOps Engineer' },
    shortDescription: 'Packaging models with FastAPI, MLflow experiment tracking, Dockerizing inference services, and detecting data drift in production.',
    fullDescription: 'Bridge machine learning and production engineering. Avoid the trap of models trapped in Jupyter notebooks by building production REST inference microservices.',
    learningObjectives: ['Deploy Scikit-Learn/PyTorch models as asynchronous FastAPI endpoints', 'Track experiments and model artifacts using MLflow', 'Set up data drift monitors for production predictions'],
    prerequisites: ['DSC 201', 'Docker basics'],
    technologies: ['FastAPI', 'MLflow', 'Docker', 'Evidently AI'],
    modules: [
      {
        id: 'mlops-1',
        title: 'Model Serialization & REST APIs',
        description: 'Pickle, ONNX, and asynchronous REST inference services.',
        lessons: [
          { id: 'mlops-1-1', title: 'Model Export to ONNX Format for High-Throughput Inference', duration: '35 min', type: 'reading' },
          { id: 'mlops-1-2', title: 'Containerizing a FastAPI Predictive Microservice with Docker', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ds-feature-engineering-mastery',
    title: 'Advanced Feature Engineering & Selection',
    code: 'DSC 210',
    category: 'Data Science',
    department: 'Data Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '5 weeks (22 hours)',
    rating: 4.8,
    enrolledCount: 2750,
    instructor: { name: 'Dr. Priya Sharma', title: 'Senior Data Scientist' },
    shortDescription: 'Target encoding, polynomial features, interaction terms, mutual information, recursive feature elimination, and PCA.',
    fullDescription: 'Better data beats clever algorithms every time. Master the feature transformations that win Kaggle competitions and maximize model performance.',
    learningObjectives: ['Apply target encoding with smoothing to avoid leakage', 'Select top predictive features using Recursive Feature Elimination'],
    prerequisites: ['Python for Data Analysis'],
    technologies: ['Category Encoders', 'Feature-Engine', 'Scikit-Learn'],
    modules: [
      {
        id: 'fe-1',
        title: 'Categorical & Numerical Transformations',
        description: 'Log transforms, Box-Cox, and target encoding.',
        lessons: [
          { id: 'fe-1-1', title: 'Avoiding Target Leakage During K-Fold Cross Validation', duration: '30 min', type: 'reading' },
          { id: 'fe-1-2', title: 'Automating Feature Selection Pipelines in Scikit-Learn', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // PROGRAMMING (10+ courses)
  // ==========================================
  {
    id: 'prog-python-bootcamp',
    title: 'Programming with Python: Beginner to Professional',
    code: 'PRG 101',
    category: 'Programming',
    department: 'Computer Science',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '8 weeks (34 hours)',
    rating: 4.9,
    enrolledCount: 12400,
    instructor: { name: 'Maya Lin', title: 'Lead Educator' },
    shortDescription: 'Syntax, variables, loops, functions, OOP, file handling, error handling, virtual environments, and standard library modules.',
    fullDescription: 'The definitive hands-on start for programming learners. Write clean, readable, idiomatic Python code from your very first line.',
    learningObjectives: ['Master fundamental control flow (if/else, loops, list comprehensions)', 'Design modular Object-Oriented classes with inheritance', 'Handle files, exceptions, and packaging in virtual environments'],
    prerequisites: ['No prior programming experience required'],
    technologies: ['Python 3', 'OOP', 'Pip', 'VS Code'],
    modules: [
      {
        id: 'py-1',
        title: 'Core Syntax & Collections',
        description: 'Variables, data types, lists, dictionaries, sets, and tuples.',
        lessons: [
          { id: 'py-1-1', title: 'Pythonic Syntax & Dynamic Typing Principles', duration: '25 min', type: 'reading' },
          { id: 'py-1-2', title: 'Lists, Dictionaries, and List Comprehensions', duration: '45 min', type: 'lab' }
        ]
      },
      {
        id: 'py-2',
        title: 'Object-Oriented Programming (OOP)',
        description: 'Classes, dunder methods, inheritance, and encapsulation.',
        lessons: [
          { id: 'py-2-1', title: 'Classes, Objects, and __init__ Constructors', duration: '40 min', type: 'reading' },
          { id: 'py-2-2', title: 'Building a Bank Account Management CLI Application', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-javascript-modern',
    title: 'Modern JavaScript (ES6+): Language Deep Dive',
    code: 'PRG 102',
    category: 'Programming',
    department: 'Web Development',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '7 weeks (28 hours)',
    rating: 4.8,
    enrolledCount: 9800,
    instructor: { name: 'Jordan Smith', title: 'Senior Frontend Engineer' },
    shortDescription: 'Closures, prototypes, the Event Loop, Promises, Async/Await, destructuring, modules, and modern browser APIs.',
    fullDescription: 'Understand how JavaScript really works under the hood. Master asynchronous concurrency and write high-performance web scripts.',
    learningObjectives: ['Demystify the JavaScript Event Loop, microtasks, and macrotasks', 'Write clean asynchronous code with Promises and async/await', 'Master closures, scope chains, and lexical this'],
    prerequisites: ['Basic HTML/CSS'],
    technologies: ['JavaScript', 'ES6+', 'Event Loop', 'Async/Await'],
    modules: [
      {
        id: 'js-1',
        title: 'Scope, Closures & Execution Context',
        description: 'Call stack, hoisting, and functional closures.',
        lessons: [
          { id: 'js-1-1', title: 'How the JavaScript Engine Runs Code: JIT and Call Stack', duration: '30 min', type: 'reading' },
          { id: 'js-1-2', title: 'Mastering Closures and Memoization Patterns', duration: '40 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-java-core-oop',
    title: 'Java Programming & Object-Oriented Design',
    code: 'PRG 103',
    category: 'Programming',
    department: 'Computer Science',
    level: 'Year 1',
    difficulty: 'Intermediate',
    duration: '9 weeks (36 hours)',
    rating: 4.8,
    enrolledCount: 5600,
    instructor: { name: 'Prof. David Adeleke', title: 'Professor of Computing' },
    shortDescription: 'JVM architecture, static typing, interfaces, polymorphism, Java Collections framework, streams, and multithreading.',
    fullDescription: 'The enterprise powerhouse language. Learn strict OOP design patterns, memory model garbage collection, and modern Java 17/21 features.',
    learningObjectives: ['Implement interfaces and abstract classes adhering to SOLID principles', 'Utilize the Java Collections Framework (ArrayList, HashMap, TreeSet)'],
    prerequisites: ['Basic programming concepts'],
    technologies: ['Java 21', 'JVM', 'IntelliJ IDEA', 'Maven'],
    modules: [
      {
        id: 'java-1',
        title: 'Type Safety & Collections',
        description: 'Generics, Lists, Sets, Maps, and JVM memory layout.',
        lessons: [
          { id: 'java-1-1', title: 'Heap vs Stack Memory Allocation in the JVM', duration: '35 min', type: 'reading' },
          { id: 'java-1-2', title: 'Stream API and Lambda Expressions in Java', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-c-systems',
    title: 'C Programming & Low-Level Memory Control',
    code: 'PRG 104',
    category: 'Programming',
    department: 'Computer Science',
    level: 'Year 1',
    difficulty: 'Intermediate',
    duration: '8 weeks (34 hours)',
    rating: 4.9,
    enrolledCount: 4200,
    instructor: { name: 'Dr. Marcus Vance', title: 'Systems Architect' },
    shortDescription: 'Pointers, manual memory allocation (malloc/free), structs, pointer arithmetic, bitwise manipulation, and memory leak debugging with Valgrind.',
    fullDescription: 'There is no magic in computing once you master C. Understand memory addresses, dereferencing, buffer overflows, and the foundations of Unix systems.',
    learningObjectives: ['Manipulate raw memory addresses safely with pointer arithmetic', 'Prevent memory leaks and segmentation faults with Valgrind'],
    prerequisites: ['Basic computing background'],
    technologies: ['C', 'GCC', 'Valgrind', 'Makefiles'],
    modules: [
      {
        id: 'c-1',
        title: 'Pointers & Dynamic Allocation',
        description: 'Stack vs heap, pointer arithmetic, and struct layouts.',
        lessons: [
          { id: 'c-1-1', title: 'Pointers, Addresses, and Dereferencing Demystified', duration: '40 min', type: 'reading' },
          { id: 'c-1-2', title: 'Implementing a Custom Dynamic Vector in C', duration: '60 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-cpp-modern',
    title: 'C++ Programming: Modern Systems & STL',
    code: 'PRG 105',
    category: 'Programming',
    department: 'Computer Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '9 weeks (38 hours)',
    rating: 4.8,
    enrolledCount: 3900,
    instructor: { name: 'Dr. Marcus Vance', title: 'Systems Architect' },
    shortDescription: 'RAII, smart pointers (unique_ptr, shared_ptr), templates, Standard Template Library (STL), move semantics, and modern C++20 features.',
    fullDescription: 'The language of high-frequency trading, game engines, and autonomous driving. Learn zero-cost abstractions and safe resource management.',
    learningObjectives: ['Implement Resource Acquisition Is Initialization (RAII)', 'Leverage STL vectors, unordered_maps, and algorithms', 'Avoid expensive copies with Move Semantics (rvalue references)'],
    prerequisites: ['C or Java familiarity'],
    technologies: ['C++20', 'STL', 'Smart Pointers', 'CMake'],
    modules: [
      {
        id: 'cpp-1',
        title: 'Modern Resource Management',
        description: 'Smart pointers and copy/move semantics.',
        lessons: [
          { id: 'cpp-1-1', title: 'RAII and Smart Pointers vs Raw Pointers', duration: '35 min', type: 'reading' },
          { id: 'cpp-1-2', title: 'Writing Generic Template Classes in C++', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-typescript-typed',
    title: 'TypeScript for Scalable Applications',
    code: 'PRG 106',
    category: 'Programming',
    department: 'Web Development',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '6 weeks (25 hours)',
    rating: 4.9,
    enrolledCount: 7400,
    instructor: { name: 'Jordan Smith', title: 'Senior Frontend Engineer' },
    shortDescription: 'Static typing for JavaScript: interfaces, union types, generics, type narrowing, utility types, and strict compiler configurations.',
    fullDescription: 'Eliminate runtime bugs at compile time. Master TypeScript type guards, generic constraints, and integration with modern React and Node.js projects.',
    learningObjectives: ['Design flexible generic functions and interfaces', 'Leverage utility types (Partial, Omit, Pick, Record)', 'Configure strict tsconfig settings for robust codebases'],
    prerequisites: ['Modern JavaScript (ES6+)'],
    technologies: ['TypeScript', 'Node.js', 'Type Safety', 'TSConfig'],
    modules: [
      {
        id: 'ts-1',
        title: 'Type System Deep Dive',
        description: 'Unions, intersections, generics, and type narrowing.',
        lessons: [
          { id: 'ts-1-1', title: 'Discriminated Unions and Exhaustive Type Checking', duration: '30 min', type: 'reading' },
          { id: 'ts-1-2', title: 'Building Reusable Type-Safe API Client Wrappers', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-golang-concurrency',
    title: 'Go (Golang): Concurrent Backend Systems',
    code: 'PRG 107',
    category: 'Programming',
    department: 'Cloud Computing',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.9,
    enrolledCount: 3600,
    instructor: { name: 'Tariq Al-Mansoor', title: 'Cloud Infrastructure Lead' },
    shortDescription: 'Goroutines, channels, interfaces, structs, error handling, HTTP standard library, and high-performance microservices in Go.',
    fullDescription: 'Discover why Kubernetes, Docker, and Terraform are written in Go. Build concurrent backend servers that handle tens of thousands of requests per second.',
    learningObjectives: ['Coordinate concurrent execution with Goroutines and Channels', 'Build production REST APIs using standard library net/http', 'Avoid race conditions using mutexes and sync primitives'],
    prerequisites: ['Basic programming knowledge in any language'],
    technologies: ['Go', 'Goroutines', 'Channels', 'Microservices'],
    modules: [
      {
        id: 'go-1',
        title: 'Concurrency Primitives',
        description: 'CSP model, channels, select blocks, and sync.WaitGroup.',
        lessons: [
          { id: 'go-1-1', title: 'Goroutines vs Operating System Kernel Threads', duration: '30 min', type: 'reading' },
          { id: 'go-1-2', title: 'Building a Concurrent Web Crawler with Go Channels', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-rust-systems',
    title: 'Rust: Safe Systems Programming',
    code: 'PRG 108',
    category: 'Programming',
    department: 'Computer Science',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '9 weeks (36 hours)',
    rating: 4.9,
    enrolledCount: 2900,
    instructor: { name: 'Dr. Marcus Vance', title: 'Systems Architect' },
    shortDescription: 'Ownership, borrowing, lifetimes, pattern matching, traits, concurrency without data races, and zero-cost abstractions.',
    fullDescription: 'Master the language loved for memory safety without a garbage collector. Conquer the Rust borrow checker and write blazingly fast system tools.',
    learningObjectives: ['Satisfy the Rust borrow checker without runtime cloning', 'Author traits and generic implementations', 'Build multi-threaded programs guaranteed free of data races'],
    prerequisites: ['C or C++ or advanced programming experience'],
    technologies: ['Rust', 'Cargo', 'Borrow Checker', 'Lifetimes'],
    modules: [
      {
        id: 'rust-1',
        title: 'Ownership & Borrowing',
        description: 'The core innovation of Rust memory safety.',
        lessons: [
          { id: 'rust-1-1', title: 'Move Semantics, Copy Types, and Stack/Heap Ownership', duration: '40 min', type: 'reading' },
          { id: 'rust-1-2', title: 'Shared References vs Mutable References (& vs &mut)', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-csharp-dotnet',
    title: 'C# & .NET Enterprise Development',
    code: 'PRG 109',
    category: 'Programming',
    department: 'Software Engineering',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (32 hours)',
    rating: 4.7,
    enrolledCount: 2800,
    instructor: { name: 'Dr. Sarah Mitchell', title: 'Enterprise Consultant' },
    shortDescription: 'C# language, LINQ queries, Entity Framework Core, ASP.NET Web APIs, dependency injection, and clean architecture.',
    fullDescription: 'Build enterprise-grade REST APIs and cloud services with modern cross-platform .NET 8.',
    learningObjectives: ['Write expressive LINQ database queries', 'Build Web APIs using ASP.NET Core with Dependency Injection'],
    prerequisites: ['Basic OOP principles'],
    technologies: ['C#', '.NET 8', 'Entity Framework', 'LINQ'],
    modules: [
      {
        id: 'cs-1',
        title: 'LINQ & Entity Framework',
        description: 'Query syntax, method syntax, and ORM migrations.',
        lessons: [
          { id: 'cs-1-1', title: 'LINQ to Objects vs LINQ to Entities', duration: '35 min', type: 'reading' },
          { id: 'cs-1-2', title: 'Building a Relational Web API with ASP.NET Core', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'prog-kotlin-modern',
    title: 'Kotlin Programming for Android & Backend',
    code: 'PRG 110',
    category: 'Programming',
    department: 'Mobile Development',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.8,
    enrolledCount: 3100,
    instructor: { name: 'Jordan Smith', title: 'Mobile & Frontend Specialist' },
    shortDescription: 'Null safety, coroutines, data classes, extension functions, lambdas, and Android Jetpack Compose foundations.',
    fullDescription: 'Write concise, safe code that inter-operates smoothly with the entire Java ecosystem.',
    learningObjectives: ['Eliminate NullPointerExceptions with compile-time null safety', 'Handle asynchronous tasks with Kotlin Coroutines and Flows'],
    prerequisites: ['Java or basic OOP familiarity'],
    technologies: ['Kotlin', 'Coroutines', 'Android', 'JVM'],
    modules: [
      {
        id: 'kt-1',
        title: 'Concise & Safe Kotlin Idioms',
        description: 'Null safety, smart casts, and coroutines.',
        lessons: [
          { id: 'kt-1-1', title: 'Nullable Types and Safe Call Operators', duration: '25 min', type: 'reading' },
          { id: 'kt-1-2', title: 'Asynchronous Coroutines & Structured Concurrency', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // WEB DEVELOPMENT (5+ courses)
  // ==========================================
  {
    id: 'web-frontend-react',
    title: 'Frontend Development with Modern React',
    code: 'WEB 201',
    category: 'Web Development',
    department: 'Web Development',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (32 hours)',
    rating: 4.9,
    enrolledCount: 8800,
    instructor: { name: 'Jordan Smith', title: 'Senior Frontend Engineer' },
    shortDescription: 'Component architecture, React Hooks (useState, useEffect, useMemo), state management, routing, Tailwind CSS, and performance.',
    fullDescription: 'Build fast, responsive, and maintainable user interfaces with React 19, Vite, and Tailwind CSS. Learn unidirectional data flow and clean hook abstractions.',
    learningObjectives: ['Design modular reusable component hierarchies', 'Master custom React Hooks for reusable stateful logic', 'Optimize component render lifecycles with useMemo and useCallback'],
    prerequisites: ['Modern JavaScript (ES6+)', 'HTML & CSS basics'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    modules: [
      {
        id: 'react-1',
        title: 'Component Lifecycle & Hooks',
        description: 'Managing local state, effects, and controlled inputs.',
        lessons: [
          { id: 'react-1-1', title: 'Declarative UI vs Imperative DOM Manipulation', duration: '30 min', type: 'reading' },
          { id: 'react-1-2', title: 'Mastering useEffect Lifecycles & Cleanup Routines', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'web-backend-nodejs',
    title: 'Backend Engineering with Node.js & Express',
    code: 'WEB 205',
    category: 'Web Development',
    department: 'Web Development',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (30 hours)',
    rating: 4.8,
    enrolledCount: 6900,
    instructor: { name: 'Kweku Mensah', title: 'Full Stack Engineer' },
    shortDescription: 'RESTful API design, Express middleware, JWT authentication, bcrypt hashing, database ORM integration, and error handling.',
    fullDescription: 'Construct secure, robust backend web servers that interface with relational and document databases.',
    learningObjectives: ['Architect scalable REST APIs adhering to HTTP status standards', 'Implement JWT token authentication with secure HTTP-only cookies'],
    prerequisites: ['JavaScript ES6+ fundamentals'],
    technologies: ['Node.js', 'Express', 'JWT', 'REST API'],
    modules: [
      {
        id: 'node-1',
        title: 'REST API Architecture & Security',
        description: 'Middleware pipelines, CORS, rate limiting, and JWT tokens.',
        lessons: [
          { id: 'node-1-1', title: 'Designing Clean REST Endpoints and HTTP Verbs', duration: '30 min', type: 'reading' },
          { id: 'node-1-2', title: 'Implementing JWT Authentication & Role-Based Middleware', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'web-fullstack-dev',
    title: 'Full Stack Web Development: From Idea to Production',
    code: 'WEB 301',
    category: 'Web Development',
    department: 'Web Development',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '10 weeks (45 hours)',
    rating: 4.9,
    enrolledCount: 7200,
    instructor: { name: 'Jordan Smith', title: 'Full Stack Architect' },
    shortDescription: 'End-to-end web applications with React, Node.js, PostgreSQL, Docker, state management, payment integrations, and deployment.',
    fullDescription: 'Connect frontend, backend, database, and cloud hosting into one seamless production application ready for your portfolio.',
    learningObjectives: ['Bridge frontend React clients with backend API endpoints', 'Design relational PostgreSQL database schemas with Prisma ORM'],
    prerequisites: ['React and Node.js fundamentals'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    modules: [
      {
        id: 'fs-1',
        title: 'Full Stack Data Flow',
        description: 'End-to-end CRUD operations with optimistic UI updates.',
        lessons: [
          { id: 'fs-1-1', title: 'Connecting React Client to Express Backend with Axios', duration: '35 min', type: 'reading' },
          { id: 'fs-1-2', title: 'Building a Full Stack Student Project Management App', duration: '75 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'web-security-owasp',
    title: 'Web Application Security & OWASP Top 10',
    code: 'WEB 305',
    category: 'Web Development',
    department: 'Cybersecurity',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '6 weeks (24 hours)',
    rating: 4.9,
    enrolledCount: 3800,
    instructor: { name: 'Dr. Tariq Al-Mansoor', title: 'Cybersecurity Architect' },
    shortDescription: 'Defending against SQL injection, Cross-Site Scripting (XSS), CSRF, broken access control, SSRF, and security headers.',
    fullDescription: 'Learn how malicious actors breach web applications and how to harden your software using modern secure coding practices.',
    learningObjectives: ['Identify and exploit SQL Injection and XSS vulnerabilities in lab sandboxes', 'Implement Content Security Policy (CSP) and defense-in-depth sanitization'],
    prerequisites: ['Web Development basics'],
    technologies: ['OWASP', 'Burp Suite', 'XSS', 'SQLi', 'CSP'],
    modules: [
      {
        id: 'wsec-1',
        title: 'Injection Attacks & Defenses',
        description: 'SQLi, XSS, and parameterized queries.',
        lessons: [
          { id: 'wsec-1-1', title: 'Parameterized Queries vs Dynamic String Concatenation', duration: '35 min', type: 'reading' },
          { id: 'wsec-1-2', title: 'Defending Against Stored and Reflected XSS Attacks', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'web-responsive-html-css',
    title: 'Responsive Web Design & Modern CSS',
    code: 'WEB 101',
    category: 'Web Development',
    department: 'Web Development',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '5 weeks (20 hours)',
    rating: 4.8,
    enrolledCount: 11000,
    instructor: { name: 'Jordan Smith', title: 'Senior Frontend Engineer' },
    shortDescription: 'Semantic HTML5, CSS Grid, Flexbox, media queries, accessibility (ARIA), CSS custom properties, and responsive layouts.',
    fullDescription: 'Build beautiful, responsive web pages that adapt cleanly across mobile, tablet, and widescreen monitors without breaking.',
    learningObjectives: ['Master Flexbox alignments and complex CSS Grid 2D layouts', 'Implement mobile-first responsive breakpoints'],
    prerequisites: ['No prior experience required'],
    technologies: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
    modules: [
      {
        id: 'css-1',
        title: 'Flexbox & CSS Grid Mastery',
        description: '1D vs 2D layout models for modern browsers.',
        lessons: [
          { id: 'css-1-1', title: 'Flexbox Direction, Justify-Content, and Align-Items', duration: '25 min', type: 'reading' },
          { id: 'css-1-2', title: 'Building a Responsive 12-Column Grid Layout', duration: '40 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // CYBERSECURITY (5+ courses)
  // ==========================================
  {
    id: 'sec-cyber-fundamentals',
    title: 'Cybersecurity Fundamentals & Threat Landscapes',
    code: 'SEC 101',
    category: 'Cybersecurity',
    department: 'Cybersecurity',
    level: 'Year 1',
    difficulty: 'Beginner',
    duration: '7 weeks (28 hours)',
    rating: 4.9,
    enrolledCount: 5400,
    instructor: { name: 'Dr. Tariq Al-Mansoor', title: 'Cybersecurity Architect' },
    shortDescription: 'CIA triad, malware taxonomy, social engineering, network defense perimeter, access control models, and security governance.',
    fullDescription: 'Understand the fundamental principles of information assurance: Confidentiality, Integrity, and Availability. Study modern attack vectors.',
    learningObjectives: ['Analyze risk frameworks (NIST, ISO 27001)', 'Distinguish between viruses, worms, trojans, ransomware, and rootkits'],
    prerequisites: ['Basic computing literacy'],
    technologies: ['NIST Framework', 'CIA Triad', 'Malware Analysis'],
    modules: [
      {
        id: 'sec-f-1',
        title: 'The Security Core: CIA Triad & Threats',
        description: 'Evaluating vulnerabilities, threats, and attack surfaces.',
        lessons: [
          { id: 'sec-f-1-1', title: 'The CIA Triad and Defense in Depth Strategy', duration: '30 min', type: 'reading' },
          { id: 'sec-f-1-2', title: 'Social Engineering: Phishing, Vishing, and Pretexting', duration: '40 min', type: 'reading' }
        ]
      }
    ]
  },
  {
    id: 'sec-network-security',
    title: 'Network Security & Firewalls',
    code: 'SEC 201',
    category: 'Cybersecurity',
    department: 'Cybersecurity',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (32 hours)',
    rating: 4.8,
    enrolledCount: 3900,
    instructor: { name: 'Dr. Tariq Al-Mansoor', title: 'Cybersecurity Architect' },
    shortDescription: 'Packet analysis with Wireshark, stateful firewalls, IDS/IPS systems (Snort), VPN tunnels (IPsec/WireGuard), and zero trust architecture.',
    fullDescription: 'Inspect raw packets across the wire, detect network reconnaissance scans, and configure stateful perimeter firewall rules.',
    learningObjectives: ['Analyze network traffic captures using Wireshark display filters', 'Configure Snort intrusion detection rules for malicious packet detection'],
    prerequisites: ['Computer Networks fundamentals'],
    technologies: ['Wireshark', 'Snort IDS', 'iptables', 'VPNs'],
    modules: [
      {
        id: 'nsec-1',
        title: 'Packet Analysis & Intrusion Detection',
        description: 'Deep packet inspection and signature matching.',
        lessons: [
          { id: 'nsec-1-1', title: 'Wireshark: Analyzing TCP Handshakes and Malicious Scans', duration: '40 min', type: 'lab' },
          { id: 'nsec-1-2', title: 'Writing Custom Snort Signatures to Detect Port Scans', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'sec-ethical-hacking-pentesting',
    title: 'Ethical Hacking & Penetration Testing',
    code: 'SEC 301',
    category: 'Cybersecurity',
    department: 'Cybersecurity',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '10 weeks (40 hours)',
    rating: 4.9,
    enrolledCount: 5200,
    instructor: { name: 'Dr. Tariq Al-Mansoor', title: 'Lead Penetration Tester' },
    shortDescription: 'Reconnaissance, Nmap port scanning, Metasploit exploitation, privilege escalation, credential dumping, and professional reporting.',
    fullDescription: 'Think like an attacker to defend like an expert. Master the phases of a sanctioned penetration test in legal virtual laboratory environments.',
    learningObjectives: ['Conduct active and passive network reconnaissance with Nmap', 'Execute controlled exploits with the Metasploit framework', 'Perform Linux and Windows privilege escalation'],
    prerequisites: ['Linux command line', 'Networking fundamentals'],
    technologies: ['Kali Linux', 'Nmap', 'Metasploit', 'Burp Suite'],
    modules: [
      {
        id: 'pentest-1',
        title: 'Reconnaissance & Vulnerability Scanning',
        description: 'OSINT, banner grabbing, and port state analysis.',
        lessons: [
          { id: 'pentest-1-1', title: 'Nmap Scanning Techniques: SYN Stealth vs Connect Scan', duration: '35 min', type: 'reading' },
          { id: 'pentest-1-2', title: 'Exploiting Vulnerable Service Daemons with Metasploit', duration: '60 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'sec-digital-forensics',
    title: 'Digital Forensics & Incident Response',
    code: 'SEC 305',
    category: 'Cybersecurity',
    department: 'Cybersecurity',
    level: 'Year 3',
    difficulty: 'Advanced',
    duration: '8 weeks (30 hours)',
    rating: 4.7,
    enrolledCount: 2100,
    instructor: { name: 'Dr. Tariq Al-Mansoor', title: 'Forensics Specialist' },
    shortDescription: 'Chain of custody, forensic disk imaging (dd/FTK), memory analysis with Volatility, event log forensics, and timeline reconstruction.',
    fullDescription: 'Investigate cyber incidents, extract volatility memory artifacts, and build evidentiary timelines for breach attribution.',
    learningObjectives: ['Create bit-stream disk images preserving evidentiary integrity', 'Extract malware injected processes from RAM with Volatility'],
    prerequisites: ['Operating Systems', 'Command line'],
    technologies: ['Volatility', 'Autopsy', 'FTK Imager', 'Sysinternals'],
    modules: [
      {
        id: 'for-1',
        title: 'Memory Analysis & Timeline Artifacts',
        description: 'Extracting passwords, connections, and injects from RAM.',
        lessons: [
          { id: 'for-1-1', title: 'Forensic Acquisition Best Practices & Order of Volatility', duration: '30 min', type: 'reading' },
          { id: 'for-1-2', title: 'Analyzing Windows Memory Dumps with Volatility 3', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'sec-security-operations-soc',
    title: 'Security Operations Center (SOC) & SIEM Analysis',
    code: 'SEC 310',
    category: 'Cybersecurity',
    department: 'Cybersecurity',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.8,
    enrolledCount: 3400,
    instructor: { name: 'Dr. Tariq Al-Mansoor', title: 'SOC Lead' },
    shortDescription: 'SIEM platforms (Splunk, Elastic SIEM), alert triage, incident response lifecycles, MITRE ATT&CK framework, and threat hunting.',
    fullDescription: 'Prepare for entry-level SOC Analyst roles. Learn how enterprise security operations detect, triage, and eradicate active intrusions.',
    learningObjectives: ['Query security logs using Splunk Search Processing Language (SPL)', 'Map adversary tactics and techniques to the MITRE ATT&CK matrix'],
    prerequisites: ['SEC 101'],
    technologies: ['Splunk', 'Elastic SIEM', 'MITRE ATT&CK', 'Log Analysis'],
    modules: [
      {
        id: 'soc-1',
        title: 'SIEM Log Ingestion & Threat Hunting',
        description: 'Detecting brute force, beaconing, and lateral movement.',
        lessons: [
          { id: 'soc-1-1', title: 'Writing Splunk Search Queries for Failed Login Spikes', duration: '35 min', type: 'reading' },
          { id: 'soc-1-2', title: 'Triaging High-Severity Ransomware Alerts in SIEM', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // ARTIFICIAL INTELLIGENCE (AI)
  // ==========================================
  {
    id: 'ai-fundamentals-ethics',
    title: 'Artificial Intelligence: Foundations & Ethics',
    code: 'AI 201',
    category: 'Artificial Intelligence',
    department: 'Artificial Intelligence',
    level: 'Year 2',
    difficulty: 'Beginner',
    duration: '6 weeks (24 hours)',
    rating: 4.8,
    enrolledCount: 5900,
    instructor: { name: 'Dr. Alex Mercer', title: 'AI Research Director' },
    shortDescription: 'State space search, heuristics (A* search), game playing (Minimax), knowledge representation, algorithmic bias, and ethical AI governance.',
    fullDescription: 'Study the classical foundation of intelligence from symbolic logic search graphs to modern societal implications of algorithmic decisions.',
    learningObjectives: ['Implement A* graph search with heuristic cost estimation', 'Evaluate algorithmic bias and audit training datasets for fairness'],
    prerequisites: ['Python basics', 'Discrete Mathematics'],
    technologies: ['A* Search', 'Minimax', 'Knowledge Graphs', 'AI Ethics'],
    modules: [
      {
        id: 'ai-1',
        title: 'Classical Search & Game Playing',
        description: 'Breadth, Depth, A* search, and Alpha-Beta pruning.',
        lessons: [
          { id: 'ai-1-1', title: 'The A* Search Algorithm: Heuristics and Admissibility', duration: '35 min', type: 'reading' },
          { id: 'ai-1-2', title: 'Implementing Minimax with Alpha-Beta Pruning', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'ai-genai-llm-apps',
    title: 'Generative AI & LLM Application Development',
    code: 'AI 305',
    category: 'Artificial Intelligence',
    department: 'Artificial Intelligence',
    level: 'Year 3',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.9,
    enrolledCount: 7100,
    instructor: { name: 'Dr. Alex Mercer', title: 'AI Research Director' },
    shortDescription: 'Prompt engineering, Retrieval-Augmented Generation (RAG), vector databases (Chroma, Pinecone), LangChain, and fine-tuning.',
    fullDescription: 'Build next-generation intelligent applications. Connect enterprise PDF documents to Large Language Models using semantic vector retrieval.',
    learningObjectives: ['Build RAG pipelines connecting documents to vector databases', 'Implement semantic chunking, vector indexing, and prompt chains'],
    prerequisites: ['Python proficiency', 'Basic API experience'],
    technologies: ['LangChain', 'ChromaDB', 'Vector Embeddings', 'RAG'],
    modules: [
      {
        id: 'genai-1',
        title: 'Retrieval-Augmented Generation (RAG)',
        description: 'Chunking, dense vector embeddings, and context injection.',
        lessons: [
          { id: 'genai-1-1', title: 'Document Chunking Strategies and Vector Similarity Search', duration: '35 min', type: 'reading' },
          { id: 'genai-1-2', title: 'Building a Q&A Bot Over Academic Textbooks with LangChain', duration: '60 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // DATABASE MANAGEMENT
  // ==========================================
  {
    id: 'db-relational-design-sql',
    title: 'Database Systems: Design, Relational Theory & SQL',
    code: 'CSC 301',
    category: 'Database Management',
    department: 'Database Systems',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (34 hours)',
    rating: 4.9,
    enrolledCount: 6300,
    instructor: { name: 'Kweku Mensah', title: 'Database Administrator' },
    shortDescription: 'Relational algebra, ER diagrams, 1NF to BCNF normalization, ACID transactions, B-Tree indexing, and query optimization.',
    fullDescription: 'The core academic database curriculum. Master how database engines store rows in pages, execute write-ahead logs, and optimize query plans.',
    learningObjectives: [
      'Design normalized 3NF/BCNF relational schemas eliminating anomalies.',
      'Explain ACID properties and transaction isolation levels.',
      'Analyze query execution plans using EXPLAIN ANALYZE and B-Tree indexes.'
    ],
    prerequisites: ['CSC 101 or basic computing'],
    technologies: ['PostgreSQL', 'ER Diagrams', 'B-Tree Indexes', 'ACID'],
    modules: [
      {
        id: 'db-1',
        title: 'Relational Modeling & Normalization',
        description: 'Functional dependencies, 1NF, 2NF, 3NF, and Boyce-Codd Normal Form.',
        lessons: [
          { id: 'db-1-1', title: 'Identifying Functional Dependencies and Redundancy', duration: '35 min', type: 'reading' },
          { id: 'db-1-2', title: 'Normalizing a Messy University Registration Schema to 3NF', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'db-nosql-mongodb',
    title: 'NoSQL Databases & MongoDB Architecture',
    code: 'CSC 307',
    category: 'Database Management',
    department: 'Database Systems',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '6 weeks (24 hours)',
    rating: 4.7,
    enrolledCount: 4100,
    instructor: { name: 'Kweku Mensah', title: 'Database Administrator' },
    shortDescription: 'Document models, key-value stores, columnar databases, MongoDB aggregation pipelines, sharding, and replication replica sets.',
    fullDescription: 'Explore non-relational database paradigms designed for flexible schemas, high-write throughput, and horizontal scale.',
    learningObjectives: ['Model document hierarchies (embedding vs referencing)', 'Execute multi-stage aggregation pipelines in MongoDB'],
    prerequisites: ['Database basics'],
    technologies: ['MongoDB', 'Aggregation Pipeline', 'NoSQL', 'Mongoose'],
    modules: [
      {
        id: 'nosql-1',
        title: 'Document Modeling & Aggregations',
        description: '$match, $group, $unwind, and indexing strategies.',
        lessons: [
          { id: 'nosql-1-1', title: 'When to Embed vs When to Reference in MongoDB', duration: '30 min', type: 'reading' },
          { id: 'nosql-1-2', title: 'Writing Real-Time Analytics with Aggregation Pipelines', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // NETWORKING
  // ==========================================
  {
    id: 'net-computer-networks',
    title: 'Computer Networks & Internet Protocols',
    code: 'CSC 204',
    category: 'Networking',
    department: 'Networking',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (32 hours)',
    rating: 4.8,
    enrolledCount: 5200,
    instructor: { name: 'Dr. Samuel Kalu', title: 'Network Infrastructure Lead' },
    shortDescription: 'OSI 7-layer model, TCP/IP stack, IPv4 & IPv6 addressing, CIDR subnetting, ARP, DNS, DHCP, BGP, and routing protocols.',
    fullDescription: 'Understand how the global internet transports trillions of packets daily. Calculate complex subnet masks and trace end-to-end packet paths.',
    learningObjectives: [
      'Deconstruct network flows across the OSI 7-layer and TCP/IP models.',
      'Perform variable length subnet masking (VLSM) and CIDR notation calculations.',
      'Explain TCP three-way handshakes, sliding window flow control, and congestion avoidance.'
    ],
    prerequisites: ['CSC 101'],
    technologies: ['TCP/IP', 'Subnetting', 'Wireshark', 'Packet Tracer'],
    modules: [
      {
        id: 'net-1',
        title: 'OSI Model & IP Subnetting',
        description: 'Binary IP addressing, network masks, and broadcast domains.',
        lessons: [
          { id: 'net-1-1', title: 'The OSI 7-Layer Reference Model vs TCP/IP Architecture', duration: '30 min', type: 'reading' },
          { id: 'net-1-2', title: 'Mastering CIDR Subnetting Calculations with Binary Math', duration: '50 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // CLOUD COMPUTING
  // ==========================================
  {
    id: 'cloud-aws-fundamentals',
    title: 'Cloud Computing Foundations & AWS Architecture',
    code: 'CLD 201',
    category: 'Cloud Computing',
    department: 'Cloud Computing',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.9,
    enrolledCount: 6500,
    instructor: { name: 'Tariq Al-Mansoor', title: 'AWS Certified Solutions Architect' },
    shortDescription: 'Compute (EC2), storage (S3), networking (VPC), IAM security, serverless (Lambda), databases (RDS), and high availability.',
    fullDescription: 'Discover how modern enterprises construct highly available, scalable infrastructure across worldwide AWS regions and availability zones.',
    learningObjectives: ['Architect multi-tier web applications with VPC subnets and NAT Gateways', 'Deploy serverless compute workflows with AWS Lambda and API Gateway'],
    prerequisites: ['Networking fundamentals', 'Linux basics'],
    technologies: ['AWS', 'EC2', 'S3', 'VPC', 'Lambda'],
    modules: [
      {
        id: 'cld-1',
        title: 'Virtual Private Clouds & Compute',
        description: 'Public/private subnets, internet gateways, and EC2 instances.',
        lessons: [
          { id: 'cld-1-1', title: 'Designing a Secure Multi-AZ VPC Architecture', duration: '35 min', type: 'reading' },
          { id: 'cld-1-2', title: 'Launching and Hardening an EC2 Linux Server', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // MATHEMATICS & STATISTICS
  // ==========================================
  {
    id: 'math-linear-algebra-ml',
    title: 'Linear Algebra for Machine Learning & Graphics',
    code: 'MTH 201',
    category: 'Mathematics & Statistics',
    department: 'Computer Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (32 hours)',
    rating: 4.8,
    enrolledCount: 4300,
    instructor: { name: 'Prof. Amara Chen', title: 'Professor of Mathematics' },
    shortDescription: 'Vectors, matrices, linear transformations, eigenvalues & eigenvectors, dot products, matrix factorization, and SVD in computing.',
    fullDescription: 'Linear algebra is the foundational grammar of data science, 3D computer graphics, and artificial intelligence. Understand vector projections geometrically.',
    learningObjectives: ['Compute matrix multiplication, determinants, and inverses', 'Find eigenvalues and eigenvectors for coordinate transformations'],
    prerequisites: ['High school calculus'],
    technologies: ['NumPy', 'Vectors', 'Eigenvalues', 'Matrix Decomposition'],
    modules: [
      {
        id: 'la-1',
        title: 'Vectors, Spaces & Transformations',
        description: 'Spans, basis vectors, and linear mappings.',
        lessons: [
          { id: 'la-1-1', title: 'Vector Dot Products and Projections Geometrically', duration: '30 min', type: 'reading' },
          { id: 'la-1-2', title: 'Calculating Eigenvalues & Diagonalization in NumPy', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'math-calculus-optimization',
    title: 'Multivariable Calculus & Gradient Optimization',
    code: 'MTH 202',
    category: 'Mathematics & Statistics',
    department: 'Computer Science',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '7 weeks (28 hours)',
    rating: 4.7,
    enrolledCount: 2900,
    instructor: { name: 'Prof. Amara Chen', title: 'Professor of Mathematics' },
    shortDescription: 'Partial derivatives, gradients, Jacobian & Hessian matrices, Taylor approximations, and convex optimization in algorithms.',
    fullDescription: 'Understand how machine learning algorithms slide down cost function contours to discover optimal weight configurations.',
    learningObjectives: ['Calculate gradient vectors and directional derivatives', 'Analyze convexity with Hessian matrices'],
    prerequisites: ['Single-variable calculus'],
    technologies: ['Gradients', 'Jacobian', 'Optimization', 'Python'],
    modules: [
      {
        id: 'calc-1',
        title: 'Partial Derivatives & Gradients',
        description: 'Multidimensional rate of change and tangent planes.',
        lessons: [
          { id: 'calc-1-1', title: 'The Gradient Vector as Direction of Steepest Ascent', duration: '30 min', type: 'reading' },
          { id: 'calc-1-2', title: 'Visualizing 3D Loss Landscapes with Contour Plots', duration: '40 min', type: 'lab' }
        ]
      }
    ]
  },

  // ==========================================
  // UI/UX & MOBILE DEVELOPMENT
  // ==========================================
  {
    id: 'uiux-product-design',
    title: 'UI/UX Design Systems & Product Prototyping',
    code: 'DES 101',
    category: 'UI/UX Design',
    department: 'Information Technology',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '6 weeks (24 hours)',
    rating: 4.8,
    enrolledCount: 4900,
    instructor: { name: 'Maya Lin', title: 'Product Design Lead' },
    shortDescription: 'Figma masterclass, wireframing, typography, color theory, accessibility standards (WCAG), interactive prototyping, and design systems.',
    fullDescription: 'Learn how to create human-centered software interfaces with intuitive user journeys and scalable design tokens in Figma.',
    learningObjectives: ['Design high-fidelity mobile and desktop mockups in Figma', 'Establish reusable design systems with component variants and auto-layout'],
    prerequisites: ['No design background needed'],
    technologies: ['Figma', 'Design Systems', 'WCAG', 'Wireframing'],
    modules: [
      {
        id: 'ui-1',
        title: 'Design Foundations & Figma Architecture',
        description: 'Auto-layout, responsive constraints, and typography hierarchies.',
        lessons: [
          { id: 'ui-1-1', title: 'Visual Hierarchy and Spacing Math in UI Design', duration: '25 min', type: 'reading' },
          { id: 'ui-1-2', title: 'Mastering Figma Auto-Layout 5.0 for Responsive Cards', duration: '45 min', type: 'lab' }
        ]
      }
    ]
  },
  {
    id: 'mobile-react-native',
    title: 'Cross-Platform Mobile Apps with React Native',
    code: 'MOB 201',
    category: 'Mobile Development',
    department: 'Mobile Development',
    level: 'Year 2',
    difficulty: 'Intermediate',
    duration: '8 weeks (32 hours)',
    rating: 4.8,
    enrolledCount: 3950,
    instructor: { name: 'Jordan Smith', title: 'Mobile Specialist' },
    shortDescription: 'Expo ecosystem, native mobile components, gesture handling, navigation stacks, AsyncStorage, and app store deployment.',
    fullDescription: 'Build native iOS and Android applications using your existing JavaScript and React skills.',
    learningObjectives: ['Develop cross-platform native iOS & Android applications with Expo', 'Integrate device camera, geolocation, and push notification APIs'],
    prerequisites: ['React fundamentals'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Mobile UX'],
    modules: [
      {
        id: 'rn-1',
        title: 'Mobile Architecture & Navigation',
        description: 'React Navigation stacks, tabs, and native components.',
        lessons: [
          { id: 'rn-1-1', title: 'React Native Bridge vs New Fabric Architecture', duration: '30 min', type: 'reading' },
          { id: 'rn-1-2', title: 'Building a Tabbed Mobile Flashcard Study App', duration: '55 min', type: 'lab' }
        ]
      }
    ]
  }
];
