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
import { useStore } from "../../stores/QNAStore2/useStore";
import { useEffect } from "react";


const mockOptions = ["최신순", "오래된순", "조회수 높은순", "조회수 낮은순"];

const QnaListPage = () => {



  const {state : qndState , actions : qnaActions } = useStore();
  

  useEffect(()=>{
    const fetchPosts = async()=>{
      const response = await qnaActions.readQnaPosts();
    };
    fetchPosts();
  },[])

 


  return (
    <div className={qnaPageContainer}>
      <div className={sectionContainer}>
        <div className={filterSelect}>
          <Dropdown options={mockOptions} />
        </div>
        <QnaList qnaList={qndState.qnaPosts}/>
        <div className={bottomContainer}>
          <div className={hidden}>
            <Button />
          </div>
          <Pagenumber

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
