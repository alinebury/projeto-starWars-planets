import React from 'react';
import './App.css';
import Provider from './context/Provider';
import StarWars from './pages/StarWars';
import './css/styles.css';

function App() {
  return (
    <Provider>
      <StarWars />
    </Provider>
  );
}

export default App;
