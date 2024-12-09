import QnaList from "./components/QnaList";
import Pagenumber from "../../components/pagenumber/Pagenumber";

import {
  qnaPageContainer,
  filterSelect,
  sectionContainer,
  bottomContainer,
  hidden,
} from "./QnaListPage.module.css";
import Button from "../../components/Button/Button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Dropdown from "../../components/DropDown";

const genQnaData = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `제목${index + 1}`,
    author: `작성자${index + 1}`,
    createdAt: new Date(),
    views: Math.floor(Math.random() * 100),
  }));

const mockData = genQnaData(10);
const mockOptions = ["최신순", "오래된순", "조회수 높은순", "조회수 낮은순"];

const QnaListPage = () => {
  const pageParam = useSearchParams()[0].get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
  };

  return (
    <div className={qnaPageContainer}>
      <div className={sectionContainer}>
        <div className={filterSelect}>
          <Dropdown options={mockOptions} />
        </div>
        <QnaList qnaList={mockData} />
        <div className={bottomContainer}>
          <div className={hidden}>
            <Button />
          </div>
          <Pagenumber
            totalPages={10}
            currentPage={currentPage}
            handlePageClick={handlePageChange}
          />
          <Link to="communtywt">
            <Button text="글쓰기" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QnaListPage;
