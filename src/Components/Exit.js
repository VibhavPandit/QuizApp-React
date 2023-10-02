import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../Helpers/contexts';
import { Questions } from '../Helpers/QuestionBank';


export default function Exit()
{
    
    const { currScore, User } = useContext(QuizContext);

    return(
        <div>
            <div> <h1> Congratulations, {User} </h1> </div>
            <div className='Exit'>
                <h1>Your Score</h1>
                <h3>{currScore}/{Questions.length} </h3>
            </div>
        </div>
    );
}