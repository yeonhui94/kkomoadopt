import Button from "../../../components/Button/Button";
import styles from "./QnaForm.module.css";
import gridStyles from "../../../styles/grid.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Uploadfile from "./../../community/adopt_review/Uploadfile";

const QnaForm = ({ initialValue }) => {
  const [formValues, setFormValues] = useState(initialValue);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    console.log(formValues)
    console.log("formValues.nickname" , formValues.nickname)
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
          value={formValues.phoneNUm}
          onChange={handleChange}
          disabled
        />
        <label className={gridStyles.spanCol1}>제목</label>
        <input
          className={gridStyles.spanCol5}
          type="text"
          name="title"
          value={formValues.title}
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
        <div className={styles.Uploadfile}>
        <Uploadfile fileListComponent={null}>
          <Uploadfile.FileList className={gridStyles.spanCol5} />
        </Uploadfile>
        </div>
        <label className={gridStyles.spanCol1}>비밀번호</label>
        <input
          className={gridStyles.spanCol5}
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button text="등록" type="submit" />
      </div>
    </form>
  );
};

QnaForm.propTypes = {
  initialValue: PropTypes.shape({
    nickname: PropTypes.string,
    contact: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

QnaForm.defaultProps = {
  initialValue: {
    nickname: "",
    contact: "",
    title: "",
    content: "",
  },
};

export default QnaForm;
