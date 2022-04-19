import React from 'react';
import './App.css';
import Provider from './context/Provider';
import StarWars from './StarWars';

function App() {
  return (
    <Provider>
      <StarWars />
    </Provider>
  );
}

export default App;
