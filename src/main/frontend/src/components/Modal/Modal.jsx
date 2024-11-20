import styled from "styled-components";
import Button from "../Button";
import {AnimatePresence, motion} from "framer-motion";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);  /* 배경 투명도 설정 */
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 10px;
  border : 1px solid var(--main-color);
  width: 423px;
  height : 238px;
  max-width: 100%;
  display : flex;
  flex-direction : column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;


const ButtonContainer=styled.div`
    display: flex;
    justify-content: center;
    gap : 10px;
`


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
            <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
              <AnimatePresence>
                {isOpen && (
                  <ModalContent
                    initial={{opacity:0, y: "-50%" }}
                    animate={{opacity:1, y: 0 }}
                    exit={{opacity : 0}}
                    transition={{ duration: 0.5 }}
                  >
                    <p>{modalText}</p>
                    {inPut}
                    {children}
                    <ButtonContainer>
                    {confirmText && (
                      <Button text={cancelText} onClick={closeModal}></Button>
                    )}
                    {cancelText &&(
                      <Button text={confirmText} onClick={onConfirm}></Button>
                    )}
                    </ButtonContainer>
                  </ModalContent>
                )}
              </AnimatePresence>
            </ModalOverlay>
          );
        };
export default Modal;