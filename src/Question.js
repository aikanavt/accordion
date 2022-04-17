import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const showText = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showText}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
