import React from "react";

function QuestionItem(props) {
  const { id, prompt, answers, correctIndex } = props.question;
  const options = answers || [];

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;