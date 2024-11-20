import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Button from "../Button";

const ModalEx = ()=>{

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [confirmModal, setConfirmModal] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    const handleConfirm = () => {
    //   alert("삭제되었습니다.")
        setConfirmModal(true);
      closeModal();
    };

    const closeConfirmModal = () => {
        setConfirmModal(false);
    }

    return(
        <>
        <Button text={"삭제"} onClick={openModal}></Button>
        { confirmModal &&(
             <Modal
                isOpen={confirmModal}
                closeModal={closeConfirmModal}
                modalText={"삭제되었습니다."}
                confirmText={null}
                cancelText={null}
                >
                <Button text={"확인"} onClick={closeConfirmModal}></Button>
                </Modal>
        )}    
        <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            onConfirm={handleConfirm}
            modalText={"정말 삭제하시겠습니까?"}
            inPut={
              <input
                type='password'
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                placeholder='비밀번호를 입력하세요'
              />
            }
            confirmText="확인"
            cancelText="취소"
        ></Modal>
      </>
    )
}
export default ModalEx;