import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

function Rules({ openModal }) {
    const [modal, setModal] = useState(openModal);

    return (
        <>
            <Modal
                openModal={modal}
                closeModal={() => setModal(false)}
                children={
                    <>
                        <div className="max-w-md">
                            <h1 className="text-2xl font-bold text-yellow-800 text-center mb-5">Regler</h1>
                            <p>Tjugosupen går ut på att att en spelledare ställer frågor åt spelarna där svaret på frågan kommer vara ett tal mellan <strong>0-20</strong>.
                                Som spelare gissar man på frågan genom att skriva in ett tal.
                            </p>
                            <h2 className="text-xl font-bold text-yellow-800 mt-5">Om spelaren gissar fel</h2>
                            <p className="mt-2">Om spelaren gissar fel måste hen dricka ett antal klunkar som motsvarar skillnaden mellan gissningen och det rätta svaret.
                                Till exempel, om spelaren gissar <strong>7</strong> och det rätta svaret är <strong>18</strong>, blir mellanskillnaden <strong>11</strong> klunkar.
                            </p>
                            <h2 className="text-xl font-bold text-yellow-800 mt-5">Om spelaren gissar rätt</h2>
                            <p className="mt-2">
                                Om spelaren gissar rätt får hen dela ut totalt <strong>10</strong> klunkar, men dessa måste fördelas mellan två personer.
                            </p>
                        </div>
                    </>
                }
            />
        </>
    );
}

export default Rules;