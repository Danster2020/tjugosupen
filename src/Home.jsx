import { Link } from "react-router-dom"
import { Footer } from "./components/Footer"

export function Home() {

    return (
        <>
            <div className="flex flex-col items-center mt-10 gap-y-5">
                <h1 className="text-white text-4xl text-center mb-12">Välkommen till Tjugosupen!</h1>
                <Link className="btn_primary" to="/game-leader">Bli spelledare</Link>
                <Link className="btn_primary mt-10" to="/player">Bli spelare</Link>
            </div>
            {/* <Footer></Footer> */}
        </>
    )
}