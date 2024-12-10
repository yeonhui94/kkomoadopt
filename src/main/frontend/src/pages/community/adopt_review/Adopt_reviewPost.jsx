import Divider from "../../../components/Divider";
import PostSlickSlide from "../report/PostSlickSlide";
import Comment from "../report/Comment";
import postst from '../../community/Commu_post.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

function Adopt_reviewPost ({ post }) {
    return (

        <div className={postst.post_container}>
            <Divider/>
            <div className={postst.post_title}>
                <h3>&nbsp; {post.title}</h3>
            </div>

            <div className={postst.post_tmi}>
                <div className={postst.post_tmi1}>
                    <p className={postst.post_nick}>&nbsp;&nbsp;닉네임&nbsp;:&nbsp; {post.userid}</p>
                    <p className={postst.post_postnum}> 글번호 &nbsp;:&nbsp; {post.id}</p>
                    <p className={postst.post_date}>작성일&nbsp;:&nbsp; {post.date.toLocaleDateString("ko-KR")} </p>
                </div>
                <p className={postst.post_view}>조회수 : {post.views}</p>
            </div>

            
            <article className={postst.post_content}>
                <div className={postst.post_content1}>
                    
                    {/* 이미지 */}
                    {!post.img ? (  // post.img가 없는 경우 "이미지 없음" 표시
                    ""
                    ) : (
                    <PostSlickSlide className={postst.post_postimgs} img={post.img} /> 
                    )}
                    <div className={postst.post_article} dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
                <Comment className={postst.post_petif}/>
            </article>
        </div>
    )
}

export default Adopt_reviewPost;