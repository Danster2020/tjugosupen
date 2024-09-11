import { Link } from "react-router-dom"
import Rules from "./Rules"
import { useState } from "react";

export function Footer() {
    const [modal, setModal] = useState(false);

    function handleClick() {
        setModal(true)
    }

    return (
        <>
            <Rules openModal={modal}></Rules>
            <footer className="">
                <button className="btn_secondary absolute right-3 bottom-3" onClick={() => handleClick()}>Regler</button>
            </footer>
        </>
    )
}