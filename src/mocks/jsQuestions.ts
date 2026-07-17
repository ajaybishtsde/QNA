export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface Answer {
  id: string;
  content: string;
  votes: number;
  createdAt: string;
  author: Author;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  tags: string[];
  votes: number;
  views: number;
  createdAt: string;
  author: Author;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: "1",
    title: "What is a Closure in JavaScript?",
    description:
      "Can someone explain closures with a simple example? I understand the definition but not the practical use case.",
    tags: ["JavaScript"],
    votes: 18,
    views: 324,
    createdAt: "2 hours ago",
    author: {
      id: "1",
      name: "Ajay",
      avatar: "A",
    },
    answers: [
      {
        id: "1",
        content:
          "A closure is created when an inner function remembers variables from its outer function even after the outer function has finished executing.",
        votes: 10,
        createdAt: "1 hour ago",
        author: {
          id: "2",
          name: "John",
          avatar: "J",
        },
      },
      {
        id: "2",
        content:
          "Think of a closure as a backpack. The function carries the variables it needs wherever it goes.",
        votes: 6,
        createdAt: "30 mins ago",
        author: {
          id: "3",
          name: "Sarah",
          avatar: "S",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Difference between useMemo and useCallback?",
    description:
      "I keep confusing these two hooks. When should each be used in a React application?",
    tags: ["React"],
    votes: 27,
    views: 540,
    createdAt: "Yesterday",
    author: {
      id: "4",
      name: "David",
      avatar: "D",
    },
    answers: [
      {
        id: "3",
        content:
          "useMemo memoizes a value, while useCallback memoizes a function.",
        votes: 15,
        createdAt: "20 hours ago",
        author: {
          id: "5",
          name: "Emma",
          avatar: "E",
        },
      },
    ],
  },
  {
    id: "3",
    title: "How does async/await work internally?",
    description:
      "Does async/await create a new thread? How is it different from Promises?",
    tags: ["JavaScript", "Async"],
    votes: 34,
    views: 820,
    createdAt: "3 days ago",
    author: {
      id: "6",
      name: "Alex",
      avatar: "A",
    },
    answers: [],
  },
];
