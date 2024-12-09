import { useEffect, useState } from "react";
import SubMenuBar from "./../components/submenubar/SubMenuBar";

const CscLayout = () => {
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

  const menuItems = [
    { name: "FAQ", path: "/customerservice" },
    { name: "Q&A", path: "/customer_qna" },
    { name: "방문상담신청", path: "/customer_apply_consult" },
  ];

  return (
    <div style={{ gridArea: "subheader" }}>
      <SubMenuBar menuItems={menuItems} />
    </div>
  );
};

export default CscLayout;
