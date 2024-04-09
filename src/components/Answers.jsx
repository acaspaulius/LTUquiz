import { useRef } from 'react';

export default function Answers({ answers, selectedAnswer, answerState, onSelectAnswer }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }

        if (!shuffledAnswers.current) {
          shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
          shuffledAnswers.current.sort(() => Math.random() - 0.5);
        }

        return (
          <li key={answer} className='answer'>
            <button onClick={() => onSelectAnswer(answer)} className={cssClass} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
