import { Outlet, useNavigate } from "react-router-dom";
import styles from '../../pages/Login/AccessionPageContents.module.css';
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider";

function AccesstionPageContents() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // 버튼 클릭 시 이동할 주소를 입력
    navigate('/createId'); // '/signup'으로 이동
  };

  return (
    <div className={styles.Box} style={{gridArea: "section"}}>

      <div style={{gridArea :"contents"}}>
      <Divider text="회원가입" marTop="40px" />

      <div className={styles.loginBox}>
        <Button className={styles.btn1}
          onClick={handleButtonClick}
          text="이메일로 회원가입"
          color="var(--title-black)"
          bg1color="var(--line-color)"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="30px"
          marginLeft="40px"
          marginRight="40px"
          verticalPadding="14px"
          marginBottom="25px"
        />
      </div>

      </div>
      <Outlet />
    </div>
  );
}

export default AccesstionPageContents;
