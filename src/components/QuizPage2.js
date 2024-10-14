// src/components/QuizPage2.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage2 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
        <h2>Arrr! You're in.</h2>
        <p class="paragraph-spacing">You’ve just escaped the clutches of a pirate party. After successfully navigating that challenge, you find yourself at an old, dusty library filled with the works of renowned authors. But something feels off—there's a peculiar code hidden within the library's archives.</p>

<p class="paragraph-spacing">Legend has it that this code holds the names of famous authors and the years they passed away. However, the code is broken, and the information is locked away!</p>

<p class="paragraph-spacing">Your mission, should you choose to accept it, is to fix the faulty code and unveil the authors' names along with their last years, just like this: “Charles Dickens died in 1870.”</p>

<p class="paragraph-spacing">Can you solve the mystery of the broken code and bring these literary legends back to life in the console?</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/1iMP4qzuBuZ364ze5K-ZRSEN34CMlBBaVxty-UhDZMyM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage2;
