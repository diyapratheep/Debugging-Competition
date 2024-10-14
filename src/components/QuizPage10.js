// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage10 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>The Map Code</h2>
        <p class="paragraph-spacing">Ahoy, friend! You’ve found a secret code from pirates that hides the letters of the alphabet. But watch out—there are three sneaky mistakes in it! Run the code as-is to generate the first error message. Use the message to find and fix the bug. Repeat for the other bugs.
 </p>

<p class="paragraph-spacing"> Can you fix the code and find the letter at your chosen index? Your skills will unlock the treasure!</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1k0OzEIPAE0eCBlRX9YBFXmk1yiTnJYaZTVNwkQUPfOY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage10;
