import React, { useState } from 'react';
import './App.css';
import GuidelinesPage from './components/Guidelines';
import QuizPage1 from './components/QuizPage1';
import QuizPage2 from './components/QuizPage2'; 
import QuizPage3 from './components/QuizPage3';
import QuizPage4 from './components/QuizPage4';
import QuizPage5 from './components/QuizPage5';
import QuizPage6 from './components/QuizPage6';
import QuizPage7 from './components/QuizPage7';
import QuizPage8 from './components/QuizPage8';
import QuizPage9 from './components/QuizPage9';
import QuizPage10 from './components/QuizPage10';
import QuizPage11 from './components/QuizPage11';
import QuizPage12 from './components/QuizPage12';
import QuizPage13 from './components/QuizPage13';
import QuizPage14 from './components/QuizPage14';
import QuizPage15 from './components/QuizPage15';
import EndingPage from './components/EndingPage';


const HomePage = ({ onNext }) => {
  return (
    <div className="mirror-box">
      <h1>Welcome to Runtime Error</h1>
      <p>UNrevealing Bugs, one at a time!</p>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState(0); // State to track which page to show

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <GuidelinesPage onNext={() => setCurrentPage(2)} />; // Render Guidelines Page
      case 0:
        return <HomePage onNext={() => setCurrentPage(1)} />; // Move to Quiz Page 1
      case 2:
        return <QuizPage1 onNext={() => setCurrentPage(3)} />;
      case 3:
        return <QuizPage2 onNext={() => setCurrentPage(4)} />;
      case 4:
        return <QuizPage3 onNext={() => setCurrentPage(5)} />; // Change this to go to the results page or end
      case 5:
        return <QuizPage4 onNext={() => setCurrentPage(6)} />;
      case 6:
        return <QuizPage5 onNext={() => setCurrentPage(7)} />; 
      case 7:
        return <QuizPage6 onNext={() => setCurrentPage(8)} />;
      case 8:
      return <QuizPage7 onNext={() => setCurrentPage(9)} />;
      case 9:
      return <QuizPage8 onNext={() => setCurrentPage(10)} />;
      case 10:
      return <QuizPage9 onNext={() => setCurrentPage(11)} />;
      case 11:
      return <QuizPage10 onNext={() => setCurrentPage(12)} />;
      case 12:
      return <QuizPage11 onNext={() => setCurrentPage(13)} />;
      case 13:
      return <QuizPage12 onNext={() => setCurrentPage(14)} />;
      case 14:
      return <QuizPage13 onNext={() => setCurrentPage(15)} />;
      case 15:
      return <QuizPage14 onNext={() => setCurrentPage(16)} />;
      case 16:
      return <QuizPage15 onNext={() => setCurrentPage(17)} />;
      case 17:
      return <EndingPage onNext={() => setCurrentPage(0)} />;

      default:
        return <HomePage onNext={() => setCurrentPage(0)} />;
    }
  };

  return (
    <div className="App">
  <img src={`${process.env.PUBLIC_URL}/bgvideo.webp`} alt="Background animation" id="bgImage" />




      {renderPage()} {/* Render the appropriate page based on currentPage */}
    </div>
  );
}

export default App;
