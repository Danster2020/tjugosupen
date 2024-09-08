import { Link } from "react-router-dom"

export function Home() {

    return (
        <>
        <div className="flex flex-col items-center mt-10 gap-y-5">
        <Link className="inline-block bg-blue-500" to="/game-leader">Bli spelledare</Link>
        <Link className="bg-blue-500" to="/player">Bli spelare</Link>
        </div>
        </>
    )
}