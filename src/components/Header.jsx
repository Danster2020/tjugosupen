import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { InvitePlayer } from "./InvitePlayer";
import { useState } from "react";

export function Header({ text }) {

    const [modal, setModal] = useState(false);

    const handleInviteClick = () => {
        setModal(!modal)
    }

    return (
        <>
            <InvitePlayer modal={modal} setModal={setModal} />
            <header className="relative flex flex-col items-center px-10 py-5 bg-yellow-800">
                <Link className="btn_secondary absolute left-3 top-3" to="/">Hem</Link>
                <h1 className="text-xl text-neutral-100">{text}</h1>
                <button onClick={() => handleInviteClick()}><FontAwesomeIcon icon={faUserPlus} className="block absolute right-3 top-2 w-6 h-6 p-3 rounded-full bg-white" /></button>
            </header>
        </>
    )
}