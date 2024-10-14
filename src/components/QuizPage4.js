// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage4 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Hocus Pocus.</h2>
        <p class="paragraph-spacing">As the pirate party roared with laughter, a sudden burst of light revealed a time traveler named Brandon Walsh from the year 2024. He was soon joined by another equally confused traveler, Ethan Reed.</p>
<p class="paragraph-spacing">You decided to create a way for them to introduce themselves more formally. You thought about a special class that would help them speak in the way people did in your time. Each time traveler would have a first and last name, and you could simply ask them to say, "My name is [Last Name], [First Name]."</p>
        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/199952TxeOMK7vVZeWxxtQ8YEC1elsYeMxjHpKiVO06s/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage4;
