import React from "react";
import QRCode from "react-qr-code";
import Modal from "./Modal";

export function InvitePlayer({ modal, setModal }) {
    const player_url = window.location.origin;

    return (
        <Modal
            openModal={modal}
            closeModal={() => setModal(false)}
        >
            <div className="flex flex-col items-center max-w-sm">
                <p className="text-2xl font-bold text-yellow-800 text-center mb-5">Bjud in spelare</p>
                <QRCode value={player_url} />
                <p className="text-center mt-5 text-neutral-700">{player_url}</p>
            </div>
        </Modal>
    );
}
