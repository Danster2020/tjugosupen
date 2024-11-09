import { Link } from "react-router-dom"
import { Footer } from "./components/Footer"
import logo from "./assets/tjugosupen_logo.png"

export function Home() {

    return (
        <>
            <div className="flex flex-col items-center mt-10 gap-y-5">
                <h1 className="text-white text-4xl text-center mb-8">Välkommen till Tjugosupen!</h1>
                <img src={logo} alt="logga" className="w-52 mb-10" />
                <Link className="btn_primary" to="/game-leader">Bli spelledare</Link>
                <Link className="btn_primary mt-10" to="/player">Bli spelare</Link>
            </div>
            {/* <Footer></Footer> */}
        </>
    )
}