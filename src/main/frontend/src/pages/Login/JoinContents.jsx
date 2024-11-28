import styled from 'styled-components';
import Divider from '../../components/Divider';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button/Button';
import { Outlet } from 'react-router-dom';
import styles from "../../pages/Login/JoinContents.module.css";


const StyledForm1 = styled.form`
  display : flex;
`;

const StyledForm2 = styled.form`
  display : flex;
`;

const StyledDividerWrapper = styled.div`
  position: relative;
  margin-top: ${({ marTop }) => marTop || '0px'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;  /* 밑줄이 텍스트 바로 아래에 오도록 설정 */
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--line-color, #000); /* var(--line-color)를 사용할 수 있도록 설정 */
  }
`;

const StyledText = styled.p`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  font-weight: bold;
  padding-bottom: 8px;
  margin-left : 11px;
`;

const StyleDiv2 = styled.div`
  display : flex;
  border : 4px solid var(--line-color);
  border-radius : 10px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

function JoinContents() {
  return (
    <div className={styles.JoinContentsContainer} style={{gridArea: "section"}}>
      <div className={styles.title}>
      <Divider text="회원가입"  />
      </div>

      <StyledDividerWrapper marTop="50px" className={styles.subTitle}>
        <Divider text="회원가입 정보" fontSize="20px" marBot="-4px" />
      </StyledDividerWrapper>


      <form className={styles.form1}>
            <InputBox 
                itype="text"
                fontSize="20px" 
                text="이름" 
                backgroundColor="white" 
                height="95px" 
                width="92%"
                marginBottom="40px"/>

            <InputBox 
                itype="number"
                fontSize="20px" 
                text="휴대전화 번호" 
                backgroundColor="white" 
                height="95px" 
                width="92%"
                marginBottom="40px"/>
                


        <StyledForm1>
            <InputBox 
                itype="email"
                fontSize="20px" 
                text="이메일" 
                backgroundColor="white" 
                height="95px" 
                width="98%"
                marginBottom="40px"/>
            <Button 
                text="중복확인" 
                height="44px"
                width="100px" 
                fontSize="15px" 
                marginLeft="2px"
                marginTop="43px" 
                horizontalPadding="12px"/>
        </StyledForm1>


        <StyledForm2>
            <InputBox 
                itype="text"
                fontSize="20px" 
                text="닉네임" 
                backgroundColor="white" 
                height="95px" 
                width="98%"
                marginBottom="40px"/>
            <Button 
                text="중복확인" 
                height="44px"
                width="100px" 
                fontSize="15px"
                marginLeft="2px" 
                marginTop="43px" 
                horizontalPadding="12px"/>
        </StyledForm2>


        <InputBox 
                itype="password"
                fontSize="20px" 
                text="비밀번호" 
                backgroundColor="white" 
                height="95px" 
                width="92%"
                marginBottom="40px"/>
                
                

        <InputBox 
                itype="password"
                fontSize="20px" 
                text="비밀번호 확인" 
                backgroundColor="white" 
                height="95px" 
                width="92%"
                marginBottom="40px"/>
                

        <StyledText>개인정보 이용 약관 동의</StyledText>
        <div className={styles.div2}>
            <p>개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 
                    개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.


                    1. 수집하는 개인정보
                    이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 
                    이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 
                    네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.</p>

        </div>
        
            <CheckboxWrapper>
              <label htmlFor="checkbox">약관에 동의 하십니까</label>
              <input type="checkbox" id="checkbox" style={{ width: "18px", height: "18px", marginLeft: "10px" }} />
            </CheckboxWrapper>

            <Button itype="submit" text="회원가입" width="100%" height="60px"/>  
        </form>
        <Outlet/>
    </div>
  );
}

export default JoinContents;
