import Divider from "../../components/Divider";
import Uploadfile from "../community/adopt_review/Uploadfile";
import InputField from "../../components/InputField";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button/Button"

const ChangeProfile=()=>{
    return(
        <div>
            <Divider text={"프로필 변경"}  fontweight={"midium"} ></Divider>
            <Divider text={"프로필 사진"} height={"2px"} fontSize={"1rem"} fontweight={"midium"} width={"100%"} backgroundColor={"var(--line-color)"}></Divider>
            <Uploadfile maxFiles={1}></Uploadfile>
            <Divider text={"프로필 소개글"}  height={"2px"}  fontSize={"1rem"} fontweight={"midium"} width={"100%"} backgroundColor={"var(--line-color)"}></Divider>
            <InputField></InputField>
            <Button></Button>
        </div>
    )
};
export default ChangeProfile;