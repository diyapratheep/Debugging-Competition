// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage15 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Rocket Launch!</h2>
        <p class="paragraph-spacing">Fix Code Block #1
        Run the given code as-is and squint yer eyes at the error message. Fix the mistake ye find in lines 1 - 12, and then re-run the code to check it.
 </p>

<p class="paragraph-spacing"> Fix Code Block #2
The next block of code hides two syntax errors. Remove the comment syntax (#) from lines 15 - 31, then run the code as-is to find the mistakes.</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1DPsFkjYPwNIcPppHiqO_ouQFCst2-n5KHmJdQlSWIX8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage15;
