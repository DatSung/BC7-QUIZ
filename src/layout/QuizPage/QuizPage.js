import React, { useEffect, useLayoutEffect, useState } from "react";
import Question from "../../components/Question/Question";
import { GetQuiz } from "../../service/HomePageService/HomePageService";



export default function QuizPage() {
  const [quiz, setQuiz] = useState({});
  useEffect(() => {
    // Gọi hàm GetQuiz để lấy dữ liệu khi component được render
    GetQuiz()
      .then((data) => {
        setQuiz(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu từ API: ", error);
      });
  }, []);

  
  return (
    
    <div key={quiz.id} className="quiz">
      <h1>{quiz.title}</h1>
      <h2>{quiz.description}</h2>
     
      {quiz.lsQuizz && <Question lsQuizz={quiz.lsQuizz ?? []}></Question>}
   
       
    </div>
  );
}
