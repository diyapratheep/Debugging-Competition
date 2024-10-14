// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage9 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>The Digital Web</h2>
        <p class="paragraph-spacing">Captain Blackbeard, after polishing his tale, decided it was time to share his adventures with the world. He knew a great website would help him connect with fans and followers. He started building a list of pages for his site, like “about,” “blog,” “pedagogy,” “projects,” and “CV.” </p>

<p class="paragraph-spacing">As he crafted each URL, Blackbeard imagined all the curious souls who would visit his site to read about his daring escapades and lessons learned on the high seas. “This will be a treasure map for the minds of all who dare to dream!” he exclaimed, excited about sharing his journey with the world!</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1T1giHKZIzO_Fc-ElbUMAQ8DpHoRImwIWM5P-HCJYOWU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage9;
