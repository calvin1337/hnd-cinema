import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



const Modal = ({ children,  }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button class="closeBtn">
          <FontAwesomeIcon icon={faTimes} size="2xl" color="black" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
