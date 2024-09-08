import QRCode from "react-qr-code";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";

import data from "./questions.json";

export function GameLeader() {
  const [modal, setModal] = useState(true);
  const [questions, setQuestions] = useState(data.questions); // Anta att JSON-filen innehåller en "questions"-array
  const [questionHistory, setQuestionHistory] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [answer, setAnswer] = useState("?");

  useEffect(() => {
    const storedHistory = localStorage.getItem("questionHistory");
    if (storedHistory) {
      setQuestionHistory(JSON.parse(storedHistory));
    }
  }, []);

  const getRandomQuestion = () => {
    setAnswer("?")
    if (questionHistory.length === questions.length) {
      alert("Alla frågor har använts! Spelet startas om.");
      localStorage.removeItem("questionHistory");
      setQuestionHistory([]);
      setRandomQuestion(null);
      return;
    }

    let selectedQuestion;
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * questions.length);
      selectedQuestion = questions[randomIndex];
    } while (questionHistory.includes(selectedQuestion.id));

    const updatedHistory = [...questionHistory, selectedQuestion.id];
    setQuestionHistory(updatedHistory);
    localStorage.setItem("questionHistory", JSON.stringify(updatedHistory));

    setRandomQuestion(selectedQuestion);
  };

  const handleAnswer = () => {
    setAnswer(randomQuestion.answer)
  };

  function invitePlayer() {
    return (
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
        children={
          <>
            <p className="text-xl text-center mb-5">Bjud in spelare</p>
            <QRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" />
          </>
        }
      />
    );
  }

  function questionCard() {
    return (
      <div className="flex flex-col max-w-sm px-10 py-8 mt-10 mx-5 bg-neutral-200 rounded-lg shadow-sm">
        <p className="text-2xl font-medium">
          {randomQuestion ? randomQuestion.question : "Ingen fråga ännu"}
        </p>
        <div className="relative block bg-neutral-400 w-40 h-40 mx-auto rounded-full mt-20">
          <span className="absolute text-8xl text-center top-[2rem] left-[3.7rem]">{answer}</span>
        </div>
        {randomQuestion && <button className="btn_primary mt-10 mb-10" onClick={handleAnswer}>
          Se svar
        </button>}
        <span className="text-right text-neutral-500">
          #{randomQuestion ? randomQuestion.id : "000"}
        </span>
      </div>
    );
  }

  return (
    <>
      <Header text={"Du är spelledare"} />
      {invitePlayer()}
      <main className="flex flex-col items-center">
        {questionCard()}

        <button className="btn_primary mt-10" onClick={getRandomQuestion}>
          Nästa fråga
        </button>
      </main>
    </>
  );
}
