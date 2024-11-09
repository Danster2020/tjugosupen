import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import { InvitePlayer } from "./components/InvitePlayer";

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
      resetGame()
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

  const resetGame = () => {
    localStorage.removeItem("questionHistory");
    setQuestionHistory([]);
    setRandomQuestion(null);
    return;
  };

  const handleResetClick = () => {
    if (confirm('Vill du starta om spelet?')) {
      resetGame()
    } else {
      return;
    }
  };

  function questionCard() {
    return (

      <div className="flex flex-col max-w-sm px-10 py-8 mt-10 mx-5 bg-neutral-200 rounded-xl shadow-sm">
        <p className="text-2xl font-medium">
          {randomQuestion ? randomQuestion.question : "Tryck nedan för att starta!"}
        </p>
        <div className="flex items-center justify-items-center bg-cyan-600 w-40 h-40 mx-auto rounded-full mt-14 mb-14">
          <span className="inline-block text-8xl text-center mx-auto text-white">{answer}</span>
        </div>
        {randomQuestion && answer == "?" && <button className="btn_primary mt-5 mb-10" onClick={handleAnswer}>
          Se svar
        </button>}


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
      <InvitePlayer modal={modal} setModal={setModal} />
      <main className="flex flex-col items-center">
        <span className="text-white mt-10 px-4 py-2 bg-neutral-800 rounded-full">Frågor ställda: {questionHistory.length} st</span>
        {questionCard()}



        <button className="btn_primary mt-10" onClick={getRandomQuestion}>
          {randomQuestion ? "Nästa fråga >" : "Starta"}
        </button>

        <button className="btn_third text-red-700 outline-red-700 mt-28 mb-2" onClick={handleResetClick}>Starta om</button>

      </main>
    </>
  );
}
