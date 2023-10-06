import Image from 'next/image';
import LogoImg from '../assets/quizzopia-logo.png';
import LoadingGif from '../assets/loading.gif';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Difficulty, QuestionsState, Question } from '@/types/quiz';
import { useEffect, useState } from 'react';
import QuizComponent from '@/components/QuizComponent';

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

const QuizPage = () => {
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
      <div className='relative flex place-items-center mt-4'>
        {questions.length > 0 ? (
          <QuizComponent
            questions={questions}
            totalQuestions={TOTAL_QUESTIONS}
          />
        ) : (
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='animate-pulse flex items-center justify-center'>
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]  w-auto h-36 mt-2 rounded'
                src={LoadingGif}
                alt='Quizzopia Logo'
                priority
              />
            </div>
            <p className='text-gray-800 font-bold text-3xl mt-4'>
              Loading Questions...
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default QuizPage;
