import Divider from '../../../components/Divider';
import { createBrowserRouter, Form, Route, Router, Routes, useParams } from 'react-router-dom';
import React, { Component } from "react";
// import Slider from "react-slick";
import postst from '../../community/Commu_post.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import postimg1 from '../img/postimg1.svg';
import postimg2 from '../../../assets/img2/2.jpg';
import styled from 'styled-components';
import PostSlickSlide from './PostSlickSlide';
import { filterProps } from 'framer-motion';
import Comment from './Comment';

const Report_Post = () => {
    

     // useParams를 이용해 URL 파라미터를 가져옵니다


     // mockData에서 boardId에 해당하는 게시판 데이터를 가져옵니다
    //  const board = mockData[boardId];
     // 게시판 데이터에서 postId에 해당하는 게시글 데이터를 가져옵니다
    //  const post = allPosts.find((post) => post.id === parseInt(postId, 10));
 
     // 게시판 또는 게시글 데이터가 없을 경우, 에러 메시지 출력
    //  if (!post) {
    //      return <p>게시글을 찾을 수 없습니다.</p>;
    //  }
     

    return (
        <div className={postst.post_container}>
            <div className={postst.post_title}>
                <h3>&nbsp; 악플 신고합니다</h3>
            </div>

            <div className={postst.post_tmi}>
                <div className={postst.post_tmi1}>
                    <p className={postst.post_nick}>&nbsp;&nbsp;닉네임&nbsp;:&nbsp; 테트장인덴버</p>
                    <p className={postst.post_postnum}> 글번호 &nbsp;:&nbsp; 123</p>
                    <p className={postst.post_date}>작성일&nbsp;:&nbsp; 2024-12-04 </p>
                </div>
                <p className={postst.post_view}>조회수 : 123</p>
            </div>

            <article className={postst.post_content}>
                <div className={postst.post_content1}>

                 {/* 이미지 */}
                <PostSlickSlide className={postst.post_postimgs}/> 
         
                </div>


                <ul className={postst.post_petif}>
                  
                </ul>
                <Comment/>
            </article>
        </div>
    )
}

export default Report_Post;
