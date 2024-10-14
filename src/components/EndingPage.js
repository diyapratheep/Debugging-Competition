import React from 'react';
import './QuizPages.css'; // Make sure to create this CSS file for styling

const EndingPage = ({onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h1 className='paragraph_spacing'>HURRAAAHH! 
        You Reached the Finish Line!</h1>
      <p>Good job! You made it through without any errors!</p>
      <p className='paragraph_spacing'>Do you want to retake the test?</p><p> No, right? Then wait here until you get your goodies.</p>
      <button onClick={onNext}>Vendenki pokko</button>
    </div>
    </div>
  );
};

export default EndingPage;
