import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Question.scss'
export default function Question({lsQuizz}) {
  const nav = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(() => {
    let arr = Object.keys(lsQuizz).map((v, i) => {
      return {
        quesId: v,
        ansId: [],
      };
    });
    return arr;
  });

  useEffect(() => {
    setQuestions(Object.values(lsQuizz));
  }, [lsQuizz]);

  const HandleQuestion = (questionId, answerId, isMutiple) => {
    answer.map((v, i) => {
      if (isMutiple) {
        if (v.quesId === questionId) {
          if (v.ansId.indexOf(answerId) === -1) {
            //bằng -1 thì không có phần tử đó
            v.ansId.push(answerId);
          } else {
            //nếu khác -1 -> đáp án đó đã có -> tiến hành xóa khỏi mảng
            v.ansId = v.ansId.filter((id) => id !== answerId);
          }
        }
      } else {
        if (v.quesId === questionId) {
          v.ansId[0] = answerId;
        }
      }
    })
    //localStorage.setItem("backup", answer)
  };
  const HandleSubmit = () => {
    nav("/result", {
      state: {
        answer: answer
      }
    });
  };
  return (
    <div className="question-container">
      {questions.map((question, i) => (
        <div key={question.id} className="question">
          <p>{question.content}</p>
          {question.answer.map((answer, j) => (
            <div key={answer.id}>
              <input
                onClick={() =>
                  HandleQuestion(question.id, answer.id, question.isMutiple)
                }
                type={question.isMutiple ? "checkbox" : "radio"}
                name={`answerId-${i}`}
                value={answer.id}
              />
              {answer.content}
            </div>
          ))}

        </div>
      ))}
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  );
}
