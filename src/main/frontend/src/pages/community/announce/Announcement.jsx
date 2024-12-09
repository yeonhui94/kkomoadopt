import { useState, useEffect } from "react";
import styles from "../../Review.module.css";
import SearchBar from "../../../components/SearchBar";
import Divider from "../../../components/Divider";
import Dropdown from "../../../components/DropDown";
import comstyle from '../CommunityWt.module.css';
import Button from "../../../components/Button/Button";
import Pagenumber from "../../../components/pagenumber/Pagenumber";
import { Link, useLocation } from "react-router-dom";
import img3 from "../../../assets/CardImage/3.jpg";
import img9 from "../../../assets/CardImage/9.jpg";
import img11 from "../../../assets/CardImage/11.jpg";
import imgc2 from "../../../assets/CardImage/c2.jpg";
// import { useStore as CommunityStore } from "../../../stores/CommentStore2/useStore";
// import { readCommunityPosts } from "../../../stores/CommunityPostStore2/action";


const Announcement = ({ gridArea }) => {
  // const { state: communityState, actions: communityActions } = CommunityStore();

  const location = useLocation(); // 현재 경로를 가져옴
  const isAdminPage = location.pathname.includes('admin'); // 경로가 admin으로 포함되어 있는지 확인

  const [sortOption, setSortOption] = useState("전체보기");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const postsPerPage = 10;

  // useEffect(() => {
  //   const fetchData = async () => {await readCommunityPosts()};
  //   fetchData();
  // }, [])

  const [allPosts, setAllposts] = useState([
    {
      id: 1, title: "새 게시물 제목", admin: "관리자", date: new Date("2024-11-25"), img: [img11, imgc2, img3, img9],
      content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다. 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 5, files: 2
    },
    {
      id: 2, title: "새 게시물 제목 2", admin: "관리자", date: new Date("2024-10-25"), img: "",
      content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 4, files: 2
    },
    {
      id: 3, title: "새 게시물 제목 3", admin: "관리자", date: new Date("2024-09-25"), img: [img11, imgc2, img3, img9],
      content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 10, files: 2
    },
    {
      id: 4, title: "새 게시물 제목 4", admin: "관리자", date: new Date("2024-08-25"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 50, files: 2
    },
    {
      id: 5, title: "새 게시물 제목 5", admin: "관리자", date: new Date("2024-07-25"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 0, files: 2
    },
    {
      id: 6, title: "새 게시물 제목 6", admin: "관리자", date: new Date("2024-06-25"), img: [img11, imgc2, img3, img9], content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 7, files: 2
    },
    {
      id: 7, title: "새 게시물 제목 7", admin: "관리자", date: new Date("2024-05-25"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 23, files: 2
    },
    {
      id: 8, title: "새 게시물 제목 8", admin: "관리자", date: new Date("2024-04-25"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 15, files: 2
    },
    {
      id: 9, title: "새 게시물 제목 9", admin: "관리자", date: new Date("2024-03-25"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 4, files: 2
    },
    {
      id: 10, title: "새 게시물 제목 10", admin: "관리자", date: new Date("2024-02-25"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 1, files: 2
    },
    {
      id: 11, title: "새 게시물 제목 11", admin: "관리자", date: new Date("2024-01-15"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 14, files: 2
    },
    {
      id: 12, title: "새 게시물 제목 12", admin: "관리자", date: new Date("2023-12-10"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 30, files: 2
    },
    {
      id: 13, title: "새 게시물 제목 13", admin: "관리자", date: new Date("2023-11-05"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 5, files: 2
    },
    {
      id: 14, title: "새 게시물 제목 14", admin: "관리자", date: new Date("2023-10-10"), img: [img11, imgc2, img3, img9], content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 25, files: 2
    },
    {
      id: 15, title: "새 게시물 제목 15", admin: "관리자", date: new Date("2023-09-20"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 12, files: 2
    },
    {
      id: 16, title: "새 게시물 제목 16", admin: "관리자", date: new Date("2023-08-18"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 9, files: 2
    },
    {
      id: 17, title: "새 게시물 제목 17", admin: "관리자", date: new Date("2023-07-11"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 3, files: 2
    },
    {
      id: 18, title: "새 게시물 제목 18", admin: "관리자", date: new Date("2023-06-22"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 18, files: 2
    },
    {
      id: 19, title: "새 게시물 제목 19", admin: "관리자", date: new Date("2023-05-15"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 20, files: 2
    },
    { id: 20, title: "새 게시물 제목 20", admin: "관리자", date: new Date("2023-04-05"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 13, files: 2 },
    { id: 21, title: "새 게시물 제목 21", admin: "관리자", date: new Date("2023-03-02"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 30, files: 2 },
    { id: 22, title: "새 게시물 제목 22", admin: "관리자", date: new Date("2023-02-18"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 8, files: 2 },
    {
      id: 23, title: "새 게시물 제목 23", admin: "관리자", date: new Date("2023-01-12"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 6, files: 2
    },
    {
      id: 24, title: "새 게시물 제목 24", admin: "관리자", date: new Date("2022-12-05"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 17, files: 2
    },
    {
      id: 25, title: "새 게시물 제목 25", admin: "관리자", date: new Date("2022-11-21"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 27, files: 2
    },
    { id: 26, title: "새 게시물 제목 26", admin: "관리자", date: new Date("2022-10-15"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 19, files: 2 },
    { id: 27, title: "새 게시물 제목 27", admin: "관리자", date: new Date("2022-09-10"), img: [img11, imgc2, img3, img9], views: 2, files: 2 },
    { id: 28, title: "새 게시물 제목 28", admin: "관리자", date: new Date("2022-08-01"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 22, files: 2 },
    { id: 29, title: "새 게시물 제목 29", admin: "관리자", date: new Date("2022-07-30"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 14, files: 2 },
    { id: 30, title: "새 게시물 제목 30", admin: "관리자", date: new Date("2022-06-25"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 11, files: 2 },
    {
      id: 31, title: "새 게시물 제목 31", admin: "관리자", date: new Date("2022-05-18"), img: [img11, imgc2, img3, img9], content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 18, files: 2
    },
    { id: 32, title: "새 게시물 제목 32", admin: "관리자", date: new Date("2022-04-10"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 20, files: 2 },
    {
      id: 33, title: "새 게시물 제목 33", admin: "관리자", date: new Date("2022-03-03"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 28, files: 2
    },
    {
      id: 34, title: "새 게시물 제목 34", admin: "관리자", date: new Date("2022-02-22"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 16, files: 2
    },
    {
      id: 35, title: "새 게시물 제목 35", admin: "관리자", date: new Date("2022-01-14"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 9, files: 2
    },
    { id: 36, title: "새 게시물 제목 36", admin: "관리자", date: new Date("2021-12-01"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 5, files: 2 },
    { id: 37, title: "새 게시물 제목 37", admin: "관리자", date: new Date("2021-11-25"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 8, files: 2 },
    { id: 38, title: "새 게시물 제목 38", admin: "관리자", date: new Date("2021-10-19"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 10, files: 2 },
    { id: 39, title: "새 게시물 제목 39", admin: "관리자", date: new Date("2021-09-15"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 22, files: 2 },
    {
      id: 40, title: "새 게시물 제목 40", admin: "관리자", date: new Date("2021-08-08"), img: "", content: `📢 커뮤니티 이용 공지사항 <br/> 안녕하세요, 커뮤니티 관리자입니다.<br/> 커뮤니티를 이용해주시는 모든 분들께 감사의 말씀을 드립니다. <br/>원활하고 즐거운 소통을 위해 아래의 이용 수칙을 안내드립니다 <br/><br/>1️⃣ 게시물 작성 시 주의사항<br/><br/>비속어, 혐오 표현, 타인을 비방하는 내용은 삼가주시기 바랍니다.<br/>정확하고 신뢰할 수 있는 정보를 제공해주세요.<br/>2️⃣ 댓글 작성 시 에티켓<br/>타인의 의견을 존중하며 건설적인 대화를 나눠주세요.<br/>불필요한 논쟁을 피하기 위해 최대한 예의를 지켜주시기 바랍니다.<br/>3️⃣ 이미지 및 파일 업로드<br/><br/>저작권 문제가 없는 파일만 업로드 가능합니다.<br/>개인정보가 포함된 사진이나 문서는 게시하지 말아주세요.<br/>커뮤니티는 여러분 모두의 공간입니다.<br/>함께 노력하여 더 나은 소통의 장을 만들어가요!<br/><br/>감사합니다. 😊<br/>커뮤니티 관리자 드림`,
      views: 13, files: 2
    },
    { id: 41, title: "새 게시물 제목 41", admin: "관리자", date: new Date("2021-07-03"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 21, files: 2 },
    { id: 42, title: "새 게시물 제목 42", admin: "관리자", date: new Date("2021-06-26"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 4, files: 2 },
    { id: 74, title: "새 게시물 제목 43", admin: "관리자", date: new Date("2021-05-22"), img: [img11, imgc2, img3, img9], content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 6, files: 2 },
    { id: 44, title: "새 게시물 제목 44", admin: "관리자", date: new Date("2021-04-17"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 12, files: 2 },
    { id: 45, title: "새 게시물 제목 45", admin: "관리자", date: new Date("2021-03-11"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 9, files: 2 },
    { id: 46, title: "새 게시물 제목 46", admin: "관리자", date: new Date("2021-02-08"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 14, files: 2 },
    { id: 47, title: "새 게시물 제목 47", admin: "관리자", date: new Date("2021-01-05"), img: [img11, imgc2, img3, img9], content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 19, files: 2 },
    { id: 48, title: "새 게시물 제목 48", admin: "관리자", date: new Date("2020-12-31"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 10, files: 2 },
    { id: 49, title: "새 게시물 제목 49", admin: "관리자", date: new Date("2020-11-25"), img: [img11, imgc2, img3, img9], content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 18, files: 2 },
    { id: 50, title: "새 게시물 제목 50", admin: "관리자", date: new Date("2019-09-17"), img: "", content: "쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야", views: 12, files: 2 },

  ])

  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

  // 게시물 추가
  const addPost = (newPost) => {
    setAllposts([newPost, ...allPosts]); // 새로운 게시물을 맨 앞에 추가
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // 게시물 필터링 (검색어에 맞는 게시물만 필터링)
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.admin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 현재 페이지에 해당하는 게시물 계산
  const startIndex = (currentPage - 1) * postsPerPage; // 시작 인덱스
  const endIndex = startIndex + postsPerPage; // 끝 인덱스
  const currentPosts = filteredPosts.slice(startIndex, endIndex) || []; // 현재 페이지 게시물

  // 페이지 이동 함수
  const handlePageClick = (page) => {
    setCurrentPage(page); // 클릭한 페이지로 이동
  };

  // 검색어 변경 시 호출되는 함수
  const handleSearch = (query) => {
    setSearchQuery(query); // 검색어 상태 업데이트
  };

  const handleSort = (option) => {
    setSortOption(option);

    const sortedPosts = [...allPosts];
    if (option === "최신 순") {
      sortedPosts.sort((a, b) => b.date - a.date);
    } else if (option === "오래된 순") {
      sortedPosts.sort((a, b) => a.date - b.date);
    } else if (option === "조회 수 높은 순") {
      sortedPosts.sort((a, b) => b.views - a.views);
    } else if (option === "조회 수 낮은 순") {
      sortedPosts.sort((a, b) => a.views - b.views);
    }
    setAllposts(sortedPosts); // setPosts 대신 사용
  };


  return (
    <div style={{ gridArea }} className={comstyle.posts_container}>
      {/* {console.log(communityState)} */}
      <div className={`${styles.rwsubcontainer2} ${comstyle.inputdrop}`}>
        <Dropdown options={options} onChange={handleSort} />
        <SearchBar placeholder={"글 내용 & 글 제목"} width="300px" onSearch={handleSearch} />
      </div>
      <div className={comstyle.lin}>
        <Divider height={"2px"} width={"100%"} backgroundColor={"var(--line-color)"} />
      </div>
      <div className={comstyle.subbar_post}>
        <p className={comstyle.postnum}>번호</p>
        <p className={comstyle.title}>제목</p>
        <p className={comstyle.admin}>작성자</p>
        <p className={comstyle.date}>작성일</p>
        <p className={comstyle.views}>조회수</p>
      </div>
      <div className={comstyle.lin2}>
        <Divider height={"2px"} width={"100%"} backgroundColor={"#E5E5E5"} />
      </div>

      {currentPosts.length > 0 ? (
        <ul className={`${comstyle.postsbox}`}>
          {currentPosts.map((post, index) => (
            <Link to={`/announce/post/${post.id}`} key={post.id}>
              <li key={index} className={comstyle.post}>
                <p className={comstyle.postnumli}>{index + 1}</p>
                <p className={comstyle.titleli}>{post.title}</p>
                <p className={comstyle.adminli}>{post.admin}</p>
                <p className={comstyle.dateli}>{post.date.toLocaleDateString("ko-KR")}</p>
                <p className={comstyle.viewsli}>{post.views}</p>
                {post.files && post.files.length > 0 && (
                  <p>첨부파일: {post.files.map(file => file.name).join(", ")}</p>
                )}
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className={comstyle.postsbox}> <br /><br /> 등록된 게시물이 없습니다.</p>
      )}
      <div className={comstyle.buttondiv}>
        <div className={comstyle.pagenum}>
          <Pagenumber
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
          />
        </div>
        {isAdminPage && (
          <Link to="/commu_announce_wt" className={comstyle.report_btn}>
            <Button text={"글쓰기"} width={"100px"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Announcement;