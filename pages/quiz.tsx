import Image from 'next/image';
import LogoImg from '../assets/quizzopia-logo.png';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Difficulty, QuestionsState, Question } from '@/types/quiz';
import { useEffect, useState } from 'react';

const TOTAL_QUESTIONS = 5;

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionsState> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint, { cache: 'no-store' })).json();

  console.log(data);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

const QuizComponent = () => {
  const [questions, setQuestions] = useState<QuestionsState>([]);

  useEffect(() => {
    getQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
      .then((questions) => setQuestions(questions))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main
      className={`flex flex-col items-center justify-between p-2 ${inter.className}`}>
      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]  w-auto h-36'
        src={LogoImg}
        alt='Quizzopia Logo'
        priority
      />
      <div className='relative flex place-items-center'>
        {questions.length > 0 ? (
          `${questions}`
        ) : (
          <div className='text-xl font-bold'>Loading...</div>
        )}
      </div>
    </main>
  );
};

export default QuizComponent;
