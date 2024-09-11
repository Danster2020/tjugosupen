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
    const player_url = window.location.origin; //FIXME fix react/netlify routing for "/player"
    return (
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
        children={
          <>
            <div className="flex flex-col items-center max-w-sm">
              <p className="text-2xl font-bold text-blue-600 text-center mb-5">Bjud in spelare</p>
              <QRCode value={player_url} />
              <p className="text-center mt-5 text-neutral-700">{player_url}</p>
            </div>
          </>
        }
      />
    );
  }

  function questionCard() {
    return (

      <div className="flex flex-col max-w-sm px-10 py-8 mt-10 mx-5 bg-neutral-200 rounded-xl shadow-sm">
        <p className="text-2xl font-medium">
          {randomQuestion ? randomQuestion.question : "Tryck nedan för att starta!"}
        </p>
        <div className="flex items-center justify-items-center bg-cyan-600 w-40 h-40 mx-auto rounded-full mt-14 mb-14">
          <span className="inline-block text-8xl text-center mx-auto text-white">{answer}</span>
        </div>



        {randomQuestion &&
          <span className="text-right text-neutral-500">
            #{randomQuestion.id}
          </span>}
      </div>
    );
  }

  return (
    <>
      <Header text={"Du är spelledare"} />
      {invitePlayer()}
      <main className="flex flex-col items-center">
        <span className="text-white mt-10 px-4 py-2 bg-neutral-800 rounded-full">Frågor ställda: {questionHistory.length} st</span>
        {questionCard()}

        {randomQuestion && answer == "?" && <button className="btn_primary mt-10 mb-10" onClick={handleAnswer}>
          Se svar
        </button>}


        <button className="btn_primary mt-10" onClick={getRandomQuestion}>
          {randomQuestion ? "Nästa fråga >" : "Starta"}
        </button>

      </main>
    </>
  );
}
