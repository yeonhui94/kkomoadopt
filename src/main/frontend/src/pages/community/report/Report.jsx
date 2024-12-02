// import Report_CommunityWt from "./Report_CommunityWt";
// // import wtstyles from "../CommunityWt.module.css";
// import { useState } from "react";
// import styles from "../../Review.module.css";
// import SearchBar from "../../../components/SearchBar";
// import Divider from "../../../components/Divider";
// import Dropdown from "../../../components/DropDown";
// import comstyle from '../CommunityWt.module.css';

// const Report = ({gridArea}) => {

//     const [posts, setPosts] = useState([

//       {title: "새 게시물 제목", content: "새 게시물 내용", files: 2},
//       {title: "새 게시물 제목2", content: "새 게시물 내용2", files:3 },
    
//     ]);
//     const options = ["전체보기","최신 순", "오래된 순", "조회 수 높은 순","조회 수 낮은 순"];

//     // 게시물 추가
//     const addPost = (newPost) => {
//         setPosts([newPost, ...posts]);  // 새로운 게시물을 맨 앞에 추가
//     };
    



//     return (
//         <div style={{gridArea}}>
//             <div className={styles.rwsubcontainer2}>
//               <Dropdown options={options} />
//               <SearchBar placeholder={"글 내용 & 글 제목"} width="300px"></SearchBar>
//             </div>
//           <div>
//           <div className={styles.rwdivider} >
//             <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
//           </div>
//             <div className={comstyle.subbar_post}>
//             <p className={comstyle.postnum}>번호</p>
//             <p className={comstyle.title}>제목</p>
//             <p className={comstyle.admin}>작성자</p>
//             <p className={comstyle.date}>작성일</p>
//             <p className= {comstyle.views}>조회수</p>
//             </div>
//             <Divider className={comstyle.lin} width={"100%"} backgroundColor={"var(--line-color)"} />
//             {/* <Report_CommunityWt addPost={addPost} /> */}
//               {posts.length > 0 ? (
//               <ul>
//               {posts.map((post, index) => (
//                 <li key={index}>
//                   <h3>{post.title}</h3>
//                   <p>{post.content}</p>
//                   {post.files && post.files.length > 0 && (
//                     <p>첨부파일: {post.files.map(file => file.name).join(", ")}</p>
//                   )}
//                 </li>
//               ))}
//               </ul>
//               ) : (
//               <p>등록된 게시물이 없습니다.</p>
//               )}
//             </div>
//         </div>
//     )

// }

// export default Report;
import Report_CommunityWt from "./Report_CommunityWt";
// import wtstyles from "../CommunityWt.module.css";
import { useState } from "react";
import styles from "../../Review.module.css";
import SearchBar from "../../../components/SearchBar";
import Divider from "../../../components/Divider";
import Dropdown from "../../../components/DropDown";
import comstyle from '../CommunityWt.module.css';

const Report = ({gridArea}) => {

    const [posts, setPosts] = useState([

      {title: "새 게시물 제목", admin: "관리자",  date: "2024.04.25" , views: 5 , files: 2},
      {title: "새 게시물 제목2", admin: "관리자", date: "2024.06.25" , views: 4 , files: 2},
      {title: "새 게시물 제목3", admin: "관리자", date: "2024.01.25" , views: 10 , files: 2},
      {title: "새 게시물 제목4", admin: "관리자", date: "2024.03.05" , views: 50 , files: 2},
      {title: "새 게시물 제목5", admin: "관리자", date: "2024.02.13" , views: 0 , files: 2},
      {title: "새 게시물 제목6", admin: "관리자", date: "2024.05.06" , views: 7 , files: 2},
      {title: "새 게시물 제목7", admin: "관리자", date: "2024.06.25" , views: 23 , files: 2},
      {title: "새 게시물 제목8", admin: "관리자", date: "2024.09.10" , views: 15 , files: 2},
      {title: "새 게시물 제목9", admin: "관리자", date: "2024.07.17" , views: 4 , files: 2},
      {title: "새 게시물 제목10", admin: "관리자", date: "2024.11.10" , views: 1 , files: 2},
    
    ]);
    const options = ["전체보기","최신 순", "오래된 순", "조회 수 높은 순","조회 수 낮은 순"];

    // 게시물 추가
    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);  // 새로운 게시물을 맨 앞에 추가
    };
    



    return (
        <div style={{gridArea}} className={comstyle.posts_container}>
          
                <div className={`${styles.rwsubcontainer2} ${comstyle.inputdrop}`}>
                  <Dropdown options={options} />
                  <SearchBar placeholder={"글 내용 & 글 제목"} width="300px"></SearchBar>
                </div>
                <div className={comstyle.lin }>
                  <Divider height={"2px"} width={"100%"} backgroundColor={"var(--line-color)"} />
                </div>
                <div className={comstyle.subbar_post}>
                <p className={comstyle.postnum}>번호</p>
                <p className={comstyle.title}>제목</p>
                <p className={comstyle.admin}>작성자</p>
                <p className={comstyle.date}>작성일</p>
                <p className= {comstyle.views}>조회수</p>
                </div>
                <div className={comstyle.lin2} >
                  <Divider  height={"2px"} width={"100%"} backgroundColor={"#E5E5E5"} />
                </div>

            {/* <Report_CommunityWt addPost={addPost} /> */}
 
              {posts.length > 0 ? (
              <ul className={`${comstyle.postsbox}`}>
              {posts.map((post, index) => (
                <li key={index} className={comstyle.post}>
                  <p className={comstyle.postnumli}>{index+1}</p>
                  <h3 className={comstyle.titleli}>{post.title}</h3>
                  <p className={comstyle.adminli}>{post.admin}</p>
                  <p className={comstyle.dateli}>{post.date}</p>
                  <p className={comstyle.viewsli}>{post.views}</p>
                  {post.files && post.files.length > 0 && (
                    <p>첨부파일: {post.files.map(file => file.name).join(", ")}</p>
                  )}
                </li>
              ))}
              </ul>
              ) : (
              <p>등록된 게시물이 없습니다.</p>
              )}

            </div>
    )

}

export default Report;