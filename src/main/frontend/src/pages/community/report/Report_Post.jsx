import Divider from '../../../components/Divider';
import { createBrowserRouter, Form, Route, Router, Routes, useParams } from 'react-router-dom';
import React, { Component, useState } from "react";
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

const Report_Post = ({post}) => {

     //  { title: "새 게시물 제목", admin: "짱구는", target: "sangil22", reportpostnum: 334, 
     // content : "악플이 달렸어요 ㅠㅠ", date: new Date("2024-11-25"), views: 5, files: 2 },


    return (
        <div className={postst.post_container}>
            <div className={postst.post_title}>
                <h3>&nbsp; {post.title}</h3>
            </div>

            <div className={postst.post_tmi}>
                <div className={postst.post_tmi1}>
                    <p className={postst.post_nick}>&nbsp;&nbsp;닉네임&nbsp;:&nbsp; {post.admin}</p>
                    <p className={postst.post_postnum}> 글번호 &nbsp;:&nbsp; {post.reportpostnum}</p>
                    <p className={postst.post_date}>작성일&nbsp;:&nbsp; {post.date.toLocaleDateString("ko-KR")} </p>
                </div>
                <p className={postst.post_view}>조회수 : {post.views}</p>
            </div>

            
            <article className={postst.post_content}>
                <div className={postst.post_content1}>
                    
                    {/* 이미지 */}
                    {!post.img ? (  // post.img가 없는 경우 "이미지 없음" 표시
                    <div className={postst.post_postimgs}>
                        <p>이미지 없음</p> {/* 이미지가 없을 때 텍스트 표시 */}
                    </div>
                    ) : (
                    <PostSlickSlide className={postst.post_postimgs} img={post.img} /> 
                    )}
                    <ul className={postst.post_pettmi}>
                        <li>신고대상 : {post.target}</li>
                        <li>신고 게시물 번호 : {post.id}</li>
                        <li>신고 내용:{post.content} </li>
                    </ul>
                </div>
                <Comment className={postst.post_petif}/>
            </article>
        </div>
    )
}

export default Report_Post;
