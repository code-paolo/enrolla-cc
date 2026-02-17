export const mockQuizes: MockQuiz = [
  {
    id: "a9f3k2",
    type: "radio",
    question: "What color is the sky on a clear day?",
    choices: ["Blue", "Green", "Red", "Yellow"],
    correctIndex: 0,
  },
  {
    id: "x7m2q9",
    type: "text",
    question: "What is 2 + 2?",
    choices: "",
    correctText: "4",
  },
  {
    id: "p4d8w1",
    type: "checkbox",
    question: "Which of the following are fruits?",
    choices: ["Apple", "Carrot", "Banana", "Potato"],
    correctIndexes: ["Apple", "Carrot", "Banana"],
  },
  {
    id: "k9e2r5",
    type: "radio",
    question: "How many days are there in a week?",
    choices: ["5", "6", "7", "8"],
    correctIndex: 0,
  },
  {
    id: "m3z8c0",
    type: "text",
    question: "What do you use to write on paper?",
    choices: "",
    correctText: "pen",
  },
];

export const mockQuizAnswerKey = {};

export type MockQuiz = {
  id: string;
  type: "text" | "checkbox" | "radio";
  choices: string | string;
  question: string;
  correctIndex: number?;
  correctIndexes: number[];
  correctText: string;
};

export type MockQuizForChecking = {
  answers: mockQuizes | mockQuizes[];
};

export type MockQuizResults = {
  score: number;
  total: number;
  id: Pick<MockQuizes, "id">;
  correct: boolean;
};
