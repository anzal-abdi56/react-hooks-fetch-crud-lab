import React, { useEffect, useState } from "react";

function QuestionList() {
  const[questions,setQuestions]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res=>res.json())
    .then(data=>setQuestions(data))
  },[])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question=>{
        return <div key={question.id}>
          <h1>{question.prompt}</h1>
          <p>{question.answers}</p>
        </div>
      }))}</ul>
    </section>
  );
}

export default QuestionList;
