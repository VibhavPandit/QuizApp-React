import React, { useContext, useState } from 'react';
import { QuizContext } from '../Helpers/contexts';
import { Questions } from '../Helpers/QuestionBank';

export default function Quiz() {
  const { quizState, setquizState } = useContext(QuizContext);
  const [currQuestion, setcurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState('');
  const { currScore, setcurrScore,User } = useContext(QuizContext);

  const MovingNext = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setcurrScore(currScore + 1);
    }

    setcurrQuestion(currQuestion + 1);
    setoptionChosen('')
  };

  const EndQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setcurrScore(currScore + 1);
    }
    setquizState('Exit');
  };

  return (
    <div>
        <div><h1>All The Best, {User}! </h1></div>
        <div className="Quiz">
        <div className="Options">
            <div className="prompt">
            <h1 className="Heading"> {Questions[currQuestion].prompt} </h1>
            </div>
            <div>
                <div>
                    <button
                        className={`A ${optionChosen === 'A' ? 'selected' : ''}`}
                        onClick={() => setoptionChosen('A')}
                    >
                        {Questions[currQuestion].optionA}{' '}
                    </button>
                    <button
                        className={`A ${optionChosen === 'B' ? 'selected' : ''}`}
                        onClick={() => setoptionChosen('B')}
                    >
                        {Questions[currQuestion].optionB}{' '}
                    </button>
                </div>
            <button
                className={`A ${optionChosen === 'C' ? 'selected' : ''}`}
                onClick={() => setoptionChosen('C')}
            >
                {Questions[currQuestion].optionC}{' '}
            </button>
            <button
                className={`A ${optionChosen === 'D' ? 'selected' : ''}`}
                onClick={() => setoptionChosen('D')}
            >
                {Questions[currQuestion].optionD}{' '}
            </button>
            </div>
        </div>
        <div className='Navigate'>
            {currQuestion === Questions.length - 1 ? (
            <button onClick={EndQuiz}> Finish Quiz </button>
            ) : (
            <button className="Next" onClick={MovingNext}>
                <span> Next Question </span>{' '}
            </button>
            )}
        </div>
        </div>
    </div>
  );
}
