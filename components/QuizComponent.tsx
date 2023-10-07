import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import { QuestionsState } from '@/types/quiz';

type Props = {
  questions: QuestionsState;
  totalQuestions: number;
};

const QuizComponent = ({ questions, totalQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [skips, setSkips] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;
  let timer: NodeJS.Timeout | undefined;
  useEffect(() => {
    if (timeLeft === 0) {
      handleSkip();
    }
    timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOnAnswerClick = (
    answer: string,
    currentQuestionIndex: number
  ) => {
    if (isQuestionAnswered) return;
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    const timeBonus = timeLeft > 7 ? 5 : 3;
    if (isCorrect) {
      setScore((prev) => prev + timeBonus);
    } else {
      setScore((prev) => prev - 1);
    }
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));
    setTimeLeft(10);
  };

  const handleSkip = () => {
    if (skips >= 2) {
      setScore((prev) => prev - 2);
    } else {
      setSkips((prev) => prev + 1);
    }
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: 'skipped' }));
    const newQuestionIndex = currentQuestionIndex + 1;
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) {
      clearTimeout(timer);
      setTimeLeft(-1);
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    setTimeLeft(10);
  };

  // const handleChangeQuestion = (step: number) => {
  //   if (isQuestionAnswered || skips >= 2) {
  //     const newQuestionIndex = currentQuestionIndex + step;
  //     if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) {
  //       setTimeLeft(-1);
  //       clearTimeout(timer);
  //       return;
  //     }
  //     setCurrentQuestionIndex(newQuestionIndex);
  //     setSkips(0);
  //     setTimeLeft(10);
  //   }
  // };

  const correctAnswer = (
    isQuestionAnswered: Boolean,
    ans: string,
    userAns: string,
    correctAns: string
  ) => {
    if (isQuestionAnswered) {
      if (ans === correctAns) {
        return 'bg-green-700 text-gray-100 transition-colors duration-200 ease-in-out';
      }
      if (ans === userAns) {
        return 'bg-red-700 text-gray-100 transition-colors duration-200 ease-in-out';
      } else {
        return 'bg-gray-300 text-gray-700 transition-colors duration-200 ease-in-out';
      }
    }
  };

  const checkbgColor = (isQuestionAnswered: Boolean) => {
    if (isQuestionAnswered) {
      return 'text-[#3291ff] transition-colors duration-200 ease-in-out';
    }
  };

  return (
    <div className='text-center'>
      <p className='p-8 font-bold text-2xl text-[#63B69C]'>Score: {score}</p>
      <p className='text-gray-700 font-bold pb-2 text-sm'>
        Question {currentQuestionIndex + 1} out of {totalQuestions}
      </p>
      <h2
        className={`${checkbgColor(
          isQuestionAnswered
        )} max-w-[400px] text-gray-700 font-bold text-2xl pb-4`}
        dangerouslySetInnerHTML={{
          __html: questions[currentQuestionIndex].question,
        }}
      />
      <div className='grid grid-cols-1 gap-4'>
        {questions[currentQuestionIndex].answers.map((answer, index) => (
          <button
            key={index}
            id={`${answer}`}
            className={`
            ${correctAnswer(
              isQuestionAnswered,
              answer,
              userAnswers[currentQuestionIndex],
              questions[currentQuestionIndex]?.correct_answer
            )}
            bg-gray-200 hover:bg-gray-800 hover:text-gray-200 transition-colors duration-200 ease-in-out font-bold py-2 px-4 rounded`}
            onClick={() => handleOnAnswerClick(answer, currentQuestionIndex)}>
            {answer}
          </button>
        ))}
      </div>
      <div className='flex justify-center mt-16'>
        {/* <Button
          text='Skip'
          className='bg-gray-200 hover:bg-gray-400 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded'
          onClick={handleSkip}
        /> */}
        {currentQuestionIndex !== totalQuestions - 1 ? (
          <Button
            text={'Next'}
            className='bg-gray-200 hover:bg-gray-400 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded'
            onClick={handleSkip}
          />
        ) : (
          <Button
            text={'Finish'}
            className='bg-gray-200 hover:bg-gray-400 transition-colors duration-200 ease-in-out text-gray-700 font-bold py-2 px-4 rounded'
            onClick={() => router.push('/')}
          />
        )}
      </div>
      {timeLeft >= 0 ? (
        <p className='text-gray-700 font-bold pb-2 text-sm mt-4'>
          Time Left: {timeLeft}
        </p>
      ) : null}
    </div>
  );
};

export default QuizComponent;
