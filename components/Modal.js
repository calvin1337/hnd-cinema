import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from "react";
import Form from "./Form";


const Modal = (props) => {
  const { children, display, show, toggle } = props;

  const modalRef = useRef(null);

  // Toggle for modal to close if user clicks outside of modal
  useEffect(() => {
    const closeModal = (e) => {
      if (modalRef.current === e.target) {
        toggle("");
      }
    };
    document.addEventListener("click", closeModal);
    return () => document.removeEventListener("click", closeModal);
  });

  return (
    <div className="modal" style={{display: show ? '' : 'none' }} ref={modalRef}>
      <div className="modal-content" >
        <button onClick={() => toggle("")} className="closeBtn">
          <FontAwesomeIcon icon={faTimes} size="2xl" color="black" />
        </button>
        {display === "login" && <Form />}
        {display === "reg" && <h1>reg</h1>}
      </div>
    </div>
  );
};

export default Modal;
