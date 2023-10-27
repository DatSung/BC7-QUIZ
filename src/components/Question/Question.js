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
            v.answer.map((values,i)=>{
              return (
                <>
                {
                  console.log("multiple",v.isMutiple)
                }
                <input key={values.id} type={v.isMutiple? 'checkbox' : 'radio'} name="answerId" value={values.id}></input>{values.content}<br/>
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
