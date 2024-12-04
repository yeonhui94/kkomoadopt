import Divider from '../../components/Divider';
import { createBrowserRouter, Form, Route, Router, Routes, useParams } from 'react-router-dom';
import React, { Component } from "react";
// import Slider from "react-slick";
import postst from '../community/Commu_post.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import postimg1 from '../community/img/postimg1.svg';
import postimg2 from '../../assets/img2/2.jpg';
import styled from 'styled-components';
import PostSlickSlide from '../community/report/PostSlickSlide';
import { filterProps } from 'framer-motion';

const Adoption_Post = () => {
    

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
                <h3>&nbsp; 강아지 입양</h3>
            </div>

            <div className={postst.post_tmi}>
                <div className={postst.post_tmi1}>
                    <p className={postst.post_nick}>&nbsp;&nbsp;닉네임&nbsp;:&nbsp; 관리자</p>
                    <p className={postst.post_postnum}> 글번호 &nbsp;:&nbsp; 123</p>
                    <p className={postst.post_date}>작성일&nbsp;:&nbsp; 2024-12-04 </p>
                </div>
                <p className={postst.post_view}>조회수 : 123</p>
            </div>

            <article className={postst.post_content}>
                <div className={postst.post_content1}>

                    {/* 이미지 */}
                    {/* <img src={postimg1} className={postst.post_postimgs}/> */}
                    <PostSlickSlide className={postst.post_postimgs}/> 
                    {/* <Slideimgs/> */}

                    {/* 테이블 4개 */}
                    <div className={postst.post_pettmi}>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>카테고리</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>강아지</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>품종</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>믹스견</td>
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
