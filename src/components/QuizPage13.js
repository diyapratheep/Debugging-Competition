// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage13 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Grade Letter, again?</h2>
        <p class="paragraph-spacing">The next program should convert a student’s percentage into a letter grade. The code follows a simple 10-point scale and allows for decimal results:</p>

<p class="paragraph-spacing"> A: 100% - 90%, B: 89 - 80, C: 79 - 70, D: 69 - 60, F: Any score under 60%.</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/19r9gARUu0MNHpcWJCm5LHSIcAdH3I_2DWTkY3KwDHmc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage13;
