import React,{useState } from "react";

export const AnsContext = React.createContext();

export const AnswerProvider = ({chilren}) => {
    const [answerConext, setAnswerContext] = useState([]);
    return <AnsContext.Provider value={{answerConext, setAnswerContext}}>
        {chilren}
    </AnsContext.Provider>
}