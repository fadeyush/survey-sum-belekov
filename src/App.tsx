import React from 'react';
import classes from './App.module.scss';
import TestList from './components/TestList/TestList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.App__header}>
        <Header/>
      </header>
      <main>
          <TestList/>
      </main>
    </div>
  );
}

export default App;
