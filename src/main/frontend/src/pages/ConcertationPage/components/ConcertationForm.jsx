import Button from "../../../components/Button/Button";
import styles from "./ConcertationForm.module.css";
import gridStyles from "../../../styles/grid.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Select from "../../../components/Select";

const mockOptionsTime = [
  { value: "09:30 ~ 10:30", label: "09:30 ~ 10:30" },
  { value: "10:30 ~ 11:30", label: "10:30 ~ 11:30" },
  { value: "11:30 ~ 12:30", label: "11:30 ~ 12:30" },
  { value: "14:00 ~ 15:00", label: "14:00 ~ 15:00" },
  { value: "15:00 ~ 16:00", label: "15:00 ~ 16:00" },
  { value: "16:00 ~ 17:00", label: "16:00 ~ 17:00" },
];

const mockOptionsPurpose = [
  { value: "adoption", label: "입양" },
  { value: "visit", label: "단순방문" },
  { value: "donation", label: "후원" },
  { value: "volunteer", label: "봉사" },
  { value: "etc", label: "기타" },
];

const ConcertationForm = ({ initialValue }) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

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
          name="contact"
          value={formValues.contact}
          onChange={handleChange}
          disabled
        />
        <label className={gridStyles.spanCol1}>날짜 선택</label>
        <input
          className={gridStyles.spanCol1}
          type="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
        />

        <label className={gridStyles.spanCol1}>시간 선택</label>
        <Select
          name="time"
          options={mockOptionsTime}
          className={gridStyles.spanCol1}
          value={formValues.time}
          onChange={handleChange}
        />

        <label className={gridStyles.spanCol1}>방문 목적</label>
        <Select
          name="purpose"
          options={mockOptionsPurpose}
          className={gridStyles.spanCol1}
          value={formValues.purpose}
          onChange={handleChange}
        />
        <label className={`${gridStyles.spanCol1} ${gridStyles.spanRow5}`}>
          문의 내용
        </label>
        <textarea
          className={`${gridStyles.spanCol5} ${gridStyles.spanRow5}`}
          name="content"
          value={formValues.content}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button text="등록" type="submit" />
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
