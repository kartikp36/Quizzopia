'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Button from '@/components/Button';
import { QuestionsState } from '@/types/quiz';

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const QuizComponent = ({ questions, totalQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

  const handleOnAnswerClick = (
    answer: string,
    currentQuestionIndex: number
  ) => {
    if (isQuestionAnswered) return;
    console.log(answer);
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    if (isCorrect) setScore((prev) => prev + 5);
    else setScore((prev) => prev - 1);
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleChangeQuestion = (step: number) => {
    console.log(step);
    const newQuestionIndex = currentQuestionIndex + step;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    setCurrentQuestionIndex(newQuestionIndex);
  };

  return (
    <div className='text-center'>
      <p className='p-8 font-bold text-2xl text-[#63B69C]'>Score: {score}</p>
      <p className='text-gray-700 font-bold pb-2 text-sm'>
        Question {currentQuestionIndex + 1} out of {totalQuestions}
      </p>
      <h2
        className='max-w-[400px] text-gray-700 font-bold text-2xl pb-4'
        dangerouslySetInnerHTML={{
          __html: questions[currentQuestionIndex].question,
        }}
      />
      <div className='grid grid-cols-1 gap-4'>
        {questions[currentQuestionIndex].answers.map((answer, index) => (
          <button
            key={index}
            className='bg-gray-300 hover:bg-gray-800 hover:text-gray-200 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded'
            onClick={() => handleOnAnswerClick(answer, currentQuestionIndex)}>
            {answer}
          </button>
        ))}
      </div>
      <div className='flex justify-between mt-16'>
        <button
          className='bg-gray-200 hover:bg-gray-400 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded'
          onClick={() => handleChangeQuestion(-1)}>
          Prev
        </button>
        <button
          className='bg-gray-200 hover:bg-gray-400 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded'
          onClick={
            currentQuestionIndex === totalQuestions - 1
              ? () => console.log('Finish')
              : () => handleChangeQuestion(1)
          }>
          {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
