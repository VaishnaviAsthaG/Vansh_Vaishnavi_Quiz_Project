import React from "react";

const Result = ({ score, total }) => {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} / {total}
      </p>
    </div>
  );
};

export default Result;
