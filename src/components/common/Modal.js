import React, { useEffect, useRef } from "react";
import "./Modal.css";
/**
 * A modal which displays content when active
 */
const Modal = ({ title, content, showModal, setShowModal, noClose }) => {
  /* The reference of the componenet which is on the modal body*/
  const ref = useRef();
  useEffect(() => {
    /**  Closes the modal if the user clicks off the @ref */
    const onBodyClick = (event) => {
      if (showModal) {
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }
        if (!noClose) {
          setShowModal(false);
        }
      }
    };
    document.body.addEventListener("click", onBodyClick);
    //Cleanup
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [showModal, setShowModal, noClose]);

  if (showModal === false) {
    return null;
  }
  const getCloseOption = () => {
    if (noClose) {
      return null;
    }

    return (
      <span
        className="close"
        onClick={() => {
          setShowModal(false);
        }}
      >
        &times;
      </span>
    );
  };
  return (
    <React.Fragment>
      <div id="myModal" className="modal z-100">
        <div ref={ref} className="modal-content sm:w-9/12 w-11/12">
          <div className="modal-header flex justify-between	my-4 px-4">
            <div>
              <h2 className="text-2xl text-primary capitalize">{title}</h2>
            </div>
            <div>{getCloseOption()}</div>
          </div>
          <div className="content px-4 mb-4">{content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
