export function randomQuestion() {
  return Questions[Math.trunc(Math.random() * Questions.length)];
}

export function isCorrectAnswer(question, answer) {
  return question.correct_answers[answer + "_correct"] === "true";
}

export const Questions = [
  {
    id: 780,
    question: "Which of the mentioned are valid PHP loops",
    description: null,
    answers: {
      answer_a: "for",
      answer_b: "while",
      answer_c: "do ... while",
      answer_d: "foreach",
      answer_e: "each",
      answer_f: "beforeeach",
    },
    multiple_correct_answers: "true",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "true",
      answer_c_correct: "true",
      answer_d_correct: "true",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "PHP" }],
    category: "Code",
    difficulty: "Medium",
  },
  {
    id: 968,
    question: "Which description best fits a DaemonSet?",
    description: null,
    answers: {
      answer_a: "A way to run a copy of a pod on all or some nodes",
      answer_b: "A method to manage clusters of pods",
      answer_c:
        "A channel through which to pass information between two or more nodes",
      answer_d: "A system to connect nodes and pods",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "Kubernetes" }],
    category: "DevOps",
    difficulty: "Hard",
  },
  {
    id: 228,
    question: "The SQL WHERE clause?",
    description: null,
    answers: {
      answer_a: "Limits the column data that are returned",
      answer_b: "Limits the row data are returned",
      answer_c: "Both A and B are correct",
      answer_d: "Neither A nor B are correct",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "MySQL" }],
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 378,
    question:
      "What will be the effect of the query SELECT TOP (100) FROM customers when executed against MySQL database.",
    description: null,
    answers: {
      answer_a:
        "The query will return 100 records from the database table sorted in descending order",
      answer_b: "The query will return all records from the database table",
      answer_c: "The query will generate an error",
      answer_d:
        "The query will return 100 records from the database table sorted in ascending order",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "MySQL" }],
    category: "SQL",
    difficulty: "Medium",
  },
  {
    id: 470,
    question:
      "Which of the following elements marks The Ruby Text Component Of A Ruby annotation?",
    description: null,
    answers: {
      answer_a: "Rubytxt",
      answer_b: "Rt",
      answer_c: "Ruby",
      answer_d: "R",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [],
    category: "Code",
    difficulty: "Medium",
  },
  {
    id: 636,
    question: "Multiple inheritance is supported in PHP.",
    description: null,
    answers: {
      answer_a: "True",
      answer_b: "False",
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "PHP" }],
    category: "Code",
    difficulty: "Easy",
  },
  {
    id: 3,
    question: "How to check the current disk usage on Linux?",
    description: "check current disk usage",
    answers: {
      answer_a: "df",
      answer_b: "usage",
      answer_c: "uptime",
      answer_d: "free",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: "df shows you the current disk usage",
    tip: "df",
    tags: [{ name: "Linux" }, { name: "BASH" }, { name: "PHP" }],
    category: "uncategorized",
    difficulty: "Hard",
  },
  {
    id: 860,
    question:
      "How to show the history of a docker image with the image name mentioned in the command.",
    description: null,
    answers: {
      answer_a: "$ docker history httpd",
      answer_b: "$ docker history http --s",
      answer_c: "$ docker history http",
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "Docker" }],
    category: "Docker",
    difficulty: "Medium",
  },
  {
    id: 521,
    question:
      "<b> tag makes the enclosed text bold. What is other tag to make text bold?",
    description: null,
    answers: {
      answer_a: "<strong>",
      answer_b: "<emp>",
      answer_c: "<black>",
      answer_d: "<dar>",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "HTML" }],
    category: "Code",
    difficulty: "Medium",
  },
  {
    id: 763,
    question:
      "Which of the following method of Exception class retrieve the error message when error occurred?",
    description: null,
    answers: {
      answer_a: "getMessage()",
      answer_b: "getCode()",
      answer_c: "getFile()",
      answer_d: "getLine()",
      answer_e: "getError()",
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: null,
    explanation:
      "getMessage() method of Exception class returns the message of exception",
    tip: null,
    tags: [{ name: "PHP" }],
    category: "Code",
    difficulty: "Medium",
  },
];
