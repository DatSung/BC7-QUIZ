import React, { useEffect, useState } from "react";

export default function Question(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(Object.values(props.lsQuizz));
  }, [props.lsQuizz]);

  return (
    <div className="question-container">

      {questions.map((question, i) => (

        <div key={question.id} className="question">
          <p>{question.content}</p>

          {question.answer.map((answer, j) => (

            <div key={answer.id}>
              <input
                type={question.isMutiple ? "checkbox" : "radio"}
                name='answerId'
                value={answer.id}
              />
              {answer.content}
            </div>

          ))}

        </div>
      ))}

    </div>
  );
}



// import React, { useEffect, useState } from "react";

// export default function Question(props) {
//   const [question, setQuestion] = useState([])
//   useEffect(() => {
//     setQuestion(Object.values(props.lsQuizz))
//   }, [props.lsQuizz])
//   return (
//     // <div key={question.id} className="question">

//     question.map((v, i) => {
//       return (
//         <div key={v.id}>
//           <p>{v.content}</p>
//           {
//             v.answer.map((v, i) => {
//               return (
//                 <>
//                   <input key={v.id} type={v.isMultiple ? "checkbox" : "radio"} name="answerId" value={v.id}></input>{v.content}<br />
//                 </>
//               )
//             })
//           }

//         </div>
//       )
//     })
//     // </div


//   );
// }
