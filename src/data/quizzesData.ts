import { QuizQuestion, Quiz } from '../types';

export const quizQuestionsBank: QuizQuestion[] = [
  // ===============================
  // COMPUTER SCIENCE & DATA STRUCTURES
  // ===============================
  {
    id: 'q-ds-1',
    question: 'What is the worst-case time complexity of lookup in an unbalanced Binary Search Tree (BST)?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
    correctAnswer: 2,
    explanation: 'If elements are inserted in ascending or descending sorted order, an unbalanced BST degenerates into a singly linked list where lookup requires traversing all N nodes.',
    topic: 'Data Structures',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ds-2',
    question: 'Which of the following data structures operates strictly on a First-In, First-Out (FIFO) principle?',
    options: ['Stack', 'Queue', 'Max Heap', 'Binary Search Tree'],
    correctAnswer: 1,
    explanation: 'A Queue processes elements in the order they arrive: first-in, first-out. A Stack operates on LIFO (Last-In, First-Out).',
    topic: 'Data Structures',
    difficulty: 'Beginner'
  },
  {
    id: 'q-ds-3',
    question: 'In an AVL self-balancing tree, what is the maximum allowed absolute difference between the heights of the left and right subtrees of any node?',
    options: ['0', '1', '2', 'log N'],
    correctAnswer: 1,
    explanation: 'An AVL tree strictly requires that the Balance Factor = height(left) - height(right) must belong to {-1, 0, 1}. Any difference of 2 triggers an immediate rotation.',
    topic: 'Data Structures',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ds-4',
    question: 'True or False: Hash table lookups are guaranteed to always execute in O(1) time under all circumstances.',
    options: ['True', 'False'],
    correctAnswer: 1,
    isTrueFalse: true,
    explanation: 'False. While average-case lookup is O(1), catastrophic hash collisions where all keys map to the same bucket can degrade worst-case lookup to O(N).',
    topic: 'Data Structures',
    difficulty: 'Beginner'
  },
  {
    id: 'q-ds-5',
    question: 'Which graph traversal algorithm uses a Queue and visits all immediate neighbors before exploring deeper paths?',
    options: ['Depth-First Search (DFS)', 'Breadth-First Search (BFS)', 'Topological Sort', 'Kruskal’s Algorithm'],
    correctAnswer: 1,
    explanation: 'Breadth-First Search (BFS) explores vertices level-by-level using a FIFO queue, ensuring shortest path discovery in unweighted graphs.',
    topic: 'Data Structures',
    difficulty: 'Beginner'
  },
  {
    id: 'q-ds-6',
    question: 'What is the auxiliary space complexity of MergeSort when sorting an array of N elements?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
    correctAnswer: 2,
    explanation: 'Standard MergeSort requires an auxiliary temporary buffer of size O(N) to merge the divided sub-arrays back together in sorted order.',
    topic: 'Algorithms',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ds-7',
    question: 'Which asymptotic notation provides an asymptotically tight bound (both upper and lower) on an algorithm’s running time?',
    options: ['Big-O (O)', 'Big-Omega (Ω)', 'Big-Theta (Θ)', 'Little-o (o)'],
    correctAnswer: 2,
    explanation: 'Big-Theta (Θ) bounds a function from above and below within constant factors: c1*g(n) <= f(n) <= c2*g(n) for all n >= n0.',
    topic: 'Algorithms',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ds-8',
    question: 'Which of the following is NOT one of the four necessary Coffman conditions required for operating system deadlock?',
    options: ['Mutual Exclusion', 'Hold and Wait', 'Preemption Allowed', 'Circular Wait'],
    correctAnswer: 2,
    explanation: 'The Coffman condition is "No Preemption" (resources cannot be forcibly confiscated from a process). If preemption is allowed, deadlocks can be broken.',
    topic: 'Operating Systems',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ds-9',
    question: 'What component in CPU hardware caches recent virtual-to-physical address translations to speed up paging?',
    options: ['Program Counter (PC)', 'Translation Lookaside Buffer (TLB)', 'Memory Data Register (MDR)', 'Accumulator'],
    correctAnswer: 1,
    explanation: 'The Translation Lookaside Buffer (TLB) is an associative memory cache in the MMU that stores recent virtual-to-physical page frame translations.',
    topic: 'Operating Systems',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ds-10',
    question: 'Which CPU scheduling algorithm is non-preemptive and assigns the processor to whichever process arrives first?',
    options: ['Round Robin (RR)', 'Shortest Remaining Time First (SRTF)', 'First-Come, First-Served (FCFS)', 'Multilevel Feedback Queue'],
    correctAnswer: 2,
    explanation: 'First-Come, First-Served (FCFS) schedules jobs in strict order of arrival and is non-preemptive, making it susceptible to the convoy effect.',
    topic: 'Operating Systems',
    difficulty: 'Beginner'
  },

  // ===============================
  // SQL & DATABASE MANAGEMENT
  // ===============================
  {
    id: 'q-sql-1',
    question: 'What is the primary difference between the WHERE clause and the HAVING clause in SQL?',
    options: [
      'WHERE filters individual rows before aggregation; HAVING filters aggregated groups.',
      'WHERE only works with numbers; HAVING only works with strings.',
      'HAVING executes before WHERE in the logical query processing order.',
      'There is no difference; they are interchangeable aliases.'
    ],
    correctAnswer: 0,
    explanation: 'The WHERE clause filters individual records before any grouping takes place. The HAVING clause filters groups created by the GROUP BY clause after aggregation functions execute.',
    topic: 'SQL & Databases',
    difficulty: 'Beginner'
  },
  {
    id: 'q-sql-2',
    question: 'Which SQL window function assigns consecutive ranks without gaps when values tie?',
    options: ['ROW_NUMBER()', 'RANK()', 'DENSE_RANK()', 'NTILE()'],
    correctAnswer: 2,
    explanation: 'DENSE_RANK() produces ranks like 1, 2, 2, 3 without skipping any rank numbers. In contrast, RANK() would produce 1, 2, 2, 4.',
    topic: 'SQL & Databases',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-sql-3',
    question: 'A relational database table is in Third Normal Form (3NF) if it is in 2NF and has NO:',
    options: ['Partial dependencies on candidate keys', 'Transitive dependencies between non-prime attributes', 'Foreign keys', 'Primary keys'],
    correctAnswer: 1,
    explanation: '3NF requires that every non-prime attribute depends directly on the primary key, eliminating transitive dependencies (A -> B -> C where B is not a key).',
    topic: 'SQL & Databases',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-sql-4',
    question: 'In ACID properties of database transactions, what does the "I" stand for?',
    options: ['Immutability', 'Indexing', 'Isolation', 'Idempotence'],
    correctAnswer: 2,
    explanation: 'Isolation guarantees that concurrent execution of transactions leaves the database in the same state that would have been obtained if transactions were executed sequentially.',
    topic: 'SQL & Databases',
    difficulty: 'Beginner'
  },
  {
    id: 'q-sql-5',
    question: 'Which JOIN type returns all records from the left table and matched records from the right table, filling unmatched right columns with NULL?',
    options: ['INNER JOIN', 'LEFT JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'],
    correctAnswer: 1,
    explanation: 'A LEFT (OUTER) JOIN returns 100% of rows from the left table, joining matching right table rows or populating right columns with NULL when no match exists.',
    topic: 'SQL & Databases',
    difficulty: 'Beginner'
  },
  {
    id: 'q-sql-6',
    question: 'Which B-Tree index property makes range queries (e.g. WHERE age BETWEEN 20 AND 30) highly efficient?',
    options: [
      'Leaf nodes are linked in a sorted doubly linked list',
      'Data is randomized using cryptographic hashing',
      'Nodes store data in reverse order',
      'B-Trees do not support range queries'
    ],
    correctAnswer: 0,
    explanation: 'In a B+ Tree, all data resides in the leaf nodes, which are linked together in sorted sequential order, allowing fast scanning of contiguous ranges.',
    topic: 'SQL & Databases',
    difficulty: 'Advanced'
  },

  // ===============================
  // DATA ANALYSIS & STATISTICS
  // ===============================
  {
    id: 'q-da-1',
    question: 'Which measure of central tendency is most resilient to extreme statistical outliers?',
    options: ['Mean', 'Median', 'Mode', 'Variance'],
    correctAnswer: 1,
    explanation: 'The Median represents the exact 50th percentile rank of an ordered dataset and is therefore unaffected by extreme values on either tail.',
    topic: 'Data Analysis',
    difficulty: 'Beginner'
  },
  {
    id: 'q-da-2',
    question: 'In Pandas, what is the key difference between df.loc and df.iloc?',
    options: [
      'loc uses label-based indexing; iloc uses zero-based integer positional indexing.',
      'loc is for rows; iloc is only for columns.',
      'iloc includes the end index; loc excludes the end index.',
      'loc only accepts boolean arrays; iloc only accepts integers.'
    ],
    correctAnswer: 0,
    explanation: 'df.loc indexes by label/name and includes the stopping bound. df.iloc indexes strictly by integer positions 0..n-1 and excludes the stopping bound.',
    topic: 'Data Analysis',
    difficulty: 'Beginner'
  },
  {
    id: 'q-da-3',
    question: 'What does a Pearson correlation coefficient of r = -0.92 indicate between two variables?',
    options: [
      'Virtually no relationship exists',
      'A strong negative linear relationship',
      'A weak positive relationship',
      'A statistical calculation error since r cannot be negative'
    ],
    correctAnswer: 1,
    explanation: 'Pearson correlation ranges from -1.0 to +1.0. A value of -0.92 signifies a very strong inverse linear association where increases in X correspond to decreases in Y.',
    topic: 'Data Analysis',
    difficulty: 'Beginner'
  },
  {
    id: 'q-da-4',
    question: 'According to the Central Limit Theorem, the distribution of sample means approaches what shape as sample size n grows large, regardless of the underlying population shape?',
    options: ['Uniform distribution', 'Normal (Gaussian) distribution', 'Exponential distribution', 'Bimodal distribution'],
    correctAnswer: 1,
    explanation: 'The Central Limit Theorem (CLT) proves that given a sufficiently large sample size (typically n >= 30), the sampling distribution of the mean will be approximately normal.',
    topic: 'Statistics',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-da-5',
    question: 'In hypothesis testing, what is a Type I Error?',
    options: [
      'Rejecting the null hypothesis when it is actually true (False Positive).',
      'Failing to reject the null hypothesis when it is actually false (False Negative).',
      'Using the wrong statistical test entirely.',
      'Calculating an invalid standard deviation.'
    ],
    correctAnswer: 0,
    explanation: 'A Type I error occurs when an experimenter rejects a true null hypothesis, concluding a significant effect exists when it is merely random sampling noise (alpha).',
    topic: 'Statistics',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-da-6',
    question: 'In John Tukey’s box plot methodology, how are the upper and lower outlier fences calculated?',
    options: [
      'Mean ± 3 * Standard Deviation',
      'Q1 - 1.5 * IQR and Q3 + 1.5 * IQR',
      'Min and Max of the raw data',
      'Median ± 2 * IQR'
    ],
    correctAnswer: 1,
    explanation: 'Tukey’s fences define outliers as data points lying beyond 1.5 times the Interquartile Range (IQR = Q3 - Q1) below Q1 or above Q3.',
    topic: 'Data Analysis',
    difficulty: 'Intermediate'
  },

  // ===============================
  // DATA SCIENCE & MACHINE LEARNING
  // ===============================
  {
    id: 'q-ml-1',
    question: 'Which of the following problems is an example of Supervised Learning?',
    options: [
      'Predicting house sale prices from square footage and bedrooms',
      'Clustering customers into personas without historical labels',
      'Compressing an image using Principal Component Analysis (PCA)',
      'Finding frequent co-occurring items in shopping baskets'
    ],
    correctAnswer: 0,
    explanation: 'Predicting house sale prices has a known continuous target label (sale_price) during model training, making it a supervised regression task.',
    topic: 'Machine Learning',
    difficulty: 'Beginner'
  },
  {
    id: 'q-ml-2',
    question: 'When an algorithmic model performs exceptionally well on training data (99% accuracy) but poorly on unseen test data (54% accuracy), the model is experiencing:',
    options: ['Underfitting (High Bias)', 'Overfitting (High Variance)', 'Optimal Convergence', 'Data Leakage'],
    correctAnswer: 1,
    explanation: 'Overfitting occurs when a complex model memorizes the training data and noise rather than learning generalizable underlying patterns.',
    topic: 'Machine Learning',
    difficulty: 'Beginner'
  },
  {
    id: 'q-ml-3',
    question: 'Which loss function is standard for training binary classification models in logistic regression and neural networks?',
    options: ['Mean Squared Error (MSE)', 'Binary Cross-Entropy (Log Loss)', 'Hinge Loss', 'Huber Loss'],
    correctAnswer: 1,
    explanation: 'Binary Cross-Entropy (Log Loss) penalizes probabilistic predictions based on distance from the ground truth binary label {0, 1}.',
    topic: 'Machine Learning',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ml-4',
    question: 'In an imbalanced dataset where only 0.5% of transactions are fraudulent, why is raw "Accuracy" an uninformative metric?',
    options: [
      'Accuracy cannot be calculated on decimal values.',
      'A naive model that predicts "Not Fraud" 100% of the time achieves 99.5% accuracy while catching zero fraud.',
      'Precision and accuracy are mathematically identical.',
      'Scikit-Learn does not support accuracy on imbalanced data.'
    ],
    correctAnswer: 1,
    explanation: 'With heavy class imbalance, a trivial majority-class classifier yields misleadingly high accuracy while failing completely at the intended objective. PR-AUC and Recall are required.',
    topic: 'Machine Learning',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ml-5',
    question: 'What is the primary mechanism of Random Forest ensemble learning?',
    options: [
      'Bagging (Bootstrap Aggregation) combining randomized decision trees',
      'Sequential gradient boosting of residuals',
      'Training a single deep neural network with dropout',
      'Clustering data with K-Means before linear regression'
    ],
    correctAnswer: 0,
    explanation: 'Random Forests use Bootstrap Aggregation (bagging) to train many decorrelated decision trees on random subsets of data and features, averaging their predictions to reduce variance.',
    topic: 'Machine Learning',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ml-6',
    question: 'Which activation function is most widely used in modern deep convolutional hidden layers to prevent vanishing gradients?',
    options: ['Sigmoid', 'Hyperbolic Tangent (tanh)', 'Rectified Linear Unit (ReLU)', 'Step Function'],
    correctAnswer: 2,
    explanation: 'ReLU (f(x) = max(0, x)) maintains a constant derivative of 1 for all positive inputs, allowing gradient signals to flow through deep networks without vanishing.',
    topic: 'Deep Learning',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-ml-7',
    question: 'In the Transformer architecture, what formula computes Scaled Dot-Product Attention?',
    options: [
      'Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V',
      'Attention(Q, K, V) = sigmoid(Q + K) * V',
      'Attention(Q, K, V) = Q * K * V',
      'Attention(Q, K, V) = ReLU(Q * V) / K'
    ],
    correctAnswer: 0,
    explanation: 'Attention takes Query (Q), Key (K), and Value (V) matrices, computing normalized affinity scores with softmax scaled by the square root of key dimension d_k.',
    topic: 'Deep Learning',
    difficulty: 'Advanced'
  },

  // ===============================
  // CYBERSECURITY & NETWORKING
  // ===============================
  {
    id: 'q-sec-1',
    question: 'Which security principle ensures that sender cannot deny having sent a specific message or initiated a financial transaction?',
    options: ['Confidentiality', 'Integrity', 'Non-Repudiation', 'Availability'],
    correctAnswer: 2,
    explanation: 'Non-repudiation, typically achieved through digital signatures with private cryptographic keys, proves the authenticity and origin of a communication.',
    topic: 'Cybersecurity',
    difficulty: 'Beginner'
  },
  {
    id: 'q-sec-2',
    question: 'What type of vulnerability allows an attacker to execute malicious SQL commands by manipulating unsanitized input fields in a web application?',
    options: ['Cross-Site Scripting (XSS)', 'SQL Injection (SQLi)', 'Cross-Site Request Forgery (CSRF)', 'Buffer Overflow'],
    correctAnswer: 1,
    explanation: 'SQL Injection occurs when user-supplied data is concatenated directly into a database query string without parameterized prepared statements.',
    topic: 'Cybersecurity',
    difficulty: 'Beginner'
  },
  {
    id: 'q-sec-3',
    question: 'In public-key asymmetric cryptography, which key is used to decrypt a message that was encrypted using Alice’s public key?',
    options: ['Bob’s public key', 'Alice’s private key', 'A shared symmetric secret key', 'The certificate authority root key'],
    correctAnswer: 1,
    explanation: 'In asymmetric cryptography, data encrypted with a user’s public key can only be decrypted by that user’s mathematically paired private key.',
    topic: 'Cybersecurity',
    difficulty: 'Beginner'
  },
  {
    id: 'q-sec-4',
    question: 'What is the total number of usable host addresses in an IPv4 subnet configured with a /28 CIDR prefix?',
    options: ['16', '14', '30', '62'],
    correctAnswer: 1,
    explanation: 'A /28 subnet leaves 32 - 28 = 4 host bits. 2^4 = 16 total addresses. Subtracting 2 (one network address and one broadcast address) leaves 14 usable host IPs.',
    topic: 'Networking',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-sec-5',
    question: 'Which layer of the OSI 7-Layer model is responsible for end-to-end reliability, segmentation, and flow control (e.g. TCP)?',
    options: ['Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 7 (Application)'],
    correctAnswer: 2,
    explanation: 'Layer 4, the Transport Layer, provides transparent data transfer between end users, handling segmentation, flow control, and error recovery (TCP and UDP).',
    topic: 'Networking',
    difficulty: 'Beginner'
  },
  {
    id: 'q-sec-6',
    question: 'In the TCP three-way handshake, what sequence of flag packets establishes a new connection between client and server?',
    options: ['SYN -> SYN-ACK -> ACK', 'ACK -> SYN -> ACK', 'FIN -> ACK -> FIN-ACK', 'SYN -> ACK -> RST'],
    correctAnswer: 0,
    explanation: 'The client sends a SYN packet with initial sequence number, server responds with SYN-ACK, and client replies with ACK to establish connection.',
    topic: 'Networking',
    difficulty: 'Beginner'
  },

  // ===============================
  // PROGRAMMING & WEB DEVELOPMENT
  // ===============================
  {
    id: 'q-prog-1',
    question: 'In Python, what is the output of the expression: type([]) == list ?',
    options: ['True', 'False', 'TypeError', 'SyntaxError'],
    correctAnswer: 0,
    explanation: 'In Python, [] creates an empty list literal whose type is indeed list, evaluating to True.',
    topic: 'Programming',
    difficulty: 'Beginner'
  },
  {
    id: 'q-prog-2',
    question: 'In JavaScript, which array method creates a NEW array populated with the results of calling a provided function on every element in the calling array?',
    options: ['forEach()', 'map()', 'filter()', 'reduce()'],
    correctAnswer: 1,
    explanation: 'Array.prototype.map() returns a brand-new transformed array without mutating the original source array. forEach() executes a side effect and returns undefined.',
    topic: 'Programming',
    difficulty: 'Beginner'
  },
  {
    id: 'q-prog-3',
    question: 'What is a "closure" in JavaScript and functional programming?',
    options: [
      'A method used to close database connections.',
      'A function bundled together with references to its surrounding lexical environment.',
      'A syntax error caused by missing closing curly braces.',
      'An encrypted cryptographic hash.'
    ],
    correctAnswer: 1,
    explanation: 'A closure gives an inner function access to an outer enclosing function’s scope even after the outer function has returned and exited the call stack.',
    topic: 'Programming',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-prog-4',
    question: 'In C, what is the consequence of failing to call free() on memory allocated using malloc() before exiting or losing the pointer reference?',
    options: ['Segmentation fault', 'Memory leak', 'Compile-time error', 'Stack overflow'],
    correctAnswer: 1,
    explanation: 'Failing to release heap memory allocated via malloc() leaves that memory marked as reserved by the OS process, causing a memory leak.',
    topic: 'Programming',
    difficulty: 'Intermediate'
  },
  {
    id: 'q-prog-5',
    question: 'In React, what rule must be observed when declaring and executing React Hooks (such as useState and useEffect)?',
    options: [
      'Hooks can be called inside conditional if-blocks.',
      'Hooks must only be called at the top level of React functional components or custom hooks.',
      'Hooks can only be used inside class components.',
      'Hooks cannot accept arguments.'
    ],
    correctAnswer: 1,
    explanation: 'React relies on the call order of hooks to preserve state between renders. Calling hooks conditionally or inside loops breaks state index tracking.',
    topic: 'Web Development',
    difficulty: 'Beginner'
  },
  {
    id: 'q-prog-6',
    question: 'Which HTTP status code corresponds to "401 Unauthorized" vs "403 Forbidden"?',
    options: [
      '401 means credentials are missing or invalid; 403 means authenticated user lacks permission for that resource.',
      '401 means server error; 403 means client timeout.',
      'They are identical codes used interchangeably in RFC specs.',
      '403 means missing password; 401 means IP address blocked.'
    ],
    correctAnswer: 0,
    explanation: '401 Unauthorized signifies that authentication credentials were not provided or failed verification. 403 Forbidden means the identity is known but access is prohibited.',
    topic: 'Web Development',
    difficulty: 'Beginner'
  }
];

