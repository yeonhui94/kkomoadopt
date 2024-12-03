import ConcertationForm from "./components/ConcertationForm";
import styles from "./ConcertationPage.module.css";

const mockData = {
  data: {
    nickname: "조랭삼",
    contact: "010-1234-5678",
    date: "",
    time: "",
    content: "",
  },
};

const ConcertationPage = () => {
  return (
    <div className={styles.concertationPageContainer}>
      <div className={styles.concertationPage}>
        <h3>정보를 입력 해주세요</h3>
        <ConcertationForm initialValue={mockData.data} />
      </div>
    </div>
  );
};

export default ConcertationPage;
