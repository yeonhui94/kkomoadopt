import Button from "../../../components/Button/Button";
import styles from "./ConcertationForm.module.css";
import gridStyles from "../../../styles/grid.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Select from "../../../components/Select";
import {useStore as visitStore} from "../../../stores/VisitRequestStore2/useStore"

const mockOptionsTime = [
  { value: "TIME1", label: "09:30 ~ 10:30" },
  { value: "TIME2", label: "10:30 ~ 11:30" },
  { value: "TIME3", label: "11:30 ~ 12:30" },
  { value: "TIME4", label: "14:00 ~ 15:00" },
  { value: "TIME5", label: "15:00 ~ 16:00" },
  { value: "TIME6", label: "16:00 ~ 17:00" },
];

const mockOptionsPurpose = [
  { value: "ADOPT", label: "입양" },
  { value: "VISIT", label: "단순방문" },
  { value: "DONATE", label: "후원" },
  { value: "SERVICE", label: "봉사" },
  { value: "OTHER", label: "기타" },
];

const ConcertationForm = ({ initialValue }) => {

  const {state,actions} = visitStore()
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    console.log(formValues)
  };


  const registerVisit = async (e) => {
    e.preventDefault()
    let result = await actions.createVisitRequest(formValues)
    console.log(result)
    alert('방문 상담 신청이 등록되었습니다!')
  }


  return (
    <form>
      <div className={styles.gridFormContainer}>
        <label className={gridStyles.spanCol1}>닉네임</label>
        <input
          className={gridStyles.spanCol1}
          type="text"
          name="nickname"
          value={formValues.nickname}
          onChange={handleChange}
          disabled
        />
        <label className={gridStyles.spanCol2}>연락처</label>
        <input
          className={gridStyles.spanCol2}
          type="text"
          name="phoneNUm"
          value={formValues.phoneNUm}
          onChange={handleChange}
          disabled
        />
        <label className={gridStyles.spanCol1}>날짜 선택</label>
        <input
          className={gridStyles.spanCol1}
          type="date"
          name="visitDate"
          value={formValues.visitDate}
          onChange={handleChange}
        />

        <label className={gridStyles.spanCol1}>시간 선택</label>
        <Select
          name="visitTime"
          options={mockOptionsTime}
          className={gridStyles.spanCol1}
          value={formValues.visitTime}
          onChange={handleChange}
        />

        <label className={gridStyles.spanCol1}>방문 목적</label>
        <Select
          name="visitPurpose"
          options={mockOptionsPurpose}
          className={gridStyles.spanCol1}
          value={formValues.visitPurpose}
          onChange={handleChange}
        />
        <label className={`${gridStyles.spanCol1} ${gridStyles.spanRow5}`}>
          문의 내용
        </label>
        <textarea
          className={`${gridStyles.spanCol5} ${gridStyles.spanRow5}`}
          name="visitContent"
          value={formValues.visitContent}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button text="등록" type="button" onClick={registerVisit} />
      </div>
    </form>
  );
};

ConcertationForm.propTypes = {
  initialValue: PropTypes.shape({
    nickname: PropTypes.string,
    contact: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    purpose: PropTypes.string,
  }),
};

ConcertationForm.defaultProps = {
  initialValue: {
    nickname: "",
    contact: "",
    content: "",
    date: "",
    time: "",
    purpose: "",
  },
};

export default ConcertationForm;
