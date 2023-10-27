import React, { useEffect, useState } from "react";

export default function Question(props) {
  const [question, setQuestion] = useState([])
  useEffect(() => {
      setQuestion(Object.values(props.lsQuizz))
  }, [props.lsQuizz])
  return (
    // <div key={question.id} className="question">

    question.map((v, i) => {
      return (
        <div key={v.id}>
          <p>{v.content}</p>
          {
            v.answer.map((v,i)=>{
              return (
                <>
                <input key={v.id} type={v.isMultiple ? "checkbox" : "radio"} name="answerId" value={v.id}></input>{v.content}<br/>
                </>
              )
            })
          }
          
        </div>
      )
    })
    // </div


  );
}
