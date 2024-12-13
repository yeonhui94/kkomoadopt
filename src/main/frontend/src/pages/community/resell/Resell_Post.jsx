import Divider from "../../../components/Divider";
import PostSlickSlide from "../report/PostSlickSlide";
import Comment from "../report/Comment";
import postst from '../../community/Commu_post.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";



function Resell_Post ({ post }) {
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
                    <ul className={postst.post_article}>
                        <li>-&nbsp; 물품명 :&nbsp; &nbsp;{post.productname}</li>
                        <li>-&nbsp;&nbsp;직거래 가능 지역 : &nbsp;&nbsp;{post.availablearea}</li>
                        <li>-&nbsp;&nbsp;번호 : &nbsp; &nbsp;{post.phonenum} </li>
                        <li>-&nbsp;&nbsp;판매하고 싶은 금액 : &nbsp; &nbsp;{post.salesamount} </li>
                        <li>-&nbsp;&nbsp;구매하고 싶은 금액 : &nbsp; &nbsp;{post.purchaseamount} </li>
                        <li>-&nbsp;&nbsp;상품 상세설명:&nbsp; &nbsp;{post.content} </li>
                    </ul>
                </div>
                <Comment className={postst.post_petif}/>
                <div className={postst.buttonwrap}>
                    <Button  text={"수정"} width={"100px"} fontSize={"20px"} />
                    <Button text={"삭제"} width={"100px"} fontSize={"20px"} />
                </div>
            </article>
        </div>
    )
}

export default Resell_Post;