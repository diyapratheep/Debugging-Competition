// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage7 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Quick Fix</h2>
        <p class="paragraph-spacing">Once the book was ready, he wanted to include the stories of other great authors too. He gathered a list of titles and their publication years: </p>

<p class="paragraph-spacing">But again, Blackbeard found a problem. He muttered, “These pirates need to learn proper syntax!”</p>
<p class="paragraph-spacing">Cmon, with a quick fix, help him print the publication years of these classics</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1jdq6bDUwWBy1ERgIYevejP5sJ_QBcuqxLlloqspA-5Q/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage7;
