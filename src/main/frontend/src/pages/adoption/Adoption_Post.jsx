import Divider from '../../components/Divider';
import { createBrowserRouter, Form, Route, Router, Routes, useParams } from 'react-router-dom';
import React, { Component, useEffect, useState } from "react";
// import Slider from "react-slick";
import postst from '../community/Commu_post.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import postimg1 from '../community/img/postimg1.svg';
import postimg2 from '../../assets/img2/2.jpg';
import styled from 'styled-components';
import PostSlickSlide from '../community/report/PostSlickSlide';
import { filterProps } from 'framer-motion';


const Adoption_Post = ({allPosts, image}) => {
    
    // 파라미터로 받은 id로 게시글 찾기
    const { id } = useParams();
    // console.log(typeof allPosts);

    console.log( typeof parseInt(id));
     // allPosts가 존재하는지 확인
    if (!allPosts || !Array.isArray(allPosts)) {
        return <p>게시글 데이터가 없습니다.</p>;
    }
    // id가 숫자가 아닌 경우에 대한 처리
    const idNumber = parseInt(id , 10);

    // const post = allPosts.find(item => item.id === idNumber);
    const post = allPosts.find((item) => item.id === idNumber);
    // const post = allPosts.find(item => item.id === parseInt(id, 10));
    console.log(allPosts.map(item => typeof item.id));
    
    if (!post) {
        return <p>해당 게시글을 찾을 수 없습니다.</p>;

    }

// { img: img1, 
// isScraped: false, , date: new Date(2024, 12, 10), viewcount: 150 },
    return (
        <div className={postst.post_container} allPosts={allPosts}>
            <div className={postst.post_title}>
                <h3>&nbsp; {post.title}</h3>
            </div>
        
            <div className={postst.post_tmi}>
                <div className={postst.post_tmi1}>
                    <p className={postst.post_nick}>&nbsp;&nbsp;닉네임&nbsp;:&nbsp; 관리자</p>
                    <p className={postst.post_postnum}> 글번호 &nbsp;:&nbsp; {id}</p>
                    <p className={postst.post_date}>작성일&nbsp;:&nbsp;{post.date.toLocaleDateString("ko-KR")} </p>
                </div>
                <p className={postst.post_view}>조회수 :  {post.viewcount || 0}</p>
            </div>

            <article className={postst.post_content}>
                <div className={postst.post_content1}>
                <div> {post.img}</div>
                    {/* 이미지 */}
                    {/* <img src={postimg1} className={postst.post_postimgs}/> */}
                    {/* <PostSlickSlide className={postst.post_postimgs} 
                    images={Array.isArray(post.img) ? post.img : [post.img]} />  */}
                    {/* <Slideimgs/> */}

                    {/* 테이블 4개 */}
                    <div className={postst.post_pettmi}>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>카테고리</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>{post.category}</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>품종</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>{post.breed}</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>공고번호</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>1004</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>공고마감날짜</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>2024-12-18</td>
                            </tr>
                        </table>
                    </div>
                </div>


                <ul className={postst.post_petif}>
                    <li className={postst.post_petif_p1}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600" }}>털색</span>
                        <span style={{fontSize : "1.6rem"}}>&nbsp;&nbsp; :</span> &nbsp;&nbsp;&nbsp;흰색
                    </li>
                    <li className={postst.post_petif_p2}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>체중</span>
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; 10kg ?
                    </li>
                    <li className={postst.post_petif_p3}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>나이</span>  
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;3개월쯤
                    </li>
                    <li className={postst.post_petif_p4}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>발견장소</span> 
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; 가산디지털단지 7번출입구
                    </li>
                    <li className={postst.post_petif_p5}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>특징</span>
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; 귀여움
                    </li>
                </ul>
            </article>
        </div>
    )
}

export default Adoption_Post;
