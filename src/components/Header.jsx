import { Link } from "react-router-dom"

export function Header({ text }) {

    return (
        <>
            <div className="relative flex flex-col items-center px-10 py-5 bg-gray-400">
                <Link className="btn_secondary absolute left-3 top-3" to="/">Hem</Link>
                <p>{text}</p>
            </div>
        </>
    )
}