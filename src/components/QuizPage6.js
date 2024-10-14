// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage6 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>A Chunky Tale</h2>
        <p class="paragraph-spacing">After the crew of the "Sea Serpent" checked their skills, Captain Blackbeard had another task. He wanted to tell the great story of their adventures in a book.

The book had 457 pages, and each page had 250 words. The captain decided to break the story into chunks so everyone could read it easily.</p>

<p class="paragraph-spacing">He planned to create 10 chunks from the whole tale. But when he tried to calculate how many words each chunk would have, he ran into a problem. 😯 </p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/167VEjO5UtL12ZX8XixSK9fELmSe-uVT8drudya81SE0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage6;
