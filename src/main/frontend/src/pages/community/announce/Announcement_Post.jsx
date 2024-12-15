import Divider from '../../../components/Divider';
import { createBrowserRouter, Form, Route, Router, Routes, useParams } from 'react-router-dom';
import React, { Component, useState } from "react";
// import Slider from "react-slick";
import postst from '../../community/Commu_post.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import postimg1 from '../img/postimg1.svg';
import styled from 'styled-components';
import PostSlickSlide from '../report/PostSlickSlide';
import { filterProps } from 'framer-motion';
import Comment from '../report/Comment';
import Button from '../../../components/Button/Button';

const Announcement_Post = ({postDetail}) => {
    if (!postDetail) {
        // 데이터가 없으면 로딩 중 또는 오류 메시지를 표시
        return <p>Loading post details...</p>;
    }

//  { title: "새 게시물 제목 41", admin: "관리자", sdfsdf
// date: new Date("2021-07-03"), img: "" , content:"쓰기 귀찮다 아무거나 쓸게요 나 맛있는거 먹고싶어 프로젝트 끝나면 잘거야",views: 21, files: 2 },

    return (

        <div className={postst.post_container}>
            <Divider/>
            <div className={postst.post_title}>
                <h3>&nbsp; {postDetail.postTitle}</h3>
            </div>

            <div className={postst.post_tmi}>
                <div className={postst.post_tmi1}>
                    <p className={postst.post_nick}>&nbsp;&nbsp;닉네임&nbsp;:&nbsp; {postDetail.nickname}</p>
                    <p className={postst.post_postnum}> 글번호 &nbsp;:&nbsp; {postDetail.postId}</p>
                    <p className={postst.post_date}>작성일&nbsp;:&nbsp; {postDetail.postCreatedAt} </p>
                </div>
                <p className={postst.post_view}>조회수 : {postDetail.postViewCount}</p>
            </div>

            
            <article className={postst.post_content}>
                <div className={postst.post_content1}>
                    
                    {/* 이미지 */}
                    {!postDetail.postImgUrl ? (  // post.img가 없는 경우 "이미지 없음" 표시
                    ""
                    ) : (
                    <PostSlickSlide className={postst.post_postimgs} img={postDetail.postImgUrl} /> 
                    )}
                    <div className={postst.post_article} dangerouslySetInnerHTML={{ __html: postDetail.postContent }}
                    />
                </div>
                <Comment className={postst.post_petif}  postDetail={postDetail} />
                <div className={postst.buttonwrap}>
                    <Button  text={"수정"} width={"100px"} fontSize={"20px"} />
                    <Button text={"삭제"} width={"100px"} fontSize={"20px"} />
                </div>
            </article>
        </div>
    )
}

export default Announcement_Post;
