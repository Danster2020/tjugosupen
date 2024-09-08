import { Link } from "react-router-dom"

export function Home() {

    return (
        <>
            <div className="flex flex-col items-center mt-10 gap-y-5">
                <Link className="btn_primary" to="/game-leader">Bli spelledare</Link>
                <Link className="btn_primary" to="/player">Bli spelare</Link>
            </div>
        </>
    )
}