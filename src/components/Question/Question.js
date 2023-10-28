import React, { useEffect, useMemo, useState } from "react";

export default function Question(props) {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(() => {
    let arr = Object.keys(props.lsQuizz).map((v, i) => {
      return {
        quesId: v,
        ansId: [],
      };
    });
    return arr;
  });

  useEffect(() => {
    setQuestions(Object.values(props.lsQuizz));
  }, [props.lsQuizz]);

  const HandleQuestion = (questionId, answerId, isMutiple) => {
    answer.map((v, i) => {
      if (isMutiple) {
        if (v.quesId === questionId) {
          if (v.ansId.indexOf(answerId) === -1) {
            //bằng -1 thì không có phần tử đó
            v.ansId.push(answerId);
          } else {
            //nếu mảng khác rỗng nghĩa là đáp án đó đã có -> tiến hành xóa khỏi mảng
            v.ansId = v.ansId.filter((id) => id !== answerId);
          }
        }
      } else {
        if (v.quesId === questionId) {
          v.ansId[0] = answerId;
        }
      }
    });

    console.log(answer);
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
    </div>
  );
}
