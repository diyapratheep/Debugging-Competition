// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage14 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Sign In</h2>
        <p class="paragraph-spacing">The code sample checks if a username is valid, but it’s not working yet. Add print statements as directed to find and fix the logic errors.</p>

<p class="paragraph-spacing">Username rules:

Must be 5 - 10 characters long.

Must only contain letters and numbers.

Must contain at least 1 digit.</p>

<p class="paragraph-spacing">Test names:

"R2D2" should be invalid (too short).

"CoderGirl" should be invalid (no number).

"rut*baga8" should be invalid (illegal symbol).

"This1IsTooLong" should be invalid (too long).

"High5" and "pyth0n" are both valid (that’s a zero in place of the “o”).</p>
        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1fH0ZcL-FTmAZYRiHexkt8i5Mb_yn5ZJul9YKOR3Y5bU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage14;
