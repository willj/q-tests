import React from 'react';
import './App.css';
import BlockLibrary from './BlockLibrary';
import Builder from './Builder';

function App() {
  return (
    <div className="app">
      <h1>Quizee?</h1>

      <BlockLibrary />
      <Builder />

    </div>
  );
}

export default App;
