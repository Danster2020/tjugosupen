import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog className="p-10 backdrop:backdrop-blur-md rounded-3xl"
      ref={ref}
      onCancel={closeModal}
    >
      {children}
      <div className="flex flex-col items-center mt-10">
        <button className="btn_primary" onClick={closeModal}>
          Stäng
        </button>
      </div>
    </dialog>
  );
}

export default Modal;