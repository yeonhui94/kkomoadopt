import styled from "styled-components";
import Button from "../../Button/Button";

const StyledDiv1 = styled.div`
    width : 373px;
    height : 788px;
    border : none;
    background-color : var(--sub-color);
`

const StyledDiv2 = styled.div`
    width : 234px;
    height : 458px;
    padding : 113px 69px;
`

const StyledDiv3 = styled.div`
    width : 234px;
    height : 234px;
    background-color : var(--title-white);
    border : 1px solid var(--title-white);
    border-radius : 120px;
    z-index: 99999999999;
`

const StyledDiv4 = styled.div`
    display : flex;
    flex-direction: column;   
    align-items: center;      
    justify-content: center; 
    margin-top : 28px;
    width : 234px;
    height : 74px;
`

const StyledName = styled.p`
    font-size : 32px;
`

const Styledtext = styled.p`
    margin-top : 28px;
    font-size : 16px;
`

const StyledDiv5 = styled.div`
    display : flex;
    flex-direction: column;   
    align-items: center;      
    justify-content: center; 
    margin-top : 28px;
    width : 234px;
    height : 92px;
    gap : 12px;
`

const StyledButton = styled(Button)`
    background-color: white; /* 버튼 배경을 흰색으로 설정 */
`;


function UserProfile({name, text}){
    
    
    return(
        <StyledDiv1>
            <StyledDiv2>
                <StyledDiv3>

                </StyledDiv3>

                <StyledDiv4>
                    <StyledName>{name} 님</StyledName>
                    <Styledtext>{text}</Styledtext>
                </StyledDiv4>

                <StyledDiv5>
                    <StyledButton text="프로필 변경" />
                    <StyledButton text="로그아웃" horizontalPadding="12px"/>
                </StyledDiv5>

            </StyledDiv2>
        </StyledDiv1>
    )

}

export default UserProfile;