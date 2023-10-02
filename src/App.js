import './App.css';
import Menu from "./Components/Menu";
import Exit from "./Components/Exit";
import Quiz from "./Components/Quiz";
import { Questions, addQuestion, removeQuestion } from './Helpers/QuestionBank'; // Import Questions, addQuestion, and removeQuestion
import React, { useState, useContext } from 'react';
import { QuizContext } from './Helpers/contexts';

function App() {
  const [quizState, setquizState] = useState("Menu");
  const [currScore, setcurrScore] = useState(0);
  const [User, setUser] = useState("");

  return (
    <div className="App">
      <QuizContext.Provider value={{ quizState, setquizState, currScore, setcurrScore, User, setUser }}>
        {quizState === "Menu" && <Menu />}
        {quizState === "Quiz" && <Quiz />}
        {quizState === "Exit" && <Exit />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
