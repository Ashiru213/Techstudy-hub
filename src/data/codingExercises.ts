import { CodingExercise } from '../types';

export const codingExercisesData: CodingExercise[] = [
  // PYTHON
  {
    id: 'py-two-sum',
    title: 'Two Sum Problem',
    language: 'python',
    difficulty: 'Beginner',
    category: 'Algorithms',
    prompt: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input has exactly one solution, and you may not use the same element twice. Achieve an O(N) time complexity using a hash map.',
    initialCode: `def two_sum(nums, target):
    # Write your solution here
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test run
print(two_sum([2, 7, 11, 15], 9))  # Expected: [0, 1]`,
    solutionCode: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []`,
    hints: [
      'Can you solve this in one pass through the list?',
      'Store each number and its index in a dictionary: seen[num] = index.',
      'For each number, check if target - num is already in the dictionary.'
    ],
    testCases: [
      { input: 'nums = [2,7,11,15], target = 9', expected: '[0, 1]' },
      { input: 'nums = [3,2,4], target = 6', expected: '[1, 2]' },
      { input: 'nums = [3,3], target = 6', expected: '[0, 1]' }
    ]
  },
  {
    id: 'py-palindrome-check',
    title: 'Valid Palindrome Checker',
    language: 'python',
    difficulty: 'Beginner',
    category: 'Algorithms',
    prompt: 'A phrase is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward. Write a function that returns True if the string is a palindrome, or False otherwise.',
    initialCode: `import re

def is_palindrome(s: str) -> bool:
    # Clean the string and check if it reads identically backwards
    clean = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
    return clean == clean[::-1]

print(is_palindrome("A man, a plan, a canal: Panama")) # Expected: True
print(is_palindrome("race a car"))                     # Expected: False`,
    solutionCode: `import re

def is_palindrome(s: str) -> bool:
    clean = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
    left, right = 0, len(clean) - 1
    while left < right:
        if clean[left] != clean[right]:
            return False
        left += 1
        right -= 1
    return True`,
    hints: ['Strip out punctuation using regex or str.isalnum().', 'Use two pointers from left and right converging to the center.'],
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', expected: 'True' },
      { input: '"race a car"', expected: 'False' },
      { input: '" "', expected: 'True' }
    ]
  },
  {
    id: 'py-data-cleaning-outliers',
    title: 'IQR Outlier Filtering in Python',
    language: 'python',
    difficulty: 'Intermediate',
    category: 'Data Analysis',
    prompt: 'Write a Python function that takes a list of numeric values and returns a filtered list containing only values within Tukey’s 1.5 * IQR fences. If the input list has fewer than 4 items, return the original list.',
    initialCode: `import numpy as np

def filter_iqr_outliers(data):
    if len(data) < 4:
        return data
    q1 = np.percentile(data, 25)
    q3 = np.percentile(data, 75)
    iqr = q3 - q1
    lower_bound = q1 - 1.5 * iqr
    upper_bound = q3 + 1.5 * iqr
    return [x for x in data if lower_bound <= x <= upper_bound]

sample = [10, 12, 12, 13, 12, 11, 14, 13, 15, 10, 10, 100]
print(filter_iqr_outliers(sample)) # Should exclude 100`,
    solutionCode: `import numpy as np

def filter_iqr_outliers(data):
    if len(data) < 4:
        return data
    q25, q75 = np.percentile(data, [25, 75])
    iqr = q75 - q25
    return [x for x in data if (q25 - 1.5 * iqr) <= x <= (q75 + 1.5 * iqr)]`,
    hints: ['Q1 is the 25th percentile, Q3 is the 75th percentile.', 'IQR = Q3 - Q1.'],
    testCases: [
      { input: '[10, 12, 12, 13, 12, 11, 14, 13, 15, 10, 10, 100]', expected: '[10, 12, 12, 13, 12, 11, 14, 13, 15, 10, 10]' }
    ]
  },

  // SQL
  {
    id: 'sql-second-highest',
    title: 'Second Highest Salary Query',
    language: 'sql',
    difficulty: 'Intermediate',
    category: 'SQL Query',
    prompt: 'Write a SQL query to find the second highest salary from the Employee table. If there is no second highest salary, return NULL.',
    initialCode: `-- Write your SQL query below
SELECT (
    SELECT DISTINCT salary 
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary;`,
    solutionCode: `SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);`,
    hints: [
      'Remember to account for duplicate salaries using DISTINCT.',
      'Using a subquery ensures NULL is returned if fewer than 2 distinct salaries exist.'
    ],
    testCases: [
      { input: 'Employee: [(1, 100), (2, 200), (3, 300)]', expected: '200' },
      { input: 'Employee: [(1, 100)]', expected: 'NULL' }
    ]
  },
  {
    id: 'sql-department-top-earners',
    title: 'Department Top 3 Earners (Window Functions)',
    language: 'sql',
    difficulty: 'Advanced',
    category: 'SQL Query',
    prompt: 'A company’s executives are interested in seeing who earns the most money in each of the company’s departments. A high earner in a department is an employee who has a salary in the top three unique salaries for that department. Write a solution to find the employees who are high earners in each of the departments.',
    initialCode: `-- Using DENSE_RANK() OVER (PARTITION BY ... ORDER BY ...)
WITH RankedSalaries AS (
    SELECT 
        d.name AS Department,
        e.name AS Employee,
        e.salary AS Salary,
        DENSE_RANK() OVER (PARTITION BY e.department_id ORDER BY e.salary DESC) AS rnk
    FROM Employee e
    JOIN Department d ON e.department_id = d.id
)
SELECT Department, Employee, Salary
FROM RankedSalaries
WHERE rnk <= 3;`,
    solutionCode: `WITH RankedSalaries AS (
    SELECT 
        d.name AS Department,
        e.name AS Employee,
        e.salary AS Salary,
        DENSE_RANK() OVER (PARTITION BY e.department_id ORDER BY e.salary DESC) as rnk
    FROM Employee e
    JOIN Department d ON e.department_id = d.id
)
SELECT Department, Employee, Salary
FROM RankedSalaries
WHERE rnk <= 3;`,
    hints: ['Why DENSE_RANK() instead of RANK()? Ties in salary should not burn ranking slots!'],
    testCases: [
      { input: 'IT department with salaries: [90k, 85k, 85k, 70k, 60k]', expected: 'Top 3 tiers returned: 90k, 85k (both), 70k' }
    ]
  },

  // JAVASCRIPT
  {
    id: 'js-flatten-array',
    title: 'Flatten Deeply Nested Array',
    language: 'javascript',
    difficulty: 'Intermediate',
    category: 'Algorithms',
    prompt: 'Given a multi-dimensional array arr and a depth n, return a flattened version of that array. A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays. Do not use Array.prototype.flat.',
    initialCode: `function flat(arr, n) {
    if (n <= 0) return arr;
    const res = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...flat(item, n - 1));
        } else {
            res.push(item);
        }
    }
    return res;
}

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));`,
    solutionCode: `function flat(arr, n) {
    if (n <= 0) return arr;
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flat(item, n - 1));
        } else {
            result.push(item);
        }
    }
    return result;
}`,
    hints: ['Use recursion and decrease n by 1 for each recursive descent.', 'Base case: if n <= 0, return arr directly.'],
    testCases: [
      { input: 'arr = [1, [2, [3]]], n = 1', expected: '[1, 2, [3]]' },
      { input: 'arr = [1, [2, [3]]], n = 2', expected: '[1, 2, 3]' }
    ]
  },

  // C / C++
  {
    id: 'cpp-reverse-linked-list',
    title: 'Reverse a Singly Linked List',
    language: 'cpp',
    difficulty: 'Intermediate',
    category: 'Data Structures',
    prompt: 'Given the head of a singly linked list, reverse the list in-place, and return the reversed list’s head. Solve iteratively in O(N) time and O(1) space.',
    initialCode: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(nullptr) {}
 * };
 */
ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`,
    solutionCode: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
    hints: ['Store next = curr->next before modifying curr->next to point backwards.'],
    testCases: [
      { input: 'head = [1,2,3,4,5]', expected: '[5,4,3,2,1]' }
    ]
  },

  // JAVA
  {
    id: 'java-valid-parentheses',
    title: 'Valid Parentheses Matching (Stack)',
    language: 'java',
    difficulty: 'Beginner',
    category: 'Data Structures',
    prompt: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.',
    initialCode: `import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`,
    solutionCode: `import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`,
    hints: ['Whenever you see an opening bracket, push its expected closing bracket onto a stack.'],
    testCases: [
      { input: 's = "()"', expected: 'true' },
      { input: 's = "()[]{}"', expected: 'true' },
      { input: 's = "(]"', expected: 'false' }
    ]
  }
];
