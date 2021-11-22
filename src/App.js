import React from 'react';
import './App.css';
import PaintCanvas from './components/PaintCanvas';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App' >
      <div>
        <Header />
        <PaintCanvas />
        <Footer />
      </div>
    </div>
  );
}

export default App;
