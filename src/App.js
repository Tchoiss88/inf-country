import React from 'react';
import HomePage from './pages/homepage/homepage.page';
import SideBar from './components/side-bar/side-bar.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <HomePage />
    </div>
  );
}

export default App;
