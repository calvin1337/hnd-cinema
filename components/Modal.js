import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



const Modal = (props) => {
  const { children, display, show, toggle } = props;

  return (
    <div className="modal" style={{display: show ? '' : 'none' }}>
      <div className="modal-content">
        <button onClick={() => toggle("")} class="closeBtn">
          <FontAwesomeIcon icon={faTimes} size="2xl" color="black" />
        </button>
        {display === "login" && <h1>login</h1>}
        {display === "reg" && <h1>reg</h1>}
      </div>
    </div>
  );
};

export default Modal;
