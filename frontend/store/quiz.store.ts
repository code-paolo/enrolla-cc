import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MockQuiz } from "../../backend/src/mock-quiz";

type QuizStore = {
  quiz: MockQuiz;
};

export const useQuizStore = create((set) => ({
  quiz: null,
  fetchQuiz: async () => {
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
    const res = await fetch(`${apiBaseUrl}/api`);
    const data = await res.json();
    return data;
  },
}));
