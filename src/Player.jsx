
import { Header } from "./components/Header"

export function Player() {

  return (
    <>
      <Header text="Du är spelare"></Header>
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center p-10 mt-40 bg-neutral-700 w-56 h-56 rounded-full">
          <input id="number_input" className="inline-block text-8xl w-40 appearance-none rounded-full" type="number" min="0" max="20" />
        </div>
      </main>
    </>
  )
}