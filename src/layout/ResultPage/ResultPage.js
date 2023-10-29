import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const answer = useLocation();
  return (
    <>
      Your answer
      {answer.state?.answer.map((v, i) => {
        return (
          <div key={i}>
            <p>Question Id: {v.quesId}</p>
            <p>
              {v.ansId.map((ans, j) => 
                <p key={j}>Answer id {ans}</p>
              )}
            </p>
            <br/>
          </div>
        );
      })}
    </>
  );
}