export const sampleQuizzes: Quiz[] = [
  {
    id: 'quiz-cs-fundamentals',
    title: 'Computer Science & Systems Architecture Quiz',
    topic: 'Data Structures, OS & Algorithms',
    category: 'Computer Science',
    durationMinutes: 15,
    questions: quizQuestionsBank.filter(q => q.topic === 'Data Structures' || q.topic === 'Operating Systems' || q.topic === 'Algorithms')
  },
  {
    id: 'quiz-sql-databases',
    title: 'SQL, Relational Theory & Normalization Quiz',
    topic: 'SQL & Databases',
    category: 'Database Management',
    durationMinutes: 12,
    questions: quizQuestionsBank.filter(q => q.topic === 'SQL & Databases')
  },
  {
    id: 'quiz-data-analysis-stats',
    title: 'Data Analysis, EDA & Statistics Quiz',
    topic: 'Data Analysis & Statistics',
    category: 'Data Analysis',
    durationMinutes: 15,
    questions: quizQuestionsBank.filter(q => q.topic === 'Data Analysis' || q.topic === 'Statistics')
  },
  {
    id: 'quiz-ml-deep-learning',
    title: 'Machine Learning & Neural Networks Quiz',
    topic: 'Machine Learning & Deep Learning',
    category: 'Data Science',
    durationMinutes: 15,
    questions: quizQuestionsBank.filter(q => q.topic === 'Machine Learning' || q.topic === 'Deep Learning')
  },
  {
    id: 'quiz-cyber-networking',
    title: 'Cybersecurity & Computer Networks Quiz',
    topic: 'Cybersecurity & Networking',
    category: 'Cybersecurity',
    durationMinutes: 12,
    questions: quizQuestionsBank.filter(q => q.topic === 'Cybersecurity' || q.topic === 'Networking')
  },
  {
    id: 'quiz-programming-web',
    title: 'Programming Foundations & Web Architecture Quiz',
    topic: 'Programming & Web Dev',
    category: 'Programming',
    durationMinutes: 12,
    questions: quizQuestionsBank.filter(q => q.topic === 'Programming' || q.topic === 'Web Development')
  }
];
