import { useState } from "react";
import "./index.css";

export default function ModalPopup() {
  const [modalState, changeModalState] = useState(false);

  function openModal() {
    changeModalState(true);
  }

  function closeModal() {
    changeModalState(false);
  }

  return (
    <div className="ModalPopup">
      <button onClick={() => openModal()}>Open Modal Popup</button>
      <div className={modalState ? "modal-container show" : "modal-container hide"}>
        <div className="modal">
        <div className="modalHead">
          <h1>Modal Header</h1>
          <span onClick={()=> closeModal()}>x</span>
        </div>
        <div className="modalBody">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            aspernatur explicabo doloremque magnam dolores delectus nobis ex
            quaerat praesentium laboriosam?
          </p>
        </div>
        <div className="modalFooter">
          <h3>Modal Footer</h3>
        </div>
        </div>
      </div>
    </div>
  );
}
