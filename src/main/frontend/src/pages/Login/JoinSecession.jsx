import Button from "../../components/Button/Button";
import styles from "../../pages/Login/JoinSecession.module.css";
import { Outlet , Link} from "react-router-dom";
import Logo from "../../components/logo/Logo";

// 텍스트 데이터 관리
const texts = {
  h1: "환영합니다",
  text1: "회원 가입을 통해 유기견들에게 희망을 주는 멋진 선택을 하셨습니다.",
  text2: "당신의 작은 손길이 큰 변화를 만들어 낼 것입니다.",
  text3: "행복한 동행을 기원합니다!",
  btnName: "메인 페이지로 이동",
};

function JoinSecession() {

  return (
    <div className={styles.welcomeContainer} style={{ gridArea: "section" }} >
      <div className={styles.a1} style={{display:'flex', justifyContent:'center'}}>
        <Link to="./intro" style={{ height: "100px" }} >
          <Logo className={styles.logo1} width="200px" />
        </Link>
      </div>
      
      <h1 className={styles.hText1}>{texts.h1}</h1>
      <p className={styles.p1}>{texts.text1}</p>
      <p className={styles.p2}>{texts.text2}</p>
      <p className={styles.p3}>{texts.text3}</p>

    <Link to="/" className={styles.btn1}>
        <Button width="100%" text={texts.btnName} className/>
    </Link>
      <Outlet />
    </div>
  );
}

export default JoinSecession;