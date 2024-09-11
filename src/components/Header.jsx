import { Link } from "react-router-dom"

export function Header({ text }) {

    return (
        <>
            <header className="relative flex flex-col items-center px-10 py-5 bg-cyan-900">
                <Link className="btn_secondary absolute left-3 top-3" to="/">Hem</Link>
                <h1 className="text-xl text-white">{text}</h1>
            </header>
        </>
    )
}