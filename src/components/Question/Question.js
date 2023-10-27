import React, { useEffect, useState } from "react";

export default function Question(props) {
  const [question, setQuestion] = useState(() => {
    Object.values(props.lsQuizz)
  })
  useEffect(() => {

  }, [props.lsQuizz])
  return (
    // <div key={question.id} className="question">

    question.map((v, i) => {
      return (
        <>
          <input type={question.isMultiple ? "checkbox" : "radio"} name="" value={question.answer}></input>
        </>
      )
    })
    // </div


  );
}
