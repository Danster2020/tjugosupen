import { Link } from "react-router-dom"

export function Header({ text }) {

    return (
        <>
            <div className="flex flex-col items-center px-10 py-5 bg-gray-400">
                <p>{text}</p>
            </div>
        </>
    )
}