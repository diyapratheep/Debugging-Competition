// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage8 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2> Canonical Clarity </h2>
        <p class="paragraph-spacing">Captain Blackbeard was busy preparing his grand tale for the crew when he realized his words needed some fine-tuning. He had a list of words to correct, including “color,” “colour,” “amok,” and others. He knew that some words were commonly spelled differently, and he wanted his story to be clear and precise.</p>

<p class="paragraph-spacing">He made a plan to create a new list with the correct spellings. After all, a well-spelled tale is what keeps the crew focused on the treasure, not the typos! </p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1nq8OUneNEbNhAOyAYMZ7ckGuKTvgvcgfGNwVwwSmBIo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage8;
