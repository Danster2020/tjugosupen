import QRCode from "react-qr-code";
import { Header } from "./components/Header";
import { useState } from "react";
import Modal from "./components/Modal";

export function GameLeader() {

  const [modal, setModal] = useState(true);

  function invitePlayer() {
    return (
      <Modal openModal={modal} closeModal={() => setModal(false)}
        children={
          <>
            <p className="text-xl text-center mb-5">Bjud in spelare</p>
            <QRCode value="youtube.com" />
          </>
        }>

      </Modal>
    )
  }

  function questionCard() {
    return (
      <div className="flex flex-col p-10 mt-10 mx-5 bg-neutral-200">
        <p className="text-2xl font-medium">Hur många städer finns det i Halland?</p>
        <div className="relative block bg-neutral-400 w-40 h-40 mx-auto rounded-full my-20">
          <span className="absolute text-8xl top-[2rem] left-[3.6rem]">?</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header text={"Du är spelledare"}></Header>
      {invitePlayer()}
      <main className="flex flex-col items-center">
        {questionCard()}
      </main>
    </>
  )
}