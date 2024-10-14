import React from 'react';
import './QuizPages.css';

const GuidelinesPage = ({onNext}) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
        <h2>Guidelines for the Competition</h2>
        <p>
           Please read the following guidelines before starting:
        </p>
        <ul class='no-bullets'>
          <li>Read the question carefully; misunderstandings lead to debugging detours!</li>
          <li>Download the provided file and paste it into your online IDE.</li>
          <li>Debug line by line, error by error; remember, even Sherlock Holmes wouldn't skip a clue!</li>
          <li>Once you complete a question, report to the volunteer before moving to the next one; there's no back button, so make each step count!</li>
          <li>Refreshments will be provided to keep you fueled and focused throughout the competition.</li>
          <li>The first person to reach the finish line is the winner; speed matters, but precision is key!</li>
          <li>Any use of online resources or help, other than you teammate's, will lead to direct elimination.</li>
        </ul>
        <p>
          Good luck and have fun!
          All Teh Bset! 😉
        </p>
        <button onClick={onNext} className="next-button">Ah thudangiko</button>
      </div>
    </div>
  );
};

export default GuidelinesPage;
