import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const answer = useLocation();
  return (
    <>
      Result
      {answer.state?.answer.map((v, i) => {
        return (
          <div key={i}>
            <p>{v.quesId}</p>
            <p>
              {v.ansId.map((ans, j) => 
                <p key={j}>{ans}</p>
              )}
            </p>
            <br/>
          </div>
        );
      })}
    </>
  );
}
