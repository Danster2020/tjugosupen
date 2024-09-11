
import { Header } from "./components/Header"
import NumberPicker from "./components/NumberPicker"
import Modal from "./components/Modal";
import { useState } from "react";
import Rules from "./components/Rules";

export function Player() {
  const [modal, setModal] = useState(true);
  return (
    <>
      <Header text="Du är spelare"></Header>
      <Rules openModal={modal}></Rules>
      <main className="flex flex-col items-center">
        <NumberPicker></NumberPicker>
      </main>
    </>
  )
}