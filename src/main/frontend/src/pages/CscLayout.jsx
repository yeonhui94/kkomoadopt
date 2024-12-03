import { useEffect, useState } from "react";
import SubMenuBar from "./../components/submenubar/SubMenuBar";
import { useLocation } from "react-router-dom";

const CscLayout = () => {
  const location = useLocation();

  // 1. 상태 변수 초기화
  const [inquiries, setInquiries] = useState([]);  // 데이터
  const [loading, setLoading] = useState(true);  // 로딩 상태

  // 2. 첫 번째 useEffect: 데이터 fetch
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
        setInquiries(data); // 데이터 상태 업데이트
        setLoading(false); // 로딩 상태 종료
      })
      .catch((error) => {
        console.error("Error loading inquiries:", error);
        setLoading(false); // 에러가 발생해도 로딩 종료
      });
  }, []); // 빈 배열로 설정되어 컴포넌트 마운트 시 한 번만 실행

  // 3. 메뉴 아이템 설정
  const menuItems = [
    { name: "FAQ", path: "/customerservice" },
    { name: "Q&A", path: "/customer_qna" },
    { name: "방문상담신청", path: "/customer_apply_consult" },
  ];

  // 4. 선택된 메뉴 버튼 관리
  const [selectedButton, setSelectedButton] = useState(menuItems[0].path);

  // 5. 두 번째 useEffect: 경로에 맞는 버튼 선택
  useEffect(() => {
    // 페이지 경로에 맞는 버튼을 선택하도록 업데이트
    const activePath = menuItems.find((item) => item.path === location.pathname)?.path;
    if (activePath) {
      setSelectedButton(activePath);  // 경로에 맞는 메뉴 활성화
    } else {
      setSelectedButton(menuItems[0].path);  // 없으면 기본값으로 첫 번째 메뉴 선택
    }
  }, [location.pathname]); // location.pathname이 변경될 때마다 실행

  // 6. 로딩 중일 때 처리
  if (loading) {
    return <p>로딩 중...</p>;
  }

  // 7. 렌더링
  return (
    <div style={{ gridArea: "subheader" }}>
      <SubMenuBar
        menuItems={menuItems}         // 메뉴 항목 전달
        selectedButton={selectedButton} // 선택된 버튼 전달
        onTabClick={setSelectedButton}  // 클릭 시 상태 업데이트
      />
    </div>
  );
};

export default CscLayout;
