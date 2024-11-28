import { CscMenu, CscMenuLink } from "../components/CscMenu";
import { Outlet, useMatch } from "react-router-dom";
import Divider from "../components/Divider";
import { useEffect, useState } from "react";

const CscLayout = () => {
  const isResultQnaPage = useMatch("/csc/qna/result/:id");
  const isWriteQnaPage = useMatch("/csc/qna/write");

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 데이터를 fetch로 로드
    fetch("/inquiriesData.json") // public 폴더의 JSON 파일 경로
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setInquiries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading inquiries:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  // if (isResultQnaPage || isWriteQnaPage) {
  //   return (
  //     <>
  //       <CscMenu>
  //         <Divider
  //           text={"Q&A"}
  //           paddingbt={"16px"}
  //           width={"100%"}
  //           textAlign={"left"}
  //         />
  //       </CscMenu>
  //       <Outlet />
  //     </>
  //   );
  // }

  return (
    <div style={{gridArea : "subheader"}}>
      <CscMenu>
        <CscMenuLink to="/csc/faq" text="FAQ" />
        <CscMenuLink to="/csc/qna" text="Q&A" />
        <CscMenuLink to="/csc/consultation" text="방문 상담 신청" />
      </CscMenu>
      <Outlet />
    </div>
  );
};

export default CscLayout;
