import React, { useEffect, useReducer, useState } from "react";

export default function Question(props) {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState({});

  const reducer = (state, action) => {
    let temp = state.filter(items => items.quesId == action.target)
    console.log(temp)
    switch (action.type) {
      case "CHANGE": {

         
        break;
      }
      case "DELETE": {
        break;
      }
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, answer);

  useEffect(() => {
    setQuestions(Object.values(props.lsQuizz));
    //setAnswer(Object.keys(props.lsQuizz));
    setAnswer(
      Object.keys(props.lsQuizz).map((v) => {
        return {
          quesId: v,
          answerId: []
        };
      })
    );
  }, [props.lsQuizz]);

  const handleAnswerChange = (questionId, answerId, isMultiple) => {
    questions.map((v, i) => {});
    if (isMultiple) {
      // Nếu đây là checkbox, hãy kiểm tra xem đã chọn hay bỏ chọn
      dispatch({ type: "CHANGE" , data: {answerId : answerId}, target: questionId})
    } else {
      // Nếu đây là radio, chỉ cần lưu câu trả lời duy nhất
    }
  };

  return (
    <div className="question-container">
      {
        //console.log(JSON9.stringify(initialAction))
      }

      {questions.map((question, i) => (
        <div key={question.id} className="question">
          <p>{question.content}</p>
          {question.answer.map((answer, j) => (
            <div key={answer.id}>
              <input
                onChange={() =>
                  handleAnswerChange(
                    question.id,
                    answer.id,
                    question.isMultiple
                  )
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

