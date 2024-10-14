// src/components/QuizPage3.js

import React from 'react';
import './QuizPages.css'; 

const QuizPage12 = ({ onNext }) => {
  return (
    <div className="quiz-page-container">
      <div className="quiz-content-box">
      <h2>Point to Percent</h2>
        <p class="paragraph-spacing">The following code contains two logic errors. When given a student’s score on an exam, the program should convert the points earned into a percentage (points earned / points possible * 100). Find and fix the errors so that the program gives the correct result.</p>

<p class="paragraph-spacing"> Tip: Use the following data to test the program and your fix.

points_earned = 8, points_possible = 10, Correct answer = 80.0%

points_earned = 11, points_possible = 15, Correct answer ≈ 73.33333333333333%

points_earned = 23.4, points_possible = 25, Correct answer = 93.6%</p>

        {/* PDF Download Button */}
        <a
          href="https://docs.google.com/document/d/17eGE6wLE3Fk0iUW1LuXZAYEzCVs7dolF4eIHnWsJ3u0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">Download PDF</button>
        </a> <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default QuizPage12;
