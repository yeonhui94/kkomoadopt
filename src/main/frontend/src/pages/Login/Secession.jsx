import Button from "../../components/Button/Button";
import styles from "../../pages/Login/JoinSecession.module.css";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/logo/Logo";

// 텍스트 데이터 관리
const texts = {
  h1: "탈퇴 되었습니다.",
  text1: "이용해 주셔서 감사합니다.",
  btnName: "메인 페이지로 이동",
};

function Secession() {

  return (
    <div className={styles.welcomeContainer} style={{ gridArea: "section" }} >

      <div className={styles.a1}>
        <Link to="/" style={{ height: "100px" }} >
          <Logo className={styles.logo1} width="200px" />
        </Link>
      </div>

      <h1 className={styles.hText1}>{texts.h1}</h1>
      <p className={styles.p1}>{texts.text1}</p>

        <div className={styles.p3}>
        <Link to="/">
          <Button width="100%" text={texts.btnName} />
        </Link>
        </div>
      <Outlet />
    </div>
  );
}

export default Secession;