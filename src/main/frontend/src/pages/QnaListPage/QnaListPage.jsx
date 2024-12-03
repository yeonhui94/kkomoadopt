import QnaList from "./components/QnaList";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import Select from "../../components/Select";

import { useState } from "react";

import {
  qnaPageContainer,
  filterSelect,
  sectionContainer,
  bottomContainer,
  hidden,
} from "./QnaListPage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const genQnaData = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `제목${index + 1}`,
    author: `작성자${index + 1}`,
    createdAt: new Date(),
    views: Math.floor(Math.random() * 100),
  }));

const mockData = genQnaData(10);
const mockOptions = [
  { value: "all", label: "전체보기" },
  { value: "notice", label: "공지사항" },
  { value: "event", label: "이벤트" },
  { value: "qna", label: "Q&A" },
];

const QnaListPage = () => {
  const [selectedOption, setSelectedOption] = useState(mockOptions[0]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={qnaPageContainer}>
      <div className={sectionContainer}>
        <Select
          options={mockOptions}
          className={filterSelect}
          value={selectedOption}
          onChange={handleSelectChange}
        />
        <QnaList qnaList={mockData} />
        <div className={bottomContainer}>
          <div className={hidden}>
            <Button />
          </div>
          <Pagenumber />
          <Link to="communtywt">
            <Button text="글쓰기" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QnaListPage;
