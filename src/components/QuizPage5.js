// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage5 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>The Pirate's Report Card</h2>
        <p class="paragraph-spacing">After a long night of adventures, the crew of the ship "Sea Serpent" decided it was time to check their skills. Captain Blackbeard announced a test to see how well each crew member had learned their pirate ways.</p>

<p class="paragraph-spacing">There would be three exams: sailing the ship, sword fighting, and finding treasure. The crew was excited but nervous. They knew their grades would decide if they became “True Pirates” or faced punishment.</p>
<p class="paragraph-spacing">As each crew member took their tests, they waited anxiously for their scores. Would they pass and earn respect, or fail and disappoint the captain? Only the grades would tell!</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1rinH_-701N_vGuxRGU95NRzFNnfHomWfX89Gk0JE96o/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage5;
