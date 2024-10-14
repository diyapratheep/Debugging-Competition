// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage3 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Holla!</h2>
        <p class="paragraph-spacing">You suddenly notice a shimmering portal nearby. Out of it steps a time traveler, dressed in clothes that span the ages! Curiously, the traveler asks everyone about the current year, eager to know if they’ve arrived in the past, present, or future. With your pirate instincts still sharp, you decide to greet this strange visitor based on when they hail from. </p>

<p class="paragraph-spacing">Will they be from a time long gone, the bustling present, or a futuristic world beyond your wildest dreams?</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1e3ZTok75aUjTLtOnejlR9bqDD0ZiVJjjUR7ci49VzBo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage3;
