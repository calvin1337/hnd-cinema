// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Modal component for displaying a pop-up modal with sign-in and sign-up forms.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

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
    
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    document.addEventListener('click', closeModal);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('click', closeModal);
    };
  }, [show, toggle]);

  return (
    <div className="modal" style={{ display: show ? 'block' : 'none', position: 'fixed' }} ref={modalRef}>
      <div className="modal-content w-80 h-auto md:w-96 " >
        <button onClick={() => toggle("")} className="closeBtn">
          <FontAwesomeIcon icon={faTimes} size="2xl" color="black" />
        </button>
        {display === "login" && <SignInForm toggle={toggle} />}
        {display === "reg" && <SignUpForm toggle={toggle} />}
      </div>
    </div>
  );
};

export default Modal;
