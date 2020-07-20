import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import QuizBuilder from './QuizBuilder';
import InitQuiz from './quiz/InitQuiz';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <h1>Quizee?</h1>
          <p><NavLink to="/">Builder</NavLink> <NavLink to="/quiz">Quiz</NavLink></p>
        </header>

        <Route path="/" exact component={QuizBuilder} />
        <Route path="/quiz" exact component={InitQuiz} />
      </BrowserRouter>
    </div>
  );
}

export default App;
