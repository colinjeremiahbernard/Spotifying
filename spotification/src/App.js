import React from 'react';
import './App.css';
import Header from './Header/header';  // Ensure the import path is correct

const App = () => {
  return (
    <div className="App">
      <Header />  {/* Render the Header component here */}
      <header className="App-header">
        <h1>Welcome to Spotification</h1>
      </header>
      {/* Add your other components and content here */}
    </div>
  );
};

export default App;



