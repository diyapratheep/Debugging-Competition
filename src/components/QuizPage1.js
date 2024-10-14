// src/components/QuizPage1.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage1 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
        <h2>Ayy Ayy, mate!</h2>
        <p class="paragraph-spacing">You stand at the edge of a mysterious island where pirates are known to gather. As an undercover agent, you've been invited to a secret pirate party. But there’s a rule: before you can enter, you must say the secret password to the pirate guards.</p>

<p class="paragraph-spacing">Unfortunately, the code that checks the password is broken and needs fixing. Your mission is to debug the code so you can find the right password and get into the party. Can you fix the code and join the pirates, or will you be turned away?</p>

<p class="paragraph-spacing">It’s time to start debugging!</p>


        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1H8DyTnHlzmNSseXPZuY8ZsGlHatAalxnK2UftzdWYS4/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage1;

