import styled from "styled-components";
import Button from "../Button";
import {AnimatePresence, motion} from "framer-motion";
import "./Modal.css";


const Modal = ({
    isOpen, 
    closeModal, 
    onConfirm, 
    confirmText = "확인", 
    cancelText = "취소", 
    children,
    modalText,
    inPut})=>{

        const handleOverlayClick = (e) =>{
            if(e.target === e.currentTarget){
                closeModal();
            }
        }
        return (
          <div
            className={`modal-overlay ${isOpen ? "is-open" : ""}`}
            onClick={handleOverlayClick}
            style={{
              zIndex: isOpen ? "2000" : "-1000"
            }}
          >
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    className="modal-content"
                    initial={{opacity:0, y: "-50%" }}
                    animate={{opacity:1, y: 0 }}
                    exit={{opacity : 0}}
                    transition={{ duration: 0.5 }}
                  >
                    <p>{modalText}</p>
                    {inPut}
                    {children}
                    <div className="button-container">
                    {confirmText && (
                      <Button text={cancelText} onClick={closeModal}></Button>
                    )}
                    {cancelText &&(
                      <Button text={confirmText} onClick={onConfirm}></Button>
                    )}
                    </div>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        };
export default Modal;