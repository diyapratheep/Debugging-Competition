// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage11 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Fed up? Have a sip of drink ...</h2>
        <p class="paragraph-spacing">Before making any changes, run the code as-is to generate the first error message.

Follow the same process you used above to fix the runtime errors. Note that syntax highlighting does NOT show all possible runtime errors.</p>

<p class="paragraph-spacing"> The following code sample contains 3 syntax errors. Fix all of the bugs and let the program run successfully.</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1UxsauFHMcO3dOOgnKSBHoEGGC6zZKOJlD2V9YhDVQqE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage11;
