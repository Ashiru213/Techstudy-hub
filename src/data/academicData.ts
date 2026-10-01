import { AcademicLevel, Semester, Department } from '../types';

export interface AcademicCourseReference {
  code: string;
  title: string;
  department: Department;
  level: AcademicLevel;
  semester: Semester;
  credits: number;
  description: string;
  syllabus: {
    unit: number;
    title: string;
    topics: string[];
  }[];
  lectureNotes: {
    week: number;
    topic: string;
    summary: string;
    keyTakeaways: string[];
    formulaOrCode?: string;
  }[];
  pastQuestions: {
    year: string;
    semester: string;
    question: string;
    marks: number;
    solutionGuide: string;
  }[];
  recommendedBooks: string[];
}

export const academicCurriculum: Partial<Record<Department, Record<string, { semester1: AcademicCourseReference[]; semester2: AcademicCourseReference[] }>>> = {
  'Computer Science': {
    'Year 1': {
      semester1: [
        {
          code: 'CSC 101',
          title: 'Introduction to Computer Science',
          department: 'Computer Science',
          level: 'Year 1',
          semester: 'Semester 1',
          credits: 3,
          description: 'Fundamental concepts of computing, historical evolution of computers, hardware components, von Neumann architecture, binary representation, and operating system principles.',
          syllabus: [
            { unit: 1, title: 'History & Generations of Computers', topics: ['Mechanical to electronic computing', 'Generations (Vacuum tubes to Microprocessors)', 'Moore’s Law and beyond'] },
            { unit: 2, title: 'Binary & Boolean Fundamentals', topics: ['Binary, octal, hexadecimal bases', 'Two’s complement signed integers', 'Truth tables for AND, OR, XOR, NOT, NAND'] },
            { unit: 3, title: 'Von Neumann Architecture', topics: ['CPU registers, ALU, CU', 'Bus interfaces (Data, Address, Control)', 'Instruction execution cycle'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Number Systems & Information Encoding',
              summary: 'Modern digital computers store and process all information as discrete electrical potentials mapped to binary 0 and 1.',
              keyTakeaways: [
                'Base-2 binary uses digits {0, 1}; Base-16 hexadecimal uses {0-9, A-F}.',
                'Each hex digit corresponds directly to 4 binary bits (one nibble).',
                'Negative numbers in modern CPUs are stored in Two’s Complement form.'
              ],
              formulaOrCode: 'Two’s Complement = Invert all bits + 1\nExample: +5 = 00000101 -> Invert: 11111010 -> +1: 11111011 (-5)'
            },
            {
              week: 2,
              topic: 'The Central Processing Unit (CPU) & Instruction Cycle',
              summary: 'The CPU performs sequential instruction cycles comprised of Fetch, Decode, and Execute phases controlled by the system clock.',
              keyTakeaways: [
                'Program Counter (PC) stores the address of the next instruction.',
                'Instruction Register (IR) holds the fetched machine instruction.',
                'Memory Address Register (MAR) and Memory Data Register (MDR) handle bus transfers.'
              ]
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Explain the Von Neumann bottleneck. Outline two hardware architectural innovations used in modern processors to alleviate this limitation.',
              marks: 15,
              solutionGuide: 'Von Neumann bottleneck refers to the throughput limitation between the CPU and main memory over the shared bus. Mitigations include multi-level on-chip cache hierarchies (L1, L2, L3) and speculative instruction pipelining.'
            },
            {
              year: '2024/2025',
              semester: 'First Semester Exam',
              question: 'Convert the decimal value -43 into an 8-bit two’s complement binary representation. Show your detailed workings.',
              marks: 10,
              solutionGuide: '+43 in 8-bit binary is 00101011. Invert all bits: 11010100. Add 1: 11010101. Hence -43 is 11010101.'
            }
          ],
          recommendedBooks: ['Computer Organization and Design (Patterson & Hennessy)', 'Introduction to Computing Systems (Patt & Patel)']
        },
        {
          code: 'MTH 101',
          title: 'Calculus I & Analytical Geometry',
          department: 'Computer Science',
          level: 'Year 1',
          semester: 'Semester 1',
          credits: 3,
          description: 'Limits, continuity, differential calculus, mean value theorem, curve sketching, applications of derivatives to algorithmic optimization.',
          syllabus: [
            { unit: 1, title: 'Limits & Continuity', topics: ['Epsilon-delta definitions', 'One-sided limits', 'Infinite limits and asymptotes'] },
            { unit: 2, title: 'Differentiation', topics: ['Power rule, Product rule, Quotient rule, Chain rule', 'Implicit differentiation'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Limits and Rate of Change',
              summary: 'The derivative represents the instantaneous rate of change of a function, defined via the limit of difference quotients.',
              keyTakeaways: ['Derivative definition: f\'(x) = lim_{h->0} [f(x+h) - f(x)] / h', 'Differentiability implies continuity, but continuity does not guarantee differentiability.']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Find dy/dx for the implicit equation x^3 + y^3 = 6xy.',
              marks: 12,
              solutionGuide: 'Differentiating with respect to x: 3x^2 + 3y^2(dy/dx) = 6y + 6x(dy/dx). Group terms: (3y^2 - 6x)dy/dx = 6y - 3x^2. Result: dy/dx = (2y - x^2) / (y^2 - 2x).'
            }
          ],
          recommendedBooks: ['Calculus: Early Transcendentals (James Stewart)']
        }
      ],
      semester2: [
        {
          code: 'CSC 102',
          title: 'Programming Fundamentals in C & Python',
          department: 'Computer Science',
          level: 'Year 1',
          semester: 'Semester 2',
          credits: 4,
          description: 'Control flow, primitive data types, functions, pointers in C, memory layout, arrays, and structured algorithm design.',
          syllabus: [
            { unit: 1, title: 'Procedural Programming Mechanics', topics: ['Variable types and memory size', 'Conditionals and iteration constructs', 'Scope and lifetime of variables'] },
            { unit: 2, title: 'Pointers & Dynamic Memory', topics: ['Pointer variables and address-of operator', 'Pointers and array equivalence', 'Dynamic allocation with malloc and free'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Pointers and Memory Addresses in C',
              summary: 'A pointer is a variable whose value is the physical or virtual memory address of another variable.',
              keyTakeaways: ['&x returns the memory address of x', '*ptr dereferences the pointer to read or write the value at that address'],
              formulaOrCode: 'int val = 42;\nint *ptr = &val;\n*ptr = 99; // modifies val directly in memory'
            }
          ],
          pastQuestions: [
            {
              year: '2024/2025',
              semester: 'Second Semester Exam',
              question: 'Write a C function that reverses a singly linked list in-place in O(N) time and O(1) auxiliary space.',
              marks: 15,
              solutionGuide: 'Maintain three pointers: prev = NULL, current = head, next = NULL. In while loop: next = current->next; current->next = prev; prev = current; current = next. Return prev.'
            }
          ],
          recommendedBooks: ['The C Programming Language (Kernighan & Ritchie)', 'Programming in C (Stephen Kochan)']
        },
        {
          code: 'MTH 103',
          title: 'Discrete Mathematics for Computing',
          department: 'Computer Science',
          level: 'Year 1',
          semester: 'Semester 2',
          credits: 3,
          description: 'Set theory, predicate calculus, mathematical induction, relations, functions, graph theory, trees, and combinatorics.',
          syllabus: [
            { unit: 1, title: 'Mathematical Proofs & Induction', topics: ['Direct proof, contrapositive, contradiction', 'Principle of Mathematical Induction', 'Strong induction'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Mathematical Induction Principles',
              summary: 'To prove P(n) holds for all n >= 1: 1. Prove Base Step P(1). 2. Induction Step: Assume P(k) is true (inductive hypothesis), prove P(k+1) is true.',
              keyTakeaways: ['Base case anchors the chain.', 'Inductive step proves the implication P(k) -> P(k+1).']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'Second Semester Exam',
              question: 'Using mathematical induction, prove that the sum of the first n positive integers equals n(n+1)/2.',
              marks: 12,
              solutionGuide: 'Base case n=1: 1 = 1(2)/2 = 1 (True). Assume sum(k) = k(k+1)/2. For k+1: sum(k+1) = k(k+1)/2 + (k+1) = (k+1)(k/2 + 1) = (k+1)(k+2)/2. QED.'
            }
          ],
          recommendedBooks: ['Discrete Mathematics and its Applications (Kenneth Rosen)']
        }
      ]
    },
    'Year 2': {
      semester1: [
        {
          code: 'CSC 201',
          title: 'Data Structures and Algorithms',
          department: 'Computer Science',
          level: 'Year 2',
          semester: 'Semester 1',
          credits: 4,
          description: 'Abstract Data Types (ADTs), asymptotic notation, linked lists, stacks, queues, trees, binary search trees, heaps, sorting algorithms, hashing, and graphs.',
          syllabus: [
            { unit: 1, title: 'Asymptotic Analysis & Linear Structures', topics: ['Big-O, Big-Omega, Big-Theta definitions', 'Amortized array resizing', 'Singly, doubly, circular linked lists'] },
            { unit: 2, title: 'Non-Linear Structures & Trees', topics: ['Binary Search Trees (BST)', 'AVL Trees and balance factors', 'Min/Max Heaps and HeapSort'] },
            { unit: 3, title: 'Graphs and Traversals', topics: ['Adjacency matrix vs list', 'BFS and DFS traversal algorithms', 'Shortest paths (Dijkstra)'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Asymptotic Complexity (Big-O)',
              summary: 'Big-O notation describes the upper bound of the growth rate of algorithm resource consumption as input size n approaches infinity.',
              keyTakeaways: [
                'O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)',
                'Drop lower-order terms and constant coefficients.'
              ],
              formulaOrCode: 'f(n) is O(g(n)) iff there exist constants c > 0 and n_0 >= 0 such that |f(n)| <= c|g(n)| for all n >= n_0.'
            },
            {
              week: 4,
              topic: 'Self-Balancing AVL Trees',
              summary: 'An AVL tree is a BST where the heights of the two child subtrees of any node differ by at most one.',
              keyTakeaways: [
                'Balance Factor = height(left) - height(right) in {-1, 0, 1}.',
                'Rebalancing requires Left, Right, Left-Right, or Right-Left rotations.'
              ]
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Explain the difference between QuickSort and MergeSort in terms of time complexity (best, average, worst), auxiliary space complexity, and stability.',
              marks: 20,
              solutionGuide: 'MergeSort: Time O(N log N) all cases, Space O(N), Stable. QuickSort: Best/Avg O(N log N), Worst O(N^2) (poor pivot), Space O(log N) recursion stack, Not stable by default.'
            }
          ],
          recommendedBooks: ['Introduction to Algorithms (CLRS)', 'Data Structures and Algorithm Analysis in C++ (Mark Weiss)']
        },
        {
          code: 'CSC 202',
          title: 'Operating Systems Principles',
          department: 'Computer Science',
          level: 'Year 2',
          semester: 'Semester 1',
          credits: 3,
          description: 'Process management, thread concurrency, synchronization primitives, deadlocks, CPU scheduling algorithms, virtual memory, paging, and file system architectures.',
          syllabus: [
            { unit: 1, title: 'Processes & Concurrency', topics: ['Process states, PCB, and context switching', 'Threads, mutexes, semaphores', 'Deadlock conditions and prevention'] },
            { unit: 2, title: 'Memory Management', topics: ['Virtual memory and paging', 'TLB caching', 'Page replacement algorithms (FIFO, LRU, Clock)'] }
          ],
          lectureNotes: [
            {
              week: 2,
              topic: 'Coffman Deadlock Conditions',
              summary: 'Deadlock can occur if and only if all four Coffman conditions hold simultaneously: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait.',
              keyTakeaways: ['Breaking any single Coffman condition renders deadlock impossible.']
            }
          ],
          pastQuestions: [
            {
              year: '2024/2025',
              semester: 'First Semester Exam',
              question: 'Consider a paging system with 4 page frames. Given the reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, calculate the number of page faults using the LRU replacement algorithm.',
              marks: 15,
              solutionGuide: 'Step-by-step trace demonstrates 6 page faults as older unreferenced pages (7, 1, etc.) are replaced sequentially.'
            }
          ],
          recommendedBooks: ['Operating System Concepts (Silberschatz, Galvin, Gagne)']
        }
      ],
      semester2: [
        {
          code: 'CSC 204',
          title: 'Computer Networks & Communications',
          department: 'Computer Science',
          level: 'Year 2',
          semester: 'Semester 2',
          credits: 3,
          description: 'OSI 7-layer architecture, TCP/IP, IP addressing, CIDR subnetting, ARP, ICMP, routing protocols, flow and congestion control.',
          syllabus: [
            { unit: 1, title: 'Network Layer & Subnetting', topics: ['IPv4 address classes and CIDR', 'Subnet masks and broadcast addresses', 'VLSM design'] }
          ],
          lectureNotes: [
            {
              week: 3,
              topic: 'CIDR Subnetting Calculations',
              summary: 'CIDR allows flexible division of address spaces by allocating variable prefix bits to the network identifier.',
              keyTakeaways: ['Usable hosts per subnet = 2^(32 - prefix) - 2 (subtracting network and broadcast addresses).']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'Second Semester Exam',
              question: 'Given the network IP 192.168.10.0/26, determine: (i) the subnet mask, (ii) total number of subnets if carved from a /24, (iii) number of usable hosts per subnet, (iv) the broadcast address of the first subnet.',
              marks: 16,
              solutionGuide: '(i) 255.255.255.192. (ii) 2^(26-24) = 4 subnets. (iii) 2^6 - 2 = 62 usable hosts. (iv) Broadcast address: 192.168.10.63.'
            }
          ],
          recommendedBooks: ['Computer Networking: A Top-Down Approach (Kurose & Ross)']
        },
        {
          code: 'CSC 206',
          title: 'Object-Oriented Software Engineering',
          department: 'Computer Science',
          level: 'Year 2',
          semester: 'Semester 2',
          credits: 3,
          description: 'SOLID design principles, UML architectural modeling, GoF design patterns (Factory, Observer, Strategy, Singleton), Git workflows, and refactoring.',
          syllabus: [
            { unit: 1, title: 'SOLID Architecture & Clean Code', topics: ['Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'SOLID Principles in Practice',
              summary: 'SOLID principles guide software engineers in crafting systems that are resilient to changing requirements without rewriting existing code.',
              keyTakeaways: ['Open/Closed: Classes should be open for extension, but closed for modification.']
            }
          ],
          pastQuestions: [
            {
              year: '2024/2025',
              semester: 'Second Semester Exam',
              question: 'Explain the Observer Pattern with an illustrative UML class diagram and show a practical implementation in Java or TypeScript.',
              marks: 15,
              solutionGuide: 'Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.'
            }
          ],
          recommendedBooks: ['Design Patterns: Elements of Reusable Object-Oriented Software (GoF)']
        }
      ]
    },
    'Year 3': {
      semester1: [
        {
          code: 'CSC 301',
          title: 'Database Management Systems',
          department: 'Computer Science',
          level: 'Year 3',
          semester: 'Semester 1',
          credits: 4,
          description: 'Relational data model, relational algebra, SQL DDL/DML, functional dependencies, normalization (1NF, 2NF, 3NF, BCNF), indexing (B+ Trees), transactions, and ACID.',
          syllabus: [
            { unit: 1, title: 'Relational Algebra & SQL', topics: ['Selection, Projection, Join operators', 'Subqueries and Aggregations'] },
            { unit: 2, title: 'Database Design & Normalization', topics: ['Functional dependencies', '1NF, 2NF, 3NF, BCNF decomposition', 'Lossless join and dependency preservation'] }
          ],
          lectureNotes: [
            {
              week: 2,
              topic: 'Database Normalization',
              summary: 'Normalization systematically eliminates data redundancy, update anomalies, insertion anomalies, and deletion anomalies.',
              keyTakeaways: [
                '1NF: Atomic column values.',
                '2NF: 1NF + no partial dependency on candidate keys.',
                '3NF: 2NF + no transitive dependencies (non-key attributes depend only on candidate keys).'
              ]
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Given relation R(A, B, C, D, E) with functional dependencies: AB -> C, C -> D, D -> E. Find the candidate key(s) and decompose into 3NF.',
              marks: 18,
              solutionGuide: 'Candidate key is AB since AB+ = {A,B,C,D,E}. C -> D and D -> E violate 3NF. 3NF decomposition: R1(A, B, C), R2(C, D), R3(D, E).'
            }
          ],
          recommendedBooks: ['Database System Concepts (Silberschatz, Korth, Sudarshan)']
        },
        {
          code: 'CSC 303',
          title: 'Design and Analysis of Algorithms',
          department: 'Computer Science',
          level: 'Year 3',
          semester: 'Semester 1',
          credits: 3,
          description: 'Greedy algorithms, Divide and Conquer, Dynamic Programming, network flows, NP-completeness, reduction proofs, and approximation algorithms.',
          syllabus: [
            { unit: 1, title: 'Dynamic Programming & Memoization', topics: ['Optimal substructure and overlapping subproblems', '0/1 Knapsack problem', 'Longest Common Subsequence'] }
          ],
          lectureNotes: [
            {
              week: 3,
              topic: 'Dynamic Programming (0/1 Knapsack)',
              summary: 'Dynamic programming solves optimization problems by breaking them into overlapping subproblems, storing intermediate results in a table.',
              keyTakeaways: ['DP requires: 1. Optimal substructure, 2. Overlapping subproblems.'],
              formulaOrCode: 'dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w - wt[i-1]]) if wt[i-1] <= w else dp[i-1][w]'
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Prove that the 0/1 Knapsack problem cannot be solved optimally using a greedy choice property, contrasting with Fractional Knapsack.',
              marks: 14,
              solutionGuide: 'Counter-example with capacity 50 and items showing greedy heuristic fails because items cannot be divided, leaving suboptimal remaining capacity.'
            }
          ],
          recommendedBooks: ['Algorithm Design (Kleinberg & Tardos)']
        }
      ],
      semester2: [
        {
          code: 'CSC 302',
          title: 'Theory of Computation & Formal Automata',
          department: 'Computer Science',
          level: 'Year 3',
          semester: 'Semester 2',
          credits: 3,
          description: 'Deterministic and Nondeterministic Finite Automata (DFA/NFA), Regular Expressions, Pumping Lemma, Context-Free Grammars, Pushdown Automata, Turing Machines, Decidability.',
          syllabus: [
            { unit: 1, title: 'Regular Languages', topics: ['DFA formal definition', 'NFA to DFA subset construction', 'Pumping Lemma for regular languages'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Finite Automata 5-Tuple Definition',
              summary: 'A DFA is formally defined as a 5-tuple (Q, Sigma, delta, q0, F).',
              keyTakeaways: ['delta: Q x Sigma -> Q is the deterministic transition function.']
            }
          ],
          pastQuestions: [
            {
              year: '2024/2025',
              semester: 'Second Semester Exam',
              question: 'Using the Pumping Lemma, prove that the language L = {0^n 1^n | n >= 0} is not regular.',
              marks: 16,
              solutionGuide: 'Assume L is regular with pumping length p. Choose string s = 0^p 1^p. Any division s = xyz with |xy| <= p and |y| > 0 forces y to consist exclusively of 0s. Pumping y (xy^2 z) yields more 0s than 1s, contradicting membership in L.'
            }
          ],
          recommendedBooks: ['Introduction to the Theory of Computation (Michael Sipser)']
        }
      ]
    },
    'Year 4': {
      semester1: [
        {
          code: 'CSC 401',
          title: 'Compiler Construction',
          department: 'Computer Science',
          level: 'Year 4',
          semester: 'Semester 1',
          credits: 3,
          description: 'Lexical analysis (lex/flex), LL and LR syntax parsing (bison/yacc), Abstract Syntax Trees (AST), symbol tables, semantic validation, three-address code generation, and optimization.',
          syllabus: [
            { unit: 1, title: 'Lexical & Syntax Parsing', topics: ['Regular expressions to DFAs', 'First and Follow sets for LL(1)', 'LR(0) and LALR parser item sets'] }
          ],
          lectureNotes: [
            {
              week: 2,
              topic: 'FIRST and FOLLOW Sets in Top-Down Parsing',
              summary: 'FIRST(alpha) is the set of terminals that begin strings derived from alpha. FOLLOW(A) is the set of terminals that can appear immediately to the right of A.',
              keyTakeaways: ['LL(1) parsing table conflicts occur if multiple productions exist for the same [Non-Terminal, Terminal] coordinate.']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Compute FIRST and FOLLOW sets for the grammar: S -> A B; A -> a | epsilon; B -> b.',
              marks: 14,
              solutionGuide: 'FIRST(A) = {a, epsilon}. FIRST(B) = {b}. FIRST(S) = {a, b}. FOLLOW(S) = {$}. FOLLOW(A) = {b}. FOLLOW(B) = {$}.'
            }
          ],
          recommendedBooks: ['Compilers: Principles, Techniques, and Tools (Dragon Book - Aho, Lam, Sethi, Ullman)']
        }
      ],
      semester2: [
        {
          code: 'CSC 499',
          title: 'Final Year Capstone Research Project',
          department: 'Computer Science',
          level: 'Year 4',
          semester: 'Semester 2',
          credits: 6,
          description: 'Independent research, design, implementation, and empirical evaluation of an advanced technological artifact or system under faculty supervision.',
          syllabus: [
            { unit: 1, title: 'Research Methodology & System Architecture', topics: ['Literature review', 'Requirements specification', 'Empirical benchmark design', 'Defense presentation'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Academic Software Engineering Methodology',
              summary: 'A successful capstone artifact must combine rigorous algorithmic design with measurable experimental verification against existing state-of-the-art baselines.',
              keyTakeaways: ['Define clear problem statement and quantitative evaluation metrics upfront.']
            }
          ],
          pastQuestions: [
            {
              year: '2024/2025',
              semester: 'Second Semester Defense',
              question: 'Defend your chosen database and caching architecture against anticipated high-concurrency scaling bottlenecks.',
              marks: 25,
              solutionGuide: 'Detail read-replica scaling, connection pooling parameters, Redis write-through caching, and idempotent transactional guarantees.'
            }
          ],
          recommendedBooks: ['The Craft of Research (Booth, Colomb, Williams)']
        }
      ]
    }
  },
  'Data Analysis': {
    'Year 1': {
      semester1: [
        {
          code: 'DAT 101',
          title: 'Introduction to Data Analysis',
          department: 'Data Analysis',
          level: 'Year 1',
          semester: 'Semester 1',
          credits: 3,
          description: 'Data collection paradigms, observational studies vs randomized trials, descriptive metrics, spreadsheet calculations, and exploratory data reporting.',
          syllabus: [
            { unit: 1, title: 'Data Types & Measurement Scales', topics: ['Nominal, ordinal, interval, ratio variables', 'Discrete vs continuous data', 'Structured vs unstructured data'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Scales of Measurement',
              summary: 'The scale of measurement dictates which mathematical operations and statistical summaries are valid.',
              keyTakeaways: ['Nominal: labels only; Ordinal: ranked; Interval: fixed distance without true zero; Ratio: true zero point.']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Classify each variable by its measurement scale: (i) Customer satisfaction rating (1-5 stars), (ii) Temperature in Celsius, (iii) Annual salary in dollars, (iv) Payment method (Cash, Card, Crypto).',
              marks: 10,
              solutionGuide: '(i) Ordinal, (ii) Interval, (iii) Ratio, (iv) Nominal.'
            }
          ],
          recommendedBooks: ['Naked Statistics (Charles Wheelan)']
        }
      ],
      semester2: [
        {
          code: 'DAT 102',
          title: 'Advanced Excel & Business Analytics',
          department: 'Data Analysis',
          level: 'Year 1',
          semester: 'Semester 2',
          credits: 3,
          description: 'Power Query automated transformations, dynamic arrays (FILTER, SORT, UNIQUE), multi-criteria aggregations, Pivot Tables, and executive KPI design.',
          syllabus: [
            { unit: 1, title: 'Dynamic Array Formulas', topics: ['Spill behavior', 'XLOOKUP nested queries', 'LET function variables'] }
          ],
          lectureNotes: [
            {
              week: 2,
              topic: 'Excel Modern Lookup Grammar',
              summary: 'XLOOKUP replaces both VLOOKUP and INDEX/MATCH with safer default exact matching and bidirectional column scanning.',
              keyTakeaways: ['=XLOOKUP(lookup_val, lookup_array, return_array, [if_not_found]) avoids fragile column index numbers.']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'Second Semester Exam',
              question: 'Write an Excel formula using FILTER and SORT to extract all customers from region "West" who spent over $500, ordered by spending descending.',
              marks: 12,
              solutionGuide: '=SORT(FILTER(A2:D100, (B2:B100="West") * (C2:C100 > 500)), 3, -1)'
            }
          ],
          recommendedBooks: ['Excel Data Analysis For Dummies (Paul McFedries)']
        }
      ]
    },
    'Year 2': {
      semester1: [
        {
          code: 'DAT 201',
          title: 'Relational Database Querying with SQL',
          department: 'Data Analysis',
          level: 'Year 2',
          semester: 'Semester 1',
          credits: 4,
          description: 'SQL queries, filtering, aggregation, multi-table JOINs, subqueries, Common Table Expressions (CTEs), and window analytical functions.',
          syllabus: [
            { unit: 1, title: 'Multi-table Joins & Data Modeling', topics: ['INNER, LEFT, RIGHT, FULL OUTER joins', 'Cross joins and self joins', 'Cartesian product pitfalls'] }
          ],
          lectureNotes: [
            {
              week: 3,
              topic: 'SQL Window Functions (OVER Clause)',
              summary: 'Window functions perform calculations across a set of table rows that are related to the current row without collapsing rows like GROUP BY.',
              keyTakeaways: ['ROW_NUMBER() generates sequential integers; RANK() assigns ties with gaps; DENSE_RANK() assigns ties without gaps.']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Write a SQL query using window functions to find the top 2 highest-earning employees in each department from an Employee(id, name, department_id, salary) table.',
              marks: 15,
              solutionGuide: 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rnk FROM Employee) SELECT * FROM Ranked WHERE rnk <= 2;'
            }
          ],
          recommendedBooks: ['SQL for Data Analysis (Cathy Tanimura)']
        }
      ],
      semester2: [
        {
          code: 'DAT 202',
          title: 'Python for Data Analysis: NumPy & Pandas',
          department: 'Data Analysis',
          level: 'Year 2',
          semester: 'Semester 2',
          credits: 4,
          description: 'Data wrangling with Pandas DataFrames, NumPy vectorization, handling missing values, groupby transformations, time series indexing, and data cleaning pipelines.',
          syllabus: [
            { unit: 1, title: 'Pandas Data Wrangling', topics: ['Indexing and selecting data (.loc and .iloc)', 'Handling nulls (fillna, dropna, interpolate)', 'Reshaping (pivot, melt, stack)'] }
          ],
          lectureNotes: [
            {
              week: 2,
              topic: 'Vectorized Operations vs Python For-Loops',
              summary: 'NumPy and Pandas utilize underlying contiguous C memory arrays to perform vectorized operations orders of magnitude faster than standard Python loops.',
              keyTakeaways: ['Always prefer df["col"] * 2 over for-loops iterating across rows.']
            }
          ],
          pastQuestions: [
            {
              year: '2024/2025',
              semester: 'Second Semester Exam',
              question: 'Explain the difference between .loc and .iloc in Pandas. What happens if you execute df.loc[0:2] vs df.iloc[0:2] when index labels are integers starting from 0?',
              marks: 12,
              solutionGuide: '.loc is label-based and includes the end boundary (rows with index labels 0, 1, 2). .iloc is zero-based integer positional indexing and excludes the end boundary (rows at position 0, 1).'
            }
          ],
          recommendedBooks: ['Python for Data Analysis (Wes McKinney)']
        }
      ]
    },
    'Year 3': {
      semester1: [
        {
          code: 'DAT 301',
          title: 'Business Intelligence & Enterprise Dashboarding',
          department: 'Data Analysis',
          level: 'Year 3',
          semester: 'Semester 1',
          credits: 3,
          description: 'Dimensional modeling (Kimball Star and Snowflake schemas), Power BI data modeling, DAX measure creation, Tableau visual storytelling, and self-service analytics.',
          syllabus: [
            { unit: 1, title: 'Dimensional Modeling & Star Schemas', topics: ['Fact tables vs Dimension tables', 'Surrogate keys', 'Conformed dimensions and bus architecture'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Fact vs Dimension Tables',
              summary: 'Fact tables contain numerical measurements (metrics/events); Dimension tables contain context attributes (who, what, where, when).',
              keyTakeaways: ['Star schema minimizes joins and optimizes query performance in analytical OLAP cubes.']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'First Semester Exam',
              question: 'Design a Star Schema for a retail grocery chain tracking customer basket transactions. Specify at least one Fact table and three Dimension tables with primary and foreign keys.',
              marks: 18,
              solutionGuide: 'Fact_Sales(sale_id, date_key, customer_key, product_key, store_key, quantity, unit_price, discount, profit). Dim_Date(date_key, date, month, quarter, year). Dim_Product(product_key, name, category, brand). Dim_Customer(customer_key, name, tier, city).'
            }
          ],
          recommendedBooks: ['The Data Warehouse Toolkit (Ralph Kimball & Margy Ross)']
        }
      ],
      semester2: [
        {
          code: 'DAT 302',
          title: 'Applied Statistics & A/B Experimentation',
          department: 'Data Analysis',
          level: 'Year 3',
          semester: 'Semester 2',
          credits: 3,
          description: 'Probability distributions, sampling distributions, Central Limit Theorem, hypothesis testing, t-tests, ANOVA, Chi-Square tests, and A/B test power calculation.',
          syllabus: [
            { unit: 1, title: 'Hypothesis Testing Framework', topics: ['Type I and Type II errors', 'p-values and significance alpha', 'Two-sample t-test for conversion rates'] }
          ],
          lectureNotes: [
            {
              week: 2,
              topic: 'Type I and Type II Errors in A/B Testing',
              summary: 'Type I Error (False Positive, alpha): Concluding a treatment had an effect when it did not. Type II Error (False Negative, beta): Failing to detect a real effect when one exists.',
              keyTakeaways: ['Statistical Power = 1 - beta (standard baseline is 80%).']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'Second Semester Exam',
              question: 'An e-commerce site tests a new checkout button (Variant B) against control (Variant A). Sample size is 10,000 users per variant. Variant A conversions = 320; Variant B conversions = 385. Conduct a two-proportion z-test at alpha = 0.05.',
              marks: 15,
              solutionGuide: 'Calculate pooled proportion p_hat, standard error, and z-score (z ~ 2.47). Since z > 1.96 (critical threshold for two-tailed alpha=0.05), reject the null hypothesis and conclude Variant B significantly improves checkout conversions.'
            }
          ],
          recommendedBooks: ['Practical Statistics for Data Scientists (Peter Bruce & Andrew Bruce)']
        }
      ]
    },
    'Year 4': {
      semester1: [
        {
          code: 'DAT 401',
          title: 'Exploratory Data Analysis & Strategic Storytelling',
          department: 'Data Analysis',
          level: 'Year 4',
          semester: 'Semester 1',
          credits: 3,
          description: 'Univariate/bivariate/multivariate visualization, Seaborn and Plotly libraries, anomaly detection, executive dashboard presentations, and decision science.',
          syllabus: [
            { unit: 1, title: 'Multivariate Visualization & Anomaly Detection', topics: ['Pairplots and heatmaps', 'Box plots and IQR outlier boundaries', 'Communicating quantitative uncertainty'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Tukey Outlier Boxplot Fences',
              summary: 'John Tukey defined outliers as observations falling beyond 1.5 * IQR above the third quartile (Q3) or below the first quartile (Q1).',
              keyTakeaways: ['IQR = Q3 - Q1.', 'Lower Fence = Q1 - 1.5*IQR; Upper Fence = Q3 + 1.5*IQR.']
            }
          ],
          pastQuestions: [
            {
              year: '2024/2025',
              semester: 'First Semester Exam',
              question: 'Given an asymmetric salary distribution with Q1 = $45,000 and Q3 = $85,000. Calculate the lower and upper outlier fences. Are employees earning $150,000 considered statistical outliers?',
              marks: 12,
              solutionGuide: 'IQR = 85k - 45k = $40,000. 1.5*IQR = $60,000. Upper fence = 85k + 60k = $145,000. Since $150,000 > $145,000, yes, they are statistical outliers.'
            }
          ],
          recommendedBooks: ['Storytelling with Data (Cole Nussbaumer Knaflic)']
        }
      ],
      semester2: [
        {
          code: 'DAT 499',
          title: 'Data Analysis Capstone & Industry Portfolio',
          department: 'Data Analysis',
          level: 'Year 4',
          semester: 'Semester 2',
          credits: 6,
          description: 'Execution and presentation of a comprehensive commercial data analysis portfolio encompassing data ingest, cleaning, modeling, interactive BI dashboard, and executive presentation.',
          syllabus: [
            { unit: 1, title: 'Industry Capstone Deliverables', topics: ['Business problem definition', 'Data governance & audit trail', 'GitHub repository documentation', 'Executive slide deck'] }
          ],
          lectureNotes: [
            {
              week: 1,
              topic: 'Formatting Professional Analytical Case Studies',
              summary: 'A portfolio piece must lead with the quantified business problem, explain methodological tradeoffs, and conclude with actionable dollar-impact recommendations.',
              keyTakeaways: ['Hiring managers evaluate thought process and decision quality over code length.']
            }
          ],
          pastQuestions: [
            {
              year: '2025/2026',
              semester: 'Second Semester Capstone Defense',
              question: 'Present your cohort retention analysis. How did you handle customer record deduplication across multiple fragmented retail billing platforms?',
              marks: 25,
              solutionGuide: 'Detail fuzzy string matching on email domain hashes, phone normalization, and probabilistic record linkage algorithms.'
            }
          ],
          recommendedBooks: ['Data Science for Business (Provost & Fawcett)']
        }
      ]
    }
  },
  'Data Science': {
    'Year 1': {
      semester1: [
        {
          code: 'DSC 101',
          title: 'Introduction to Data Science & Python',
          department: 'Data Science',
          level: 'Year 1',
          semester: 'Semester 1',
          credits: 3,
          description: 'The data science workflow, reproducible research with Jupyter, Python libraries, data collection and ethical considerations.',
          syllabus: [{ unit: 1, title: 'Foundations', topics: ['Data science lifecycle', 'Python virtual environments', 'Jupyter notebooks'] }],
          lectureNotes: [{ week: 1, topic: 'The Data Science Lifecycle', summary: 'Problem framing, data collection, exploration, modeling, deployment.', keyTakeaways: ['Iterative feedback loops are standard.'] }],
          pastQuestions: [{ year: '2025/2026', semester: 'First Semester', question: 'Differentiate between exploratory data analysis and confirmatory hypothesis testing.', marks: 10, solutionGuide: 'EDA explores patterns without preconceived hypotheses; confirmatory testing evaluates pre-specified hypotheses with statistical significance tests.' }],
          recommendedBooks: ['Introduction to Data Science (Rafael Irizarry)']
        }
      ],
      semester2: [
        {
          code: 'DSC 102',
          title: 'Linear Algebra & Probability for Data Science',
          department: 'Data Science',
          level: 'Year 1',
          semester: 'Semester 2',
          credits: 4,
          description: 'Vector spaces, matrix multiplication, projections, eigenvalues, conditional probability, and Bayes’ Theorem.',
          syllabus: [{ unit: 1, title: 'Vectors & Probability', topics: ['Dot products and cosines', 'Bayes Theorem', 'Joint and marginal probability'] }],
          lectureNotes: [{ week: 1, topic: 'Bayes Theorem in Machine Learning', summary: 'P(A|B) = [P(B|A) * P(A)] / P(B)', keyTakeaways: ['Posterior = (Likelihood * Prior) / Evidence'] }],
          pastQuestions: [{ year: '2025/2026', semester: 'Second Semester', question: 'Apply Bayes theorem to calculate disease probability given a positive medical diagnostic test with 95% sensitivity and 90% specificity, with 1% disease prevalence in the population.', marks: 15, solutionGuide: 'P(Disease|Positive) = (0.95 * 0.01) / [(0.95 * 0.01) + (0.10 * 0.99)] = 0.0095 / (0.0095 + 0.099) ~ 8.76%.' }],
          recommendedBooks: ['Mathematics for Machine Learning (Deisenroth, Faisal, Ong)']
        }
      ]
    },
    'Year 2': {
      semester1: [
        {
          code: 'DSC 201',
          title: 'Supervised Machine Learning',
          department: 'Data Science',
          level: 'Year 2',
          semester: 'Semester 1',
          credits: 4,
          description: 'Ordinary least squares, gradient descent, logistic regression, decision trees, random forests, boosting, and model evaluation metrics.',
          syllabus: [{ unit: 1, title: 'Linear Models', topics: ['Cost functions', 'L1/L2 regularization', 'Logistic sigmoid'] }],
          lectureNotes: [{ week: 2, topic: 'Bias-Variance Tradeoff', summary: 'Total Error = Bias^2 + Variance + Irreducible Error.', keyTakeaways: ['Underfitting = high bias; Overfitting = high variance.'] }],
          pastQuestions: [{ year: '2024/2025', semester: 'First Semester', question: 'Compare L1 (Lasso) and L2 (Ridge) regularization. Why does Lasso drive coefficients to exact zero while Ridge does not?', marks: 14, solutionGuide: 'L1 adds sum of absolute weights producing a diamond constraint region whose corners lie on axes, causing sparse feature selection. L2 adds sum of squared weights creating a spherical constraint where solutions rarely hit axes exactly.' }],
          recommendedBooks: ['The Elements of Statistical Learning (Hastie, Tibshirani, Friedman)']
        }
      ],
      semester2: [
        {
          code: 'DSC 202',
          title: 'Unsupervised Learning & Dimensionality Reduction',
          department: 'Data Science',
          level: 'Year 2',
          semester: 'Semester 2',
          credits: 3,
          description: 'K-Means clustering, DBSCAN, Principal Component Analysis (PCA), t-SNE, and anomaly detection.',
          syllabus: [{ unit: 1, title: 'Clustering & PCA', topics: ['Centroid algorithms', 'SVD and eigenvectors', 'Explained variance ratio'] }],
          lectureNotes: [{ week: 3, topic: 'Principal Component Analysis (PCA)', summary: 'PCA projects data onto orthogonal axes that maximize variance.', keyTakeaways: ['Eigenvectors of covariance matrix define principal component directions.'] }],
          pastQuestions: [{ year: '2025/2026', semester: 'Second Semester', question: 'Explain how the Elbow Method and Silhouette Coefficient determine optimal k in K-Means clustering.', marks: 12, solutionGuide: 'Elbow plots within-cluster sum of squares (inertia) vs k seeking the inflection point. Silhouette coefficient measures how similar an object is to its own cluster compared to other clusters (-1 to +1).' }],
          recommendedBooks: ['Pattern Recognition and Machine Learning (Christopher Bishop)']
        }
      ]
    },
    'Year 3': {
      semester1: [
        {
          code: 'DSC 301',
          title: 'Deep Learning & Neural Architectures',
          department: 'Data Science',
          level: 'Year 3',
          semester: 'Semester 1',
          credits: 4,
          description: 'Multilayer perceptrons, backpropagation, CNNs for vision, RNNs/LSTMs for sequences, and PyTorch.',
          syllabus: [{ unit: 1, title: 'Deep Networks', topics: ['Activation functions', 'Matrix backprop', 'Convolution kernels', 'ResNet'] }],
          lectureNotes: [{ week: 1, topic: 'Backpropagation via the Chain Rule', summary: 'Gradients of the loss with respect to weight tensors are computed backwards from the output layer to input.', keyTakeaways: ['dL/dw = (dL/dy) * (dy/dz) * (dz/dw)'] }],
          pastQuestions: [{ year: '2025/2026', semester: 'First Semester', question: 'Why does the vanishing gradient problem occur with Sigmoid activations in deep networks, and how does ReLU resolve it?', marks: 12, solutionGuide: 'Sigmoid derivative has maximum value 0.25. Repeated multiplication through deep layers decays gradients exponentially to near zero. ReLU derivative is 1 for positive inputs, maintaining gradient flow.' }],
          recommendedBooks: ['Deep Learning (Goodfellow, Bengio, Courville)']
        }
      ],
      semester2: [
        {
          code: 'DSC 302',
          title: 'Natural Language Processing & Transformers',
          department: 'Data Science',
          level: 'Year 3',
          semester: 'Semester 2',
          credits: 3,
          description: 'Tokenization, embeddings, self-attention, Transformer architecture, BERT, GPT, and Hugging Face.',
          syllabus: [{ unit: 1, title: 'Attention & Transformers', topics: ['Scaled dot-product attention', 'Multi-head attention', 'Positional encoding'] }],
          lectureNotes: [{ week: 2, topic: 'Transformer Scaled Dot-Product Attention', summary: 'Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V', keyTakeaways: ['Query, Key, Value vectors compute all-to-all token contextual affinity.'] }],
          pastQuestions: [{ year: '2025/2026', semester: 'Second Semester', question: 'Explain the role of Positional Encodings in the Transformer model.', marks: 10, solutionGuide: 'Unlike RNNs that process tokens sequentially, Transformers process all tokens in parallel. Positional encodings inject positional order signals into input embeddings.' }],
          recommendedBooks: ['Speech and Language Processing (Jurafsky & Martin)']
        }
      ]
    },
    'Year 4': {
      semester1: [
        {
          code: 'DSC 401',
          title: 'Production MLOps & Model Serving',
          department: 'Data Science',
          level: 'Year 4',
          semester: 'Semester 1',
          credits: 3,
          description: 'FastAPI microservices, Docker, MLflow, model registries, data drift detection, and automated retraining pipelines.',
          syllabus: [{ unit: 1, title: 'Production ML', topics: ['Containerization', 'ONNX runtime', 'Data drift', 'Evidently AI'] }],
          lectureNotes: [{ week: 1, topic: 'Model Drift vs Data Drift', summary: 'Data drift: changes in input distribution P(X). Concept drift: changes in relationship between input and target P(Y|X).', keyTakeaways: ['Requires continuous statistical drift monitoring with Kolmogorov-Smirnov tests.'] }],
          pastQuestions: [{ year: '2024/2025', semester: 'First Semester', question: 'Describe how to implement an automated canary release strategy when deploying an updated machine learning model.', marks: 12, solutionGuide: 'Route 5-10% of live traffic to the candidate model while monitoring latency, error rate, and prediction distribution before routing 100% traffic.' }],
          recommendedBooks: ['Designing Machine Learning Systems (Chip Huyen)']
        }
      ],
      semester2: [
        {
          code: 'DSC 499',
          title: 'Applied Data Science Capstone',
          department: 'Data Science',
          level: 'Year 4',
          semester: 'Semester 2',
          credits: 6,
          description: 'End-to-end industry project from problem formulation and model training to deployment and business presentation.',
          syllabus: [{ unit: 1, title: 'Capstone Execution', topics: ['System design', 'Model validation', 'Inference deployment', 'Documentation'] }],
          lectureNotes: [{ week: 1, topic: 'Engineering Deliverables for ML Projects', summary: 'A complete project includes data pipeline code, trained model weights, evaluation reports, and containerized deployment.', keyTakeaways: ['Ensure reproducible random seeds.'] }],
          pastQuestions: [{ year: '2025/2026', semester: 'Second Semester', question: 'How do you justify your model choice (e.g. XGBoost vs Deep Learning) to non-technical stakeholders?', marks: 20, solutionGuide: 'Highlight tabular data performance benchmarks, lower inference latency, interpretability via SHAP values, and reduced computational cost.' }],
          recommendedBooks: ['Applied Predictive Modeling (Kuhn & Johnson)']
        }
      ]
    }
  },
  'Software Engineering': {
    'Year 1': { semester1: [], semester2: [] },
    'Year 2': { semester1: [], semester2: [] },
    'Year 3': { semester1: [], semester2: [] },
    'Year 4': { semester1: [], semester2: [] }
  },
  'Cybersecurity': {
    'Year 1': { semester1: [], semester2: [] },
    'Year 2': { semester1: [], semester2: [] },
    'Year 3': { semester1: [], semester2: [] },
    'Year 4': { semester1: [], semester2: [] }
  },
  'Information Technology': {
    'Year 1': { semester1: [], semester2: [] },
    'Year 2': { semester1: [], semester2: [] },
    'Year 3': { semester1: [], semester2: [] },
    'Year 4': { semester1: [], semester2: [] }
  },
  'Networking': {
    'Year 1': { semester1: [], semester2: [] },
    'Year 2': { semester1: [], semester2: [] },
    'Year 3': { semester1: [], semester2: [] },
    'Year 4': { semester1: [], semester2: [] }
  },
  'Artificial Intelligence': {
    'Year 1': { semester1: [], semester2: [] },
    'Year 2': { semester1: [], semester2: [] },
    'Year 3': { semester1: [], semester2: [] },
    'Year 4': { semester1: [], semester2: [] }
  },
  'Database Systems': {
    'Year 1': { semester1: [], semester2: [] },
    'Year 2': { semester1: [], semester2: [] },
    'Year 3': { semester1: [], semester2: [] },
    'Year 4': { semester1: [], semester2: [] }
  },
  'Cloud Computing': {
    'Year 1': { semester1: [], semester2: [] },
    'Year 2': { semester1: [], semester2: [] },
    'Year 3': { semester1: [], semester2: [] },
    'Year 4': { semester1: [], semester2: [] }
  }
};
