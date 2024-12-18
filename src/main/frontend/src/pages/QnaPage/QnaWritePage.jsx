import { useEffect, useState } from "react";
import QnaForm from "./components/QnaForm";
import styles from "./QnaPage.module.css";

const mockData = {
  data: {
    nickname: "홍길동",
    contact: "010-1234-5678",
    title: "",
    content: "",
    password: "",
  },
};

const QnaWritePage = () => {

    const [init, setInit] = useState(false)

  
      useEffect(()=> {
        let userInfo = JSON.parse(localStorage.getItem('user'));
        console.log(userInfo)
        mockData.data.nickname = userInfo.nickname
        mockData.data.phoneNUm = userInfo.phoneNumber
    
        setInit(true)
    
      },[init])


  return (
    <div className={styles.qnaPageContainer}>
      <div className={styles.qnaPage}>
        <QnaForm initialValue={mockData.data} />
      </div>
    </div>
  );
};

export default QnaWritePage;
